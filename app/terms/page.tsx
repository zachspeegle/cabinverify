import type { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";

export const metadata: Metadata = {
  title: "Terms of Service — CabinVerify",
  description: "CabinVerify terms of service.",
  openGraph: {
    title: "Terms of Service — CabinVerify",
    url: "https://cabinverify.com/terms",
  },
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-ridge-night py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1
            className="text-white text-4xl font-bold"
            style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
          >
            Terms of Service
          </h1>
          <p className="text-white/60 text-sm mt-3">Effective: May 2026</p>
        </div>
      </section>

      <SectionWrapper className="bg-white">
        <div className="max-w-3xl mx-auto text-slate space-y-8">
          <section>
            <h2 className="text-hollow text-xl font-semibold mb-3">
              Nature of the service
            </h2>
            <p className="leading-relaxed mb-3">
              CabinVerify provides visual observation and documentation services
              for short-term rental properties. The service consists of a
              focused site visit, photo documentation of visible conditions, and
              a written report summarizing observations related to a specific
              reported issue.
            </p>
            <p className="leading-relaxed">
              CabinVerify is not a licensed home inspection service, and reports
              produced by CabinVerify are not licensed home inspection reports.
              CabinVerify is not a contractor, engineer, insurance adjuster, or
              code compliance official. Nothing in a CabinVerify report
              constitutes a licensed professional opinion.
            </p>
          </section>

          <section>
            <h2 className="text-hollow text-xl font-semibold mb-3">
              Scope of findings
            </h2>
            <p className="leading-relaxed mb-3">
              All findings in a CabinVerify report are based solely on visible
              conditions observed at the time of the site visit. CabinVerify
              does not assess conditions that are not visible without
              specialized access, tools, or training. Findings reflect
              observable conditions only and do not include assessments of
              structural integrity, electrical or mechanical systems, code
              compliance, or safety certification.
            </p>
            <p className="leading-relaxed">
              CabinVerify reports do not determine cause, assign fault, or
              establish a timeline for any observed condition. They document
              what was visible at the time of the visit.
            </p>
          </section>

          <section>
            <h2 className="text-hollow text-xl font-semibold mb-3">
              Not a substitute for licensed assessment
            </h2>
            <p className="leading-relaxed">
              A CabinVerify report is not a substitute for a licensed
              professional assessment. When a REFER TO VENDOR finding is issued,
              CabinVerify is indicating that the observed condition requires
              evaluation by a licensed professional. Clients should not rely
              solely on a CabinVerify report for safety-related decisions.
            </p>
          </section>

          <section>
            <h2 className="text-hollow text-xl font-semibold mb-3">
              Limitations on use
            </h2>
            <p className="leading-relaxed">
              CabinVerify reports are provided for the client&rsquo;s
              information and decision-making purposes. They are not insurance
              documents, engineering reports, legal opinions, or safety
              certifications, and should not be represented as such to any
              insurer, adjuster, court, or licensing authority.
            </p>
          </section>

          <section>
            <h2 className="text-hollow text-xl font-semibold mb-3">
              Payment and scheduling
            </h2>
            <p className="leading-relaxed">
              Service is provided at the rates communicated at the time of
              request. Scheduling is confirmed by CabinVerify based on
              availability. CabinVerify reserves the right to decline or
              reschedule service requests.
            </p>
          </section>

          <section>
            <h2 className="text-hollow text-xl font-semibold mb-3">
              Limitation of liability
            </h2>
            <p className="leading-relaxed">
              CabinVerify&rsquo;s liability in connection with any service is
              limited to the fee paid for that service. CabinVerify is not
              liable for decisions made by clients based on information in a
              report, or for conditions that were not visible at the time of the
              site visit.
            </p>
          </section>

          <section>
            <h2 className="text-hollow text-xl font-semibold mb-3">
              Contact
            </h2>
            <p className="leading-relaxed">
              Questions about these terms may be directed to{" "}
              <a
                href="mailto:verify@cabinverify.com"
                className="text-smoky-forest hover:text-ridge-night transition-colors"
              >
                verify@cabinverify.com
              </a>
              .
            </p>
          </section>
        </div>
      </SectionWrapper>
    </>
  );
}
