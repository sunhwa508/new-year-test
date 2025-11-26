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
  // 자기관리 계열
  godsaeng: {
    id: "godsaeng",
    title: "갓생러",
    goal: "미라클 모닝 30일 챌린지",
    description: "루틴의 힘을 아는 사람. 아침을 지배하면 하루를 지배한다는 걸 알잖아.",
    emoji: "",
    color: "#FF6B6B",
    tips: [
      "알람 3개 세팅하기",
      "전날 밤 내일 할 일 적어두기",
      "아침 루틴 체크리스트 만들기",
    ],
  },
  earlybird: {
    id: "earlybird",
    title: "얼리버드",
    goal: "밤 12시 전에 자기",
    description: "일찍 자고 일찍 일어나는 게 답이라는 걸 알면서도 안 되지? 올해는 진짜로.",
    emoji: "",
    color: "#FFA07A",
    tips: [
      "저녁 9시 이후 카페인 금지",
      "취침 1시간 전 스마트폰 내려놓기",
      "침실 온도 서늘하게 유지",
    ],
  },
  minimalist: {
    id: "minimalist",
    title: "미니멀리스트",
    goal: "한 달에 10개씩 버리기",
    description: "물건이 적으면 마음도 가벼워져. 진짜 필요한 것만 남기는 한 해.",
    emoji: "",
    color: "#A0AEC0",
    tips: [
      "1년 안 쓴 물건 과감히 정리",
      "하나 사면 하나 버리기",
      "디지털 파일도 정리하기",
    ],
  },

  // 건강 계열
  health: {
    id: "health",
    title: "헬스인",
    goal: "주 3회 운동 습관 만들기",
    description: "건강이 최고의 재산. 거창하지 않아도 돼, 꾸준함이 답이야.",
    emoji: "",
    color: "#48BB78",
    tips: [
      "좋아하는 운동 찾기",
      "운동 파트너 구하기",
      "운동복 미리 꺼내두기",
    ],
  },
  dieter: {
    id: "dieter",
    title: "다이어터",
    goal: "건강한 식습관 만들기",
    description: "무리한 다이어트 말고, 지속 가능한 건강한 식단. 천천히 가자.",
    emoji: "",
    color: "#68D391",
    tips: [
      "물 하루 2리터 마시기",
      "야식 줄이기 (끊긴 너무 어려워)",
      "배달앱 알림 끄기",
    ],
  },
  meditator: {
    id: "meditator",
    title: "명상러",
    goal: "하루 10분 마음 챙김",
    description: "바쁜 일상 속 나를 돌아보는 시간. 마음의 평화가 모든 것의 시작이야.",
    emoji: "",
    color: "#9F7AEA",
    tips: [
      "명상 앱 설치하기",
      "아침 기상 직후 5분부터",
      "호흡에만 집중하는 연습",
    ],
  },

  // 재정 계열
  saver: {
    id: "saver",
    title: "저축왕",
    goal: "매달 10만원 저축하기",
    description: "티끌 모아 태산. 작지만 확실한 성취감. 연말엔 뿌듯한 통장을 보게 될 거야.",
    emoji: "",
    color: "#F6AD55",
    tips: [
      "자동이체 설정하기",
      "지출 내역 기록하기",
      "무지출 챌린지 도전",
    ],
  },
  investor: {
    id: "investor",
    title: "재테커",
    goal: "투자 공부 시작하기",
    description: "돈이 일하게 만드는 법을 배울 때. 작은 금액부터 시작해보자.",
    emoji: "",
    color: "#4FD1C5",
    tips: [
      "경제 뉴스 매일 1개씩 읽기",
      "모의투자로 연습하기",
      "투자 관련 책 3권 읽기",
    ],
  },

  // 자기계발 계열
  learner: {
    id: "learner",
    title: "공부벌레",
    goal: "자격증 하나 따기",
    description: "성장하는 내가 좋잖아. 확실한 결과물을 만들어보는 한 해.",
    emoji: "",
    color: "#4299E1",
    tips: [
      "관심 있는 자격증 알아보기",
      "D-day 설정하고 역산하기",
      "스터디 그룹 찾기",
    ],
  },
  linguist: {
    id: "linguist",
    title: "언어러너",
    goal: "외국어 하나 시작하기",
    description: "새로운 언어는 새로운 세계. 매일 10분이면 1년 후엔 달라져 있을 거야.",
    emoji: "",
    color: "#667EEA",
    tips: [
      "언어 학습 앱 매일 알림",
      "좋아하는 콘텐츠 원어로 보기",
      "하루 단어 5개씩 암기",
    ],
  },
  reader: {
    id: "reader",
    title: "독서가",
    goal: "한 달에 책 2권 읽기",
    description: "독서는 마음의 양식. 바쁜 일상에서도 책 한 권의 여유를 가져보자.",
    emoji: "",
    color: "#805AD5",
    tips: [
      "출퇴근 시간 활용하기",
      "독서 모임 가입하기",
      "읽고 싶은 책 리스트 만들기",
    ],
  },

  // 사회/관계 계열
  connector: {
    id: "connector",
    title: "인싸형",
    goal: "한 달에 친구 한 명 만나기",
    description: "관계가 곧 행복. 바쁘다는 핑계 대지 말고 먼저 연락해봐.",
    emoji: "",
    color: "#ED64A6",
    tips: [
      "연락 안 한 친구 리스트 만들기",
      "생일 캘린더 등록하기",
      "작은 선물 준비해두기",
    ],
  },
  volunteer: {
    id: "volunteer",
    title: "선행러",
    goal: "봉사활동 시작하기",
    description: "나눔은 받는 것보다 주는 기쁨이 더 커. 작은 것부터 시작해보자.",
    emoji: "",
    color: "#FC8181",
    tips: [
      "관심 분야 봉사 찾아보기",
      "월 1회부터 시작",
      "기부 습관 들이기",
    ],
  },

  // 경험/모험 계열
  traveler: {
    id: "traveler",
    title: "여행러",
    goal: "새로운 곳 3군데 가기",
    description: "경험이 너를 만든다. 익숙한 곳을 벗어나 새로운 나를 만나봐.",
    emoji: "",
    color: "#38B2AC",
    tips: [
      "버킷리스트 여행지 정하기",
      "여행 적금 시작하기",
      "휴가 미리 계획하기",
    ],
  },
  adventurer: {
    id: "adventurer",
    title: "도전러",
    goal: "해본 적 없는 것 5개 해보기",
    description: "안전지대 밖으로! 실패해도 괜찮아, 경험이 남으니까.",
    emoji: "",
    color: "#F56565",
    tips: [
      "버킷리스트 작성하기",
      "두려운 것부터 도전",
      "매달 새로운 거 하나씩",
    ],
  },
  hobbyist: {
    id: "hobbyist",
    title: "취미부자",
    goal: "새 취미 3개 시작하기",
    description: "일만 하다 지치지 말고, 나를 위한 시간을 가져봐.",
    emoji: "",
    color: "#ED8936",
    tips: [
      "원데이클래스 체험하기",
      "유튜브로 취미 찾아보기",
      "취미 용품은 중고로 시작",
    ],
  },

  // 창작/표현 계열
  creator: {
    id: "creator",
    title: "크리에이터",
    goal: "콘텐츠 만들기 시작",
    description: "네 안의 창작 욕구를 풀어봐. 블로그든 유튜브든 뭐든 시작이 반이야.",
    emoji: "",
    color: "#E53E3E",
    tips: [
      "관심 분야 정하기",
      "일주일에 1개 업로드 목표",
      "완벽보다 일단 시작",
    ],
  },
  writer: {
    id: "writer",
    title: "글쓰는사람",
    goal: "매일 일기 쓰기",
    description: "기록은 기억을 이긴다. 하루를 정리하며 나를 돌아보는 시간.",
    emoji: "",
    color: "#2D3748",
    tips: [
      "잠들기 전 3줄 일기",
      "감사한 것 3가지 적기",
      "예쁜 노트나 앱 준비",
    ],
  },

  // 라이프스타일 계열
  homechef: {
    id: "homechef",
    title: "집밥러",
    goal: "주 3회 집밥 해먹기",
    description: "배달음식 줄이고 건강한 한 끼. 요리 실력은 덤이야.",
    emoji: "",
    color: "#DD6B20",
    tips: [
      "간단한 레시피부터 시작",
      "밀프렙으로 시간 절약",
      "요리 유튜브 구독하기",
    ],
  },
  chillmaster: {
    id: "chillmaster",
    title: "워라밸러",
    goal: "제대로 쉬는 법 배우기",
    description: "쉬는 것도 능력이야. 죄책감 없이 푹 쉬어도 괜찮아.",
    emoji: "",
    color: "#718096",
    tips: [
      "주말 하루는 완전 휴식",
      "SNS 디톡스 해보기",
      "아무것도 안 해도 OK",
    ],
  },
};

// 스코어 기반 결과 계산
export interface ScoreMap {
  [key: string]: number;
}

export function calculateResult(scores: ScoreMap): Result {
  // 점수가 가장 높은 유형 찾기
  let maxScore = -1;
  let resultType = "chillmaster";

  for (const [type, score] of Object.entries(scores)) {
    if (score > maxScore && results[type]) {
      maxScore = score;
      resultType = type;
    }
  }

  return results[resultType];
}

// 카테고리별 그룹핑 (나중에 활용 가능)
export const resultCategories = {
  selfcare: ["godsaeng", "earlybird", "minimalist"],
  health: ["health", "dieter", "meditator"],
  finance: ["saver", "investor"],
  growth: ["learner", "linguist", "reader"],
  social: ["connector", "volunteer"],
  experience: ["traveler", "adventurer", "hobbyist"],
  creative: ["creator", "writer"],
  lifestyle: ["homechef", "chillmaster"],
};
