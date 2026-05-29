import type { Metadata } from "next";
import { Mail, Clock, MapPin, DollarSign } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Request a Verification — CabinVerify",
  description:
    "Submit a verification request for your Sevier County, TN short-term rental property. $99 per issue. Reports within 24–48 hours of the visit.",
  openGraph: {
    title: "Request a Verification — CabinVerify",
    url: "https://cabinverify.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <HeroSection
        headline="Request a Verification"
        subhead="Fill out the form below and we'll follow up within one business day to confirm availability and schedule the visit."
      />

      <SectionWrapper className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Form column */}
          <div className="lg:col-span-2">
            <h2 className="text-hollow text-xl font-semibold mb-6">
              Verification request
            </h2>
            <ContactForm />
          </div>

          {/* Info sidebar */}
          <aside className="space-y-6">
            <div className="bg-mist rounded p-6">
              <h3 className="text-hollow font-semibold text-sm mb-4 uppercase tracking-widest" style={{ fontFamily: "var(--font-sans)", fontSize: "11px" }}>
                Service details
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="text-smoky-forest mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-hollow text-sm font-medium">Service area</p>
                    <p className="text-slate text-xs mt-0.5">
                      Sevier County, TN and the surrounding Smoky Mountain
                      region
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock size={16} className="text-smoky-forest mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-hollow text-sm font-medium">Turnaround</p>
                    <p className="text-slate text-xs mt-0.5">
                      Report delivered within 24–48 hours of the site visit
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <DollarSign size={16} className="text-smoky-forest mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-hollow text-sm font-medium">Pricing</p>
                    <p className="text-slate text-xs mt-0.5">
                      $99 — one issue, one property
                    </p>
                    <p className="text-slate/60 text-xs mt-0.5">
                      Additional issues at same property: $25 each
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail size={16} className="text-smoky-forest mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-hollow text-sm font-medium">Contact</p>
                    <a
                      href="mailto:verify@cabinverify.com"
                      className="text-slate text-xs mt-0.5 hover:text-smoky-forest transition-colors block"
                    >
                      verify@cabinverify.com
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-mist border-l-4 border-amber p-4">
              <p className="text-slate text-xs leading-relaxed">
                CabinVerify does not repair, quote repairs, or receive vendor
                kickbacks. Our only product is accurate documentation.
              </p>
            </div>
          </aside>
        </div>
      </SectionWrapper>
    </>
  );
}
