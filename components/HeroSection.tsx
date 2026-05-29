import { ReactNode } from "react";

interface HeroSectionProps {
  headline: string;
  subhead?: string;
  body?: string;
  ctas?: ReactNode;
  tagline?: string;
  dark?: boolean;
  showMountains?: boolean;
  className?: string;
}

export default function HeroSection({
  headline,
  subhead,
  body,
  ctas,
  tagline,
  dark = true,
  showMountains = false,
  className = "",
}: HeroSectionProps) {
  return (
    <section
      className={`relative overflow-hidden py-24 md:py-32 ${
        dark ? "bg-ridge-night" : "bg-mist"
      } ${className}`}
    >
      {showMountains && (
        <div
          className="absolute inset-y-0 right-0 w-1/2 pointer-events-none"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 500 300"
            className="w-full h-full"
            preserveAspectRatio="xMaxYMax meet"
            style={{ opacity: 0.07 }}
          >
            <polyline
              points="0,300 60,160 110,220 180,80 250,190 320,50 380,150 440,90 500,130 500,300"
              fill="white"
              stroke="none"
            />
            <polyline
              points="100,300 150,200 200,260 270,140 330,240 400,100 460,180 500,150 500,300"
              fill="white"
              stroke="none"
              opacity="0.5"
            />
          </svg>
        </div>
      )}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1
          className={`text-4xl md:text-5xl lg:text-6xl mb-6 ${
            dark ? "text-white" : "text-hollow"
          }`}
          style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
        >
          {headline}
        </h1>
        {subhead && (
          <p
            className={`text-xl mb-4 max-w-2xl ${
              dark ? "text-white/80" : "text-slate"
            }`}
          >
            {subhead}
          </p>
        )}
        {body && (
          <p
            className={`text-base mb-8 max-w-2xl leading-relaxed ${
              dark ? "text-white/65" : "text-slate"
            }`}
          >
            {body}
          </p>
        )}
        {ctas && <div className="flex flex-wrap gap-4 mb-6">{ctas}</div>}
        {tagline && (
          <p
            className="text-amber text-base mt-2"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 300,
              fontStyle: "italic",
            }}
          >
            {tagline}
          </p>
        )}
      </div>
    </section>
  );
}
