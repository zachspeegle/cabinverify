import type { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";

export const metadata: Metadata = {
  title: "Privacy Policy — CabinVerify",
  description: "CabinVerify privacy policy.",
  openGraph: {
    title: "Privacy Policy — CabinVerify",
    url: "https://cabinverify.com/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-ridge-night py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1
            className="text-white text-4xl font-bold"
            style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
          >
            Privacy Policy
          </h1>
          <p className="text-white/60 text-sm mt-3">Effective: May 2026</p>
        </div>
      </section>

      <SectionWrapper className="bg-white">
        <div className="max-w-3xl mx-auto prose-sm text-slate space-y-8">
          <section>
            <h2 className="text-hollow text-xl font-semibold mb-3">
              What we collect
            </h2>
            <p className="leading-relaxed">
              CabinVerify collects information you provide directly through our
              contact form. This includes your name, email address, phone number
              (if provided), and the property address and issue description you
              submit with a verification request. We do not collect information
              automatically through cookies or analytics tools beyond standard
              hosting infrastructure.
            </p>
          </section>

          <section>
            <h2 className="text-hollow text-xl font-semibold mb-3">
              How we use it
            </h2>
            <p className="leading-relaxed mb-3">
              Information submitted through the contact form is used solely to
              respond to your service request, schedule a site visit, and
              deliver your verification report. We do not use your information
              for marketing purposes, and we do not add you to any mailing list
              without your explicit consent.
            </p>
            <p className="leading-relaxed">
              Property address and issue information collected as part of a
              verification request is used to conduct the site visit and prepare
              the report. It is retained as part of the service record for that
              report.
            </p>
          </section>

          <section>
            <h2 className="text-hollow text-xl font-semibold mb-3">
              Third parties
            </h2>
            <p className="leading-relaxed">
              CabinVerify does not sell, rent, or share your personal
              information with third parties for marketing purposes. Information
              may be shared with service providers used to operate this website
              (such as hosting and form submission services) to the extent
              necessary to deliver those services. We do not share verification
              report information with vendors, contractors, or any other party
              not named in the original service request.
            </p>
          </section>

          <section>
            <h2 className="text-hollow text-xl font-semibold mb-3">
              Data retention
            </h2>
            <p className="leading-relaxed">
              We retain contact and service information for a reasonable period
              consistent with the delivery of the service and any follow-up
              correspondence. You may request deletion of your information by
              contacting us directly.
            </p>
          </section>

          <section>
            <h2 className="text-hollow text-xl font-semibold mb-3">
              Contact
            </h2>
            <p className="leading-relaxed">
              For questions about this policy or to request deletion of your
              information, contact us at{" "}
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
