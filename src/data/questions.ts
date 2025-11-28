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
    question: "월요일 아침, 알람이 울렸다. 당신의 선택은?",
    answers: [
      {
        id: "1a",
        text: '"5분만..." (그 5분이 50분 됨)',
        scores: { lazybones: 3 },
      },
      {
        id: "1b",
        text: "눈 뜨자마자 이불 박차고 일어남",
        scores: { earlybird: 3 },
      },
      {
        id: "1c",
        text: "일단 누워서 인스타 켬 (이게 루틴)",
        scores: { creator: 3 },
      },
      {
        id: "1d",
        text: "오늘 할 일 머릿속에서 정리 중",
        scores: { learner: 3 },
      },
    ],
  },
  {
    id: 2,
    question: "요즘 뿌듯했던 순간은?",
    answers: [
      {
        id: "2a",
        text: "가계부 보니까 이번 달 플러스",
        scores: { saver: 3 },
      },
      {
        id: "2b",
        text: "운동하고 나서 샤워할 때",
        scores: { health: 3 },
      },
      {
        id: "2c",
        text: "새로운 거 배웠을 때",
        scores: { learner: 3 },
      },
      {
        id: "2d",
        text: "친구랑 수다 떨고 나서",
        scores: { connector: 3 },
      },
    ],
  },
  {
    id: 3,
    question: "집에서 혼자 뒹굴거릴 때 뭐 해?",
    answers: [
      {
        id: "3a",
        text: "웹소설 정주행 (한 번 시작하면 새벽 3시)",
        scores: { lazybones: 3 },
      },
      {
        id: "3b",
        text: "유튜브 알고리즘에 몸을 맡김",
        scores: { lazybones: 3 },
      },
      {
        id: "3c",
        text: "SNS 구경하면서 시간 보냄",
        scores: { creator: 3 },
      },
      {
        id: "3d",
        text: "갑자기 방 대청소 시작함",
        scores: { earlybird: 3 },
      },
    ],
  },
  {
    id: 4,
    question: "쇼핑몰에서 장바구니에 뭐 담아놨을 때 나는?",
    answers: [
      {
        id: "4a",
        text: "고민은 배송만 늦출 뿐 (바로 결제)",
        scores: { adventurer: 3 },
      },
      {
        id: "4b",
        text: "최저가 검색 + 쿠폰 조합 필수",
        scores: { saver: 3 },
      },
      {
        id: "4c",
        text: "물건은 아껴도 경험에는 지름",
        scores: { traveler: 3 },
      },
      {
        id: "4d",
        text: "이건 소비가 아니라 투자야 (합리화 완료)",
        scores: { hobbyist: 3 },
      },
    ],
  },
  {
    id: 5,
    question: "2026년엔 이거 하나는 해보고 싶다?",
    answers: [
      {
        id: "5a",
        text: "외국어 하나는 좀 하고 싶음",
        scores: { learner: 3 },
      },
      {
        id: "5b",
        text: "운동 루틴 만들어서 몸 좀 바꾸기",
        scores: { health: 3 },
      },
      {
        id: "5c",
        text: "자격증이나 스킬 하나 따기",
        scores: { learner: 3 },
      },
      {
        id: "5d",
        text: "악기나 그림 같은 있어보이는 취미",
        scores: { hobbyist: 3 },
      },
    ],
  },
  {
    id: 6,
    question: "솔직히 이런 아침 보내고 싶지 않아?",
    answers: [
      {
        id: "6a",
        text: "6시 기상 → 운동 → 샤워 → 출근 (갓생)",
        scores: { earlybird: 3 },
      },
      {
        id: "6b",
        text: "여유롭게 명상하면서 시작",
        scores: { meditator: 3 },
      },
      {
        id: "6c",
        text: "가족이나 친구와 모닝 수다",
        scores: { connector: 3 },
      },
      {
        id: "6d",
        text: "아침? 점심이 첫 끼인데요",
        scores: { lazybones: 3 },
      },
    ],
  },
  {
    id: 7,
    question: "스트레스 터지면 나는?",
    answers: [
      {
        id: "7a",
        text: "매운거 먹거나 낯선 곳으로 떠남",
        scores: { adventurer: 3 },
      },
      {
        id: "7b",
        text: "밖에 나가서 걷거나 운동함",
        scores: { health: 3 },
      },
      {
        id: "7c",
        text: "친구한테 카톡 폭탄 (읽어줘...)",
        scores: { connector: 3 },
      },
      {
        id: "7d",
        text: "혼자 조용히 생각 정리함",
        scores: { meditator: 3 },
      },
    ],
  },
  {
    id: 8,
    question: "해외여행 갔을 때 나는?",
    answers: [
      {
        id: "8a",
        text: "현지인이랑 어떻게든 대화 시도",
        scores: { connector: 3 },
      },
      {
        id: "8b",
        text: "유명한 데는 다 찍어야 함 (동선 최적화)",
        scores: { traveler: 3 },
      },
      {
        id: "8c",
        text: "맛집 리스트 다 뽑아서 투어",
        scores: { adventurer: 3 },
      },
      {
        id: "8d",
        text: "숙소에서 여유롭게 쉬는 것도 여행임",
        scores: { meditator: 3 },
      },
    ],
  },
  {
    id: 9,
    question: "2026년 나한테 바라는 거 있어?",
    answers: [
      {
        id: "9a",
        text: "통장에 돈 좀 있으면 좋겠다 제발",
        scores: { saver: 3 },
      },
      {
        id: "9b",
        text: "아프지 말고 건강하게 지냈으면",
        scores: { health: 3 },
      },
      {
        id: "9c",
        text: "새로운 거 많이 해봤으면 좋겠다",
        scores: { traveler: 3 },
      },
      {
        id: "9d",
        text: "뭐라도 하나는 이뤘으면 (제발)",
        scores: { learner: 3 },
      },
    ],
  },
  {
    id: 10,
    question: "갑자기 일주일 휴가 생기면?",
    answers: [
      {
        id: "10a",
        text: "그동안 못 갔던 여행지 가기",
        scores: { traveler: 3 },
      },
      {
        id: "10b",
        text: "밀린 드라마랑 콘텐츠 다 해치우기",
        scores: { lazybones: 3 },
      },
      {
        id: "10c",
        text: "해보고 싶었던 거 도전해보기",
        scores: { hobbyist: 3 },
      },
      {
        id: "10d",
        text: "아무것도 안 하고 푹 쉬기 (진짜 아무것도)",
        scores: { lazybones: 3 },
      },
    ],
  },
  {
    id: 11,
    question: "SNS 쓰는 스타일이 어때?",
    answers: [
      {
        id: "11a",
        text: "눈팅 전문 (게시물 0개 클래스)",
        scores: { meditator: 3 },
      },
      {
        id: "11b",
        text: "스토리에 일상 자주 올리는 편",
        scores: { connector: 3 },
      },
      {
        id: "11c",
        text: "정보 수집용으로만 씀 (효율 중시)",
        scores: { learner: 3 },
      },
      {
        id: "11d",
        text: "콘텐츠 직접 만들어서 올림",
        scores: { creator: 3 },
      },
    ],
  },
  {
    id: 12,
    question: "친구들한테 자주 듣는 말 있어?",
    answers: [
      {
        id: "12a",
        text: '"너 진짜 부지런하다"',
        scores: { earlybird: 3 },
      },
      {
        id: "12b",
        text: '"너 진짜 알뜰하다"',
        scores: { saver: 3 },
      },
      {
        id: "12c",
        text: '"너 진짜 다재다능하다"',
        scores: { hobbyist: 3 },
      },
      {
        id: "12d",
        text: '"너 진짜 아이디어 좋다"',
        scores: { creator: 3 },
      },
    ],
  },
];
