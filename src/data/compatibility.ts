import { results, Result } from "./results";

export interface CompatibilityResult {
  score: number; // 0-100
  title: string;
  description: string;
  tips: string[];
  emoji: string;
}

// 유형별 카테고리
const typeCategories: Record<string, string> = {
  earlybird: "routine",
  health: "health",
  meditator: "health",
  saver: "practical",
  learner: "growth",
  connector: "social",
  traveler: "adventure",
  adventurer: "adventure",
  hobbyist: "creative",
  creator: "creative",
  lazybones: "chill",
};

// 카테고리 간 궁합 점수
const categoryCompatibility: Record<string, Record<string, number>> = {
  routine: {
    routine: 95,
    health: 90,
    practical: 85,
    growth: 80,
    social: 60,
    adventure: 50,
    creative: 65,
    chill: 30,
  },
  health: {
    routine: 90,
    health: 95,
    practical: 70,
    growth: 75,
    social: 65,
    adventure: 80,
    creative: 60,
    chill: 40,
  },
  practical: {
    routine: 85,
    health: 70,
    practical: 90,
    growth: 80,
    social: 55,
    adventure: 45,
    creative: 60,
    chill: 50,
  },
  growth: {
    routine: 80,
    health: 75,
    practical: 80,
    growth: 90,
    social: 70,
    adventure: 75,
    creative: 85,
    chill: 45,
  },
  social: {
    routine: 60,
    health: 65,
    practical: 55,
    growth: 70,
    social: 95,
    adventure: 85,
    creative: 80,
    chill: 70,
  },
  adventure: {
    routine: 50,
    health: 80,
    practical: 45,
    growth: 75,
    social: 85,
    adventure: 95,
    creative: 80,
    chill: 55,
  },
  creative: {
    routine: 65,
    health: 60,
    practical: 60,
    growth: 85,
    social: 80,
    adventure: 80,
    creative: 90,
    chill: 65,
  },
  chill: {
    routine: 30,
    health: 40,
    practical: 50,
    growth: 45,
    social: 70,
    adventure: 55,
    creative: 65,
    chill: 85,
  },
};

// 궁합 결과 메시지
function getCompatibilityMessage(
  score: number,
  type1: Result,
  type2: Result
): CompatibilityResult {
  if (score >= 90) {
    return {
      score,
      title: "천생연분!",
      emoji: "💕",
      description: `${type1.title}와 ${type2.title}는 최고의 조합이에요! 서로의 목표를 응원하며 함께 성장할 수 있는 파트너입니다.`,
      tips: [
        "함께 목표를 세우고 서로 체크해주기",
        "각자의 성취를 함께 축하하기",
        "서로의 강점을 배우기",
      ],
    };
  } else if (score >= 75) {
    return {
      score,
      title: "찰떡궁합!",
      emoji: "✨",
      description: `${type1.title}와 ${type2.title}는 서로 잘 맞는 편이에요! 비슷한 가치관으로 좋은 시너지를 낼 수 있습니다.`,
      tips: [
        "공통 관심사 찾아서 함께 하기",
        "서로 다른 부분은 존중하기",
        "함께 새로운 것에 도전해보기",
      ],
    };
  } else if (score >= 60) {
    return {
      score,
      title: "나쁘지 않아요",
      emoji: "👍",
      description: `${type1.title}와 ${type2.title}는 서로 다른 면이 있지만, 그래서 오히려 배울 점이 많아요!`,
      tips: [
        "서로의 다른 점을 장점으로 보기",
        "각자의 시간도 존중해주기",
        "새로운 관점을 열어두기",
      ],
    };
  } else if (score >= 45) {
    return {
      score,
      title: "노력이 필요해요",
      emoji: "💪",
      description: `${type1.title}와 ${type2.title}는 성향이 좀 다르네요. 하지만 다름을 인정하면 오히려 좋은 밸런스가 될 수 있어요!`,
      tips: [
        "서로의 방식을 이해하려고 노력하기",
        "무리하게 맞추려 하지 않기",
        "각자의 목표는 각자 방식으로",
      ],
    };
  } else {
    return {
      score,
      title: "정반대 매력?",
      emoji: "🔥",
      description: `${type1.title}와 ${type2.title}는 정반대 스타일! 하지만 반대라서 서로에게 없는 걸 채워줄 수 있어요.`,
      tips: [
        "상대방의 장점 배워보기",
        "서로의 영역 존중하기",
        "가끔은 상대방 방식으로 해보기",
      ],
    };
  }
}

export function calculateCompatibility(
  type1Id: string,
  type2Id: string
): CompatibilityResult | null {
  const result1 = results[type1Id];
  const result2 = results[type2Id];

  if (!result1 || !result2) {
    return null;
  }

  const category1 = typeCategories[type1Id];
  const category2 = typeCategories[type2Id];

  const baseScore = categoryCompatibility[category1]?.[category2] || 50;

  // 같은 유형이면 보너스
  const sameTypeBonus = type1Id === type2Id ? 5 : 0;

  const finalScore = Math.min(100, baseScore + sameTypeBonus);

  return getCompatibilityMessage(finalScore, result1, result2);
}

export function getResultFromUrl(url: string): string | null {
  try {
    const urlObj = new URL(url);
    return urlObj.searchParams.get("result");
  } catch {
    // URL이 아니면 직접 유형 ID인지 확인
    if (results[url]) {
      return url;
    }
    return null;
  }
}
