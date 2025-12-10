import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "습관 만들기 66일의 법칙 - 새해 목표 가이드",
  description:
    "작심삼일을 극복하고 새해 목표를 진짜 습관으로 만드는 과학적인 방법을 알아보세요.",
};

export default function HabitFormationPage() {
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
          <span className="text-4xl">🔄</span>
        </div>

        <h1 className="text-3xl font-bold text-stone-900 mb-4">
          습관 만들기 66일의 법칙
        </h1>
        <p className="text-stone-500 mb-8">
          &quot;21일이면 습관이 된다&quot;는 말, 사실이 아니에요. 진짜 습관이
          되려면 평균 66일이 필요해요.
        </p>

        <div className="prose prose-stone max-w-none">
          <h2 className="text-xl font-bold text-stone-900 mt-8 mb-4">
            왜 21일이 아니라 66일일까?
          </h2>
          <p className="text-stone-600 leading-relaxed mb-4">
            &quot;21일 습관 형성&quot; 이론은 1960년대 성형외과 의사 맥스웰
            몰츠(Maxwell Maltz)의 관찰에서 시작됐어요. 환자들이 새 얼굴에
            적응하는 데 약 21일이 걸린다는 것이었죠.
          </p>
          <p className="text-stone-600 leading-relaxed mb-4">
            하지만 2009년 런던 대학교의 필리파 랠리(Phillippa Lally) 박사 연구팀이
            실제로 96명의 참가자를 대상으로 실험한 결과, 새로운 행동이
            &quot;자동적인 습관&quot;이 되기까지 평균 <strong>66일</strong>이
            걸렸어요. 그리고 개인차에 따라 18일에서 254일까지 다양했죠.
          </p>

          <div className="p-5 bg-amber-50 border border-amber-200 rounded-xl my-6">
            <p className="text-stone-700 text-sm">
              💡 <strong>핵심 포인트:</strong> 21일은 시작일 뿐이에요. 진짜 습관이
              되려면 최소 2달은 꾸준히 해야 해요. 하지만 긍정적인 면은, 중간에
              하루 빠져도 습관 형성에 큰 영향이 없다는 거예요!
            </p>
          </div>

          <h2 className="text-xl font-bold text-stone-900 mt-8 mb-4">
            습관이 형성되는 4단계
          </h2>
          <p className="text-stone-600 leading-relaxed mb-4">
            제임스 클리어(James Clear)의 베스트셀러 &quot;아주 작은
            습관&quot;에서 소개된 습관 형성의 4단계입니다.
          </p>

          <div className="space-y-4 my-6">
            <div className="p-5 bg-white rounded-xl border border-stone-200">
              <h3 className="font-bold text-stone-900 mb-2">1. 신호 (Cue)</h3>
              <p className="text-stone-600 text-sm">
                습관을 시작하게 하는 트리거예요. 시간, 장소, 감정, 직전 행동 등이
                될 수 있어요.
              </p>
              <p className="text-xs text-stone-500 mt-2">
                예: 아침에 눈을 뜨면 (시간 + 상황)
              </p>
            </div>

            <div className="p-5 bg-white rounded-xl border border-stone-200">
              <h3 className="font-bold text-stone-900 mb-2">2. 열망 (Craving)</h3>
              <p className="text-stone-600 text-sm">
                습관을 하고 싶은 동기예요. 행동 자체가 아니라 행동 후 얻는 보상을
                원하는 거예요.
              </p>
              <p className="text-xs text-stone-500 mt-2">
                예: 상쾌한 기분, 건강해지는 느낌
              </p>
            </div>

            <div className="p-5 bg-white rounded-xl border border-stone-200">
              <h3 className="font-bold text-stone-900 mb-2">3. 반응 (Response)</h3>
              <p className="text-stone-600 text-sm">
                실제 습관 행동이에요. 쉬울수록 실행 가능성이 높아요.
              </p>
              <p className="text-xs text-stone-500 mt-2">
                예: 스트레칭 5분 하기
              </p>
            </div>

            <div className="p-5 bg-white rounded-xl border border-stone-200">
              <h3 className="font-bold text-stone-900 mb-2">4. 보상 (Reward)</h3>
              <p className="text-stone-600 text-sm">
                습관을 완료했을 때 얻는 만족감이에요. 이게 반복되면 뇌가
                기억해요.
              </p>
              <p className="text-xs text-stone-500 mt-2">
                예: 개운한 느낌, 체크리스트 완료 만족감
              </p>
            </div>
          </div>

          <h2 className="text-xl font-bold text-stone-900 mt-8 mb-4">
            습관 만들기 실전 팁
          </h2>

          <div className="space-y-4 my-6">
            <div className="p-5 bg-blue-50 border border-blue-100 rounded-xl">
              <h4 className="font-bold text-stone-900 mb-2">
                1. 2분 규칙으로 시작하기
              </h4>
              <p className="text-stone-600 text-sm">
                새 습관은 2분 안에 끝낼 수 있을 정도로 작게 시작하세요.
                &quot;매일 30분 운동&quot;이 아니라 &quot;운동복 입기&quot;부터
                시작하세요.
              </p>
            </div>

            <div className="p-5 bg-green-50 border border-green-100 rounded-xl">
              <h4 className="font-bold text-stone-900 mb-2">
                2. 습관 쌓기 (Habit Stacking)
              </h4>
              <p className="text-stone-600 text-sm">
                이미 하고 있는 습관에 새 습관을 연결하세요. &quot;커피 마신 후에
                명상 5분&quot;처럼 기존 루틴에 붙이면 실천하기 쉬워요.
              </p>
            </div>

            <div className="p-5 bg-purple-50 border border-purple-100 rounded-xl">
              <h4 className="font-bold text-stone-900 mb-2">
                3. 환경 설계하기
              </h4>
              <p className="text-stone-600 text-sm">
                좋은 습관은 쉽게, 나쁜 습관은 어렵게 만드세요. 물을 더 마시고
                싶다면 책상에 물병을 두세요. 휴대폰 덜 보고 싶다면 다른 방에
                두세요.
              </p>
            </div>

            <div className="p-5 bg-orange-50 border border-orange-100 rounded-xl">
              <h4 className="font-bold text-stone-900 mb-2">
                4. 하루 빠져도 괜찮아
              </h4>
              <p className="text-stone-600 text-sm">
                연구에 따르면 하루 빠지는 것은 습관 형성에 큰 영향이 없어요.
                중요한 건 &quot;2일 연속&quot;으로 빠지지 않는 것!
              </p>
            </div>

            <div className="p-5 bg-pink-50 border border-pink-100 rounded-xl">
              <h4 className="font-bold text-stone-900 mb-2">
                5. 정체성 기반으로 생각하기
              </h4>
              <p className="text-stone-600 text-sm">
                &quot;책을 읽어야지&quot;가 아니라 &quot;나는 독서가야&quot;라고
                생각하세요. 행동을 정체성으로 연결하면 지속력이 높아져요.
              </p>
            </div>
          </div>

          <h2 className="text-xl font-bold text-stone-900 mt-8 mb-4">
            66일 습관 타임라인
          </h2>

          <div className="space-y-3 my-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center font-bold text-red-600">
                1-7일
              </div>
              <div>
                <p className="font-medium text-stone-900">저항기</p>
                <p className="text-sm text-stone-500">
                  가장 힘든 시기. 의지력에 의존해야 해요.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center font-bold text-yellow-600">
                8-21일
              </div>
              <div>
                <p className="font-medium text-stone-900">적응기</p>
                <p className="text-sm text-stone-500">
                  익숙해지기 시작해요. 아직 의식적인 노력 필요.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-600">
                22-50일
              </div>
              <div>
                <p className="font-medium text-stone-900">안정기</p>
                <p className="text-sm text-stone-500">
                  점점 자연스러워져요. 빠지면 뭔가 허전한 느낌.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center font-bold text-green-600">
                51-66일
              </div>
              <div>
                <p className="font-medium text-stone-900">자동화기</p>
                <p className="text-sm text-stone-500">
                  축하해요! 이제 생각 없이도 자동으로 해요.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 p-6 bg-stone-900 rounded-xl text-center">
          <h3 className="text-white font-bold text-lg mb-2">
            어떤 습관을 만들어볼까?
          </h3>
          <p className="text-stone-300 text-sm mb-4">
            테스트로 나에게 맞는 목표를 찾아보세요
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
            href="/guide/smart-goals"
            className="text-stone-500 hover:text-stone-700 text-sm"
          >
            ← 이전: SMART 목표 세우는 법
          </Link>
          <Link
            href="/guide/motivation"
            className="text-stone-500 hover:text-stone-700 text-sm"
          >
            다음: 동기부여 유지하는 5가지 방법 →
          </Link>
        </div>
      </article>
    </main>
  );
}
