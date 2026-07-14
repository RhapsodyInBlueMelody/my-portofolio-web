import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Syeddinul Faiz Caniggia — Computer Science Student";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#1d2021",
          padding: "64px",
        }}
      >
        {/* terminal card */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
            borderRadius: "12px",
            border: "1px solid #3c3836",
            backgroundColor: "rgba(60,56,54,0.7)",
            overflow: "hidden",
          }}
        >
          {/* title bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "20px 28px",
              borderBottom: "1px solid #3c3836",
              backgroundColor: "#1d2021",
            }}
          >
            <div style={{ width: 16, height: 16, borderRadius: 999, backgroundColor: "#fb4934" }} />
            <div style={{ width: 16, height: 16, borderRadius: 999, backgroundColor: "#fabd2f" }} />
            <div style={{ width: 16, height: 16, borderRadius: 999, backgroundColor: "#b8bb26" }} />
            <div style={{ marginLeft: 16, fontSize: 22, color: "#a89984" }}>
              faiz@portfolio: ~
            </div>
          </div>

          {/* body */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "56px 64px",
              flex: 1,
              justifyContent: "center",
            }}
          >
            <div style={{ fontSize: 28, color: "#a89984", display: "flex" }}>
              ~ $ whoami
            </div>
            <div
              style={{
                fontSize: 64,
                color: "#fabd2f",
                fontWeight: 700,
                marginTop: 12,
                display: "flex",
              }}
            >
              Syeddinul Faiz Caniggia
            </div>
            <div style={{ fontSize: 30, color: "#d5c4a1", marginTop: 28, display: "flex" }}>
              Computer Science student — Universitas Pelita Bangsa
            </div>
            <div style={{ fontSize: 26, color: "#8ec07c", marginTop: 16, display: "flex" }}>
              Full-stack · IoT · Systems
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
