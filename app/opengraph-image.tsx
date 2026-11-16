import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
          background: "#fff",
          color: "#000",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 24, letterSpacing: 4, color: "#737373", textTransform: "uppercase" }}>
          {site.stackLine}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 112, fontWeight: 700, letterSpacing: -4, lineHeight: 1.05 }}>
            {site.name}
          </div>
          <div style={{ fontSize: 72, fontWeight: 700, letterSpacing: -3, color: "#737373", lineHeight: 1.1 }}>
            {`${site.role}.`}
          </div>
        </div>
        <div style={{ height: 2, background: "#000" }} />
      </div>
    ),
    size,
  );
}
