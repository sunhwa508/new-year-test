import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";
import { results } from "@/data/results";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const resultId = searchParams.get("result") || "lazybones";

  const result = results[resultId] || results["lazybones"];

  // 색상 매핑
  const bgGradients: Record<string, string[]> = {
    earlybird: ["#FF6B6B", "#FF8E53"],
    health: ["#38A169", "#68D391"],
    meditator: ["#805AD5", "#B794F4"],
    saver: ["#DD6B20", "#F6AD55"],
    learner: ["#3182CE", "#63B3ED"],
    connector: ["#D53F8C", "#F687B3"],
    traveler: ["#319795", "#4FD1C5"],
    adventurer: ["#E53E3E", "#FC8181"],
    hobbyist: ["#DD6B20", "#F6AD55"],
    creator: ["#C53030", "#FC8181"],
    lazybones: ["#4A5568", "#718096"],
  };

  const gradient = bgGradients[resultId] || ["#4A5568", "#718096"];

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
          background: `linear-gradient(180deg, ${gradient[0]} 0%, ${gradient[1]} 100%)`,
          padding: "60px",
        }}
      >
        {/* 상단 */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "60px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: "28px",
              color: "rgba(255,255,255,0.8)",
              marginBottom: "20px",
            }}
          >
            나에게 딱 맞는 새해 목표
          </div>
        </div>

        {/* 메인 카드 */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: "40px",
            padding: "60px 50px",
            width: "100%",
            maxWidth: "900px",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          }}
        >
          {/* 유형 뱃지 */}
          <div
            style={{
              display: "flex",
              backgroundColor: gradient[0],
              color: "white",
              padding: "20px 50px",
              borderRadius: "50px",
              fontSize: "42px",
              fontWeight: "bold",
              marginBottom: "40px",
            }}
          >
            {result.title}
          </div>

          {/* 목표 */}
          <div
            style={{
              display: "flex",
              fontSize: "52px",
              fontWeight: "bold",
              color: "#1A202C",
              textAlign: "center",
              marginBottom: "30px",
              lineHeight: 1.3,
            }}
          >
            &quot;{result.goal}&quot;
          </div>

          {/* 설명 */}
          <div
            style={{
              display: "flex",
              fontSize: "28px",
              color: "#4A5568",
              textAlign: "center",
              lineHeight: 1.6,
              marginBottom: "40px",
            }}
          >
            {result.description}
          </div>

          {/* 구분선 */}
          <div
            style={{
              display: "flex",
              width: "100px",
              height: "4px",
              backgroundColor: gradient[0],
              borderRadius: "2px",
              marginBottom: "40px",
            }}
          />

          {/* 명언 */}
          <div
            style={{
              display: "flex",
              fontSize: "24px",
              color: gradient[0],
              fontStyle: "italic",
              textAlign: "center",
            }}
          >
            {result.quote}
          </div>
        </div>

        {/* 하단 브랜딩 */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "60px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: "24px",
              color: "rgba(255,255,255,0.9)",
              marginBottom: "10px",
            }}
          >
            너도 테스트 해봐!
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "20px",
              color: "rgba(255,255,255,0.7)",
            }}
          >
            newyear-goal.vercel.app
          </div>
        </div>
      </div>
    ),
    {
      width: 1080,
      height: 1920,
    }
  );
}
