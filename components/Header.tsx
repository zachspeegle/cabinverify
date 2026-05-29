"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Services", href: "/services" },
  { label: "Sample Report", href: "/sample-report" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-mist shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" aria-label="CabinVerify home">
            <span className="text-xl font-bold tracking-tight text-smoky-forest" style={{ fontFamily: "var(--font-display)" }}>CabinVerify</span>
          </Link>

          <nav
            className="hidden md:flex items-center gap-6"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-smoky-forest"
                    : "text-slate hover:text-smoky-forest"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              href="/contact"
              className="bg-smoky-forest text-white text-sm font-medium px-5 py-2 rounded-sm hover:bg-ridge-night transition-colors"
            >
              Request a Verification
            </Link>
          </div>

          <button
            className="md:hidden p-2 text-slate hover:text-hollow transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-white border-t border-mist"
        >
          <nav
            className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1"
            aria-label="Mobile navigation"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`text-sm font-medium py-2 px-3 rounded-sm transition-colors ${
                  pathname === link.href
                    ? "bg-mist text-smoky-forest"
                    : "text-slate hover:text-smoky-forest hover:bg-mist"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="bg-smoky-forest text-white text-sm font-medium px-4 py-2 rounded-sm hover:bg-ridge-night transition-colors mt-2 text-center"
            >
              Request a Verification
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
