import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";

export const metadata: Metadata = {
  title: "CabinVerify Insights — Resources for STR Owners and Property Managers",
  description:
    "Resources for short-term rental owners and property managers in the Smoky Mountain region.",
  openGraph: {
    title: "CabinVerify Insights",
    url: "https://cabinverify.com/blog",
  },
};

const ARTICLES = [
  {
    slug: "when-should-an-str-owner-get-a-neutral-second-opinion",
    title: "When Should an STR Owner Get a Neutral Second Opinion?",
    excerpt:
      "There are specific scenarios where calling a contractor first is the wrong move. Understanding when neutral documentation serves you better than an immediate repair quote.",
    date: "May 2026",
  },
  {
    slug: "how-property-managers-use-third-party-verification",
    title:
      "How Property Managers Use Third-Party Verification to Get Faster Owner Approval",
    excerpt:
      "The delay between a vendor quote and owner authorization is one of the most common friction points in STR property management. Neutral documentation changes that dynamic.",
    date: "May 2026",
  },
  {
    slug: "what-cabinverify-does-and-what-we-dont-do",
    title: "What CabinVerify Does (and What We Don't Do)",
    excerpt:
      "The clearest way to understand CabinVerify is to understand what it is not. A plain-language explanation of our scope, our limits, and why both matter.",
    date: "May 2026",
  },
];

export default function BlogPage() {
  return (
    <>
      <HeroSection
        headline="CabinVerify Insights"
        subhead="Resources for STR owners and property managers."
        body="Practical information about property verification, owner decision-making, and the STR management landscape in the Smoky Mountain region."
      />

      <SectionWrapper className="bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {ARTICLES.map((article) => (
              <article
                key={article.slug}
                className="border-b border-mist pb-8 last:border-0 last:pb-0"
              >
                <p className="text-slate/60 text-xs mb-2 uppercase tracking-widest" style={{ fontFamily: "var(--font-sans)", fontSize: "11px" }}>
                  {article.date}
                </p>
                <h2 className="text-hollow text-xl font-semibold mb-3">
                  <Link
                    href={`/blog/${article.slug}`}
                    className="hover:text-smoky-forest transition-colors"
                  >
                    {article.title}
                  </Link>
                </h2>
                <p className="text-slate leading-relaxed mb-4 text-sm">
                  {article.excerpt}
                </p>
                <Link
                  href={`/blog/${article.slug}`}
                  className="text-smoky-forest font-medium text-sm hover:text-ridge-night transition-colors"
                >
                  Read →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <section className="bg-mist border-t border-slate/10 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate text-sm mb-4">
            Have a question about our service or process?
          </p>
          <Link
            href="/contact"
            className="text-smoky-forest font-medium text-sm hover:text-ridge-night transition-colors"
          >
            Contact us →
          </Link>
        </div>
      </section>
    </>
  );
}
