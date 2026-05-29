import { ReactNode } from "react";

interface HeroSectionProps {
  headline: string;
  subhead?: string;
  body?: string;
  ctas?: ReactNode;
  tagline?: string;
  dark?: boolean;
  className?: string;
}

export default function HeroSection({
  headline,
  subhead,
  body,
  ctas,
  tagline,
  dark = true,
  className = "",
}: HeroSectionProps) {
  return (
    <section
      className={`py-24 md:py-32 ${
        dark ? "bg-ridge-night" : "bg-mist"
      } ${className}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
