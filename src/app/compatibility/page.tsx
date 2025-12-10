"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";
import { results } from "@/data/results";
import {
  calculateCompatibility,
  getResultFromUrl,
  CompatibilityResult,
} from "@/data/compatibility";
import { trackShare } from "@/lib/gtag";

function CompatibilityContent() {
  const searchParams = useSearchParams();
  const [type1, setType1] = useState("");
  const [type2, setType2] = useState("");
  const [result, setResult] = useState<CompatibilityResult | null>(null);
  const [error, setError] = useState("");

  // URL 파라미터로 초기값 설정
  useEffect(() => {
    const t1 = searchParams.get("type1");
    const t2 = searchParams.get("type2");
    if (t1) setType1(t1);
    if (t2) setType2(t2);
    if (t1 && t2) {
      const compatibility = calculateCompatibility(t1, t2);
      if (compatibility) {
        setResult(compatibility);
      }
    }
  }, [searchParams]);

  const handleCheck = () => {
    setError("");
    setResult(null);

    const resultId1 = getResultFromUrl(type1) || type1;
    const resultId2 = getResultFromUrl(type2) || type2;

    if (!resultId1 || !resultId2) {
      setError("유효한 결과 링크나 유형을 입력해주세요");
      return;
    }

    if (!results[resultId1]) {
      setError("첫 번째 유형을 찾을 수 없어요");
      return;
    }

    if (!results[resultId2]) {
      setError("두 번째 유형을 찾을 수 없어요");
      return;
    }

    const compatibility = calculateCompatibility(resultId1, resultId2);
    if (compatibility) {
      setResult(compatibility);
      // URL 업데이트
      const newUrl = `${window.location.pathname}?type1=${resultId1}&type2=${resultId2}`;
      window.history.pushState({}, "", newUrl);
    }
  };

  const handleShare = async () => {
    const resultId1 = getResultFromUrl(type1) || type1;
    const resultId2 = getResultFromUrl(type2) || type2;

    const shareUrl = `${window.location.origin}/compatibility?type1=${resultId1}&type2=${resultId2}`;
    const shareText = `${results[resultId1]?.title}와 ${results[resultId2]?.title}의 궁합은 ${result?.score}점! ${result?.title}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: "새해 목표 궁합 테스트",
          text: shareText,
          url: shareUrl,
        });
        trackShare("compatibility_share");
      } catch {
        // User cancelled
      }
    } else {
      try {
        await navigator.clipboard.writeText(`${shareText}\n${shareUrl}`);
        alert("링크가 복사되었습니다!");
        trackShare("compatibility_clipboard");
      } catch {
        // Clipboard failed
      }
    }
  };

  const resultTypes = Object.entries(results).map(([id, r]) => ({
    id,
    title: r.title,
  }));

  return (
    <main className="min-h-screen bg-stone-50 py-12 px-4">
      <div className="max-w-md mx-auto">
        <Link
          href="/"
          className="inline-block mb-8 text-stone-500 hover:text-stone-700 text-sm"
        >
          ← 홈으로
        </Link>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-stone-900 mb-2">
            새해 목표 궁합
          </h1>
          <p className="text-stone-500">
            친구, 연인, 가족과의 새해 목표 궁합을 확인해보세요!
          </p>
        </div>

        {/* 입력 폼 */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">
                나의 유형
              </label>
              <select
                value={type1}
                onChange={(e) => setType1(e.target.value)}
                className="w-full px-4 py-3 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-stone-900 text-stone-900"
              >
                <option value="">유형을 선택하세요</option>
                {resultTypes.map((type) => (
                  <option key={type.id} value={type.id}>
                    {type.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="text-center text-2xl">💕</div>

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">
                상대방 유형
              </label>
              <select
                value={type2}
                onChange={(e) => setType2(e.target.value)}
                className="w-full px-4 py-3 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-stone-900 text-stone-900"
              >
                <option value="">유형을 선택하세요</option>
                {resultTypes.map((type) => (
                  <option key={type.id} value={type.id}>
                    {type.title}
                  </option>
                ))}
              </select>
            </div>

            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            <button
              onClick={handleCheck}
              disabled={!type1 || !type2}
              className="w-full py-4 px-8 bg-stone-900 text-white font-semibold rounded-xl hover:bg-stone-800 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              궁합 확인하기
            </button>
          </div>
        </div>

        {/* 결과 */}
        {result && (
          <div className="bg-white rounded-2xl p-6 shadow-sm animate-fade-in">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">{result.emoji}</div>
              <div className="text-5xl font-black text-stone-900 mb-2">
                {result.score}점
              </div>
              <div className="text-xl font-bold text-stone-700">
                {result.title}
              </div>
            </div>

            {/* 유형 표시 */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="px-4 py-2 bg-stone-100 rounded-full text-stone-700 font-medium">
                {results[getResultFromUrl(type1) || type1]?.title}
              </div>
              <span className="text-stone-400">×</span>
              <div className="px-4 py-2 bg-stone-100 rounded-full text-stone-700 font-medium">
                {results[getResultFromUrl(type2) || type2]?.title}
              </div>
            </div>

            <p className="text-stone-600 text-center mb-6 leading-relaxed">
              {result.description}
            </p>

            {/* 팁 */}
            <div className="bg-stone-50 rounded-xl p-4 mb-6">
              <h3 className="font-bold text-stone-900 mb-3">함께하는 팁</h3>
              <ul className="space-y-2">
                {result.tips.map((tip, index) => (
                  <li
                    key={index}
                    className="text-stone-600 text-sm flex items-start gap-2"
                  >
                    <span className="text-stone-400">•</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={handleShare}
              className="w-full py-4 px-8 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity duration-200"
            >
              궁합 결과 공유하기
            </button>
          </div>
        )}

        {/* 아직 테스트 안 했으면 */}
        {!result && (
          <div className="text-center mt-8">
            <p className="text-stone-500 text-sm mb-4">
              아직 테스트를 안 했다면?
            </p>
            <Link
              href="/quiz"
              className="inline-block py-3 px-6 bg-white border border-stone-200 text-stone-700 font-medium rounded-xl hover:bg-stone-50 transition-colors"
            >
              테스트 하러 가기
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}

export default function CompatibilityPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-stone-50 flex items-center justify-center">
          <p className="text-stone-500">로딩 중...</p>
        </main>
      }
    >
      <CompatibilityContent />
    </Suspense>
  );
}
