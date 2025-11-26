export interface Result {
  id: string;
  title: string;
  goal: string;
  description: string;
  emoji: string;
  color: string;
  tips: string[];
}

export const results: Record<string, Result> = {
  godsaeng: {
    id: "godsaeng",
    title: "갓생러",
    goal: "미라클 모닝 30일 챌린지",
    description: "너는 루틴만 잡으면 무적이야! 이미 자기관리 DNA가 있어. 올해는 아침 시간을 정복해봐.",
    emoji: "🌅",
    color: "#FF6B6B",
    tips: [
      "매일 같은 시간에 일어나기",
      "아침 루틴 체크리스트 만들기",
      "작은 성공 경험 쌓기",
    ],
  },
  healing: {
    id: "healing",
    title: "힐링형",
    goal: "한 달에 책 한 권 읽기",
    description: "바쁜 일상 속 나만의 시간이 필요해. 무리하지 말고, 천천히 나를 채워가는 한 해가 되길.",
    emoji: "📚",
    color: "#4ECDC4",
    tips: [
      "잠들기 전 10분 독서 습관",
      "좋아하는 장르부터 시작",
      "독서 기록 남기기",
    ],
  },
  adventure: {
    id: "adventure",
    title: "도전형",
    goal: "새로운 취미 3개 시작하기",
    description: "자극이 필요한 타입! 새로운 경험이 너를 성장시켜. 올해는 망설이지 말고 일단 해봐.",
    emoji: "🚀",
    color: "#9B59B6",
    tips: [
      "해보고 싶던 것 리스트 작성",
      "일단 체험해보기",
      "실패해도 OK, 경험이 남아",
    ],
  },
  saving: {
    id: "saving",
    title: "현실형",
    goal: "매달 10만원 저축하기",
    description: "작지만 확실한 성취감이 너를 움직여. 티끌 모아 태산! 연말엔 뿌듯한 통장을 보게 될 거야.",
    emoji: "💰",
    color: "#F39C12",
    tips: [
      "자동이체 설정하기",
      "지출 내역 기록하기",
      "1년 후 목표 금액 정하기",
    ],
  },
  relationship: {
    id: "relationship",
    title: "관계형",
    goal: "소중한 사람에게 먼저 연락하기",
    description: "너의 행복은 사람에게서 와. 올해는 먼저 손 내밀어봐. 작은 연락이 큰 행복이 돼.",
    emoji: "💝",
    color: "#E91E63",
    tips: [
      "한 달에 한 번 안부 연락",
      "생일/기념일 캘린더 등록",
      "감사 표현 자주 하기",
    ],
  },
  chill: {
    id: "chill",
    title: "느긋형",
    goal: "아무것도 안 해도 괜찮아",
    description: "쉬는 것도 목표야! 너무 달리지 마. 있는 그대로의 너도 충분히 괜찮아.",
    emoji: "☁️",
    color: "#95A5A6",
    tips: [
      "죄책감 없이 쉬는 연습",
      "비교하지 않기",
      "오늘 하루에 집중하기",
    ],
  },
  growth: {
    id: "growth",
    title: "자기개발형",
    goal: "자격증 하나 따기",
    description: "성장하는 내가 좋잖아! 목표가 생기면 불타오르는 타입. 올해는 확실한 결과물을 만들어봐.",
    emoji: "📈",
    color: "#3498DB",
    tips: [
      "관심 있는 자격증 알아보기",
      "공부 계획 세우기",
      "같이 공부할 스터디 찾기",
    ],
  },
  travel: {
    id: "travel",
    title: "여행형",
    goal: "가보고 싶은 곳 3군데 가기",
    description: "경험이 너를 만든다! 새로운 곳에서 새로운 나를 만나봐. 추억이 인생을 풍요롭게 해.",
    emoji: "✈️",
    color: "#1ABC9C",
    tips: [
      "버킷리스트 여행지 정하기",
      "여행 적금 시작하기",
      "휴가 미리 계획하기",
    ],
  },
  health: {
    id: "health",
    title: "건강형",
    goal: "주 3회 30분 운동하기",
    description: "건강이 최고의 재산이야! 거창하지 않아도 돼. 꾸준함이 답이야.",
    emoji: "💪",
    color: "#2ECC71",
    tips: [
      "좋아하는 운동 찾기",
      "운동 기록 앱 활용",
      "같이 할 운동 친구 만들기",
    ],
  },
};

export function calculateResult(types: string[]): Result {
  const typeCount: Record<string, number> = {};

  types.forEach((type) => {
    typeCount[type] = (typeCount[type] || 0) + 1;
  });

  const sortedTypes = Object.entries(typeCount).sort((a, b) => b[1] - a[1]);
  const topType = sortedTypes[0]?.[0] || "chill";

  return results[topType] || results.chill;
}
