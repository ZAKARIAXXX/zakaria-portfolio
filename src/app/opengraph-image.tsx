import { ImageResponse } from "next/og";

export const alt =
  "Zakaria Chelouati — Backend / Full-Stack Developer, Génie Logiciel";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Generated Open Graph card (LinkedIn / social link previews).
// Pure typography in the site's own design language — no stock art.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#120d1a",
          padding: "64px 72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              width: 64,
              height: 6,
              backgroundColor: "#bc96ec",
              marginBottom: 28,
            }}
          />
          <div
            style={{
              fontSize: 24,
              letterSpacing: 8,
              color: "#bc96ec",
              textTransform: "uppercase",
            }}
          >
            Portfolio — Salé, Morocco
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 96,
              fontWeight: 800,
              lineHeight: 1.02,
              color: "#f7f3ec",
              letterSpacing: -2,
            }}
          >
            Zakaria Chelouati
          </div>
          <div
            style={{
              fontSize: 42,
              color: "#e7e2f2",
              marginTop: 26,
              fontWeight: 600,
            }}
          >
            Backend / Full-Stack Developer — Génie Logiciel
          </div>
          <div style={{ fontSize: 29, color: "#a79fc0", marginTop: 14 }}>
            I build software — and then I try to break it. AppSec · Hack The
            Box
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(188,150,236,0.35)",
            paddingTop: 26,
          }}
        >
          <div style={{ fontSize: 27, color: "#bc96ec", fontWeight: 600 }}>
            CampusLoop · Wasla · Sentinel VAC
          </div>
          <div style={{ fontSize: 24, color: "#8f87a8" }}>
            zakaria-portfolio-inky.vercel.app
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
