"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { questions } from "@/data/questions";
import { ScoreMap } from "@/data/results";

export default function QuizPage() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState<ScoreMap>({});

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswer = (answerScores: { [type: string]: number }) => {
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

  return (
    <main className="min-h-screen bg-stone-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-stone-400 mb-2">
            <span>{currentQuestion + 1} / {questions.length}</span>
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
