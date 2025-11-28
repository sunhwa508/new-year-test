export interface Result {
  id: string;
  title: string;
  goal: string;
  description: string;
  emoji: string;
  color: string;
  tips: string[];
  tmi: {
    song: string;
    movie: string;
    gift: string;
  };
  quote: string;
}

export const results: Record<string, Result> = {
  // 자기관리 계열
  earlybird: {
    id: "earlybird",
    title: "갓생러",
    goal: "미라클 모닝 30일 챌린지",
    description:
      "남들 자는 새벽에 일어나서 뭐라도 하는 그 쾌감 알잖아. 올해는 한 단계 더 업그레이드 해보자!",
    emoji: "",
    color: "#FF6B6B",
    tips: [
      "기상 시간 30분 더 앞당겨보기",
      "루틴에 새로운 습관 하나 추가 (명상, 스트레칭 등)",
      "갓생 기록 공유해서 주변 동기부여 해주기",
    ],
    tmi: {
      song: "BTS - 달려라 방탄",
      movie: "소울 (Soul, 2020)",
      gift: "플래너 & 루틴 트래커",
    },
    quote: "새벽 5시엔 경쟁자가 없다",
  },

  // 건강 계열
  health: {
    id: "health",
    title: "헬스인",
    goal: "주 3회 운동 습관 만들기",
    description:
      "운동이 이미 일상인 너. 올해는 새로운 종목이나 목표에 도전해보자!",
    emoji: "",
    color: "#48BB78",
    tips: [
      "새로운 운동 종목 도전 (수영, 클라이밍 등)",
      "주 3회 → 주 4회로 늘려보기",
      "운동 일지 기록하며 성장 체크하기",
    ],
    tmi: {
      song: "Survivor - Eye of the Tiger",
      movie: "크리드 (Creed, 2015)",
      gift: "스마트워치",
    },
    quote: "3개월만 버티면 습관 된다더라",
  },
  meditator: {
    id: "meditator",
    title: "명상러",
    goal: "하루 10분 마음 챙김",
    description:
      "마음 챙김의 힘을 아는 너. 올해는 명상을 더 깊이 있게 해보자!",
    emoji: "",
    color: "#9F7AEA",
    tips: [
      "명상 시간 10분 → 20분으로 늘려보기",
      "다양한 명상법 시도 (걷기 명상, 바디스캔 등)",
      "디지털 디톡스 주간 도전하기",
    ],
    tmi: {
      song: "Enya - Only Time",
      movie: "먹고 기도하고 사랑하라 (Eat Pray Love, 2010)",
      gift: "명상 쿠션 & 티베트 싱잉볼",
    },
    quote: "멈춰야 보이는 것들이 있다",
  },

  // 재정 계열
  saver: {
    id: "saver",
    title: "저축왕",
    goal: "매달 10만원 저축하기",
    description:
      "저축의 중요성을 아는 너. 올해는 목표 금액을 더 높여보자!",
    emoji: "",
    color: "#F6AD55",
    tips: [
      "저축 금액 10% 늘려보기",
      "비상금 계좌 따로 만들기",
      "저축 목표 달성 시 작은 보상 주기",
    ],
    tmi: {
      song: "ABBA - Money Money Money",
      movie: "기생충 (Parasite, 2019)",
      gift: "저금통 & 재테크 도서",
    },
    quote: "부자는 하루아침에 안 된다더라",
  },
  // 자기계발 계열
  learner: {
    id: "learner",
    title: "공부벌레",
    goal: "자격증 하나 따기",
    description:
      "배움에 대한 열정이 넘치는 너. 올해는 더 높은 목표에 도전해보자!",
    emoji: "",
    color: "#4299E1",
    tips: [
      "더 높은 난이도 자격증 도전하기",
      "배운 거 정리해서 블로그에 공유하기",
      "스터디 리더로 다른 사람 이끌어보기",
    ],
    tmi: {
      song: "방탄소년단 - N.O",
      movie: "위플래쉬 (Whiplash, 2014)",
      gift: "온라인 강의 구독권",
    },
    quote: "배움에는 끝이 없다 (근데 자격증은 끝이 있음)",
  },
  // 사회/관계 계열
  connector: {
    id: "connector",
    title: "인싸형",
    goal: "한 달에 친구 한 명 만나기",
    description:
      "사람들과 함께하는 걸 좋아하는 너. 올해는 더 깊은 관계를 만들어보자!",
    emoji: "",
    color: "#ED64A6",
    tips: [
      "정기 모임 만들어서 주도하기",
      "친구들 연결해주는 다리 역할 해보기",
      "특별한 날 서프라이즈 이벤트 기획하기",
    ],
    tmi: {
      song: "Bruno Mars - Count on Me",
      movie: "행오버 (The Hangover, 2009)",
      gift: "파티 게임 세트",
    },
    quote: "좋은 친구 = 인생 최고의 버프",
  },
  // 경험/모험 계열
  traveler: {
    id: "traveler",
    title: "여행러",
    goal: "새로운 곳 3군데 가기",
    description:
      "여행을 사랑하는 너. 올해는 새로운 스타일의 여행에 도전해보자!",
    emoji: "",
    color: "#38B2AC",
    tips: [
      "새로운 여행 스타일 도전 (배낭여행, 워케이션 등)",
      "여행 브이로그나 기록 남기기",
      "현지인처럼 여행하기 (관광지 말고 로컬)",
    ],
    tmi: {
      song: "Jason Mraz - I'm Yours",
      movie: "월터의 상상은 현실이 된다 (The Secret Life of Walter Mitty, 2013)",
      gift: "트래블 월렛 & 여행 가이드북",
    },
    quote: "여행은 돈 쓸 가치가 있는 유일한 것",
  },
  adventurer: {
    id: "adventurer",
    title: "도전러",
    goal: "해본 적 없는 것 5개 해보기",
    description:
      "도전을 두려워하지 않는 너. 올해는 더 큰 모험에 도전해보자!",
    emoji: "",
    color: "#F56565",
    tips: [
      "더 큰 도전 목표 세우기 (마라톤, 해외 트레킹 등)",
      "도전 기록 SNS에 공유하기",
      "주변 사람들 도전에 함께 초대하기",
    ],
    tmi: {
      song: "Imagine Dragons - Believer",
      movie: "예스맨 (Yes Man, 2008)",
      gift: "익스트림 스포츠 체험권",
    },
    quote: "실패해도 괜찮아, 시도가 용기다",
  },
  hobbyist: {
    id: "hobbyist",
    title: "취미부자",
    goal: "새 취미 3개 시작하기",
    description:
      "취미가 곧 인생인 너. 올해는 취미 실력을 한 단계 업그레이드해보자!",
    emoji: "",
    color: "#ED8936",
    tips: [
      "취미를 부업으로 연결해보기",
      "취미 커뮤니티에서 활동하기",
      "취미 실력 레벨업 (중급 → 고급 도전)",
    ],
    tmi: {
      song: "Pharrell Williams - Happy",
      movie: "줄리 앤 줄리아 (Julie & Julia, 2009)",
      gift: "클래스101 구독권",
    },
    quote: "덕업일치 = 최고의 인생",
  },

  // 창작/표현 계열
  creator: {
    id: "creator",
    title: "크리에이터",
    goal: "콘텐츠 만들기 시작",
    description:
      "콘텐츠 만들기를 즐기는 너. 올해는 더 많은 사람들에게 영향력을 펼쳐보자!",
    emoji: "",
    color: "#E53E3E",
    tips: [
      "업로드 빈도 높여보기 (주 2회 도전)",
      "새로운 포맷이나 플랫폼 도전하기",
      "콜라보 콘텐츠 기획해보기",
    ],
    tmi: {
      song: "Lady Gaga - Born This Way",
      movie: "인턴 (The Intern, 2015)",
      gift: "링라이트 & 무선마이크",
    },
    quote: "세상에 너의 이야기를 들려줘",
  },

  // 라이프스타일 계열
  lazybones: {
    id: "lazybones",
    title: "나태형",
    goal: "올해는 좀 덜 미루기",
    description:
      "솔직히 귀찮은 거 맞잖아. 올해는 작은 것부터 하나씩 해보자!",
    emoji: "",
    color: "#718096",
    tips: [
      "5분만 해보기 챌린지 (시작이 반)",
      "할 일 3개만 정해서 끝내기",
      "작은 성취 기록하며 동기부여 얻기",
    ],
    tmi: {
      song: "검정치마 - 기다린 만큼, 더",
      movie: "월-E (WALL-E, 2008)",
      gift: "타이머 & 동기부여 포스터",
    },
    quote: "내일의 나는 오늘보다 부지런할 거야 (아마도)",
  },
};

// 스코어 기반 결과 계산
export interface ScoreMap {
  [key: string]: number;
}

export interface CalculatedResult {
  main: Result;
  sub: Result | null;
}

export function calculateResult(scores: ScoreMap): Result {
  // 점수가 가장 높은 유형 찾기
  let maxScore = -1;
  let resultType = "lazybones";

  for (const [type, score] of Object.entries(scores)) {
    if (score > maxScore && results[type]) {
      maxScore = score;
      resultType = type;
    }
  }

  return results[resultType];
}

export function calculateResultWithSub(scores: ScoreMap): CalculatedResult {
  // 점수순으로 정렬
  const sortedTypes = Object.entries(scores)
    .filter(([type]) => results[type])
    .sort((a, b) => b[1] - a[1]);

  const mainType = sortedTypes[0]?.[0] || "lazybones";
  const subType = sortedTypes[1]?.[0];

  return {
    main: results[mainType],
    sub: subType && subType !== mainType ? results[subType] : null,
  };
}

// 카테고리별 그룹핑
export const resultCategories = {
  selfcare: ["earlybird"],
  health: ["health", "meditator"],
  finance: ["saver"],
  growth: ["learner"],
  social: ["connector"],
  experience: ["traveler", "adventurer", "hobbyist"],
  creative: ["creator"],
  lifestyle: ["lazybones"],
};
