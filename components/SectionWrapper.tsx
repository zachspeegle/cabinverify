import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  as?: "section" | "div" | "article";
}

export default function SectionWrapper({
  children,
  className = "",
  id,
  as: Tag = "section",
}: SectionWrapperProps) {
  return (
    <Tag id={id} className={`py-20 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </Tag>
  );
}
