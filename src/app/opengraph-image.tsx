import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name}, ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// The card people see when the portfolio link is shared on LinkedIn, WhatsApp or Slack.
export default async function OpengraphImage() {
  const root = process.cwd();
  const [photo, regular, semibold] = await Promise.all([
    readFile(join(root, "public/images/joe-hero.jpg")),
    readFile(join(root, "src/app/fonts/Geist-400.ttf")),
    readFile(join(root, "src/app/fonts/Geist-600.ttf")),
  ]);
  const src = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 96px",
          background: "#ffffff",
          color: "#111827",
          fontFamily: "Geist",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 640 }}>
          <div style={{ fontSize: 88, fontWeight: 600, letterSpacing: -3.5, lineHeight: 1 }}>{site.name}</div>
          <div style={{ fontSize: 44, fontWeight: 600, color: "#2563eb", marginTop: 16, letterSpacing: -1.2 }}>
            {site.role}
          </div>
          <div style={{ fontSize: 28, color: "#374151", marginTop: 30, lineHeight: 1.45 }}>{site.intro}</div>
        </div>
        <div
          style={{
            position: "relative",
            display: "flex",
            width: 320,
            height: 320,
            borderRadius: 999,
            overflow: "hidden",
            border: "1px solid #e5e7eb",
            background: "#d5dee5",
          }}
        >
          {/* Zoomed in on head and shoulders from the hero photo (930 x 1080). */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} width={560} height={650} alt="" style={{ position: "absolute", left: -123, top: -110 }} />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Geist", data: regular, weight: 400, style: "normal" },
        { name: "Geist", data: semibold, weight: 600, style: "normal" },
      ],
    },
  );
}
