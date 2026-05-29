import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  body: string;
  className?: string;
}

export default function FeatureCard({
  icon,
  title,
  body,
  className = "",
}: FeatureCardProps) {
  return (
    <div
      className={`bg-white rounded border border-mist p-6 shadow-sm ${className}`}
    >
      <div className="text-smoky-forest mb-4">{icon}</div>
      <h3 className="text-hollow text-lg font-semibold mb-2">{title}</h3>
      <p className="text-slate text-base leading-relaxed">{body}</p>
    </div>
  );
}
