"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { calculateResult, Result } from "@/data/results";
import { trackQuizComplete, trackShare } from "@/lib/gtag";

export default function ResultPage() {
  const [result, setResult] = useState<Result | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const savedScores = localStorage.getItem("quizScores");
    if (savedScores) {
      const scores = JSON.parse(savedScores);
      const calculatedResult = calculateResult(scores);
      setResult(calculatedResult);
      trackQuizComplete(calculatedResult.id);
    }
  }, []);

  const handleShare = async () => {
    const shareUrl = window.location.origin;
    const shareText = `나는 ${result?.emoji}${result?.title}! 새해 목표는 "${result?.goal}"래. 너는 무슨 형이야?`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: "너에게 딱 맞는 새해 목표 찾기",
          text: shareText,
          url: shareUrl,
        });
        trackShare("native");
      } catch {
        // User cancelled
      }
    } else {
      await navigator.clipboard.writeText(`${shareText}\n${shareUrl}`);
      setCopied(true);
      trackShare("clipboard");
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!result) {
    return (
      <main className="min-h-screen bg-stone-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center">
          <p className="text-stone-500">결과를 불러오는 중...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-stone-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Result Type - Hero */}
        <div className="text-center mb-8">
          <p className="text-stone-400 text-sm mb-3">당신의 유형은</p>
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-stone-900 text-white rounded-full">
            <span className="text-2xl">{result.emoji}</span>
            <span className="text-xl font-bold">{result.title}</span>
          </div>
        </div>

        {/* Goal */}
        <div className="text-center mb-6">
          <p className="text-stone-400 text-sm mb-1">새해 목표</p>
          <h1 className="text-2xl font-black text-stone-900">
            &quot;{result.goal}&quot;
          </h1>
        </div>

        {/* Description */}
        <p className="text-stone-600 text-center mb-8 leading-relaxed">
          {result.description}
        </p>

        {/* Tips */}
        <div className="bg-white border border-stone-200 rounded-xl p-5 mb-8">
          <h3 className="font-bold text-stone-900 mb-3">이렇게 시작해봐</h3>
          <ul className="space-y-2">
            {result.tips.map((tip, index) => (
              <li key={index} className="text-stone-600 text-sm flex items-start gap-2">
                <span className="text-stone-400">-</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>

        {/* Buttons */}
        <button
          onClick={handleShare}
          className="w-full py-4 px-8 bg-stone-900 text-white font-semibold rounded-xl hover:bg-stone-800 transition-colors duration-200 mb-3"
        >
          {copied ? "복사 완료!" : "친구에게 공유하기"}
        </button>

        <Link
          href="/"
          className="block w-full py-4 px-8 bg-white border border-stone-200 text-stone-700 font-semibold rounded-xl hover:bg-stone-50 transition-colors duration-200 text-center"
        >
          다시 테스트하기
        </Link>
      </div>
    </main>
  );
}
