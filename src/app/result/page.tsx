"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  calculateResultWithSub,
  CalculatedResult,
  results,
} from "@/data/results";
import { trackQuizComplete, trackShare } from "@/lib/gtag";

function ResultContent() {
  const searchParams = useSearchParams();
  const [result, setResult] = useState<CalculatedResult | null>(null);
  const [countdown, setCountdown] = useState<number | null>(3);
  const [showResult, setShowResult] = useState(false);
  const [isSharedResult, setIsSharedResult] = useState(false);

  useEffect(() => {
    // 쿼리 파라미터로 결과 ID가 있는 경우 해당 결과 표시
    const resultId = searchParams.get("result");
    if (resultId && results[resultId]) {
      setResult({
        main: results[resultId],
        sub: null,
      });
      setIsSharedResult(true);
      setShowResult(true); // 공유된 결과는 카운트다운 없이 바로 표시
      setCountdown(null);
      return;
    }

    // 로컬스토리지에서 점수 가져와서 결과 계산
    const savedScores = localStorage.getItem("quizScores");
    if (savedScores) {
      const scores = JSON.parse(savedScores);
      const calculatedResult = calculateResultWithSub(scores);
      setResult(calculatedResult);
      trackQuizComplete(calculatedResult.main.id);
    }
  }, [searchParams]);

  // 카운트다운 효과
  useEffect(() => {
    if (result && countdown !== null && countdown > 1) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 600);
      return () => clearTimeout(timer);
    } else if (countdown === 1) {
      const timer = setTimeout(() => {
        setShowResult(true);
        setCountdown(null);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [result, countdown]);

  // 결과 공유하기 (쿼리 파라미터 포함)
  const handleResultShare = async () => {
    if (!result) return;

    const shareUrl = `${window.location.origin}/result?result=${result.main.id}`;
    const shareText = `나는 [${result.main.title}]! 새해 목표는 "${result.main.goal}"래. 너는 무슨 형이야?`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: "너에게 딱 맞는 새해 목표 찾기",
          text: shareText,
          url: shareUrl,
        });
        trackShare("result_share");
      } catch {
        // User cancelled
      }
    } else {
      try {
        await navigator.clipboard.writeText(`${shareText}\n${shareUrl}`);
        alert("결과 링크가 복사되었습니다!");
        trackShare("result_clipboard");
      } catch {
        // Clipboard failed
      }
    }
  };

  // 테스트 공유하기 (기본 URL)
  const handleTestShare = async () => {
    const shareUrl = window.location.origin;
    const shareText = "너에게 딱 맞는 새해 목표 찾기! 테스트 해봐~";

    if (navigator.share) {
      try {
        await navigator.share({
          title: "너에게 딱 맞는 새해 목표 찾기",
          text: shareText,
          url: shareUrl,
        });
        trackShare("test_share");
      } catch {
        // User cancelled
      }
    } else {
      try {
        await navigator.clipboard.writeText(`${shareText}\n${shareUrl}`);
        alert("테스트 링크가 복사되었습니다!");
        trackShare("test_clipboard");
      } catch {
        // Clipboard failed
      }
    }
  };

  // 로딩 중
  if (!result) {
    return (
      <main className="min-h-screen bg-stone-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center">
          <p className="text-stone-500">결과를 불러오는 중...</p>
        </div>
      </main>
    );
  }

  // 카운트다운 화면
  if (!showResult) {
    return (
      <main className="min-h-screen bg-stone-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center">
          <p className="text-stone-400 text-lg mb-4">두근두근...</p>
          <div className="text-8xl font-black text-stone-900 animate-pulse">
            {countdown}
          </div>
          <p className="text-stone-400 text-sm mt-6">
            당신의 새해 목표가 공개됩니다
          </p>
        </div>
      </main>
    );
  }

  const { main: mainResult, sub: subResult } = result;

  return (
    <main className="min-h-screen bg-stone-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Result Area */}
        <div className="bg-stone-50 p-6 rounded-2xl">
          {/* Result Type - Hero */}
          <div className="text-center mb-6">
            <p className="text-stone-400 text-sm mb-3">당신의 유형은</p>
            <div className="inline-block px-6 py-3 bg-stone-900 text-white rounded-full">
              <span className="text-xl font-bold">{mainResult.title}</span>
            </div>
          </div>

          {/* Quote */}
          <p className="text-center text-stone-500 italic mb-6">
            &quot;{mainResult.quote}&quot;
          </p>

          {/* Goal */}
          <div className="text-center mb-6">
            <p className="text-stone-400 text-sm mb-1">새해 목표</p>
            <h1 className="text-2xl font-black text-stone-900">
              &quot;{mainResult.goal}&quot;
            </h1>
          </div>

          {/* Description */}
          <p className="text-stone-600 text-center mb-6 leading-relaxed whitespace-pre-line">
            {mainResult.description}
          </p>

          {/* Tips */}
          <div className="bg-white border border-stone-200 rounded-xl p-5 mb-4">
            <h3 className="font-bold text-stone-900 mb-3">이렇게 시작해봐</h3>
            <ul className="space-y-2">
              {mainResult.tips.map((tip, index) => (
                <li
                  key={index}
                  className="text-stone-600 text-sm flex items-start gap-2"
                >
                  <span className="text-stone-400">-</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          {/* 내년에 나에게 어울리는 */}
          <div className="bg-white border border-stone-200 rounded-xl p-5">
            <h3 className="font-bold text-stone-900 mb-3">
              내년에 나에게 어울리는
            </h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-stone-400 text-xs mb-1">노래</p>
                <p className="text-stone-700">{mainResult.tmi.song}</p>
              </div>
              <div>
                <p className="text-stone-400 text-xs mb-1">영화</p>
                <p className="text-stone-700">{mainResult.tmi.movie}</p>
              </div>
              <div>
                <p className="text-stone-400 text-xs mb-1">새해 선물</p>
                <p className="text-stone-700">{mainResult.tmi.gift}</p>
              </div>
            </div>
          </div>

          {/* Watermark */}
          <p className="text-center text-stone-300 text-xs mt-4">
            너에게 딱 맞는 새해 목표 찾기
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-6">
          <button
            onClick={handleResultShare}
            className="w-full py-4 px-8 bg-stone-900 text-white font-semibold rounded-xl hover:bg-stone-800 transition-colors duration-200 mb-3"
          >
            내 결과 공유하기
          </button>

          <button
            onClick={handleTestShare}
            className="w-full py-4 px-8 bg-white border border-stone-200 text-stone-700 font-semibold rounded-xl hover:bg-stone-50 transition-colors duration-200 mb-3"
          >
            테스트 공유하기
          </button>

          <Link
            href="/"
            className="block w-full py-4 px-8 bg-white border border-stone-200 text-stone-700 font-semibold rounded-xl hover:bg-stone-50 transition-colors duration-200 text-center"
          >
            {isSharedResult ? "나도 테스트하기" : "다시 테스트하기"}
          </Link>
        </div>
      </div>
    </main>
  );
}

export default function ResultPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-stone-50 flex items-center justify-center p-4">
          <div className="max-w-md w-full text-center">
            <p className="text-stone-500">결과를 불러오는 중...</p>
          </div>
        </main>
      }
    >
      <ResultContent />
    </Suspense>
  );
}
