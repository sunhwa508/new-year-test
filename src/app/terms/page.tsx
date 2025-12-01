import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "이용약관 - 새해 목표 찾기",
  description: "새해 목표 찾기 서비스의 이용약관입니다.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-stone-50">
      <div className="max-w-2xl mx-auto px-4 py-12">
        <Link
          href="/"
          className="inline-block mb-8 text-stone-500 hover:text-stone-700 text-sm"
        >
          ← 홈으로
        </Link>

        <h1 className="text-3xl font-bold text-stone-900 mb-8">이용약관</h1>

        <div className="prose prose-stone max-w-none space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-stone-900 mb-4">
              제1조 (목적)
            </h2>
            <p className="text-stone-600">
              본 약관은 「새해 목표 찾기」(이하 &quot;서비스&quot;)의 이용조건 및
              절차, 이용자와 서비스 제공자의 권리, 의무 및 책임사항을 규정함을
              목적으로 합니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-900 mb-4">
              제2조 (서비스의 내용)
            </h2>
            <p className="text-stone-600 mb-2">
              본 서비스는 다음과 같은 내용을 제공합니다:
            </p>
            <ul className="list-disc list-inside text-stone-600 space-y-1">
              <li>성향 분석 기반 새해 목표 추천 테스트</li>
              <li>테스트 결과 제공 및 공유 기능</li>
              <li>기타 서비스 운영에 필요한 부가 서비스</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-900 mb-4">
              제3조 (서비스의 이용)
            </h2>
            <p className="text-stone-600">
              본 서비스는 별도의 회원가입 없이 누구나 무료로 이용할 수 있습니다.
              서비스 이용 시 본 약관에 동의한 것으로 간주합니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-900 mb-4">
              제4조 (이용자의 의무)
            </h2>
            <p className="text-stone-600 mb-2">
              이용자는 다음 행위를 하여서는 안 됩니다:
            </p>
            <ul className="list-disc list-inside text-stone-600 space-y-1">
              <li>서비스의 정상적인 운영을 방해하는 행위</li>
              <li>타인의 권리를 침해하는 행위</li>
              <li>서비스를 이용한 영리 활동 (사전 승인 없이)</li>
              <li>기타 관련 법령에 위배되는 행위</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-900 mb-4">
              제5조 (서비스의 중단)
            </h2>
            <p className="text-stone-600">
              서비스 제공자는 시스템 점검, 장애 발생, 기타 불가피한 사유로 서비스
              제공을 일시적으로 중단할 수 있습니다. 이 경우 가능한 범위 내에서
              사전 공지합니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-900 mb-4">
              제6조 (면책조항)
            </h2>
            <div className="text-stone-600 space-y-2">
              <p>
                1. 본 서비스의 테스트 결과는 오락 및 참고 목적으로 제공되며,
                전문적인 상담이나 조언을 대체하지 않습니다.
              </p>
              <p>
                2. 서비스 제공자는 테스트 결과의 정확성을 보장하지 않으며, 결과
                활용에 따른 책임은 이용자에게 있습니다.
              </p>
              <p>
                3. 천재지변, 시스템 장애 등 불가항력적 사유로 인한 서비스 중단에
                대해 책임지지 않습니다.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-900 mb-4">
              제7조 (지적재산권)
            </h2>
            <p className="text-stone-600">
              본 서비스에 포함된 모든 콘텐츠(텍스트, 이미지, 디자인, 소스코드
              등)의 저작권은 서비스 제공자에게 있으며, 무단 복제 및 배포를
              금지합니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-900 mb-4">
              제8조 (광고 게재)
            </h2>
            <p className="text-stone-600">
              본 서비스는 운영을 위해 광고를 게재할 수 있으며, 이용자는 서비스
              이용 시 노출되는 광고에 동의하는 것으로 간주합니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-900 mb-4">
              제9조 (약관의 변경)
            </h2>
            <p className="text-stone-600">
              본 약관은 필요에 따라 변경될 수 있으며, 변경 시 본 페이지를 통해
              공지됩니다. 변경된 약관은 공지 후 서비스를 계속 이용하는 경우
              동의한 것으로 간주합니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-stone-900 mb-4">
              제10조 (분쟁 해결)
            </h2>
            <p className="text-stone-600">
              본 약관과 관련된 분쟁은 대한민국 법률에 따라 해결하며, 관할 법원은
              서비스 제공자의 소재지 법원으로 합니다.
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
