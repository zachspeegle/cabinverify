import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <section className="bg-mist">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <p
          className="text-amber text-sm font-medium uppercase tracking-widest mb-3"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          Error 404
        </p>
        <h1
          className="text-hollow text-3xl md:text-4xl font-semibold mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          We couldn&rsquo;t find that page
        </h1>
        <p className="text-slate text-base leading-relaxed mb-8">
          The page you&rsquo;re looking for may have moved or never existed. Let&rsquo;s
          get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button variant="primary" href="/">
            Return Home
          </Button>
          <Button variant="accent" href="/contact">
            Request a Verification — $99
          </Button>
        </div>
        <p className="text-slate/60 text-sm mt-10">
          Or jump to{" "}
          <Link href="/how-it-works" className="text-smoky-forest hover:text-ridge-night underline underline-offset-2">
            How It Works
          </Link>
          ,{" "}
          <Link href="/services" className="text-smoky-forest hover:text-ridge-night underline underline-offset-2">
            Services
          </Link>
          , or the{" "}
          <Link href="/sample-report" className="text-smoky-forest hover:text-ridge-night underline underline-offset-2">
            Sample Report
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
