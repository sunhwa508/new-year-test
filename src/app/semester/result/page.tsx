"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  calculateSemesterResult,
  semesterResults,
  SemesterResult,
} from "@/data/semester-results";
import { trackShare } from "@/lib/gtag";

function SemesterResultContent() {
  const searchParams = useSearchParams();
  const [result, setResult] = useState<SemesterResult | null>(null);
  const [countdown, setCountdown] = useState<number | null>(3);
  const [showResult, setShowResult] = useState(false);
  const [isSharedResult, setIsSharedResult] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    // 쿼리 파라미터로 결과 ID가 있는 경우 해당 결과 표시
    const resultId = searchParams.get("result");
    if (resultId && semesterResults[resultId]) {
      setResult(semesterResults[resultId]);
      setIsSharedResult(true);
      setShowResult(true);
      setCountdown(null);
      return;
    }

    // 로컬스토리지에서 점수 가져와서 결과 계산
    const savedScores = localStorage.getItem("semesterQuizScores");
    if (savedScores) {
      const scores = JSON.parse(savedScores);
      const calculatedResult = calculateSemesterResult(scores);
      setResult(calculatedResult);
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

  // 결과 공유하기
  const handleResultShare = async () => {
    if (!result) return;

    const shareUrl = `${window.location.origin}/semester/result?result=${result.id}`;
    const shareText = `나는 [${result.title}]! 이번 학기 목표는 "${result.goal}"래. 너는?`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: "새 학기 유형 테스트",
          text: shareText,
          url: shareUrl,
        });
        trackShare("semester_result_share");
      } catch {
        // User cancelled
      }
    } else {
      try {
        await navigator.clipboard.writeText(`${shareText}\n${shareUrl}`);
        alert("결과 링크가 복사되었습니다!");
        trackShare("semester_result_clipboard");
      } catch {
        // Clipboard failed
      }
    }
  };

  // 이미지 다운로드
  const handleDownloadImage = async () => {
    if (!result) return;
    setIsDownloading(true);

    try {
      const imageUrl = `/api/og/semester?result=${result.id}`;
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `새학기유형_${result.title}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      trackShare("semester_image_download");
    } catch {
      alert("이미지 다운로드에 실패했습니다.");
    } finally {
      setIsDownloading(false);
    }
  };

  // 로딩 중
  if (!result) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center">
          <p className="text-stone-500">결과를 불러오는 중...</p>
        </div>
      </main>
    );
  }

  // 카운트다운 화면
  if (!showResult) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center">
          <p className="text-stone-400 text-lg mb-4">두근두근...</p>
          <div className="text-8xl font-black bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent animate-pulse">
            {countdown}
          </div>
          <p className="text-stone-400 text-sm mt-6">
            당신의 유형이 공개됩니다
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Result Area */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          {/* Result Type - Hero */}
          <div className="text-center mb-6">
            <div className="text-5xl mb-4">{result.emoji}</div>
            <p className="text-stone-400 text-sm mb-3">당신의 유형은</p>
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full">
              <span className="text-xl font-bold">{result.title}</span>
            </div>
          </div>

          {/* Goal */}
          <div className="text-center mb-6">
            <h1 className="text-2xl font-black text-stone-900">
              &quot;{result.goal}&quot;
            </h1>
          </div>

          {/* Description */}
          <p className="text-stone-600 text-center mb-6 leading-relaxed">
            {result.description}
          </p>

          {/* Tips */}
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 mb-4">
            <h3 className="font-bold text-stone-900 mb-3">이번 학기 팁</h3>
            <ul className="space-y-2">
              {result.tips.map((tip, index) => (
                <li
                  key={index}
                  className="text-stone-600 text-sm flex items-start gap-2"
                >
                  <span className="text-blue-400">•</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          {/* TMI */}
          <div className="bg-purple-50 border border-purple-100 rounded-xl p-5">
            <h3 className="font-bold text-stone-900 mb-3">나에게 어울리는</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-stone-400 text-xs mb-1">공부할 때 BGM</p>
                <p className="text-stone-700">{result.tmi.playlist}</p>
              </div>
              <div>
                <p className="text-stone-400 text-xs mb-1">공부 간식</p>
                <p className="text-stone-700">{result.tmi.snack}</p>
              </div>
              <div>
                <p className="text-stone-400 text-xs mb-1">공부 장소</p>
                <p className="text-stone-700">{result.tmi.studyspot}</p>
              </div>
            </div>
          </div>

          {/* Quote */}
          <p className="text-center text-sm text-stone-400 mt-6 italic">
            &quot;{result.quote}&quot;
          </p>
        </div>

        {/* 이미지 다운로드 */}
        <button
          onClick={handleDownloadImage}
          disabled={isDownloading}
          className="mt-4 w-full py-3 px-8 bg-white text-stone-600 font-medium rounded-xl hover:bg-stone-50 transition-colors duration-200 text-sm disabled:opacity-50 border border-stone-200"
        >
          {isDownloading ? "다운로드 중..." : "이미지 저장하기"}
        </button>

        {/* Buttons */}
        <div className="mt-4">
          <button
            onClick={handleResultShare}
            className="w-full py-4 px-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity duration-200 mb-3"
          >
            결과 공유하기
          </button>

          <Link
            href="/semester"
            className="block w-full py-4 px-8 bg-white border border-stone-200 text-stone-700 font-semibold rounded-xl hover:bg-stone-50 transition-colors duration-200 text-center"
          >
            {isSharedResult ? "나도 테스트하기" : "다시 테스트하기"}
          </Link>
        </div>

        {/* 다른 테스트 */}
        <div className="mt-6 text-center">
          <Link
            href="/"
            className="text-stone-500 hover:text-stone-700 text-sm"
          >
            새해 목표 테스트도 해보기 →
          </Link>
        </div>
      </div>
    </main>
  );
}

export default function SemesterResultPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 flex items-center justify-center p-4">
          <div className="max-w-md w-full text-center">
            <p className="text-stone-500">결과를 불러오는 중...</p>
          </div>
        </main>
      }
    >
      <SemesterResultContent />
    </Suspense>
  );
}
