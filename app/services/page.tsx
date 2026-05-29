import type { Metadata } from "next";
import { CheckCircle, XCircle } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "CabinVerify Services — Visual Verification for STR Properties",
  description:
    "The $99 Simple STR Issue Verification service. Neutral photo-backed documentation for short-term rental owners and property managers in Sevier County, TN.",
  openGraph: {
    title: "CabinVerify Services",
    url: "https://cabinverify.com/services",
  },
};

const USE_CASE_MATRIX = [
  {
    title: "Repair or replace?",
    description:
      "Owner needs to know if a specific item requires repair or full replacement before authorizing spend.",
    goodFor:
      "Out-of-town owners who can't evaluate the condition themselves and want documentation before committing.",
  },
  {
    title: "PM needs owner approval",
    description:
      "Property manager has a vendor quote but needs owner authorization. Owner is hesitant without a neutral view.",
    goodFor:
      "PMs managing properties for absent owners who need documentation to move repair decisions forward.",
  },
  {
    title: "Guest damage claim",
    description:
      "A guest reported damage or a damage claim is in dispute. Documentation is needed before decisions are made.",
    goodFor:
      "Owners and PMs who need a dated, photo-backed record of visible conditions tied to a specific guest stay.",
  },
  {
    title: "Listing accuracy",
    description:
      "Amenities listed in the property's booking profile may no longer reflect current conditions.",
    goodFor:
      "Owners who haven't visited the property recently and want confirmation that photos and features are accurate.",
  },
  {
    title: "Tech not working",
    description:
      "Smart lock, Wi-Fi, smart TV, or QR code guest guide is reported non-functional. Basic verification needed.",
    goodFor:
      "Owners and PMs who need to confirm whether an issue is device failure, connectivity, or guest error.",
  },
  {
    title: "Second opinion",
    description:
      "Owner received a vendor recommendation and wants a neutral set of eyes on the property before deciding.",
    goodFor:
      "Out-of-town owners who want verification of a vendor's assessment before authorizing a significant repair.",
  },
];

const WE_DO = [
  "Document visible conditions at the time of visit",
  "Photograph relevant conditions with timestamps",
  "Complete a structured findings table per issue",
  "Issue a clear verdict: Verified, Not Verified, Inconclusive, or Refer to Vendor",
  "Write a plain-English owner note with each report",
  "Deliver reports via email within 24–48 hours of the visit",
];

const WE_DONT = [
  "Diagnose the cause of a condition or assign fault",
  "Repair, quote, or recommend specific vendors",
  "Access areas requiring a licensed professional",
  "Provide engineering, structural, or code opinions",
  "Issue safety certifications or insurance documents",
  "Make decisions on the owner's behalf",
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        headline="CabinVerify Services"
        subhead="Neutral verification for STR decisions."
        body="One focused service. One clear scope. Designed for short-term rental owners and property managers who need documentation, not opinions."
      />

      {/* Primary Service Card */}
      <SectionWrapper className="bg-white">
        <div className="max-w-2xl mx-auto border border-smoky-forest rounded p-8 md:p-10">
          <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
            <div>
              <span
                className="inline-block bg-mist text-smoky-forest text-xs font-medium px-3 py-1 rounded-sm uppercase tracking-widest mb-3"
                style={{ fontFamily: "var(--font-sans)", fontSize: "11px" }}
              >
                Primary Service
              </span>
              <h2
                className="text-hollow text-2xl font-semibold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Simple STR Issue Verification
              </h2>
            </div>
            <div
              className="text-4xl text-smoky-forest font-bold"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
            >
              $99
            </div>
          </div>
          <ul className="space-y-3 mb-6">
            {[
              "One reported issue, one property",
              "Short, focused on-site visit",
              "Timestamped photo documentation",
              "Structured findings table",
              "Clear verdict: Verified / Not Verified / Inconclusive / Refer to Vendor",
              "Plain-English owner note",
              "Delivered within 24–48 hours of the visit",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle
                  size={17}
                  className="text-smoky-forest mt-0.5 flex-shrink-0"
                />
                <span className="text-slate text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-slate/70 text-xs mb-6">
            Additional issues at the same property during the same visit: $25
            each
          </p>
          <Button variant="primary" href="/contact" className="w-full justify-center">
            Request a Verification
          </Button>
        </div>
      </SectionWrapper>

      {/* Use Case Matrix */}
      <SectionWrapper className="bg-mist">
        <h2 className="text-hollow text-3xl font-semibold mb-10">
          Common use cases
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {USE_CASE_MATRIX.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded border border-mist p-6 shadow-sm"
            >
              <h3 className="text-hollow text-base font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-slate text-sm leading-relaxed mb-3">
                {item.description}
              </p>
              <p className="text-smoky-forest text-xs leading-relaxed">
                <span className="font-medium">Good fit for:</span>{" "}
                {item.goodFor}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* What We Don't Do */}
      <SectionWrapper className="bg-white">
        <h2 className="text-hollow text-3xl font-semibold mb-10">
          What CabinVerify does — and what we don&rsquo;t
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-smoky-forest text-base font-semibold mb-4 flex items-center gap-2">
              <CheckCircle size={18} />
              We do
            </h3>
            <ul className="space-y-3">
              {WE_DO.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-smoky-forest mt-2 flex-shrink-0" />
                  <span className="text-slate text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-slate text-base font-semibold mb-4 flex items-center gap-2">
              <XCircle size={18} />
              We don&rsquo;t
            </h3>
            <ul className="space-y-3">
              {WE_DONT.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate/50 mt-2 flex-shrink-0" />
                  <span className="text-slate text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 bg-mist border-l-4 border-amber p-5 max-w-2xl">
          <p className="text-slate text-sm leading-relaxed">
            The &ldquo;We don&rsquo;t&rdquo; column is not a limitation — it is
            the feature. CabinVerify&rsquo;s value comes from having no
            financial stake in the outcome. A verifier with nothing to sell is
            the only verifier whose report can be trusted by everyone.
          </p>
        </div>
      </SectionWrapper>

      {/* Coming Soon */}
      <SectionWrapper className="bg-mist">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-hollow text-2xl font-semibold">
              Additional service tiers
            </h2>
            <span
              className="inline-block bg-slate/15 text-slate text-xs font-medium px-2 py-0.5 rounded-sm uppercase tracking-widest"
              style={{ fontFamily: "var(--font-sans)", fontSize: "10px" }}
            >
              In development
            </span>
          </div>
          <p className="text-slate leading-relaxed mb-6">
            The following service tiers are being developed and will be
            available in a future update. If you have a need that doesn&rsquo;t
            fit the current $99 service, contact us — we can discuss options.
          </p>
          <ul className="space-y-3">
            {[
              "Owner Dispute Documentation — structured documentation for owner-guest or owner-vendor disputes",
              "Listing Accuracy Verification — photo-by-photo comparison of current conditions against listing photos",
              "Multi-Issue Property Walk — a single visit covering multiple issues at the same property",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-slate/70 text-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-slate/30 mt-2 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section className="bg-smoky-forest py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-white text-3xl font-semibold mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Ready to get started?
          </h2>
          <p className="text-white/75 text-base mb-8">
            Submit a request and we&rsquo;ll follow up within one business day.
          </p>
          <Button variant="accent" href="/contact" className="px-8 py-3 text-base">
            Request a Verification — $99
          </Button>
        </div>
      </section>
    </>
  );
}
