export interface Answer {
  id: string;
  text: string;
  scores: { [type: string]: number };
}

export interface Question {
  id: number;
  question: string;
  answers: Answer[];
}

export const questions: Question[] = [
  {
    id: 1,
    question: "아침에 눈 뜨자마자 제일 먼저 하는 건?",
    answers: [
      {
        id: "1a",
        text: "알람 끄고 5분만 더...",
        scores: { lazybones: 3 },
      },
      {
        id: "1b",
        text: "바로 일어나서 하루 시작",
        scores: { earlybird: 3, godsaeng: 2 },
      },
      {
        id: "1c",
        text: "침대에서 SNS 확인",
        scores: { creator: 2, connector: 1 },
      },
      {
        id: "1d",
        text: "오늘 할 일 머릿속으로 정리",
        scores: { godsaeng: 3, learner: 2 },
      },
    ],
  },
  {
    id: 2,
    question: "요즘 가장 신경 쓰이는 건?",
    answers: [
      {
        id: "2a",
        text: "통장 잔고가 걱정돼",
        scores: { saver: 3, investor: 2 },
      },
      {
        id: "2b",
        text: "체력이 예전 같지 않아",
        scores: { health: 3, dieter: 2 },
      },
      {
        id: "2c",
        text: "뭔가 발전이 없는 느낌",
        scores: { learner: 3, linguist: 2 },
      },
      {
        id: "2d",
        text: "인간관계가 소홀해진 것 같아",
        scores: { connector: 3, volunteer: 2 },
      },
    ],
  },
  {
    id: 3,
    question: "혼자 있는 시간에 주로 뭐 해?",
    answers: [
      {
        id: "3a",
        text: "책이나 웹소설 읽기",
        scores: { reader: 3, writer: 1 },
      },
      {
        id: "3b",
        text: "영상 보면서 쉬기",
        scores: { chillmaster: 2, lazybones: 1 },
      },
      {
        id: "3c",
        text: "일기나 글 쓰기",
        scores: { writer: 3, reader: 1 },
      },
      {
        id: "3d",
        text: "요리하거나 집 꾸미기",
        scores: { homechef: 3 },
      },
    ],
  },
  {
    id: 4,
    question: "돈을 쓸 때 나는?",
    answers: [
      {
        id: "4a",
        text: "일단 사고 후회는 나중에",
        scores: { adventurer: 3, traveler: 1 },
      },
      {
        id: "4b",
        text: "가격 비교 필수, 할인 필수",
        scores: { saver: 3 },
      },
      {
        id: "4c",
        text: "경험에는 아끼지 않아",
        scores: { traveler: 3, adventurer: 1 },
      },
      {
        id: "4d",
        text: "미래를 위해 투자한다 생각해",
        scores: { investor: 3, learner: 1 },
      },
    ],
  },
  {
    id: 5,
    question: "새해에 배워보고 싶은 건?",
    answers: [
      {
        id: "5a",
        text: "외국어 (영어, 일본어 등)",
        scores: { linguist: 3, learner: 1 },
      },
      {
        id: "5b",
        text: "운동이나 헬스",
        scores: { health: 3, dieter: 1 },
      },
      {
        id: "5c",
        text: "요리나 베이킹",
        scores: { homechef: 3 },
      },
      {
        id: "5d",
        text: "악기나 그림 같은 취미",
        scores: { hobbyist: 3, creator: 1 },
      },
    ],
  },
  {
    id: 6,
    question: "이상적인 아침 루틴은?",
    answers: [
      {
        id: "6a",
        text: "새벽에 일어나서 운동하고 출근",
        scores: { earlybird: 3, health: 1 },
      },
      {
        id: "6b",
        text: "여유롭게 브런치 해먹기",
        scores: { homechef: 3 },
      },
      {
        id: "6c",
        text: "조용히 책이나 신문 읽기",
        scores: { reader: 3, meditator: 1 },
      },
      {
        id: "6d",
        text: "아침은 그냥 패스...",
        scores: { lazybones: 3 },
      },
    ],
  },
  {
    id: 7,
    question: "스트레스 받으면 어떻게 풀어?",
    answers: [
      {
        id: "7a",
        text: "맛있는 거 먹거나 직접 요리",
        scores: { homechef: 3 },
      },
      {
        id: "7b",
        text: "운동하거나 산책",
        scores: { health: 3, meditator: 1 },
      },
      {
        id: "7c",
        text: "친구한테 연락해서 수다",
        scores: { connector: 3 },
      },
      {
        id: "7d",
        text: "글로 쓰면서 정리",
        scores: { writer: 3, meditator: 1 },
      },
    ],
  },
  {
    id: 8,
    question: "해외여행 가면 제일 하고 싶은 건?",
    answers: [
      {
        id: "8a",
        text: "현지인이랑 대화해보기",
        scores: { linguist: 3, connector: 1 },
      },
      {
        id: "8b",
        text: "유명 관광지 다 돌아보기",
        scores: { traveler: 3, adventurer: 1 },
      },
      {
        id: "8c",
        text: "현지 맛집 투어",
        scores: { homechef: 2, traveler: 2 },
      },
      {
        id: "8d",
        text: "숙소에서 여유롭게 쉬기",
        scores: { meditator: 3 },
      },
    ],
  },
  {
    id: 9,
    question: "1년 후 나에게 바라는 건?",
    answers: [
      {
        id: "9a",
        text: "돈 좀 모아놨으면",
        scores: { saver: 3, investor: 2 },
      },
      {
        id: "9b",
        text: "건강하게 잘 지냈으면",
        scores: { health: 2, earlybird: 2, dieter: 1 },
      },
      {
        id: "9c",
        text: "새로운 경험 많이 했으면",
        scores: { traveler: 3, adventurer: 2 },
      },
      {
        id: "9d",
        text: "뭔가 하나라도 이뤘으면",
        scores: { learner: 3, creator: 1 },
      },
    ],
  },
  {
    id: 10,
    question: "남는 시간이 생기면 하고 싶은 건?",
    answers: [
      {
        id: "10a",
        text: "봉사활동이나 기부",
        scores: { volunteer: 3, connector: 1 },
      },
      {
        id: "10b",
        text: "밀린 책 읽기",
        scores: { reader: 3 },
      },
      {
        id: "10c",
        text: "새로운 취미 도전",
        scores: { hobbyist: 3, adventurer: 1 },
      },
      {
        id: "10d",
        text: "그냥 푹 쉬고 싶어",
        scores: { chillmaster: 3, lazybones: 1 },
      },
    ],
  },
  {
    id: 11,
    question: "SNS는 어떻게 쓰고 있어?",
    answers: [
      {
        id: "11a",
        text: "거의 안 해 / 눈팅만",
        scores: { meditator: 3 },
      },
      {
        id: "11b",
        text: "일상 공유 자주 해",
        scores: { creator: 3, connector: 1 },
      },
      {
        id: "11c",
        text: "정보 수집용으로만",
        scores: { learner: 2, investor: 2 },
      },
      {
        id: "11d",
        text: "글이나 콘텐츠 만들어서 올려",
        scores: { writer: 3, creator: 1 },
      },
    ],
  },
  {
    id: 12,
    question: "주변 사람들한테 자주 듣는 말은?",
    answers: [
      {
        id: "12a",
        text: "넌 참 부지런하다",
        scores: { earlybird: 3, godsaeng: 2 },
      },
      {
        id: "12b",
        text: "넌 참 마음이 따뜻하다",
        scores: { volunteer: 3, connector: 1 },
      },
      {
        id: "12c",
        text: "넌 참 다재다능하다",
        scores: { hobbyist: 3, linguist: 1, creator: 1 },
      },
      {
        id: "12d",
        text: "넌 참 여유롭다",
        scores: { meditator: 3, chillmaster: 1 },
      },
    ],
  },
];
