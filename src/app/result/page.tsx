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
import AdBanner from "@/components/AdBanner";

function ResultContent() {
  const searchParams = useSearchParams();
  const [result, setResult] = useState<CalculatedResult | null>(null);
  const [countdown, setCountdown] = useState<number | null>(3);
  const [showResult, setShowResult] = useState(false);
  const [isSharedResult, setIsSharedResult] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

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

  // 이미지 다운로드 (가로/세로)
  const handleDownloadImage = async (type: "card" | "story" = "card") => {
    if (!result) return;
    setIsDownloading(true);

    try {
      const imageUrl =
        type === "story"
          ? `/api/og/story?result=${result.main.id}`
          : `/api/og?result=${result.main.id}`;
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `새해목표_${result.main.title}_${type === "story" ? "스토리" : "카드"}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      trackShare(`image_download_${type}`);
    } catch {
      alert("이미지 다운로드에 실패했습니다.");
    } finally {
      setIsDownloading(false);
    }
  };

  // 이미지와 함께 공유 (모바일)
  const handleShareWithImage = async () => {
    if (!result) return;
    setIsDownloading(true);

    try {
      const imageUrl = `/api/og?result=${result.main.id}`;
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const file = new File([blob], `새해목표_${result.main.title}.png`, {
        type: "image/png",
      });

      const shareData: ShareData = {
        title: `나는 ${result.main.title}!`,
        text: `내 새해 목표는 "${result.main.goal}"! 너는 어떤 유형이야?`,
        url: `${window.location.origin}/result?result=${result.main.id}`,
      };

      // 파일 공유 지원 여부 확인
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        shareData.files = [file];
      }

      await navigator.share(shareData);
      trackShare("image_share");
    } catch {
      // 사용자가 취소했거나 공유 실패
    } finally {
      setIsDownloading(false);
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

          {/* Goal */}
          <div className="text-center mb-6">
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
            <h3 className="font-bold text-stone-900 mb-3">올해는 이렇게 해봐</h3>
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
              2026년에 나에게 어울리는
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

        </div>

        {/* Ad Banner */}
        <div className="mt-6">
          <AdBanner slot="1700067817" format="auto" responsive={true} />
        </div>

        {/* 이미지 공유 버튼 */}
        <div className="mt-6 bg-gradient-to-r from-pink-500 to-purple-500 p-[2px] rounded-xl">
          <button
            onClick={handleShareWithImage}
            disabled={isDownloading}
            className="w-full py-4 px-8 bg-white text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 font-bold rounded-xl hover:bg-stone-50 transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isDownloading ? (
              "이미지 생성 중..."
            ) : (
              <>
                <span className="text-pink-500">📸</span>
                <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                  이미지로 공유하기
                </span>
              </>
            )}
          </button>
        </div>

        {/* 이미지 다운로드 버튼 */}
        <div className="mt-3 flex gap-2">
          <button
            onClick={() => handleDownloadImage("card")}
            disabled={isDownloading}
            className="flex-1 py-3 px-4 bg-stone-100 text-stone-600 font-medium rounded-xl hover:bg-stone-200 transition-colors duration-200 text-sm disabled:opacity-50"
          >
            {isDownloading ? "..." : "카드 저장"}
          </button>
          <button
            onClick={() => handleDownloadImage("story")}
            disabled={isDownloading}
            className="flex-1 py-3 px-4 bg-stone-100 text-stone-600 font-medium rounded-xl hover:bg-stone-200 transition-colors duration-200 text-sm disabled:opacity-50"
          >
            {isDownloading ? "..." : "스토리 저장"}
          </button>
        </div>

        {/* 궁합 테스트 배너 */}
        <Link
          href={`/compatibility?type1=${mainResult.id}`}
          className="mt-4 block w-full p-4 bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-200 rounded-xl hover:from-pink-100 hover:to-purple-100 transition-colors duration-200"
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">💕</span>
            <div>
              <p className="font-semibold text-stone-900">친구와 궁합 보기</p>
              <p className="text-sm text-stone-500">
                누구랑 새해 목표가 잘 맞을까?
              </p>
            </div>
          </div>
        </Link>

        {/* Buttons */}
        <div className="mt-4">
          <button
            onClick={handleResultShare}
            className="w-full py-4 px-8 bg-stone-900 text-white font-semibold rounded-xl hover:bg-stone-800 transition-colors duration-200 mb-3"
          >
            링크로 공유하기
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
