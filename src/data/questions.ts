export interface Question {
  id: number;
  question: string;
  answers: {
    id: string;
    text: string;
    type: string[];
  }[];
}

export const questions: Question[] = [
  {
    id: 1,
    question: "주말 아침, 눈 떴을 때 제일 먼저 하고 싶은 건?",
    answers: [
      { id: "1a", text: "이불 속에서 유튜브 정주행", type: ["healing", "chill"] },
      { id: "1b", text: "일단 커피부터 내리기", type: ["realistic", "routine"] },
      { id: "1c", text: "밀린 집안일 해치우기", type: ["godsaeng", "realistic"] },
      { id: "1d", text: "밖으로 나가서 공기 마시기", type: ["adventure", "health"] },
    ],
  },
  {
    id: 2,
    question: '친구가 갑자기 "다음 주 제주도 갈래?" 하면?',
    answers: [
      { id: "2a", text: '"당장 비행기 검색해"', type: ["adventure", "travel"] },
      { id: "2b", text: '"일정 확인하고 알려줄게"', type: ["realistic", "routine"] },
      { id: "2c", text: '"나 돈 없어..."', type: ["saving", "realistic"] },
      { id: "2d", text: '"집에서 쉬고 싶은데"', type: ["healing", "chill"] },
    ],
  },
  {
    id: 3,
    question: "새해 다짐하면 떠오르는 감정은?",
    answers: [
      { id: "3a", text: "설렘 (올해는 진짜 해볼 거야!)", type: ["adventure", "growth"] },
      { id: "3b", text: "걱정 (또 작심삼일 할까봐)", type: ["realistic", "healing"] },
      { id: "3c", text: "귀찮음 (그냥 평소대로 살지 뭐)", type: ["chill", "healing"] },
      { id: "3d", text: "의욕 (리스트 작성 시작!)", type: ["godsaeng", "growth"] },
    ],
  },
  {
    id: 4,
    question: "회사/학교 끝나고 나만의 시간이 2시간 생기면?",
    answers: [
      { id: "4a", text: "넷플릭스 or 게임", type: ["healing", "chill"] },
      { id: "4b", text: "운동이나 산책", type: ["health", "godsaeng"] },
      { id: "4c", text: "밀린 공부나 자기개발", type: ["growth", "godsaeng"] },
      { id: "4d", text: "친구 만나기", type: ["relationship", "adventure"] },
    ],
  },
  {
    id: 5,
    question: "SNS에서 제일 많이 보는 콘텐츠는?",
    answers: [
      { id: "5a", text: "맛집/카페/여행", type: ["travel", "adventure"] },
      { id: "5b", text: "자기개발/동기부여", type: ["growth", "godsaeng"] },
      { id: "5c", text: "웃긴 영상/밈", type: ["chill", "healing"] },
      { id: "5d", text: "취미 관련 (운동, 요리, 게임 등)", type: ["health", "growth"] },
    ],
  },
  {
    id: 6,
    question: "통장 잔고 확인할 때 기분은?",
    answers: [
      { id: "6a", text: "자주 확인함 (관리 철저)", type: ["saving", "godsaeng"] },
      { id: "6b", text: "가끔 확인함 (대충 파악)", type: ["realistic", "chill"] },
      { id: "6c", text: "무서워서 안 봄", type: ["adventure", "chill"] },
      { id: "6d", text: "잔고가 뭐예요? (카드값만 나가면 됨)", type: ["adventure", "travel"] },
    ],
  },
  {
    id: 7,
    question: "새로운 걸 시작할 때 나는?",
    answers: [
      { id: "7a", text: "일단 지르고 본다", type: ["adventure", "travel"] },
      { id: "7b", text: "유튜브로 정보 수집부터", type: ["realistic", "growth"] },
      { id: "7c", text: "주변에 해본 사람 찾기", type: ["relationship", "realistic"] },
      { id: "7d", text: "생각만 하다가 흐지부지", type: ["chill", "healing"] },
    ],
  },
  {
    id: 8,
    question: "지금 내 방 상태는?",
    answers: [
      { id: "8a", text: "깔끔 그 자체", type: ["godsaeng", "routine"] },
      { id: "8b", text: "나만 아는 정리 상태", type: ["realistic", "chill"] },
      { id: "8c", text: "좀... 어지럽긴 해", type: ["chill", "healing"] },
      { id: "8d", text: "창작의 혼돈", type: ["adventure", "growth"] },
    ],
  },
  {
    id: 9,
    question: "운동에 대한 내 생각은?",
    answers: [
      { id: "9a", text: "이미 하고 있음 (꾸준히)", type: ["health", "godsaeng"] },
      { id: "9b", text: "해야 하는데... (마음의 빚)", type: ["realistic", "growth"] },
      { id: "9c", text: "산책이면 충분해", type: ["healing", "health"] },
      { id: "9d", text: "움직이는 거 싫어", type: ["chill", "healing"] },
    ],
  },
  {
    id: 10,
    question: "올해 가장 후회되는 건?",
    answers: [
      { id: "10a", text: "돈을 너무 많이 썼다", type: ["saving", "realistic"] },
      { id: "10b", text: "하고 싶은 걸 못 했다", type: ["adventure", "travel"] },
      { id: "10c", text: "건강 관리를 못 했다", type: ["health", "godsaeng"] },
      { id: "10d", text: "딱히 없음 (잘 살았어)", type: ["chill", "healing"] },
    ],
  },
];
