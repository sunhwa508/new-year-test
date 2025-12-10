import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SMART 목표 세우는 법 - 새해 목표 가이드",
  description:
    "SMART 원칙을 활용해 구체적이고 달성 가능한 새해 목표를 세우는 방법을 알아보세요.",
};

export default function SmartGoalsPage() {
  return (
    <main className="min-h-screen bg-stone-50">
      <article className="max-w-2xl mx-auto px-4 py-12">
        <Link
          href="/guide"
          className="inline-block mb-8 text-stone-500 hover:text-stone-700 text-sm"
        >
          ← 가이드 목록
        </Link>

        <div className="mb-8">
          <span className="text-4xl">🎯</span>
        </div>

        <h1 className="text-3xl font-bold text-stone-900 mb-4">
          SMART 목표 세우는 법
        </h1>
        <p className="text-stone-500 mb-8">
          막연한 목표는 실패하기 쉬워요. SMART 원칙으로 제대로 된 목표를
          세워보세요.
        </p>

        <div className="prose prose-stone max-w-none">
          <h2 className="text-xl font-bold text-stone-900 mt-8 mb-4">
            SMART란?
          </h2>
          <p className="text-stone-600 leading-relaxed mb-4">
            SMART는 효과적인 목표 설정을 위한 5가지 원칙의 첫 글자를 딴
            것입니다. 1981년 조지 도런(George T. Doran)이 비즈니스 관리 논문에서
            처음 소개한 이후, 전 세계적으로 가장 널리 사용되는 목표 설정
            프레임워크가 되었어요.
          </p>

          <div className="space-y-6 my-8">
            <div className="p-5 bg-white rounded-xl border border-stone-200">
              <h3 className="font-bold text-stone-900 mb-2">
                S - Specific (구체적으로)
              </h3>
              <p className="text-stone-600 text-sm mb-3">
                &quot;운동을 열심히 할 거야&quot;가 아니라 &quot;매주 월, 수,
                금에 30분씩 조깅을 할 거야&quot;처럼 구체적으로 정해요.
              </p>
              <div className="text-xs text-stone-500">
                <span className="text-red-500">✗</span> 책을 많이 읽을 거야
                <br />
                <span className="text-green-500">✓</span> 한 달에 책 2권을 읽을
                거야
              </div>
            </div>

            <div className="p-5 bg-white rounded-xl border border-stone-200">
              <h3 className="font-bold text-stone-900 mb-2">
                M - Measurable (측정 가능하게)
              </h3>
              <p className="text-stone-600 text-sm mb-3">
                목표가 달성됐는지 확인할 수 있어야 해요. 숫자로 표현할 수 있으면
                더 좋아요.
              </p>
              <div className="text-xs text-stone-500">
                <span className="text-red-500">✗</span> 저축을 더 할 거야
                <br />
                <span className="text-green-500">✓</span> 매달 50만원을 저축할
                거야
              </div>
            </div>

            <div className="p-5 bg-white rounded-xl border border-stone-200">
              <h3 className="font-bold text-stone-900 mb-2">
                A - Achievable (달성 가능하게)
              </h3>
              <p className="text-stone-600 text-sm mb-3">
                너무 높은 목표는 포기하기 쉬워요. 노력하면 달성할 수 있는 현실적인
                목표를 세워요.
              </p>
              <div className="text-xs text-stone-500">
                <span className="text-red-500">✗</span> 1년 안에 10개 국어
                마스터하기
                <br />
                <span className="text-green-500">✓</span> 6개월 안에 영어 회화
                중급 달성하기
              </div>
            </div>

            <div className="p-5 bg-white rounded-xl border border-stone-200">
              <h3 className="font-bold text-stone-900 mb-2">
                R - Relevant (관련성 있게)
              </h3>
              <p className="text-stone-600 text-sm mb-3">
                나의 가치관과 큰 그림에 맞는 목표인지 확인해요. 남들이 좋다고 해서
                세운 목표는 동기부여가 약해요.
              </p>
              <div className="text-xs text-stone-500">
                질문해보세요: &quot;이 목표를 달성하면 내 삶이 어떻게
                좋아질까?&quot;
              </div>
            </div>

            <div className="p-5 bg-white rounded-xl border border-stone-200">
              <h3 className="font-bold text-stone-900 mb-2">
                T - Time-bound (기한이 있게)
              </h3>
              <p className="text-stone-600 text-sm mb-3">
                언제까지 달성할 건지 명확한 기한을 정해요. 기한이 없으면 계속
                미루게 돼요.
              </p>
              <div className="text-xs text-stone-500">
                <span className="text-red-500">✗</span> 언젠가 마라톤 완주하기
                <br />
                <span className="text-green-500">✓</span> 2025년 서울 마라톤에서
                완주하기
              </div>
            </div>
          </div>

          <h2 className="text-xl font-bold text-stone-900 mt-8 mb-4">
            SMART 목표 예시
          </h2>

          <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 mb-6">
            <h4 className="font-bold text-stone-900 mb-2">건강 목표</h4>
            <p className="text-stone-600 text-sm">
              &quot;2025년 6월 30일까지 체중을 5kg 감량하기 위해 매주 월, 수,
              금요일 저녁 7시에 30분간 조깅을 하고, 매일 점심 식사 때 탄수화물을
              반으로 줄인다.&quot;
            </p>
          </div>

          <div className="bg-green-50 border border-green-100 rounded-xl p-5 mb-6">
            <h4 className="font-bold text-stone-900 mb-2">학습 목표</h4>
            <p className="text-stone-600 text-sm">
              &quot;2025년 3월 둘째 주 토요일 정보처리기사 시험에 합격하기 위해
              매일 저녁 9시부터 11시까지 2시간씩 공부하고, 매주 일요일에 모의고사
              1회를 푼다.&quot;
            </p>
          </div>

          <div className="bg-purple-50 border border-purple-100 rounded-xl p-5 mb-6">
            <h4 className="font-bold text-stone-900 mb-2">재정 목표</h4>
            <p className="text-stone-600 text-sm">
              &quot;2025년 12월 31일까지 비상금 600만원을 모으기 위해 매달 1일에
              급여의 20%인 50만원을 자동이체로 저축 계좌에 넣는다.&quot;
            </p>
          </div>

          <h2 className="text-xl font-bold text-stone-900 mt-8 mb-4">
            SMART 목표 작성 팁
          </h2>

          <ul className="list-disc list-inside text-stone-600 space-y-2 mb-8">
            <li>한 번에 너무 많은 목표를 세우지 마세요 (3개 이하 권장)</li>
            <li>큰 목표는 작은 마일스톤으로 나누세요</li>
            <li>목표를 눈에 잘 보이는 곳에 적어두세요</li>
            <li>주기적으로 진행 상황을 체크하세요</li>
            <li>필요하면 목표를 수정해도 괜찮아요</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-12 p-6 bg-stone-900 rounded-xl text-center">
          <h3 className="text-white font-bold text-lg mb-2">
            나에게 맞는 목표 유형은?
          </h3>
          <p className="text-stone-300 text-sm mb-4">
            테스트로 나만의 새해 목표를 찾아보세요
          </p>
          <Link
            href="/quiz"
            className="inline-block py-3 px-6 bg-white text-stone-900 font-semibold rounded-xl hover:bg-stone-100 transition-colors"
          >
            테스트 하러 가기
          </Link>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex justify-between">
          <Link
            href="/guide"
            className="text-stone-500 hover:text-stone-700 text-sm"
          >
            ← 가이드 목록
          </Link>
          <Link
            href="/guide/habit-formation"
            className="text-stone-500 hover:text-stone-700 text-sm"
          >
            다음: 습관 만들기 66일의 법칙 →
          </Link>
        </div>
      </article>
    </main>
  );
}
