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
        scores: { chillmaster: 3, earlybird: -1 },
      },
      {
        id: "1b",
        text: "일어나서 커피 한 잔",
        scores: { godsaeng: 2, health: 1, earlybird: 2 },
      },
      {
        id: "1c",
        text: "침대에서 SNS 확인",
        scores: { creator: 1, chillmaster: 2 },
      },
      {
        id: "1d",
        text: "오늘 할 일 머릿속으로 정리",
        scores: { godsaeng: 3, learner: 2, minimalist: 1 },
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
        scores: { health: 3, dieter: 2, meditator: 1 },
      },
      {
        id: "2c",
        text: "뭔가 발전이 없는 느낌",
        scores: { learner: 3, linguist: 2, adventurer: 2 },
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
    question: "주말에 갑자기 하루가 비면?",
    answers: [
      {
        id: "3a",
        text: "집에서 넷플릭스 정주행",
        scores: { chillmaster: 3, homechef: 1 },
      },
      {
        id: "3b",
        text: "밀린 집안일 처리",
        scores: { minimalist: 3, godsaeng: 2 },
      },
      {
        id: "3c",
        text: "못 만났던 친구 연락",
        scores: { connector: 3, traveler: 1 },
      },
      {
        id: "3d",
        text: "뭔가 새로운 거 해보고 싶어",
        scores: { adventurer: 3, hobbyist: 2, creator: 1 },
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
        scores: { adventurer: 2, traveler: 2, chillmaster: 1 },
      },
      {
        id: "4b",
        text: "가격 비교 필수, 할인 필수",
        scores: { saver: 3, minimalist: 2 },
      },
      {
        id: "4c",
        text: "경험에는 아끼지 않아",
        scores: { traveler: 3, adventurer: 2, hobbyist: 2 },
      },
      {
        id: "4d",
        text: "미래를 위해 투자한다 생각해",
        scores: { investor: 3, learner: 2 },
      },
    ],
  },
  {
    id: 5,
    question: "운동에 대한 솔직한 생각은?",
    answers: [
      {
        id: "5a",
        text: "해야 하는데... 내일부터",
        scores: { health: 1, chillmaster: 2, dieter: 1 },
      },
      {
        id: "5b",
        text: "이미 꾸준히 하고 있어",
        scores: { health: 3, godsaeng: 2 },
      },
      {
        id: "5c",
        text: "산책 정도면 충분하지 않아?",
        scores: { meditator: 2, chillmaster: 2 },
      },
      {
        id: "5d",
        text: "같이 할 사람 있으면 할 텐데",
        scores: { connector: 2, health: 1, hobbyist: 1 },
      },
    ],
  },
  {
    id: 6,
    question: "요즘 관심 가는 콘텐츠는?",
    answers: [
      {
        id: "6a",
        text: "자기계발 / 동기부여 영상",
        scores: { godsaeng: 2, learner: 3, investor: 1 },
      },
      {
        id: "6b",
        text: "여행 / 맛집 브이로그",
        scores: { traveler: 3, homechef: 2, adventurer: 1 },
      },
      {
        id: "6c",
        text: "웃긴 영상 / 밈",
        scores: { chillmaster: 3, creator: 1 },
      },
      {
        id: "6d",
        text: "취미 / 하우투 영상",
        scores: { hobbyist: 3, creator: 2, homechef: 1 },
      },
    ],
  },
  {
    id: 7,
    question: "스트레스 받으면 어떻게 풀어?",
    answers: [
      {
        id: "7a",
        text: "맛있는 거 먹기",
        scores: { homechef: 2, dieter: -1, chillmaster: 2 },
      },
      {
        id: "7b",
        text: "운동하거나 산책",
        scores: { health: 3, meditator: 2 },
      },
      {
        id: "7c",
        text: "친구한테 연락해서 수다",
        scores: { connector: 3, chillmaster: 1 },
      },
      {
        id: "7d",
        text: "혼자만의 시간 갖기",
        scores: { meditator: 3, reader: 2, writer: 2 },
      },
    ],
  },
  {
    id: 8,
    question: "새로운 걸 시작할 때 나는?",
    answers: [
      {
        id: "8a",
        text: "일단 질러! 생각은 나중에",
        scores: { adventurer: 3, traveler: 2, hobbyist: 2 },
      },
      {
        id: "8b",
        text: "유튜브로 정보 수집부터",
        scores: { learner: 2, reader: 2, investor: 1 },
      },
      {
        id: "8c",
        text: "해본 사람한테 물어봐",
        scores: { connector: 2, hobbyist: 1 },
      },
      {
        id: "8d",
        text: "계획 세우고 차근차근",
        scores: { godsaeng: 3, minimalist: 2, saver: 1 },
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
        scores: { saver: 3, investor: 3 },
      },
      {
        id: "9b",
        text: "건강하게 잘 지냈으면",
        scores: { health: 3, dieter: 2, meditator: 2 },
      },
      {
        id: "9c",
        text: "새로운 경험 많이 했으면",
        scores: { traveler: 3, adventurer: 3, hobbyist: 2 },
      },
      {
        id: "9d",
        text: "뭔가 하나라도 이뤘으면",
        scores: { learner: 3, creator: 2, godsaeng: 2 },
      },
    ],
  },
  {
    id: 10,
    question: "지금 방 상태를 솔직하게 말하면?",
    answers: [
      {
        id: "10a",
        text: "깔끔 그 자체",
        scores: { minimalist: 3, godsaeng: 2 },
      },
      {
        id: "10b",
        text: "나만 아는 정리 상태",
        scores: { creator: 1, chillmaster: 2 },
      },
      {
        id: "10c",
        text: "좀... 어지럽긴 해",
        scores: { adventurer: 1, chillmaster: 2 },
      },
      {
        id: "10d",
        text: "창작의 혼돈 (물건이 많음)",
        scores: { creator: 2, hobbyist: 2, minimalist: -2 },
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
        scores: { meditator: 2, reader: 2, minimalist: 2 },
      },
      {
        id: "11b",
        text: "일상 공유 자주 해",
        scores: { creator: 3, connector: 2 },
      },
      {
        id: "11c",
        text: "정보 수집용으로만",
        scores: { learner: 2, investor: 2, traveler: 1 },
      },
      {
        id: "11d",
        text: "콘텐츠 만들어서 올려",
        scores: { creator: 3, writer: 2, hobbyist: 1 },
      },
    ],
  },
  {
    id: 12,
    question: "솔직히 올해 가장 후회되는 건?",
    answers: [
      {
        id: "12a",
        text: "돈을 너무 많이 썼다",
        scores: { saver: 3, investor: 2, minimalist: 1 },
      },
      {
        id: "12b",
        text: "건강 관리를 못 했다",
        scores: { health: 3, dieter: 3, earlybird: 2 },
      },
      {
        id: "12c",
        text: "하고 싶은 걸 못 했다",
        scores: { adventurer: 3, traveler: 2, hobbyist: 2, creator: 1 },
      },
      {
        id: "12d",
        text: "딱히 없음 (잘 살았어)",
        scores: { chillmaster: 3, meditator: 2 },
      },
    ],
  },
];
