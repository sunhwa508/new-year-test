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
  godsaeng: {
    id: "godsaeng",
    title: "갓생러",
    goal: "미라클 모닝 30일 챌린지",
    description:
      "남들 자는 새벽에 일어나서 뭐라도 하는 그 쾌감... 알잖아? 아침형 인간 각성 ㄱㄱ",
    emoji: "",
    color: "#FF6B6B",
    tips: [
      "알람 5분 간격으로 3개 세팅 (도망 불가)",
      "투두리스트 안 쓰면 하루가 불안한 사람 됨",
      "아침 루틴 릴스 찍어서 자기 세뇌하기",
    ],
    tmi: {
      song: "NewJeans - Super Shy",
      movie: "소울 (Soul)",
      gift: "스마트 알람시계",
    },
    quote: "새벽 5시엔 경쟁자가 없다",
  },
  earlybird: {
    id: "earlybird",
    title: "얼리버드",
    goal: "밤 12시 전에 자기",
    description:
      "매일 밤 '오늘은 일찍 자야지' 하고 새벽 2시에 폰 보는 거 국룰임. 올해는 진짜 끊자...",
    emoji: "",
    color: "#FFA07A",
    tips: [
      "저녁 9시 이후 카페인 금지 (커피 대신 루이보스)",
      "폰 멀리 던져두고 자기 (진심)",
      "수면 앱 깔아서 강제 수면 모드 ON",
    ],
    tmi: {
      song: "검정치마 - 기다린 만큼, 더",
      movie: "이터널 선샤인",
      gift: "수면등 & 백색소음기",
    },
    quote: "잠이 보약이라는 말, 과학임",
  },
  minimalist: {
    id: "minimalist",
    title: "미니멀리스트",
    goal: "한 달에 10개씩 버리기",
    description:
      "방 정리하면 인생도 정리되는 느낌 알지? 물건 줄이고 마음도 가볍게~",
    emoji: "",
    color: "#A0AEC0",
    tips: [
      "1년 안 쓴 거 = 평생 안 쓸 거 (버려)",
      "하나 사면 하나 버리기 룰 적용",
      "당근마켓이 네 친구다",
    ],
    tmi: {
      song: "혁오 - TOMBOY",
      movie: "버닝",
      gift: "심플한 무지 노트",
    },
    quote: "비울수록 채워지는 게 있다",
  },

  // 건강 계열
  health: {
    id: "health",
    title: "헬스인",
    goal: "주 3회 운동 습관 만들기",
    description:
      "오운완 안 올리면 운동 안 한 거임 ㅋㅋ 일단 헬스장 등록부터 ㄱㄱ",
    emoji: "",
    color: "#48BB78",
    tips: [
      "PT 끊어서 강제 출석 유도",
      "운동 파트너 = 서로 감시하는 관계",
      "운동복 미리 꺼내두기 (아침에 고민 X)",
    ],
    tmi: {
      song: "Dua Lipa - Physical",
      movie: "록키 (Rocky)",
      gift: "블루투스 이어폰",
    },
    quote: "3개월만 버티면 습관 된다더라",
  },
  dieter: {
    id: "dieter",
    title: "다이어터",
    goal: "건강한 식습관 만들기",
    description:
      "매번 월요일에 시작하는 다이어트... 이번엔 진짜다. 배달앱 삭제 각?",
    emoji: "",
    color: "#68D391",
    tips: [
      "물 하루 2리터 (화장실 자주 감)",
      "야식 줄이기 (끊는 건 너무 슬픔)",
      "배달앱 알림 끄기 (유혹 차단)",
    ],
    tmi: {
      song: "IU - 스물셋",
      movie: "리틀 포레스트",
      gift: "이쁜 텀블러",
    },
    quote: "천천히 가도 괜찮아, 포기만 안 하면 됨",
  },
  meditator: {
    id: "meditator",
    title: "명상러",
    goal: "하루 10분 마음 챙김",
    description:
      "머리가 너무 복잡할 때 있잖아... 잠깐 멈추고 숨 좀 쉬자. 번아웃 예방 필수템",
    emoji: "",
    color: "#9F7AEA",
    tips: [
      "명상 앱 깔아두기 (마보 추천)",
      "아침에 5분만 해도 다름",
      "생각 많을 땐 호흡에만 집중",
    ],
    tmi: {
      song: "Marconi Union - Weightless",
      movie: "먹고 기도하고 사랑하라",
      gift: "아로마 디퓨저",
    },
    quote: "멈춰야 보이는 것들이 있다",
  },

  // 재정 계열
  saver: {
    id: "saver",
    title: "저축왕",
    goal: "매달 10만원 저축하기",
    description:
      "월급 들어오면 순삭되는 거 국룰이지만... 올해는 좀 모아보자. 티끌 모아 태산이래잖아",
    emoji: "",
    color: "#F6AD55",
    tips: [
      "월급날 자동이체 설정 (손 못 대게)",
      "지출 내역 기록하기 (충격받을 수도)",
      "무지출 챌린지 도전 (하루라도 ㅋㅋ)",
    ],
    tmi: {
      song: "ABBA - Money Money Money",
      movie: "국가부도의 날",
      gift: "가계부 다이어리",
    },
    quote: "부자는 하루아침에 안 된다더라",
  },
  investor: {
    id: "investor",
    title: "재테커",
    goal: "투자 공부 시작하기",
    description:
      "주식? 코인? 부동산? 일단 공부부터 하자. 돈이 일하게 만드는 법 배울 때 됐어",
    emoji: "",
    color: "#4FD1C5",
    tips: [
      "경제 뉴스 하루 1개씩 읽기",
      "모의투자로 연습 (실전 가기 전에)",
      "투자 책 3권 읽기",
    ],
    tmi: {
      song: "Kanye West - Stronger",
      movie: "빅쇼트",
      gift: "경제 베스트셀러",
    },
    quote: "공부 안 하고 투자하면 기부하는 거임",
  },

  // 자기계발 계열
  learner: {
    id: "learner",
    title: "공부벌레",
    goal: "자격증 하나 따기",
    description:
      "스펙 쌓기? 자기만족? 뭐든 OK. 올해는 뭔가 하나 따놓자. 이력서에 한 줄 추가 ㄱㄱ",
    emoji: "",
    color: "#4299E1",
    tips: [
      "관심 있는 자격증 알아보기",
      "D-day 설정하고 역산 공부",
      "스터디 구해서 강제 출석",
    ],
    tmi: {
      song: "아이유 - 에잇",
      movie: "위플래쉬",
      gift: "노이즈캔슬링 헤드폰",
    },
    quote: "배움에는 끝이 없다 (근데 자격증은 끝이 있음)",
  },
  linguist: {
    id: "linguist",
    title: "언어러너",
    goal: "외국어 하나 시작하기",
    description:
      "영어? 일본어? 스페인어? 뭐든 하나 시작해봐. 매일 10분이면 1년 후엔 달라져 있음",
    emoji: "",
    color: "#667EEA",
    tips: [
      "듀오링고 알림 ON (부엉이 협박 시작)",
      "좋아하는 콘텐츠 원어로 보기",
      "하루 단어 5개씩 (이것도 많음)",
    ],
    tmi: {
      song: "Bad Bunny - Titi Me Pregunto",
      movie: "컨택트",
      gift: "언어학습 앱 구독권",
    },
    quote: "새 언어 = 새 인생",
  },
  reader: {
    id: "reader",
    title: "독서가",
    goal: "한 달에 책 2권 읽기",
    description:
      "SNS 보는 시간에 책 읽으면 1년에 24권은 읽는다는 계산... 해보자!",
    emoji: "",
    color: "#805AD5",
    tips: [
      "출퇴근 시간 활용 (지하철 = 독서실)",
      "독서 모임 가입하기",
      "읽고 싶은 책 리스트 만들기",
    ],
    tmi: {
      song: "10cm - 봄이 좋냐",
      movie: "노팅힐",
      gift: "북스탠드 & 독서등",
    },
    quote: "책 한 권이 인생을 바꿀 수도 있음",
  },

  // 사회/관계 계열
  connector: {
    id: "connector",
    title: "인싸형",
    goal: "한 달에 친구 한 명 만나기",
    description:
      "바쁘다 바빠 현대사회... 친구들 다 어디 갔지? 먼저 연락해봐. 답장 온다 ㅋㅋ",
    emoji: "",
    color: "#ED64A6",
    tips: [
      "연락 안 한 친구 리스트 만들기",
      "생일 캘린더 등록 (까먹으면 서운해함)",
      "작은 선물 준비 (커피 쿠폰도 OK)",
    ],
    tmi: {
      song: "Bruno Mars - Count on Me",
      movie: "해피투게더",
      gift: "보드게임 세트",
    },
    quote: "좋은 친구 = 인생 최고의 버프",
  },
  volunteer: {
    id: "volunteer",
    title: "선행러",
    goal: "봉사활동 시작하기",
    description:
      "나눔은 받는 것보다 주는 기쁨이 더 크대. 작은 것부터 시작해보자!",
    emoji: "",
    color: "#FC8181",
    tips: [
      "관심 분야 봉사 찾아보기",
      "월 1회부터 시작",
      "기부 습관 들이기 (커피 한 잔 값이면 됨)",
    ],
    tmi: {
      song: "Michael Jackson - Heal the World",
      movie: "원더",
      gift: "따뜻한 담요 (기부용)",
    },
    quote: "작은 나눔이 세상을 바꾼다",
  },

  // 경험/모험 계열
  traveler: {
    id: "traveler",
    title: "여행러",
    goal: "새로운 곳 3군데 가기",
    description:
      "인스타 피드 보면 다들 여행 다니던데... 나도 좀 다녀야겠다. 휴가 언제 쓰지?",
    emoji: "",
    color: "#38B2AC",
    tips: [
      "버킷리스트 여행지 정하기",
      "여행 적금 시작 (매달 조금씩)",
      "휴가 미리 계획 (안 하면 못 감)",
    ],
    tmi: {
      song: "Coldplay - Adventure of a Lifetime",
      movie: "월터의 상상은 현실이 된다",
      gift: "여행용 캐리어",
    },
    quote: "여행은 돈 쓸 가치가 있는 유일한 것",
  },
  adventurer: {
    id: "adventurer",
    title: "도전러",
    goal: "해본 적 없는 것 5개 해보기",
    description:
      "안전지대 밖으로! 실패해도 괜찮아, 경험이 남으니까. YOLO 정신으로 ㄱㄱ",
    emoji: "",
    color: "#F56565",
    tips: [
      "버킷리스트 작성하기",
      "두려운 것부터 도전 (미루면 평생 안 함)",
      "매달 새로운 거 하나씩",
    ],
    tmi: {
      song: "Imagine Dragons - Believer",
      movie: "예스맨",
      gift: "체험 이용권 (서핑, 스카이다이빙 등)",
    },
    quote: "실패해도 괜찮아, 시도가 용기다",
  },
  hobbyist: {
    id: "hobbyist",
    title: "취미부자",
    goal: "새 취미 3개 시작하기",
    description:
      "일만 하다 지치지 말고, 나를 위한 시간 좀 가져봐. 취미가 곧 힐링이다",
    emoji: "",
    color: "#ED8936",
    tips: [
      "원데이클래스 체험하기",
      "유튜브로 취미 찾아보기",
      "취미 용품은 중고로 시작 (실패해도 덜 아픔)",
    ],
    tmi: {
      song: "Pharrell Williams - Happy",
      movie: "줄리 앤 줄리아",
      gift: "원데이클래스 이용권",
    },
    quote: "덕업일치 = 최고의 인생",
  },

  // 창작/표현 계열
  creator: {
    id: "creator",
    title: "크리에이터",
    goal: "콘텐츠 만들기 시작",
    description:
      "유튜브? 틱톡? 블로그? 뭐든 시작이 반이야. 완벽 말고 일단 올려봐!",
    emoji: "",
    color: "#E53E3E",
    tips: [
      "관심 분야 하나 정하기",
      "일주일에 1개 업로드 목표",
      "완벽보다 일단 시작 (나중에 수정하면 됨)",
    ],
    tmi: {
      song: "Daft Punk - Get Lucky",
      movie: "빌리 엘리어트",
      gift: "조명 & 마이크 세트",
    },
    quote: "세상에 너의 이야기를 들려줘",
  },
  writer: {
    id: "writer",
    title: "글쓰는사람",
    goal: "매일 일기 쓰기",
    description:
      "기록은 기억을 이긴대. 하루 3줄이라도 써보자. 나중에 보면 재밌음 ㅋㅋ",
    emoji: "",
    color: "#2D3748",
    tips: [
      "잠들기 전 3줄 일기",
      "감사한 것 3가지 적기",
      "이쁜 노트나 앱 준비 (의지 상승)",
    ],
    tmi: {
      song: "이적 - 걱정말아요 그대",
      movie: "미드나잇 인 파리",
      gift: "만년필 세트",
    },
    quote: "오늘의 기록이 내일의 나를 만든다",
  },

  // 라이프스타일 계열
  homechef: {
    id: "homechef",
    title: "집밥러",
    goal: "주 3회 집밥 해먹기",
    description:
      "배달비만 모아도 여행 가겠다... 올해는 요리 좀 해보자. 유튜브 보고 따라하면 됨",
    emoji: "",
    color: "#DD6B20",
    tips: [
      "간단한 레시피부터 시작 (볶음밥 강추)",
      "밀프렙으로 시간 절약",
      "요리 유튜브 구독 (백종원 선생님 감사합니다)",
    ],
    tmi: {
      song: "백예린 - Square",
      movie: "리틀 포레스트",
      gift: "에어프라이어",
    },
    quote: "집밥 = 최고의 보약",
  },
  chillmaster: {
    id: "chillmaster",
    title: "워라밸러",
    goal: "제대로 쉬는 법 배우기",
    description:
      "쉬는 것도 능력이야. 번아웃 오기 전에 미리 쉬자. 죄책감? 그런 거 없음",
    emoji: "",
    color: "#718096",
    tips: [
      "주말 하루는 완전 휴식 (폰도 내려놓기)",
      "SNS 디톡스 해보기",
      "아무것도 안 해도 OK (진짜임)",
    ],
    tmi: {
      song: "잔나비 - 주저하는 연인들을 위해",
      movie: "어바웃 타임",
      gift: "안마기 or 입욕제",
    },
    quote: "쉬는 것도 실력이다",
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
  let resultType = "chillmaster";

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

  const mainType = sortedTypes[0]?.[0] || "chillmaster";
  const subType = sortedTypes[1]?.[0];

  return {
    main: results[mainType],
    sub: subType && subType !== mainType ? results[subType] : null,
  };
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
