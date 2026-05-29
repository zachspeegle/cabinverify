import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import StepList from "@/components/StepList";
import Badge from "@/components/Badge";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "How CabinVerify Works",
  description:
    "Three steps to a clear answer. Learn how CabinVerify's focused verification process works for Smoky Mountain STR owners and property managers.",
  openGraph: {
    title: "How CabinVerify Works",
    url: "https://cabinverify.com/how-it-works",
  },
};

const STEPS = [
  {
    number: 1,
    title: "Submit a request",
    description:
      "You contact us via form or email with the property address, the reported issue, and your contact information. We'll confirm receipt within one business day.",
  },
  {
    number: 2,
    title: "We confirm and schedule",
    description:
      "We confirm availability and schedule the site visit, typically within 1–3 business days of your request.",
  },
  {
    number: 3,
    title: "We conduct the visit",
    description:
      "We conduct a focused site visit — observing, photographing, and noting visible conditions related to the reported issue. We do not diagnose causes or speculate about history.",
  },
  {
    number: 4,
    title: "We write the report",
    description:
      "We write the report using our standard structure: findings table, photo evidence, and an overall verdict. Plain language. No contractor recommendations.",
  },
  {
    number: 5,
    title: "You receive the report",
    description:
      "You receive the report via email within 24–48 hours of the site visit. The report is yours to use as documentation for owner decisions, vendor conversations, or dispute records.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        headline="How CabinVerify Works"
        subhead="A focused, structured process — from reported issue to documented verdict."
      />

      {/* The Problem */}
      <SectionWrapper className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-hollow text-3xl font-semibold mb-6">
              The decision paralysis problem
            </h2>
            <p className="text-slate leading-relaxed mb-4">
              Someone reports something is broken. You&rsquo;re three states
              away. Your property manager is waiting for your call. Your vendor
              gave you a number. But is the thing actually broken?
            </p>
            <p className="text-slate leading-relaxed mb-4">
              That uncertainty — the gap between a report and a confirmed
              finding — is where owner decisions stall. It&rsquo;s not that
              owners don&rsquo;t want to act. It&rsquo;s that acting without
              information feels like guessing. And guessing on a $2,000 repair
              or a $600 replacement feels risky.
            </p>
            <p className="text-slate leading-relaxed">
              CabinVerify exists to close that gap. Not with an opinion, and not
              with a repair quote. With documented, photo-backed, neutral
              observation.
            </p>
          </div>
          <div className="bg-mist border-l-4 border-smoky-forest p-6">
            <p
              className="text-smoky-forest text-base"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 300,
                fontStyle: "italic",
              }}
            >
              &ldquo;You can&rsquo;t make a confident repair decision based on a
              text message from a cleaner and a quote from the first vendor who
              picked up the phone.&rdquo;
            </p>
            <p className="text-slate text-sm mt-4">
              A neutral third-party record changes the dynamic — for owners,
              property managers, and vendors alike.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* What We Do */}
      <SectionWrapper className="bg-mist">
        <div className="max-w-3xl">
          <h2 className="text-hollow text-3xl font-semibold mb-6">
            What CabinVerify does
          </h2>
          <p className="text-slate leading-relaxed mb-4">
            We conduct brief, focused site visits to document visible conditions
            related to a specific reported issue. We photograph what we see,
            note our observations in a structured table, and assign an overall
            finding from four possible verdicts.
          </p>
          <p className="text-slate leading-relaxed mb-4">
            We do not diagnose root causes. We do not speculate about how long a
            condition has existed. We do not recommend specific contractors or
            vendors. We do not repair anything.
          </p>
          <p className="text-slate leading-relaxed">
            Our scope is narrow by design. A narrow scope is what makes the
            documentation trustworthy. When a verifier has no financial stake in
            the outcome, the report carries weight that a vendor&rsquo;s
            assessment often cannot.
          </p>
        </div>
      </SectionWrapper>

      {/* Step-by-Step */}
      <SectionWrapper className="bg-white">
        <div className="max-w-2xl">
          <h2 className="text-hollow text-3xl font-semibold mb-10">
            The process, step by step
          </h2>
          <StepList steps={STEPS} orientation="vertical" />
        </div>
      </SectionWrapper>

      {/* What's in the Report */}
      <SectionWrapper className="bg-mist">
        <h2 className="text-hollow text-3xl font-semibold mb-8">
          What&rsquo;s in the report
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <ul className="space-y-4">
              {[
                {
                  label: "Property info",
                  desc: "Address, visit date, and report reference number.",
                },
                {
                  label: "Issue summary",
                  desc: "The issue as reported to us, stated plainly.",
                },
                {
                  label: "Observation findings table",
                  desc: "A structured table of what we observed, item by item, with condition notes.",
                },
                {
                  label: "Overall verdict badge",
                  desc: "One of four findings: Verified, Not Verified, Inconclusive, or Refer to Vendor.",
                },
                {
                  label: "Photo evidence",
                  desc: "Timestamped photos of relevant conditions, captioned for clarity.",
                },
                {
                  label: "Plain-English owner note",
                  desc: "A brief summary written for the owner — not for a contractor or adjuster.",
                },
                {
                  label: "Scope limitations",
                  desc: "A footer reminding all parties what the report does and does not constitute.",
                },
              ].map((item) => (
                <li key={item.label} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-smoky-forest mt-2 flex-shrink-0" />
                  <div>
                    <span className="text-hollow font-medium text-sm">
                      {item.label}
                    </span>
                    <span className="text-slate text-sm"> — {item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-slate text-sm mb-4">
              Want to see a full example before requesting?
            </p>
            <Button variant="primary" href="/sample-report">
              View Sample Report
            </Button>
          </div>
        </div>
      </SectionWrapper>

      {/* Finding Verdicts Explained */}
      <SectionWrapper className="bg-white">
        <h2 className="text-hollow text-3xl font-semibold mb-10">
          Finding verdicts explained
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-mist rounded p-6">
            <Badge variant="verified" className="mb-4" />
            <p className="text-slate text-sm leading-relaxed mt-3">
              The reported issue was clearly present and visible at the time of
              our visit. Photo documentation supports this finding.
            </p>
          </div>
          <div className="border border-mist rounded p-6">
            <Badge variant="not-verified" className="mb-4" />
            <p className="text-slate text-sm leading-relaxed mt-3">
              We did not observe the reported issue during our visit. Conditions
              appeared normal based on visible evidence.
            </p>
          </div>
          <div className="border border-mist rounded p-6">
            <Badge variant="inconclusive" className="mb-4" />
            <p className="text-slate text-sm leading-relaxed mt-3">
              Visible evidence was present but insufficient to confirm or rule
              out the reported issue. Documentation is provided; owner judgment
              required.
            </p>
          </div>
          <div className="border border-mist rounded p-6">
            <Badge variant="refer-to-vendor" className="mb-4" />
            <p className="text-slate text-sm leading-relaxed mt-3">
              The condition observed requires professional assessment beyond
              visual documentation. A licensed professional should evaluate.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Scope Limitations */}
      <SectionWrapper className="bg-mist">
        <div className="max-w-3xl">
          <h2 className="text-hollow text-2xl font-semibold mb-4">
            What CabinVerify does not do
          </h2>
          <p className="text-slate leading-relaxed mb-4">
            CabinVerify documents visible conditions only. Our reports are not
            licensed home inspections, safety certifications, engineering
            opinions, insurance adjustments, or repair estimates.
          </p>
          <p className="text-slate leading-relaxed mb-4">
            We do not determine cause or assign fault. We do not access
            electrical panels, crawl spaces, roofing, or any area that requires
            a licensed professional to assess. We do not make repair
            recommendations or endorse any specific vendor.
          </p>
          <p className="text-slate leading-relaxed">
            Findings reflect observable conditions at the time of the visit and
            are provided for the owner&rsquo;s information only. This report
            does not substitute for a licensed professional assessment.
          </p>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section className="bg-smoky-forest py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-white text-3xl font-semibold mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Ready to get a clear answer?
          </h2>
          <p className="text-white/75 text-base mb-8">
            Submit your request and we&rsquo;ll schedule a visit.
          </p>
          <Button variant="accent" href="/contact" className="px-8 py-3 text-base">
            Request a Verification — $99
          </Button>
        </div>
      </section>
    </>
  );
}
