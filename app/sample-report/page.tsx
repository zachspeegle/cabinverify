import type { Metadata } from "next";
import { Camera } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import Badge from "@/components/Badge";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Sample CabinVerify Report — See What You'll Receive",
  description:
    "Preview a CabinVerify verification report. See the structured findings table, photo documentation, and clear verdict format before requesting.",
  openGraph: {
    title: "Sample CabinVerify Report",
    url: "https://cabinverify.com/sample-report",
  },
};

const OBSERVATIONS = [
  {
    item: "Hot tub cover — surface",
    observation: "Visible cracking along both fold edges. Vinyl split in two distinct locations, approximately 6\" each. No puncture observed.",
    condition: "Moderate–Severe",
    conditionClass: "text-amber",
  },
  {
    item: "Hot tub cover — foam core",
    observation: "Foam exposed at front-left corner. Discoloration consistent with moisture exposure. Minor saturation visible on palpation.",
    condition: "Moderate",
    conditionClass: "text-amber",
  },
  {
    item: "Hot tub cover — tie straps",
    observation: "Two of four tie straps intact and functional. Two straps frayed or missing hardware. Cover is not fully securable.",
    condition: "Minor–Moderate",
    conditionClass: "text-slate",
  },
  {
    item: "Hot tub cover — fit and seal",
    observation: "Cover fits tub perimeter. No visible gaps at contact points. Thermal seal condition cannot be visually verified.",
    condition: "Normal",
    conditionClass: "text-smoky-forest",
  },
];

const PHOTO_CAPTIONS = [
  "Front-left corner — vinyl split and foam exposure visible",
  "Full cover overview — condition at time of visit",
  "Fold edge cracking — detail view, right side",
  "Tie strap condition — frayed hardware, rear right",
];

export default function SampleReportPage() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        headline="See What You'll Receive"
        subhead="Every CabinVerify report follows the same structured format — findings table, photo evidence, and a clear verdict."
        body="The example below is a fictional property with a fictional reported issue. The format, structure, and language are representative of actual reports."
      />

      {/* Report Preview */}
      <SectionWrapper className="bg-mist">
        <div className="max-w-3xl mx-auto">
          {/* Report Document */}
          <div className="bg-white border border-mist rounded shadow-sm overflow-hidden">
            {/* Report Header */}
            <div className="bg-ridge-night px-6 py-5 flex items-center justify-between flex-wrap gap-4">
              <span className="text-xl font-bold tracking-tight text-white" style={{ fontFamily: "var(--font-display)" }}>CabinVerify</span>
              <div className="text-right">
                <p className="text-white/60 text-xs uppercase tracking-widest" style={{ fontFamily: "var(--font-sans)", fontSize: "10px" }}>
                  Verification Report
                </p>
                <p className="text-amber text-sm font-medium">CVR-2026-0041</p>
              </div>
            </div>

            <div className="px-6 py-6">
              {/* Property Info Table */}
              <div className="mb-6">
                <h3 className="text-hollow text-sm font-semibold mb-3 uppercase tracking-widest" style={{ fontSize: "11px" }}>
                  Property Information
                </h3>
                <table className="w-full text-sm border border-mist rounded overflow-hidden">
                  <tbody>
                    {[
                      ["Property Name", "Smoky Ridge Cabin"],
                      ["Address", "123 Ridgeline Dr., Gatlinburg, TN 37738"],
                      ["Visit Date", "April 14, 2026"],
                      ["Report Issued", "April 15, 2026"],
                    ].map(([label, value]) => (
                      <tr key={label} className="border-b border-mist last:border-0">
                        <td className="bg-mist/50 px-4 py-2 text-slate text-xs font-medium w-36">
                          {label}
                        </td>
                        <td className="px-4 py-2 text-hollow text-xs">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Issue Summary */}
              <div className="mb-6">
                <h3 className="text-hollow text-sm font-semibold mb-3 uppercase tracking-widest" style={{ fontSize: "11px" }}>
                  Issue Reported
                </h3>
                <div className="bg-mist rounded p-4">
                  <p className="text-slate text-sm leading-relaxed">
                    Hot tub cover reportedly cracked and deteriorating. Property
                    manager noted split vinyl and possible water absorption.
                    Owner requested neutral documentation before authorizing
                    replacement.
                  </p>
                </div>
              </div>

              {/* Observation Findings Table */}
              <div className="mb-6">
                <h3 className="text-hollow text-sm font-semibold mb-3 uppercase tracking-widest" style={{ fontSize: "11px" }}>
                  Observation Findings
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border border-mist rounded overflow-hidden">
                    <thead>
                      <tr className="bg-ridge-night text-white">
                        <th className="text-left px-3 py-2 text-xs font-medium tracking-wide w-1/4">
                          Item
                        </th>
                        <th className="text-left px-3 py-2 text-xs font-medium tracking-wide">
                          Observation
                        </th>
                        <th className="text-left px-3 py-2 text-xs font-medium tracking-wide w-28">
                          Condition
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {OBSERVATIONS.map((row, i) => (
                        <tr
                          key={row.item}
                          className={`border-b border-mist last:border-0 ${i % 2 === 1 ? "bg-mist/30" : ""}`}
                        >
                          <td className="px-3 py-3 text-hollow text-xs font-medium align-top">
                            {row.item}
                          </td>
                          <td className="px-3 py-3 text-slate text-xs align-top leading-relaxed">
                            {row.observation}
                          </td>
                          <td className={`px-3 py-3 text-xs font-medium align-top ${row.conditionClass}`}>
                            {row.condition}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Overall Finding */}
              <div className="mb-6">
                <h3 className="text-hollow text-sm font-semibold mb-3 uppercase tracking-widest" style={{ fontSize: "11px" }}>
                  Overall Finding
                </h3>
                <div className="flex items-center gap-4">
                  <Badge variant="verified" />
                  <p className="text-slate text-xs">
                    Reported issue was present and visible at time of visit.
                  </p>
                </div>
              </div>

              {/* Photo Evidence */}
              <div className="mb-6">
                <h3 className="text-hollow text-sm font-semibold mb-3 uppercase tracking-widest" style={{ fontSize: "11px" }}>
                  Photo Evidence
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {PHOTO_CAPTIONS.map((caption) => (
                    <div key={caption}>
                      <div className="bg-mist rounded border border-mist/60 flex items-center justify-center aspect-video">
                        <div className="text-center">
                          <Camera size={24} className="text-slate/30 mx-auto mb-1" />
                          <p className="text-slate/30 text-xs">Photo</p>
                        </div>
                      </div>
                      <p className="text-slate/60 text-xs mt-1 leading-tight">
                        {caption}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Plain-English Owner Note */}
              <div className="mb-6">
                <h3 className="text-hollow text-sm font-semibold mb-3 uppercase tracking-widest" style={{ fontSize: "11px" }}>
                  Owner Note
                </h3>
                <div className="bg-mist rounded p-4">
                  <p className="text-slate text-sm leading-relaxed">
                    The reported hot tub cover damage was present and visible at
                    the time of our visit. Two locations of vinyl splitting and
                    exposed foam were documented, along with two non-functional
                    tie straps. Functional cover condition is reduced. This
                    documentation may support a replacement decision. Owner
                    should determine appropriate next steps based on this record.
                  </p>
                </div>
              </div>

              {/* Scope Limitations Footer */}
              <div className="border-t border-mist pt-4">
                <p className="text-slate/50 text-xs leading-relaxed">
                  This report documents visible conditions only. CabinVerify is
                  not a licensed home inspector, contractor, engineer, or
                  insurance adjuster. Findings reflect observable conditions at
                  the time of the visit and do not constitute a safety
                  certification, engineering opinion, or repair estimate. This
                  report is not a substitute for a licensed professional
                  assessment.
                </p>
              </div>
            </div>
          </div>

          {/* Download CTA */}
          <div className="text-center mt-8">
            {/* TODO: Replace placeholder with real PDF when available */}
            <a
              href="/sample-report.pdf"
              className="inline-flex items-center gap-2 text-smoky-forest hover:text-ridge-night font-medium text-sm transition-colors"
            >
              Download the sample report (PDF)
            </a>
            <p className="text-slate/50 text-xs mt-1">
              {/* PDF placeholder — replace /sample-report.pdf with the real file when ready */}
              PDF version coming soon
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section className="bg-smoky-forest py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-white text-3xl font-semibold mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Ready to request your own verification?
          </h2>
          <p className="text-white/75 text-base mb-8">
            Submit a request and we&rsquo;ll schedule a visit.
          </p>
          <Button variant="accent" href="/contact" className="px-8 py-3 text-base">
            Request a Verification — $99
          </Button>
        </div>
      </section>
    </>
  );
}
