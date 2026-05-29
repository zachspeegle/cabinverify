import Image from "next/image";

interface LogoSVGProps {
  variant?: "dark" | "white";
  className?: string;
}

export default function LogoSVG({ variant = "dark", className = "" }: LogoSVGProps) {
  // dark  = header (white bg)  → green icon, dark wordmark
  // white = footer (dark bg)   → amber icon, white wordmark
  const src = variant === "white" ? "/logo-dark.png" : "/logo-light.png";
  const alt = "CabinVerify";

  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={160}
        height={52}
        priority
        style={{ objectFit: "contain", height: "auto" }}
      />
    </div>
  );
}
