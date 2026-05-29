import type { Metadata } from "next";
import Link from "next/link";
import {
  Scale,
  Camera,
  Clock,
  Wrench,
  FileText,
  AlertTriangle,
  Image as ImageIcon,
  Wifi,
  Eye,
  CheckCircle,
} from "lucide-react";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import FeatureCard from "@/components/FeatureCard";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "CabinVerify — Local Eyes. Neutral Proof.",
  description:
    "Neutral third-party visual verification for Smoky Mountain short-term rental owners and property managers. We visit. We document. You decide.",
  openGraph: {
    title: "CabinVerify — Local Eyes. Neutral Proof.",
    description:
      "When you need to know if a reported issue is real — without calling a contractor.",
    url: "https://cabinverify.com",
  },
};

const USE_CASES = [
  {
    icon: <Wrench size={24} />,
    title: "Repair or replace?",
    body: "Owner isn't sure if a repair or full replacement is actually necessary.",
  },
  {
    icon: <FileText size={24} />,
    title: "PM needs owner approval",
    body: "Property manager needs neutral documentation to unlock owner sign-off.",
  },
  {
    icon: <AlertTriangle size={24} />,
    title: "Guest damage claim",
    body: "Reported damage needs photo-backed documentation before decisions are made.",
  },
  {
    icon: <ImageIcon size={24} />,
    title: "Listing accuracy",
    body: "Photos or listed amenities may no longer match what guests find on arrival.",
  },
  {
    icon: <Wifi size={24} />,
    title: "Tech not working",
    body: "Wi-Fi, smart lock, smart TV, or QR guidebook issue needs basic verification.",
  },
  {
    icon: <Eye size={24} />,
    title: "Second opinion",
    body: "Out-of-town owner wants a local set of eyes before committing to a vendor's recommendation.",
  },
];

const HOW_IT_WORKS_STEPS = [
  {
    number: 1,
    title: "Report it",
    description:
      "You tell us the issue and the property. We confirm availability and schedule a visit.",
  },
  {
    number: 2,
    title: "We visit",
    description:
      "We conduct a brief, focused site visit and document what we observe with photos and notes.",
  },
  {
    number: 3,
    title: "You decide",
    description:
      "You receive a structured report with photos, findings, and a clear verdict within 24–48 hours.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* JSON-LD LocalBusiness schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "CabinVerify",
            description:
              "Neutral third-party visual verification for Smoky Mountain short-term rental owners and property managers.",
            url: "https://cabinverify.com",
            areaServed: "Sevier County, Tennessee",
            priceRange: "$99",
          }),
        }}
      />

      {/* Section 1: Hero */}
      <HeroSection
        headline="Local Eyes. Neutral Proof."
        subhead="When you need to know if a reported issue is real — without calling a contractor."
        body="CabinVerify is a neutral third-party verification service for Smoky Mountain short-term rental owners and property managers. We visit. We document. You decide."
        showMountains
        ctas={
          <>
            <Button variant="accent" href="/contact">
              Request a Verification — $99
            </Button>
            <Button variant="secondary" href="/sample-report">
              See a Sample Report
            </Button>
          </>
        }
        tagline="Local eyes. Neutral proof. Faster owner decisions."
      />

      {/* Section 2: Trust Strip */}
      <SectionWrapper className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col items-start">
            <Scale size={32} className="text-smoky-forest mb-4" />
            <h3 className="text-hollow text-xl font-semibold mb-2">Neutral</h3>
            <p className="text-slate leading-relaxed">
              We don&rsquo;t repair, quote repairs, or receive vendor kickbacks.
              Our only product is accurate documentation.
            </p>
          </div>
          <div className="flex flex-col items-start">
            <Camera size={32} className="text-smoky-forest mb-4" />
            <h3 className="text-hollow text-xl font-semibold mb-2">
              Photo-Backed
            </h3>
            <p className="text-slate leading-relaxed">
              Every report includes timestamped photos, a structured findings
              table, and a clear verdict.
            </p>
          </div>
          <div className="flex flex-col items-start">
            <Clock size={32} className="text-smoky-forest mb-4" />
            <h3 className="text-hollow text-xl font-semibold mb-2">
              Fast Turnaround
            </h3>
            <p className="text-slate leading-relaxed">
              Reports delivered within 24–48 hours of the site visit. When
              decisions are stuck, speed matters.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Section 3: Who We Serve */}
      <SectionWrapper className="bg-mist">
        <h2 className="text-hollow text-3xl font-semibold mb-10">
          Who uses CabinVerify?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded border border-mist p-6 shadow-sm">
            <h3 className="text-hollow text-lg font-semibold mb-2">
              Out-of-Town Owners
            </h3>
            <p className="text-slate leading-relaxed">
              You can&rsquo;t drive up every time someone reports a problem.
              We&rsquo;re your local eyes.
            </p>
          </div>
          <div className="bg-white rounded border border-mist p-6 shadow-sm">
            <h3 className="text-hollow text-lg font-semibold mb-2">
              Property Managers
            </h3>
            <p className="text-slate leading-relaxed">
              Get neutral documentation that helps owners approve repairs faster
              — without you being the one asking.
            </p>
          </div>
          <div className="bg-white rounded border border-mist p-6 shadow-sm">
            <h3 className="text-hollow text-lg font-semibold mb-2">
              Dispute Resolution
            </h3>
            <p className="text-slate leading-relaxed">
              When a guest claim, vendor report, or cleaner note creates
              uncertainty, a neutral third-party record resolves it.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Section 4: Use Cases */}
      <SectionWrapper className="bg-white">
        <h2 className="text-hollow text-3xl font-semibold mb-10">
          When to call CabinVerify
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {USE_CASES.map((item) => (
            <FeatureCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              body={item.body}
            />
          ))}
        </div>
      </SectionWrapper>

      {/* Section 5: How It Works (Summary) */}
      <section className="bg-ridge-night py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-white text-3xl font-semibold mb-14 text-center"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Three steps. One clear answer.
          </h2>
          <div className="relative">
            <div className="hidden md:block absolute top-8 left-16 right-16 h-px bg-white/15 z-0" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {HOW_IT_WORKS_STEPS.map((step) => (
                <div
                  key={step.number}
                  className="relative flex flex-col items-center text-center z-10"
                >
                  <div
                    className="w-16 h-16 rounded-full bg-amber text-white flex items-center justify-center text-2xl font-bold mb-4"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                  >
                    {step.number}
                  </div>
                  <h3 className="text-white text-lg font-semibold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-amber hover:text-white font-medium transition-colors"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Request a Verification →
            </Link>
          </div>
        </div>
      </section>

      {/* Section 6: Pricing */}
      <SectionWrapper className="bg-white">
        <div className="max-w-lg mx-auto">
          <div className="border border-smoky-forest rounded p-8">
            <div className="text-center mb-6">
              <span
                className="inline-block bg-mist text-smoky-forest text-xs font-medium px-3 py-1 rounded-sm uppercase tracking-widest mb-4"
                style={{ fontFamily: "var(--font-sans)", fontSize: "11px" }}
              >
                Simple STR Issue Verification
              </span>
              <div
                className="text-5xl text-smoky-forest font-bold mb-1"
                style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
              >
                $99
              </div>
              <p className="text-slate text-sm">per issue, per property</p>
            </div>
            <ul className="space-y-3 mb-6">
              {[
                "One reported issue, one property",
                "Short on-site visit",
                "Timestamped photo documentation",
                "Concise owner-facing summary report",
                "Clear finding: Verified / Not Verified / Inconclusive / Refer to Vendor",
                "Delivered within 24–48 hours",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle
                    size={18}
                    className="text-smoky-forest mt-0.5 flex-shrink-0"
                  />
                  <span className="text-slate text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-slate/70 text-xs text-center mb-6">
              Additional issues at the same property during the same visit: $25
              each
            </p>
            <div className="text-center">
              <Button variant="primary" href="/contact" className="w-full justify-center">
                Request a Verification
              </Button>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Section 7: Credibility / About Snippet */}
      <SectionWrapper className="bg-mist">
        <h2 className="text-hollow text-3xl font-semibold mb-10">
          Why trust CabinVerify?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-slate leading-relaxed text-base mb-4">
              CabinVerify is operated by a Sevier County-based business owner
              with an MBA, strong documentation discipline from a background as
              a U.S. Navy chaplain, and no financial ties to any repair or
              replacement vendor. That last point matters most.
            </p>
            <p className="text-slate leading-relaxed text-base">
              We don&rsquo;t profit from the outcome of our findings — only from
              accurate documentation.
            </p>
          </div>
          <div className="bg-white border-l-4 border-amber p-6">
            <p className="text-slate leading-relaxed text-sm">
              We are not a home inspector. Not a contractor. Not an insurance
              adjuster. Our scope is narrow on purpose: visible conditions,
              photo-backed, neutrally documented.
            </p>
            <p className="text-slate leading-relaxed text-sm mt-3">
              That&rsquo;s what makes the report useful.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Section 8: Limitations Disclosure */}
      <section className="bg-mist border-t border-slate/10 py-10">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <p className="text-slate text-sm leading-relaxed">
            CabinVerify documents visible conditions only. Our reports are not
            licensed home inspections, safety certifications, engineering
            opinions, insurance adjustments, or repair estimates. Findings
            reflect observable conditions at the time of the visit.
          </p>
        </div>
      </section>

      {/* Section 9: Final CTA */}
      <section className="bg-smoky-forest py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-white text-3xl font-semibold mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Get a clear answer — fast.
          </h2>
          <p className="text-white/75 text-base mb-8 max-w-md mx-auto">
            One visit. One report. One decision you can make with confidence.
          </p>
          <Button variant="accent" href="/contact" className="px-8 py-3 text-base">
            Request a Verification — $99
          </Button>
        </div>
      </section>
    </>
  );
}
