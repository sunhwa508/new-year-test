import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "나와 어울리는 2025 새해 목표는?",
  description: "10가지 질문으로 알아보는 나에게 딱 맞는 새해 목표 테스트",
  openGraph: {
    title: "나와 어울리는 2025 새해 목표는?",
    description: "10가지 질문으로 알아보는 나에게 딱 맞는 새해 목표 테스트",
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "나와 어울리는 2025 새해 목표는?",
    description: "10가지 질문으로 알아보는 나에게 딱 맞는 새해 목표 테스트",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <GoogleAnalytics />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
