import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "새해 목표 가이드 - 새해 목표 찾기",
  description:
    "새해 목표 세우는 방법, 목표 달성 팁, 유형별 실천 가이드를 확인하세요.",
};

const guides = [
  {
    slug: "smart-goals",
    title: "SMART 목표 세우는 법",
    description: "구체적이고 달성 가능한 목표를 세우는 검증된 방법",
    emoji: "🎯",
  },
  {
    slug: "habit-formation",
    title: "습관 만들기 66일의 법칙",
    description: "작심삼일을 극복하고 진짜 습관으로 만드는 방법",
    emoji: "🔄",
  },
  {
    slug: "motivation",
    title: "동기부여 유지하는 5가지 방법",
    description: "목표를 포기하지 않고 끝까지 가는 비결",
    emoji: "💪",
  },
  {
    slug: "type-tips",
    title: "유형별 목표 달성 팁",
    description: "13가지 유형에 맞는 맞춤형 실천 가이드",
    emoji: "📚",
  },
];

export default function GuidePage() {
  return (
    <main className="min-h-screen bg-stone-50">
      <div className="max-w-2xl mx-auto px-4 py-12">
        <Link
          href="/"
          className="inline-block mb-8 text-stone-500 hover:text-stone-700 text-sm"
        >
          ← 홈으로
        </Link>

        <h1 className="text-3xl font-bold text-stone-900 mb-4">
          새해 목표 가이드
        </h1>
        <p className="text-stone-600 mb-8">
          목표를 세우고 달성하는 데 도움이 되는 가이드들을 모았어요.
        </p>

        <div className="space-y-4">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guide/${guide.slug}`}
              className="block p-6 bg-white rounded-xl border border-stone-200 hover:border-stone-300 hover:shadow-sm transition-all"
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl">{guide.emoji}</span>
                <div>
                  <h2 className="font-bold text-stone-900 mb-1">
                    {guide.title}
                  </h2>
                  <p className="text-stone-600 text-sm">{guide.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 p-6 bg-stone-900 rounded-xl text-center">
          <h3 className="text-white font-bold text-lg mb-2">
            아직 테스트 안 해봤다면?
          </h3>
          <p className="text-stone-300 text-sm mb-4">
            나에게 맞는 새해 목표를 먼저 찾아보세요
          </p>
          <Link
            href="/quiz"
            className="inline-block py-3 px-6 bg-white text-stone-900 font-semibold rounded-xl hover:bg-stone-100 transition-colors"
          >
            테스트 하러 가기
          </Link>
        </div>
      </div>
    </main>
  );
}
