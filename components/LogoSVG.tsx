interface LogoSVGProps {
  variant?: "dark" | "white";
  className?: string;
}

export default function LogoSVG({ variant = "dark", className = "" }: LogoSVGProps) {
  const iconColor = variant === "white" ? "#FFFFFF" : "#2E5E3E";
  const textColor = variant === "white" ? "#FFFFFF" : "#1C3829";

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        viewBox="0 0 52 32"
        width="42"
        height="26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Two mountain peaks — right peak descends into checkmark stroke */}
        <polyline
          points="2,28 12,9 21,20 32,3 39,16 46,9"
          stroke={iconColor}
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          color: textColor,
          fontSize: "1.2rem",
          letterSpacing: "0.02em",
          lineHeight: 1,
        }}
      >
        CabinVerify
      </span>
    </div>
  );
}
