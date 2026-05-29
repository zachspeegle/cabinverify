import type { Metadata } from "next";
import { UserCircle, MapPin } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "About CabinVerify — Neutral Verification for Smoky Mountain STRs",
  description:
    "CabinVerify is operated by a Sevier County-based business owner. No repair kickbacks. No vendor relationships. Accurate documentation.",
  openGraph: {
    title: "About CabinVerify",
    url: "https://cabinverify.com/about",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        headline="About CabinVerify"
        subhead="A service built on one principle: no financial stake in the outcome."
      />

      {/* The Problem We Solve */}
      <SectionWrapper className="bg-white">
        <div className="max-w-3xl">
          <h2 className="text-hollow text-3xl font-semibold mb-6">
            The gap CabinVerify fills
          </h2>
          <p className="text-slate leading-relaxed mb-4">
            Short-term rental owners in the Smoky Mountain region face a
            specific problem: they are often far away when something goes wrong.
            They rely on property managers, cleaners, and vendors for
            information. Each of those parties has some interest in the outcome
            — whether it&rsquo;s the PM who wants to keep the owner happy, the
            cleaner who doesn&rsquo;t want to be blamed, or the vendor who
            benefits from a repair approval.
          </p>
          <p className="text-slate leading-relaxed mb-4">
            The gap is not malice. It&rsquo;s just that none of those parties
            are neutral. A property manager asking an owner to approve a $1,500
            repair is not a neutral party. A vendor recommending a $3,000
            replacement is not a neutral party.
          </p>
          <p className="text-slate leading-relaxed">
            CabinVerify exists to be the neutral party. We visit. We document.
            We issue a finding. We have no vendor relationships, no referral
            fees, and no financial interest in what the owner decides to do with
            the information. That structure is the service.
          </p>
        </div>
      </SectionWrapper>

      {/* Founder Section */}
      <SectionWrapper className="bg-mist">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          <div className="flex flex-col items-center md:items-start">
            <div
              className="w-28 h-28 rounded-full bg-slate/20 flex items-center justify-center mb-4"
              aria-label="Founder photo placeholder"
            >
              <UserCircle size={56} className="text-slate/40" />
            </div>
            <p className="text-slate text-sm text-center md:text-left">
              Founder, CabinVerify
            </p>
            <p className="text-slate/60 text-xs text-center md:text-left mt-1">
              Sevier County, TN
            </p>
          </div>
          <div className="md:col-span-2">
            <h2 className="text-hollow text-3xl font-semibold mb-6">
              Founded in Sevier County
            </h2>
            <p className="text-slate leading-relaxed mb-4">
              CabinVerify is operated by a Sevier County-based business owner
              with an MBA and a background as a U.S. Navy chaplain. That
              background matters more than the credential: military chaplaincy
              requires methodical documentation under pressure, calm
              communication in high-stakes situations, and a neutral stance when
              parties have competing interests. Those are exactly the skills this
              service requires.
            </p>
            <p className="text-slate leading-relaxed mb-4">
              CabinVerify is structured as a Tennessee LLC with a Sevier County
              business license. We operate locally, with direct knowledge of the
              STR landscape in the region — the properties, the typical issues,
              and the dynamics between owners, managers, and guests.
            </p>
            <p className="text-slate leading-relaxed">
              The core commitment is simple: &ldquo;I don&rsquo;t repair
              anything. I don&rsquo;t refer anyone. I document what I see.&rdquo;
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Why No Repair Kickbacks Matters */}
      <SectionWrapper className="bg-white">
        <div className="max-w-3xl">
          <h2 className="text-hollow text-3xl font-semibold mb-6">
            Why the &ldquo;no vendor relationships&rdquo; policy matters
          </h2>
          <p className="text-slate leading-relaxed mb-4">
            Most property-related services that involve visiting and assessing a
            property have some financial relationship with repair or replacement
            vendors. Home inspectors who refer buyers to contractors. Insurance
            adjusters who work with preferred vendors. Property managers who
            receive referral fees for contractor introductions.
          </p>
          <p className="text-slate leading-relaxed mb-4">
            These relationships are often disclosed, legal, and not
            inherently dishonest. But they create a conflict of interest that
            is difficult for an owner to evaluate when reading a report.
            Is this recommendation based on what I need, or what generates a
            referral?
          </p>
          <p className="text-slate leading-relaxed mb-4">
            CabinVerify removes that question entirely. We receive no referral
            fees, no vendor commissions, and no compensation tied to what owners
            decide to do after receiving a report. Our revenue comes entirely
            from the $99 verification fee. That structure is not just
            preferable — it is the foundation of the service&rsquo;s value.
          </p>
          <div className="bg-mist border-l-4 border-amber p-5 mt-4">
            <p className="text-slate text-sm leading-relaxed">
              An owner who receives a VERIFIED finding from CabinVerify can use
              that documentation to authorize a repair with confidence. An owner
              who receives a NOT VERIFIED finding can push back on a vendor
              quote with documentation. In both cases, the report is useful
              because there was no incentive to reach either conclusion.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Service Area */}
      <SectionWrapper className="bg-mist">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-hollow text-3xl font-semibold mb-6">
              Service area
            </h2>
            <div className="flex items-start gap-3 mb-4">
              <MapPin size={20} className="text-smoky-forest mt-1 flex-shrink-0" />
              <p className="text-slate leading-relaxed">
                CabinVerify serves Sevier County and the surrounding Smoky
                Mountain region, including Gatlinburg, Pigeon Forge, Sevierville,
                Pittman Center, and nearby communities with significant
                short-term rental activity.
              </p>
            </div>
            <p className="text-slate leading-relaxed text-sm">
              Not sure if your property falls within our service area? Contact
              us — we&rsquo;ll confirm availability before you submit a full
              request.
            </p>
          </div>
          <div
            className="bg-slate/10 rounded border border-mist flex items-center justify-center"
            style={{ minHeight: "200px" }}
            aria-label="Service area map placeholder"
          >
            <div className="text-center px-6">
              <MapPin size={32} className="text-slate/40 mx-auto mb-2" />
              <p className="text-slate/50 text-sm">
                Sevier County, Tennessee
              </p>
              <p className="text-slate/40 text-xs mt-1">
                Smoky Mountain region
              </p>
            </div>
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
            Questions? Ready to request?
          </h2>
          <p className="text-white/75 text-base mb-8">
            We respond to all requests within one business day.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="accent" href="/contact" className="px-8 py-3 text-base">
              Request a Verification — $99
            </Button>
            <Button variant="secondary" href="/how-it-works" className="px-8 py-3 text-base">
              Learn How It Works
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
