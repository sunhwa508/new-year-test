"use client";

import Link from "next/link";
import { trackQuizStart } from "@/lib/gtag";

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <div className="text-center mb-12">
            <p className="text-stone-400 text-sm mb-3">올해도 작심삼일?</p>
            <h1 className="text-3xl font-black text-stone-900 mb-4 leading-tight">
              너에게 딱 맞는
              <br />
              새해 목표 찾기
            </h1>
            <p className="text-stone-500">12가지 질문이면 충분해</p>
          </div>

          <Link
            href="/quiz"
            onClick={trackQuizStart}
            className="block w-full py-4 px-8 bg-stone-900 text-white font-semibold text-lg rounded-xl hover:bg-stone-800 transition-colors duration-200 text-center"
          >
            시작하기
          </Link>

          <p className="mt-4 text-sm text-stone-400 text-center">약 1분 소요</p>

          {/* 새학기 테스트 배너 */}
          <Link
            href="/semester"
            className="mt-8 block p-4 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl hover:from-blue-100 hover:to-purple-100 transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">📚</span>
              <div>
                <p className="font-semibold text-stone-900 text-sm">
                  NEW! 새 학기 유형 테스트
                </p>
                <p className="text-xs text-stone-500">
                  나는 어떤 대학생일까?
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="px-4 py-12 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-stone-900 text-center mb-8">
            왜 새해 목표가 중요할까요?
          </h2>
          <div className="space-y-4 text-stone-600 leading-relaxed">
            <p>
              새해가 되면 누구나 &quot;올해는 다를 거야&quot;라고 다짐합니다.
              하지만 통계에 따르면 새해 목표의 80% 이상이 2월이 되기 전에
              포기된다고 해요. 왜 그럴까요?
            </p>
            <p>
              가장 큰 이유는 <strong>나에게 맞지 않는 목표</strong>를 세우기
              때문입니다. 남들이 하니까, 좋아 보여서, 해야 할 것 같아서 세운
              목표는 오래 가지 못합니다.
            </p>
            <p>
              이 테스트는 당신의 성향, 생활 패턴, 가치관을 분석해서{" "}
              <strong>진짜 당신에게 맞는 새해 목표</strong>를 찾아드립니다.
              작심삼일이 아닌, 365일 함께 갈 수 있는 목표를 만나보세요.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-4 py-12 bg-stone-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-stone-900 text-center mb-8">
            테스트는 이렇게 진행돼요
          </h2>
          <div className="grid gap-6">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-stone-900 text-white rounded-full flex items-center justify-center font-bold shrink-0">
                1
              </div>
              <div>
                <h3 className="font-semibold text-stone-900 mb-1">
                  12가지 질문에 답하기
                </h3>
                <p className="text-stone-600 text-sm">
                  일상적인 상황에서 당신의 선택을 알려주세요. 정답은 없으니
                  솔직하게 답해주세요.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-stone-900 text-white rounded-full flex items-center justify-center font-bold shrink-0">
                2
              </div>
              <div>
                <h3 className="font-semibold text-stone-900 mb-1">
                  성향 분석하기
                </h3>
                <p className="text-stone-600 text-sm">
                  당신의 답변을 바탕으로 13가지 유형 중 가장 잘 맞는 유형을
                  찾아냅니다.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-stone-900 text-white rounded-full flex items-center justify-center font-bold shrink-0">
                3
              </div>
              <div>
                <h3 className="font-semibold text-stone-900 mb-1">
                  맞춤 목표 받기
                </h3>
                <p className="text-stone-600 text-sm">
                  당신의 유형에 딱 맞는 새해 목표와 함께 실천 팁, 추천
                  콘텐츠까지 받아보세요.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-4 py-12 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-stone-900 text-center mb-8">
            이런 분들께 추천해요
          </h2>
          <div className="grid gap-4">
            <div className="p-4 bg-stone-50 rounded-xl">
              <p className="text-stone-700">
                매년 새해 목표를 세우지만 작심삼일로 끝나는 분
              </p>
            </div>
            <div className="p-4 bg-stone-50 rounded-xl">
              <p className="text-stone-700">
                어떤 목표를 세워야 할지 고민되는 분
              </p>
            </div>
            <div className="p-4 bg-stone-50 rounded-xl">
              <p className="text-stone-700">
                남들 따라 하는 목표 말고 나만의 목표가 필요한 분
              </p>
            </div>
            <div className="p-4 bg-stone-50 rounded-xl">
              <p className="text-stone-700">
                2025년을 의미있게 보내고 싶은 분
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-12 bg-stone-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-stone-900 text-center mb-8">
            자주 묻는 질문
          </h2>
          <div className="space-y-4">
            <details className="bg-white rounded-xl p-4 group">
              <summary className="font-semibold text-stone-900 cursor-pointer list-none flex justify-between items-center">
                테스트는 무료인가요?
                <span className="text-stone-400 group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <p className="mt-3 text-stone-600 text-sm">
                네, 완전히 무료입니다. 회원가입 없이 바로 테스트를 시작할 수
                있어요.
              </p>
            </details>
            <details className="bg-white rounded-xl p-4 group">
              <summary className="font-semibold text-stone-900 cursor-pointer list-none flex justify-between items-center">
                테스트 결과는 정확한가요?
                <span className="text-stone-400 group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <p className="mt-3 text-stone-600 text-sm">
                이 테스트는 심리학적 성향 분석을 기반으로 만들어졌습니다. 물론
                재미 요소가 있지만, 당신의 성향을 파악하는 데 도움이 될 거예요.
                가장 중요한 건 솔직하게 답하는 거예요!
              </p>
            </details>
            <details className="bg-white rounded-xl p-4 group">
              <summary className="font-semibold text-stone-900 cursor-pointer list-none flex justify-between items-center">
                결과를 저장할 수 있나요?
                <span className="text-stone-400 group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <p className="mt-3 text-stone-600 text-sm">
                결과 페이지에서 공유 버튼을 눌러 링크를 복사하면 언제든 다시 볼
                수 있어요. 친구에게 공유해서 함께 테스트해보는 것도 추천!
              </p>
            </details>
            <details className="bg-white rounded-xl p-4 group">
              <summary className="font-semibold text-stone-900 cursor-pointer list-none flex justify-between items-center">
                어떤 유형들이 있나요?
                <span className="text-stone-400 group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <p className="mt-3 text-stone-600 text-sm">
                갓생러, 헬스인, 명상러, 저축왕, 공부벌레, 인싸형, 여행러,
                도전러, 취미부자, 크리에이터 등 13가지 유형이 있어요. 테스트를
                완료하면 자세한 설명을 볼 수 있습니다.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* 궁합 테스트 배너 */}
      <section className="px-4 py-12 bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="max-w-md mx-auto">
          <Link
            href="/compatibility"
            className="block p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-4">
              <span className="text-4xl">💕</span>
              <div>
                <h3 className="font-bold text-stone-900 text-lg">
                  친구와 궁합 보기
                </h3>
                <p className="text-stone-500 text-sm">
                  서로의 새해 목표가 얼마나 잘 맞을까?
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 bg-white">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">
            지금 바로 시작해보세요
          </h2>
          <p className="text-stone-500 mb-8">
            1분이면 나에게 맞는 새해 목표를 찾을 수 있어요
          </p>
          <Link
            href="/quiz"
            onClick={trackQuizStart}
            className="inline-block py-4 px-12 bg-stone-900 text-white font-semibold text-lg rounded-xl hover:bg-stone-800 transition-colors duration-200"
          >
            테스트 시작하기
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-8 bg-stone-100 border-t border-stone-200">
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 text-sm text-stone-500 mb-4">
            <Link href="/about" className="hover:text-stone-700">
              소개
            </Link>
            <Link href="/privacy" className="hover:text-stone-700">
              개인정보처리방침
            </Link>
            <Link href="/terms" className="hover:text-stone-700">
              이용약관
            </Link>
          </div>
          <p className="text-center text-xs text-stone-400">
            © 2025 새해 목표 찾기. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
