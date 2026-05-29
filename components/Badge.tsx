type BadgeVariant = "verified" | "not-verified" | "inconclusive" | "refer-to-vendor";

interface BadgeProps {
  variant: BadgeVariant;
  className?: string;
}

const BADGE_CONFIG: Record<
  BadgeVariant,
  { label: string; className: string }
> = {
  verified: {
    label: "VERIFIED",
    className: "bg-smoky-forest text-white",
  },
  "not-verified": {
    label: "NOT VERIFIED",
    className: "bg-slate text-white",
  },
  inconclusive: {
    label: "INCONCLUSIVE",
    className: "bg-amber text-white",
  },
  "refer-to-vendor": {
    label: "REFER TO VENDOR",
    className: "border border-slate text-slate bg-white",
  },
};

export default function Badge({ variant, className = "" }: BadgeProps) {
  const { label, className: variantClass } = BADGE_CONFIG[variant];

  return (
    <span
      className={`inline-block px-3 py-1 font-medium uppercase tracking-widest ${variantClass} ${className}`}
      style={{
        fontFamily: "var(--font-sans)",
        fontSize: "12px",
        letterSpacing: "0.1em",
      }}
    >
      {label}
    </span>
  );
}
