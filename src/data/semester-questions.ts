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

export const semesterQuestions: Question[] = [
  {
    id: 1,
    question: "새 학기 첫날 아침, 당신은?",
    answers: [
      {
        id: "1a",
        text: "전날 옷 미리 골라놓고 일찍 잠",
        scores: { perfectionist: 3, timemaster: 1 },
      },
      {
        id: "1b",
        text: "일어나서 급하게 준비 (근데 익숙함)",
        scores: { lastminute: 3, social: 1 },
      },
      {
        id: "1c",
        text: "친구랑 같이 가기로 해서 기다리는 중",
        scores: { social: 3, teamplayer: 1 },
      },
      {
        id: "1d",
        text: "새 플래너 펼치고 오늘 할 일 체크",
        scores: { timemaster: 3, perfectionist: 1 },
      },
    ],
  },
  {
    id: 2,
    question: "수업 시간에 모르는 게 나왔다. 어떡해?",
    answers: [
      {
        id: "2a",
        text: "손 들고 바로 질문함",
        scores: { social: 3, perfectionist: 1 },
      },
      {
        id: "2b",
        text: "일단 필기하고 나중에 검색",
        scores: { selfstudy: 3, timemaster: 1 },
      },
      {
        id: "2c",
        text: "옆에 친구한테 물어봄",
        scores: { teamplayer: 3, social: 1 },
      },
      {
        id: "2d",
        text: "그냥 넘어감 (어떻게든 되겠지)",
        scores: { lastminute: 3, chill: 1 },
      },
    ],
  },
  {
    id: 3,
    question: "조별 과제가 생겼다! 나는 보통...",
    answers: [
      {
        id: "3a",
        text: "팀장 자원하고 일정 짜기",
        scores: { timemaster: 3, perfectionist: 1 },
      },
      {
        id: "3b",
        text: "내 할 일은 확실하게 끝내놓음",
        scores: { perfectionist: 3, selfstudy: 1 },
      },
      {
        id: "3c",
        text: "분위기 메이커 역할",
        scores: { social: 3, teamplayer: 1 },
      },
      {
        id: "3d",
        text: "마감 전날 몰아서 함",
        scores: { lastminute: 3, creative: 1 },
      },
    ],
  },
  {
    id: 4,
    question: "중간고사 2주 전, 나는 뭘 하고 있을까?",
    answers: [
      {
        id: "4a",
        text: "이미 1회독 끝나고 복습 중",
        scores: { perfectionist: 3, timemaster: 1 },
      },
      {
        id: "4b",
        text: "스터디 그룹 만들어서 같이 공부",
        scores: { teamplayer: 3, social: 1 },
      },
      {
        id: "4c",
        text: "계획은 세웠는데 아직 시작 안 함",
        scores: { lastminute: 3, chill: 1 },
      },
      {
        id: "4d",
        text: "혼자 카페에서 집중 모드",
        scores: { selfstudy: 3, perfectionist: 1 },
      },
    ],
  },
  {
    id: 5,
    question: "동아리/학회 활동은 어때?",
    answers: [
      {
        id: "5a",
        text: "회장/임원 하고 있거나 하고 싶음",
        scores: { social: 3, timemaster: 1 },
      },
      {
        id: "5b",
        text: "열심히 참여하는 편",
        scores: { teamplayer: 3, social: 1 },
      },
      {
        id: "5c",
        text: "가끔 가는 편 (필요할 때만)",
        scores: { selfstudy: 3, chill: 1 },
      },
      {
        id: "5d",
        text: "안 하거나 관심 없음",
        scores: { chill: 3, selfstudy: 1 },
      },
    ],
  },
  {
    id: 6,
    question: "공강 시간에 주로 뭐 해?",
    answers: [
      {
        id: "6a",
        text: "도서관에서 과제나 예습",
        scores: { selfstudy: 3, perfectionist: 1 },
      },
      {
        id: "6b",
        text: "친구들이랑 수다 or 밥",
        scores: { social: 3, teamplayer: 1 },
      },
      {
        id: "6c",
        text: "카페에서 넷플릭스 정주행",
        scores: { chill: 3, creative: 1 },
      },
      {
        id: "6d",
        text: "알바나 대외활동 하러 감",
        scores: { timemaster: 3, social: 1 },
      },
    ],
  },
  {
    id: 7,
    question: "과제 제출 마감일 스타일은?",
    answers: [
      {
        id: "7a",
        text: "마감 며칠 전에 미리 완료",
        scores: { perfectionist: 3, timemaster: 1 },
      },
      {
        id: "7b",
        text: "마감 당일, 여유있게 제출",
        scores: { timemaster: 3, selfstudy: 1 },
      },
      {
        id: "7c",
        text: "마감 1시간 전 제출 (익숙함)",
        scores: { lastminute: 3, creative: 1 },
      },
      {
        id: "7d",
        text: "가끔 까먹음... 교수님 메일 보냄",
        scores: { chill: 3, lastminute: 1 },
      },
    ],
  },
  {
    id: 8,
    question: "이번 학기 꼭 이루고 싶은 거 있어?",
    answers: [
      {
        id: "8a",
        text: "학점 올리기 (4.0 이상!)",
        scores: { perfectionist: 3, selfstudy: 1 },
      },
      {
        id: "8b",
        text: "인맥 넓히기, 새 친구 사귀기",
        scores: { social: 3, teamplayer: 1 },
      },
      {
        id: "8c",
        text: "자격증이나 스펙 하나 쌓기",
        scores: { timemaster: 3, selfstudy: 1 },
      },
      {
        id: "8d",
        text: "번아웃 없이 건강하게 버티기",
        scores: { chill: 3, creative: 1 },
      },
    ],
  },
  {
    id: 9,
    question: "시험 기간 스트레스 해소법은?",
    answers: [
      {
        id: "9a",
        text: "운동이나 산책",
        scores: { selfstudy: 3, perfectionist: 1 },
      },
      {
        id: "9b",
        text: "친구들이랑 떠들기",
        scores: { social: 3, teamplayer: 1 },
      },
      {
        id: "9c",
        text: "게임이나 영상 보기",
        scores: { chill: 3, lastminute: 1 },
      },
      {
        id: "9d",
        text: "맛있는 거 먹기 (치팅데이)",
        scores: { creative: 3, social: 1 },
      },
    ],
  },
  {
    id: 10,
    question: "교수님/선생님한테 어떤 학생으로 기억되고 싶어?",
    answers: [
      {
        id: "10a",
        text: "성실하고 열심히 하는 학생",
        scores: { perfectionist: 3, timemaster: 1 },
      },
      {
        id: "10b",
        text: "질문 많이 하고 적극적인 학생",
        scores: { social: 3, selfstudy: 1 },
      },
      {
        id: "10c",
        text: "창의적이고 독특한 학생",
        scores: { creative: 3, chill: 1 },
      },
      {
        id: "10d",
        text: "딱히 기억 안 나도 됨 (조용히 학점만)",
        scores: { chill: 3, lastminute: 1 },
      },
    ],
  },
];
