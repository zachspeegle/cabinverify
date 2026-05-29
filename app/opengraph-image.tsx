import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";

export const alt = "CabinVerify — Local Eyes. Neutral Proof.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const [iconData, montserratBold, montserratRegular] = await Promise.all([
    readFile(join(process.cwd(), "assets/icon.png")),
    readFile(join(process.cwd(), "assets/montserrat-700.ttf")),
    readFile(join(process.cwd(), "assets/montserrat-400.ttf")),
  ]);

  const iconSrc = `data:image/png;base64,${iconData.toString("base64")}`;

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
          backgroundImage: "linear-gradient(135deg, #1C3829 0%, #2E5E3E 100%)",
          fontFamily: "Montserrat",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={iconSrc} alt="" width={220} height={220} />
        <div
          style={{
            display: "flex",
            fontSize: 84,
            fontWeight: 700,
            color: "#FFFFFF",
            letterSpacing: "0.02em",
            marginTop: 36,
          }}
        >
          CabinVerify
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 36,
            fontWeight: 400,
            color: "#C2A05A",
            letterSpacing: "0.04em",
            marginTop: 12,
          }}
        >
          Local Eyes. Neutral Proof.
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Montserrat", data: montserratBold, weight: 700, style: "normal" },
        { name: "Montserrat", data: montserratRegular, weight: 400, style: "normal" },
      ],
    }
  );
}
