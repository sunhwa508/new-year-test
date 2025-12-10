"use client";

import Link from "next/link";

export default function SemesterHome() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <div className="text-center mb-12">
            <p className="text-blue-400 text-sm mb-3">새 학기 시작!</p>
            <h1 className="text-3xl font-black text-stone-900 mb-4 leading-tight">
              나는 어떤 타입의
              <br />
              대학생일까?
            </h1>
            <p className="text-stone-500">10개 질문이면 충분해</p>
          </div>

          <Link
            href="/semester/quiz"
            className="block w-full py-4 px-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold text-lg rounded-xl hover:opacity-90 transition-opacity duration-200 text-center"
          >
            시작하기
          </Link>

          <p className="mt-4 text-sm text-stone-400 text-center">약 1분 소요</p>
        </div>
      </section>

      {/* About Section */}
      <section className="px-4 py-12 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-stone-900 text-center mb-8">
            새 학기, 나만의 전략이 필요해
          </h2>
          <div className="space-y-4 text-stone-600 leading-relaxed">
            <p>
              매 학기 &quot;이번엔 진짜 열심히 해야지&quot; 다짐하지만, 항상
              비슷한 패턴으로 흘러가진 않나요?
            </p>
            <p>
              <strong>내 학습 스타일</strong>을 알면 더 효율적으로 학기를 보낼 수
              있어요. 완벽주의자인지, 마감 전사인지, 인싸형인지...
            </p>
            <p>
              이 테스트로 나의 유형을 파악하고,{" "}
              <strong>맞춤형 학기 전략</strong>을 세워보세요!
            </p>
          </div>
        </div>
      </section>

      {/* Types Preview */}
      <section className="px-4 py-12 bg-gradient-to-b from-blue-50 to-purple-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-stone-900 text-center mb-8">
            8가지 대학생 유형
          </h2>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-4 bg-white rounded-xl text-center">
              <span className="text-2xl">📚</span>
              <p className="mt-2 font-medium text-stone-900">완벽주의 학점러</p>
            </div>
            <div className="p-4 bg-white rounded-xl text-center">
              <span className="text-2xl">⏰</span>
              <p className="mt-2 font-medium text-stone-900">시간관리 마스터</p>
            </div>
            <div className="p-4 bg-white rounded-xl text-center">
              <span className="text-2xl">🎉</span>
              <p className="mt-2 font-medium text-stone-900">인싸 네트워커</p>
            </div>
            <div className="p-4 bg-white rounded-xl text-center">
              <span className="text-2xl">🤝</span>
              <p className="mt-2 font-medium text-stone-900">팀플 에이스</p>
            </div>
            <div className="p-4 bg-white rounded-xl text-center">
              <span className="text-2xl">🎯</span>
              <p className="mt-2 font-medium text-stone-900">혼공 장인</p>
            </div>
            <div className="p-4 bg-white rounded-xl text-center">
              <span className="text-2xl">🔥</span>
              <p className="mt-2 font-medium text-stone-900">마감 전사</p>
            </div>
            <div className="p-4 bg-white rounded-xl text-center">
              <span className="text-2xl">💡</span>
              <p className="mt-2 font-medium text-stone-900">창의력 천재</p>
            </div>
            <div className="p-4 bg-white rounded-xl text-center">
              <span className="text-2xl">😌</span>
              <p className="mt-2 font-medium text-stone-900">여유파 대학생</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-16 bg-white">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">
            지금 바로 확인해보세요
          </h2>
          <p className="text-stone-500 mb-8">
            1분이면 나의 학습 스타일을 알 수 있어요
          </p>
          <Link
            href="/semester/quiz"
            className="inline-block py-4 px-12 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold text-lg rounded-xl hover:opacity-90 transition-opacity duration-200"
          >
            테스트 시작하기
          </Link>
        </div>
      </section>

      {/* Back to Main */}
      <section className="px-4 py-8 bg-stone-100">
        <div className="max-w-md mx-auto text-center">
          <Link href="/" className="text-stone-500 hover:text-stone-700 text-sm">
            ← 새해 목표 테스트로 돌아가기
          </Link>
        </div>
      </section>
    </main>
  );
}
