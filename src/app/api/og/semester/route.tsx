import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";
import { semesterResults } from "@/data/semester-results";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const resultId = searchParams.get("result") || "chill";

  const result = semesterResults[resultId] || semesterResults["chill"];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #EBF4FF 0%, #E9D5FF 100%)",
          padding: "40px",
        }}
      >
        {/* 상단 타이틀 */}
        <div
          style={{
            display: "flex",
            fontSize: "24px",
            color: "#6B7280",
            marginBottom: "20px",
          }}
        >
          새 학기 유형 테스트
        </div>

        {/* 이모지 */}
        <div
          style={{
            display: "flex",
            fontSize: "80px",
            marginBottom: "20px",
          }}
        >
          {result.emoji}
        </div>

        {/* 유형 뱃지 */}
        <div
          style={{
            display: "flex",
            background: "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)",
            color: "white",
            padding: "16px 40px",
            borderRadius: "50px",
            fontSize: "36px",
            fontWeight: "bold",
            marginBottom: "30px",
          }}
        >
          {result.title}
        </div>

        {/* 목표 */}
        <div
          style={{
            display: "flex",
            fontSize: "42px",
            fontWeight: "bold",
            color: "#1F2937",
            marginBottom: "30px",
            textAlign: "center",
          }}
        >
          &quot;{result.goal}&quot;
        </div>

        {/* 설명 */}
        <div
          style={{
            display: "flex",
            fontSize: "22px",
            color: "#4B5563",
            textAlign: "center",
            maxWidth: "800px",
            lineHeight: 1.5,
            marginBottom: "40px",
          }}
        >
          {result.description}
        </div>

        {/* 명언 */}
        <div
          style={{
            display: "flex",
            fontSize: "18px",
            color: "#7C3AED",
            fontStyle: "italic",
          }}
        >
          {result.quote}
        </div>

        {/* 하단 브랜딩 */}
        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: "30px",
            fontSize: "18px",
            color: "#9CA3AF",
          }}
        >
          newyear-goal.vercel.app/semester
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
