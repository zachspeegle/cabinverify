import Link from "next/link";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Services", href: "/services" },
  { label: "Sample Report", href: "/sample-report" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-ridge-night text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <span className="text-xl font-bold tracking-tight text-white" style={{ fontFamily: "var(--font-display)" }}>CabinVerify</span>
            <p
              className="mt-3 text-amber text-sm"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 300,
                fontStyle: "italic",
              }}
            >
              Local eyes. Neutral proof. Faster owner decisions.
            </p>
          </div>

          <div>
            <h3
              className="text-white/60 text-xs font-medium mb-4 uppercase tracking-widest"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Quick Links
            </h3>
            <ul className="space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3
              className="text-white/60 text-xs font-medium mb-4 uppercase tracking-widest"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Contact
            </h3>
            <address className="not-italic space-y-2">
              <p className="text-white/70 text-sm">
                <a
                  href="mailto:verify@cabinverify.com"
                  className="hover:text-white transition-colors"
                >
                  verify@cabinverify.com
                </a>
              </p>
              <p className="text-white/70 text-sm">
                Service area: Sevier County, TN
              </p>
            </address>
            <p className="mt-4 text-white/40 text-xs leading-relaxed">
              CabinVerify is not a licensed home inspector, contractor,
              engineer, or insurance adjuster.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/50 text-xs">© 2026 CabinVerify</p>
          <div className="flex gap-4">
            <Link
              href="/privacy"
              className="text-white/50 hover:text-white/80 text-xs transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-white/50 hover:text-white/80 text-xs transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
