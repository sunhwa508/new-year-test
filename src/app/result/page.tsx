"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import html2canvas from "html2canvas";
import { calculateResultWithSub, Result, CalculatedResult } from "@/data/results";
import { trackQuizComplete, trackShare } from "@/lib/gtag";

export default function ResultPage() {
  const [result, setResult] = useState<CalculatedResult | null>(null);
  const [isSharing, setIsSharing] = useState(false);
  const [countdown, setCountdown] = useState<number | null>(3);
  const [showResult, setShowResult] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedScores = localStorage.getItem("quizScores");
    if (savedScores) {
      const scores = JSON.parse(savedScores);
      const calculatedResult = calculateResultWithSub(scores);
      setResult(calculatedResult);
      trackQuizComplete(calculatedResult.main.id);
    }
  }, []);

  // 카운트다운 효과
  useEffect(() => {
    if (result && countdown !== null && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 600);
      return () => clearTimeout(timer);
    } else if (countdown === 0) {
      setTimeout(() => {
        setShowResult(true);
        setCountdown(null);
      }, 400);
    }
  }, [result, countdown]);

  // 이미지 공유
  const handleImageShare = async () => {
    if (!resultRef.current || !result) return;

    setIsSharing(true);

    try {
      const canvas = await html2canvas(resultRef.current, {
        backgroundColor: "#fafaf9",
        scale: 2,
      });

      const blob = await new Promise<Blob>((resolve) => {
        canvas.toBlob((b) => resolve(b!), "image/png");
      });

      const file = new File([blob], "my-new-year-goal.png", { type: "image/png" });
      const shareUrl = window.location.origin;
      const shareText = `나는 [${result.main.title}]! 새해 목표는 "${result.main.goal}"래. 너는 무슨 형이야?`;

      if (navigator.share && navigator.canShare?.({ files: [file] })) {
        await navigator.share({
          title: "너에게 딱 맞는 새해 목표 찾기",
          text: shareText,
          url: shareUrl,
          files: [file],
        });
        trackShare("native_with_image");
      } else {
        // 이미지 다운로드
        const link = document.createElement("a");
        link.download = "my-new-year-goal.png";
        link.href = canvas.toDataURL();
        link.click();
        trackShare("download");
      }
    } catch {
      // User cancelled or error
    } finally {
      setIsSharing(false);
    }
  };

  // 일반 공유 (텍스트만)
  const handleTextShare = async () => {
    if (!result) return;

    const shareUrl = window.location.origin;
    const shareText = `나는 [${result.main.title}]! 새해 목표는 "${result.main.goal}"래. 너는 무슨 형이야?`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: "너에게 딱 맞는 새해 목표 찾기",
          text: shareText,
          url: shareUrl,
        });
        trackShare("native_text");
      } catch {
        // User cancelled
      }
    } else {
      // 클립보드에 복사
      try {
        await navigator.clipboard.writeText(`${shareText}\n${shareUrl}`);
        alert("링크가 복사되었습니다!");
        trackShare("clipboard");
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
            {countdown === 0 ? "!" : countdown}
          </div>
          <p className="text-stone-400 text-sm mt-6">당신의 새해 목표가 공개됩니다</p>
        </div>
      </main>
    );
  }

  const { main: mainResult, sub: subResult } = result;

  return (
    <main className="min-h-screen bg-stone-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Capture Area */}
        <div ref={resultRef} className="bg-stone-50 p-6 rounded-2xl">
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
          <p className="text-stone-600 text-center mb-6 leading-relaxed">
            {mainResult.description}
          </p>

          {/* Sub Type */}
          {subResult && (
            <div className="bg-stone-100 rounded-xl p-4 mb-4 text-center">
              <p className="text-stone-400 text-xs mb-1">숨겨진 부캐</p>
              <p className="text-stone-700 font-semibold">{subResult.title}</p>
              <p className="text-stone-500 text-xs mt-1">&quot;{subResult.goal}&quot;</p>
            </div>
          )}

          {/* Tips */}
          <div className="bg-white border border-stone-200 rounded-xl p-5 mb-4">
            <h3 className="font-bold text-stone-900 mb-3">이렇게 시작해봐</h3>
            <ul className="space-y-2">
              {mainResult.tips.map((tip, index) => (
                <li key={index} className="text-stone-600 text-sm flex items-start gap-2">
                  <span className="text-stone-400">-</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          {/* 나에게 어울리는 */}
          <div className="bg-white border border-stone-200 rounded-xl p-5">
            <h3 className="font-bold text-stone-900 mb-3">나에게 어울리는</h3>
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
          <div className="flex gap-3 mb-3">
            <button
              onClick={handleImageShare}
              disabled={isSharing}
              className="flex-1 py-4 px-4 bg-stone-900 text-white font-semibold rounded-xl hover:bg-stone-800 transition-colors duration-200 disabled:opacity-50"
            >
              {isSharing ? "생성 중..." : "이미지 공유"}
            </button>
            <button
              onClick={handleTextShare}
              className="flex-1 py-4 px-4 bg-stone-700 text-white font-semibold rounded-xl hover:bg-stone-600 transition-colors duration-200"
            >
              링크 공유
            </button>
          </div>

          <Link
            href="/"
            className="block w-full py-4 px-8 bg-white border border-stone-200 text-stone-700 font-semibold rounded-xl hover:bg-stone-50 transition-colors duration-200 text-center"
          >
            다시 테스트하기
          </Link>
        </div>
      </div>
    </main>
  );
}
