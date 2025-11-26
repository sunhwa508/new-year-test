import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "너에게 딱 맞는 새해 목표 찾기";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 64,
          background: "#fafaf9",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 24,
            color: "#a8a29e",
            marginBottom: 16,
          }}
        >
          올해도 작심삼일?
        </div>
        <div
          style={{
            fontSize: 56,
            color: "#1c1917",
            fontWeight: 900,
            textAlign: "center",
            lineHeight: 1.3,
          }}
        >
          너에게 딱 맞는
        </div>
        <div
          style={{
            fontSize: 56,
            color: "#1c1917",
            fontWeight: 900,
          }}
        >
          새해 목표 찾기
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#78716c",
            marginTop: 30,
          }}
        >
          10가지 질문이면 충분해
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
