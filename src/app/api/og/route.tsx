import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";
import { results } from "@/data/results";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const resultId = searchParams.get("result") || "lazybones";

  const result = results[resultId] || results["lazybones"];

  // 색상 매핑
  const bgColors: Record<string, string> = {
    earlybird: "#FFF5F5",
    health: "#F0FFF4",
    meditator: "#FAF5FF",
    saver: "#FFFAF0",
    learner: "#EBF8FF",
    connector: "#FFF5F7",
    traveler: "#E6FFFA",
    adventurer: "#FFF5F5",
    hobbyist: "#FFFAF0",
    creator: "#FFF5F5",
    lazybones: "#F7FAFC",
  };

  const accentColors: Record<string, string> = {
    earlybird: "#E53E3E",
    health: "#38A169",
    meditator: "#805AD5",
    saver: "#DD6B20",
    learner: "#3182CE",
    connector: "#D53F8C",
    traveler: "#319795",
    adventurer: "#E53E3E",
    hobbyist: "#DD6B20",
    creator: "#C53030",
    lazybones: "#4A5568",
  };

  const bgColor = bgColors[resultId] || "#F7FAFC";
  const accentColor = accentColors[resultId] || "#4A5568";

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
          backgroundColor: bgColor,
          padding: "40px",
        }}
      >
        {/* 상단 타이틀 */}
        <div
          style={{
            display: "flex",
            fontSize: "24px",
            color: "#A0AEC0",
            marginBottom: "20px",
          }}
        >
          나에게 딱 맞는 새해 목표
        </div>

        {/* 유형 뱃지 */}
        <div
          style={{
            display: "flex",
            backgroundColor: accentColor,
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
            fontSize: "48px",
            fontWeight: "bold",
            color: "#1A202C",
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
            fontSize: "24px",
            color: "#4A5568",
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
            fontSize: "20px",
            color: accentColor,
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
            color: "#A0AEC0",
          }}
        >
          newyear-goal.vercel.app
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
