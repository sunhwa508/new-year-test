"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { questions } from "@/data/questions";
import { ScoreMap } from "@/data/results";

// 진행 상황별 코멘트
const getProgressComment = (current: number, total: number): string => {
  const ratio = current / total;
  if (current === 0) return "시작해볼까?";
  if (ratio <= 0.25) return "좋은 출발이야!";
  if (ratio <= 0.5) return "벌써 절반 왔어!";
  if (ratio <= 0.75) return "거의 다 왔다!";
  if (ratio < 1) return "마지막 질문이야!";
  return "";
};

interface AnswerHistory {
  questionIndex: number;
  scores: { [type: string]: number };
}

export default function QuizPage() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState<ScoreMap>({});
  const [history, setHistory] = useState<AnswerHistory[]>([]);

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const comment = getProgressComment(currentQuestion, questions.length);

  const handleAnswer = (answerScores: { [type: string]: number }) => {
    // 히스토리에 현재 답변 저장
    setHistory([...history, { questionIndex: currentQuestion, scores: answerScores }]);

    // 기존 점수에 새 점수 더하기
    const newScores = { ...scores };
    for (const [type, score] of Object.entries(answerScores)) {
      newScores[type] = (newScores[type] || 0) + score;
    }
    setScores(newScores);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      localStorage.setItem("quizScores", JSON.stringify(newScores));
      router.push("/result");
    }
  };

  const handleBack = () => {
    if (currentQuestion === 0 || history.length === 0) return;

    // 마지막 답변 가져오기
    const lastAnswer = history[history.length - 1];

    // 점수에서 마지막 답변 점수 빼기
    const newScores = { ...scores };
    for (const [type, score] of Object.entries(lastAnswer.scores)) {
      newScores[type] = (newScores[type] || 0) - score;
      if (newScores[type] === 0) delete newScores[type];
    }
    setScores(newScores);

    // 히스토리에서 마지막 답변 제거
    setHistory(history.slice(0, -1));

    // 이전 질문으로 이동
    setCurrentQuestion(currentQuestion - 1);
  };

  return (
    <main className="min-h-screen bg-stone-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between items-center text-sm mb-2">
            <div className="flex items-center gap-3">
              {currentQuestion > 0 && (
                <button
                  onClick={handleBack}
                  className="text-stone-600 hover:text-stone-900 font-medium transition-colors"
                >
                  ← 이전
                </button>
              )}
              <span className="text-stone-400">{currentQuestion + 1} / {questions.length}</span>
            </div>
            <span className="text-stone-500 font-medium">{comment}</span>
          </div>
          <div className="w-full bg-stone-200 rounded-full h-1">
            <div
              className="bg-stone-900 h-1 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <h2 className="text-2xl font-bold text-stone-900 mb-8 leading-relaxed">
          {question.question}
        </h2>

        {/* Answers */}
        <div className="space-y-3">
          {question.answers.map((answer) => (
            <button
              key={answer.id}
              onClick={() => handleAnswer(answer.scores)}
              className="w-full p-4 text-left bg-white border border-stone-200 hover:border-stone-900 rounded-xl transition-colors duration-200 text-stone-700 hover:text-stone-900 font-medium"
            >
              {answer.text}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}
