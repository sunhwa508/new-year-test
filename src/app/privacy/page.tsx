import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보처리방침 - 새해 목표 찾기",
  description: "새해 목표 찾기 서비스의 개인정보처리방침입니다.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-stone-50">
      <div className="max-w-2xl mx-auto px-4 py-12">
        <Link
          href="/"
          className="inline-block mb-8 text-stone-500 hover:text-stone-700 text-sm"
        >
          ← 홈으로
        </Link>

        <h1 className="text-3xl font-bold text-stone-900 mb-8">
          개인정보처리방침
        </h1>

        <div className="prose prose-stone max-w-none space-y-8">
          <p className="text-stone-600">
            「새해 목표 찾기」(이하 &quot;서비스&quot;)는 이용자의 개인정보를
            중요하게 생각하며, 개인정보보호법 등 관련 법령을 준수하고 있습니다.
          </p>

          <section>
            <h2 className="text-xl font-semibold text-stone-900 mb-4">
              1. 수집하는 개인정보 항목
            </h2>
            <p className="text-stone-600 mb-2">
              본 서비스는 별도의 회원가입 없이 이용 가능하며, 다음과 같은 정보가
              자동으로 수집될 수 있습니다:
            </p>
            <ul className="list-disc list-inside text-stone-600 space-y-1">
              <li>서비스 이용 기록 (페이지 방문 기록, 테스트 참여 기록)</li>
              <li>기기 정보 (브라우저 종류, 운영체제)</li>
              <li>IP 주소</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-900 mb-4">
              2. 개인정보의 수집 및 이용목적
            </h2>
            <p className="text-stone-600 mb-2">수집된 정보는 다음 목적으로 이용됩니다:</p>
            <ul className="list-disc list-inside text-stone-600 space-y-1">
              <li>서비스 제공 및 운영</li>
              <li>서비스 이용 통계 분석 및 개선</li>
              <li>부정 이용 방지</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-900 mb-4">
              3. 개인정보의 보유 및 이용기간
            </h2>
            <p className="text-stone-600">
              자동 수집되는 정보는 수집 목적 달성 후 지체 없이 파기합니다. 단,
              관련 법령에 의해 보존이 필요한 경우 해당 기간 동안 보관합니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-900 mb-4">
              4. 개인정보의 제3자 제공
            </h2>
            <p className="text-stone-600">
              본 서비스는 이용자의 개인정보를 제3자에게 제공하지 않습니다. 단,
              법령에 의해 요구되는 경우는 예외로 합니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-900 mb-4">
              5. 쿠키(Cookie)의 사용
            </h2>
            <p className="text-stone-600 mb-2">
              본 서비스는 다음과 같은 목적으로 쿠키를 사용할 수 있습니다:
            </p>
            <ul className="list-disc list-inside text-stone-600 space-y-1">
              <li>Google Analytics를 통한 서비스 이용 통계 분석</li>
              <li>Google AdSense를 통한 맞춤형 광고 제공</li>
            </ul>
            <p className="text-stone-600 mt-2">
              이용자는 브라우저 설정을 통해 쿠키 수집을 거부할 수 있으며, 이
              경우 서비스 이용에 일부 제한이 있을 수 있습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-900 mb-4">
              6. 광고 서비스
            </h2>
            <p className="text-stone-600">
              본 서비스는 Google AdSense를 통해 광고를 게재하고 있습니다. Google
              AdSense는 쿠키를 사용하여 이용자의 관심사에 기반한 광고를 표시할
              수 있습니다. 광고 개인화를 원하지 않는 경우 Google 광고 설정에서
              변경할 수 있습니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-900 mb-4">
              7. 개인정보보호책임자
            </h2>
            <p className="text-stone-600">
              개인정보 처리에 관한 문의사항이 있으시면 아래로 연락 주시기
              바랍니다.
            </p>
            <p className="text-stone-600 mt-2">
              이메일: contact@example.com
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-900 mb-4">
              8. 개인정보처리방침의 변경
            </h2>
            <p className="text-stone-600">
              본 개인정보처리방침은 법령 및 서비스 변경에 따라 수정될 수 있으며,
              변경 시 본 페이지를 통해 공지됩니다.
            </p>
          </section>

          <p className="text-stone-500 text-sm pt-4 border-t border-stone-200">
            시행일자: 2025년 1월 1일
          </p>
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
