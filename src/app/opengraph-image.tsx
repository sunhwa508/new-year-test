import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "나와 어울리는 2025 새해 목표는?";
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
        <div style={{ fontSize: 80, marginBottom: 20 }}>🎯</div>
        <div
          style={{
            fontSize: 48,
            color: "#1c1917",
            fontWeight: 700,
            marginBottom: 10,
          }}
        >
          나와 어울리는
        </div>
        <div
          style={{
            fontSize: 64,
            color: "#1c1917",
            fontWeight: 900,
          }}
        >
          2025 새해 목표는?
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#78716c",
            marginTop: 30,
          }}
        >
          10가지 질문으로 알아보는 나에게 딱 맞는 새해 목표
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
