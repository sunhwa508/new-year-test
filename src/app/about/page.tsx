import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "소개 - 새해 목표 찾기",
  description:
    "새해 목표 찾기 테스트는 당신의 성향에 맞는 새해 목표를 추천해드립니다.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-stone-50">
      <div className="max-w-2xl mx-auto px-4 py-12">
        <Link
          href="/"
          className="inline-block mb-8 text-stone-500 hover:text-stone-700 text-sm"
        >
          ← 홈으로
        </Link>

        <h1 className="text-3xl font-bold text-stone-900 mb-8">서비스 소개</h1>

        <div className="prose prose-stone max-w-none space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-stone-900 mb-4">
              새해 목표 찾기란?
            </h2>
            <p className="text-stone-600">
              「새해 목표 찾기」는 당신의 성향, 생활 패턴, 가치관을 분석하여 가장
              잘 맞는 새해 목표를 추천해주는 성향 테스트 서비스입니다.
            </p>
            <p className="text-stone-600 mt-3">
              매년 새해가 되면 &quot;올해는 운동 열심히 해야지&quot;, &quot;올해는
              책 많이 읽어야지&quot; 같은 목표를 세우지만, 대부분 작심삼일로
              끝나곤 합니다. 그 이유는 대부분 &quot;남들이 하니까&quot;,
              &quot;좋아 보여서&quot; 세운 목표이기 때문입니다.
            </p>
            <p className="text-stone-600 mt-3">
              이 테스트는 당신이 정말 흥미를 느끼고, 꾸준히 할 수 있는 목표가
              무엇인지 찾아드립니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-900 mb-4">
              테스트 방식
            </h2>
            <p className="text-stone-600">
              테스트는 12가지 일상적인 상황에 대한 질문으로 구성되어 있습니다.
              각 질문에 대해 가장 자신과 가까운 답변을 선택하면, 답변 패턴을
              분석하여 13가지 유형 중 당신에게 가장 적합한 유형을 찾아냅니다.
            </p>
            <p className="text-stone-600 mt-3">
              결과에는 당신의 유형에 맞는 새해 목표와 함께, 목표를 달성하기 위한
              실천 팁과 당신에게 어울리는 추천 콘텐츠(노래, 영화, 선물)도
              제공됩니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-900 mb-4">
              13가지 유형
            </h2>
            <div className="grid gap-3">
              <div className="p-4 bg-white rounded-xl border border-stone-200">
                <h3 className="font-semibold text-stone-900">갓생러</h3>
                <p className="text-stone-600 text-sm mt-1">
                  미라클 모닝으로 하루를 알차게 시작하는 타입
                </p>
              </div>
              <div className="p-4 bg-white rounded-xl border border-stone-200">
                <h3 className="font-semibold text-stone-900">헬스인</h3>
                <p className="text-stone-600 text-sm mt-1">
                  꾸준한 운동으로 건강한 몸을 만드는 타입
                </p>
              </div>
              <div className="p-4 bg-white rounded-xl border border-stone-200">
                <h3 className="font-semibold text-stone-900">명상러</h3>
                <p className="text-stone-600 text-sm mt-1">
                  마음의 평화를 찾는 명상과 힐링 타입
                </p>
              </div>
              <div className="p-4 bg-white rounded-xl border border-stone-200">
                <h3 className="font-semibold text-stone-900">저축왕</h3>
                <p className="text-stone-600 text-sm mt-1">
                  계획적인 재테크로 자산을 늘려가는 타입
                </p>
              </div>
              <div className="p-4 bg-white rounded-xl border border-stone-200">
                <h3 className="font-semibold text-stone-900">공부벌레</h3>
                <p className="text-stone-600 text-sm mt-1">
                  끊임없는 배움으로 성장하는 타입
                </p>
              </div>
              <div className="p-4 bg-white rounded-xl border border-stone-200">
                <h3 className="font-semibold text-stone-900">인싸형</h3>
                <p className="text-stone-600 text-sm mt-1">
                  사람들과의 관계를 소중히 여기는 타입
                </p>
              </div>
              <div className="p-4 bg-white rounded-xl border border-stone-200">
                <h3 className="font-semibold text-stone-900">여행러</h3>
                <p className="text-stone-600 text-sm mt-1">
                  새로운 장소에서 영감을 얻는 타입
                </p>
              </div>
              <div className="p-4 bg-white rounded-xl border border-stone-200">
                <h3 className="font-semibold text-stone-900">도전러</h3>
                <p className="text-stone-600 text-sm mt-1">
                  새로운 경험을 두려워하지 않는 타입
                </p>
              </div>
              <div className="p-4 bg-white rounded-xl border border-stone-200">
                <h3 className="font-semibold text-stone-900">취미부자</h3>
                <p className="text-stone-600 text-sm mt-1">
                  다양한 취미로 삶을 풍요롭게 만드는 타입
                </p>
              </div>
              <div className="p-4 bg-white rounded-xl border border-stone-200">
                <h3 className="font-semibold text-stone-900">크리에이터</h3>
                <p className="text-stone-600 text-sm mt-1">
                  창작 활동으로 자신을 표현하는 타입
                </p>
              </div>
              <p className="text-stone-500 text-sm">
                그 외 3가지 유형이 더 있습니다. 테스트를 통해 확인해보세요!
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-900 mb-4">
              결과 활용 방법
            </h2>
            <ul className="list-disc list-inside text-stone-600 space-y-2">
              <li>결과를 참고하여 실제로 실천 가능한 목표를 세워보세요</li>
              <li>친구들과 결과를 공유하고 함께 목표를 달성해보세요</li>
              <li>추천된 콘텐츠를 통해 동기부여를 얻어보세요</li>
              <li>결과가 마음에 들지 않으면 다시 테스트해도 됩니다</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-900 mb-4">
              주의사항
            </h2>
            <p className="text-stone-600">
              이 테스트는 재미와 참고를 위한 것으로, 전문적인 심리 상담이나
              진단을 대체하지 않습니다. 결과는 참고용으로만 활용해 주세요.
            </p>
          </section>

          <div className="pt-8 text-center">
            <Link
              href="/quiz"
              className="inline-block py-4 px-12 bg-stone-900 text-white font-semibold text-lg rounded-xl hover:bg-stone-800 transition-colors duration-200"
            >
              테스트 시작하기
            </Link>
          </div>
        </div>
      </div>

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
