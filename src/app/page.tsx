"use client";

import Link from "next/link";
import { trackQuizStart } from "@/lib/gtag";

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-stone-900 mb-2">
            나와 어울리는
          </h1>
          <h2 className="text-4xl font-black text-stone-900 mb-4">
            2025 새해 목표는?
          </h2>
          <p className="text-stone-500">
            10가지 질문으로 알아보는
            <br />
            나에게 딱 맞는 새해 목표
          </p>
        </div>

        <Link
          href="/quiz"
          onClick={trackQuizStart}
          className="block w-full py-4 px-8 bg-stone-900 text-white font-semibold text-lg rounded-xl hover:bg-stone-800 transition-colors duration-200 text-center"
        >
          시작하기
        </Link>

        <p className="mt-4 text-sm text-stone-400 text-center">
          약 1분 소요
        </p>
      </div>
    </main>
  );
}
