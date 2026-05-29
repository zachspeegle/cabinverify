import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import SectionWrapper from "@/components/SectionWrapper";
import Button from "@/components/Button";

const ARTICLES: Record<
  string,
  {
    title: string;
    date: string;
    content: React.ReactNode;
  }
> = {
  "when-should-an-str-owner-get-a-neutral-second-opinion": {
    title: "When Should an STR Owner Get a Neutral Second Opinion?",
    date: "May 2026",
    content: (
      <>
        <p>
          The standard response to a reported property issue is to call a
          contractor. Get a quote. Decide. But for out-of-town STR owners, that
          process has a structural problem: the contractor who provides the
          quote is not a neutral party. They benefit from a repair or
          replacement authorization. That doesn&rsquo;t mean the quote is
          wrong — it means the owner has no independent verification of whether
          the work is actually needed.
        </p>
        <p>
          There are specific scenarios where a neutral second opinion — not
          another contractor, but a neutral third-party observation — is the
          right first step before any vendor conversation happens.
        </p>
        <h2>When the report came from someone with an interest in the outcome</h2>
        <p>
          If the issue was reported by a vendor, a cleaner, or a property
          manager who has a relationship with a preferred vendor, the
          information arrives with inherent pressure toward action. That
          pressure may be well-intentioned. But an owner three states away has
          no way to weigh it without independent documentation.
        </p>
        <p>
          A neutral site visit — one where the verifier has no vendor
          relationship and no financial stake in what the owner decides — gives
          the owner a baseline record that stands apart from the interested
          party&rsquo;s report.
        </p>
        <h2>When the repair cost is high relative to the certainty of need</h2>
        <p>
          A $4,000 deck replacement authorization based on a text message photo
          is a difficult decision. An owner who can see a structured findings
          table with photos, a condition assessment, and a VERIFIED finding is
          in a fundamentally different position. They are not approving based on
          trust or pressure — they are approving based on documentation.
        </p>
        <p>
          Conversely, an owner who receives a NOT VERIFIED finding after a
          neutral visit has grounds to pause, ask questions, and seek more
          information before authorizing a significant spend.
        </p>
        <h2>When a guest claim and a vendor report contradict each other</h2>
        <p>
          Guest damage claims and vendor assessments don&rsquo;t always align.
          When a guest says an item was already broken and a vendor says it was
          fine before the stay, the owner is caught between two accounts.
          Neither party is neutral.
        </p>
        <p>
          A neutral third-party verification — ideally conducted promptly after
          the stay in question — creates a dated, documented record of visible
          conditions. That record doesn&rsquo;t resolve every dispute, but it
          gives the owner a foundation for decision-making that neither party
          can provide.
        </p>
        <div className="bg-mist border-l-4 border-amber p-5 my-6">
          <p className="text-slate text-sm leading-relaxed">
            A neutral second opinion is most valuable before a significant
            financial decision, before a vendor conversation where the owner
            would otherwise rely on the vendor&rsquo;s own assessment, or when
            two interested parties give conflicting accounts. It is not a
            substitute for professional assessment — it is documentation that
            helps the owner decide whether professional assessment is warranted.
          </p>
        </div>
        <h2>When the property manager is stuck waiting for owner approval</h2>
        <p>
          Property managers often face a specific version of this problem: they
          know a repair is needed, the vendor is ready, but the owner
          won&rsquo;t authorize without more information. The PM is stuck in the
          middle — they can&rsquo;t force the decision, and they can&rsquo;t
          provide the neutral documentation the owner needs.
        </p>
        <p>
          In these cases, a third-party verification gives the PM a tool that is
          explicitly not theirs. The documentation comes from outside the
          management relationship, which is often exactly what an uncertain
          owner needs to act.
        </p>
      </>
    ),
  },
  "how-property-managers-use-third-party-verification": {
    title:
      "How Property Managers Use Third-Party Verification to Get Faster Owner Approval",
    date: "May 2026",
    content: (
      <>
        <p>
          One of the most consistent friction points in STR property management
          is the gap between a repair need and owner authorization. A vendor is
          available. The issue is real. But the owner — typically out of town,
          relying on the PM&rsquo;s word — is hesitant. They ask for photos.
          They request a second quote. They delay. The property sits with an
          unresolved issue, and the PM is stuck in the middle.
        </p>
        <p>
          Third-party verification changes the structure of that conversation.
          It doesn&rsquo;t replace the PM&rsquo;s judgment — it gives the owner
          a documentation source that exists outside the management
          relationship.
        </p>
        <h2>The structural problem with PM-to-owner repair requests</h2>
        <p>
          When a property manager tells an owner that something needs repair,
          the owner is evaluating two things simultaneously: the repair itself,
          and the PM&rsquo;s judgment and motivations. Even when the PM is
          completely right and completely trustworthy, the owner has no way to
          separate those two evaluations.
        </p>
        <p>
          This is not a reflection on the PM&rsquo;s honesty — it&rsquo;s a
          structural feature of the relationship. The PM manages the property;
          their assessment of what it needs is not neutral by definition.
        </p>
        <p>
          A neutral third-party report doesn&rsquo;t ask the owner to trust the
          PM&rsquo;s assessment. It provides an independent record. The owner
          evaluates the documentation, not the relationship.
        </p>
        <h2>How PMs use verification in practice</h2>
        <p>
          The most effective use pattern is straightforward: when a PM has a
          repair that needs owner authorization and anticipates hesitation, they
          request a CabinVerify verification before presenting the vendor quote.
          The verification report — a VERIFIED finding with photo documentation
          — accompanies the quote when the PM contacts the owner.
        </p>
        <p>
          The owner receives a neutral document alongside the PM&rsquo;s
          recommendation. The documentation is not from the PM. It is not from
          the vendor. It is from a party with no financial stake in either
          direction.
        </p>
        <div className="bg-mist border-l-4 border-amber p-5 my-6">
          <p className="text-slate text-sm leading-relaxed">
            &ldquo;We have a report from a neutral third party. The issue is
            documented with photos. Here&rsquo;s the vendor quote.&rdquo; That
            conversation moves faster than &ldquo;trust me on this one.&rdquo;
          </p>
        </div>
        <h2>What changes for the owner</h2>
        <p>
          Owners who receive verified third-party documentation alongside a
          repair request are in a different decision position than owners who
          receive a repair request alone. The documentation answers the implicit
          question — &ldquo;is this actually needed?&rdquo; — before the owner
          has to ask.
        </p>
        <p>
          It also removes the social pressure element. An owner who declines a
          repair request from their PM is implicitly questioning the PM&rsquo;s
          judgment. An owner who reviews neutral documentation and decides how
          to proceed is simply making an informed decision. Those are different
          conversations.
        </p>
        <h2>Using verification to protect the PM relationship</h2>
        <p>
          Beyond repair authorization, PMs can use third-party verification to
          protect themselves in disputes. When a guest makes a damage claim that
          contradicts the PM&rsquo;s turnover record, a neutral verification
          conducted promptly after the stay provides a dated record that supports
          the PM&rsquo;s position without requiring the owner to simply take
          their word for it.
        </p>
        <p>
          The verification is not the PM defending themselves — it&rsquo;s
          documentation that exists independent of the PM&rsquo;s account.
        </p>
      </>
    ),
  },
  "what-cabinverify-does-and-what-we-dont-do": {
    title: "What CabinVerify Does (and What We Don't Do)",
    date: "May 2026",
    content: (
      <>
        <p>
          The clearest way to explain CabinVerify is to be precise about scope.
          We do one thing: we visit short-term rental properties and document
          visible conditions related to a reported issue. We photograph what we
          see. We complete a structured findings table. We issue a verdict. We
          deliver a report.
        </p>
        <p>
          That&rsquo;s the complete service. The things we do not do are just as
          important.
        </p>
        <h2>What CabinVerify does</h2>
        <p>
          We conduct a focused site visit based on a specific reported issue.
          We are not conducting a general property assessment — we are looking
          at one thing (or a small set of related things) that someone reported.
          Our observation is limited to what is visible without specialized tools
          or access.
        </p>
        <p>
          We photograph everything relevant. Photos are timestamped. They are
          included in the report as evidence, not as illustrations.
        </p>
        <p>
          We complete a findings table that notes each observed item, the
          condition we observed, and the basis for that note. No conjecture. No
          history. What was visible at the time of the visit.
        </p>
        <p>
          We issue one of four overall verdicts: VERIFIED, NOT VERIFIED,
          INCONCLUSIVE, or REFER TO VENDOR. The verdict is based on visible
          evidence. It is not a recommendation — it is a documented finding.
        </p>
        <div className="bg-mist border-l-4 border-amber p-5 my-6">
          <p className="text-slate text-sm leading-relaxed">
            Our scope is narrow on purpose. Narrow scope is what makes the
            report trustworthy. A verifier who has no financial stake in any
            outcome and no authority to recommend repairs cannot be accused of
            steering anyone toward a particular decision.
          </p>
        </div>
        <h2>What CabinVerify does not do</h2>
        <p>
          We do not diagnose the cause of a condition. If a vinyl cover is
          cracked, we document that the vinyl cover is cracked. We do not assess
          whether the cracking was caused by UV exposure, improper storage, or
          age. Causation is not part of our scope.
        </p>
        <p>
          We do not recommend specific contractors or vendors. We do not have
          vendor relationships. We do not receive referral fees. We do not
          benefit from any specific outcome of a repair decision.
        </p>
        <p>
          We are not licensed home inspectors. We do not conduct licensed home
          inspections. Our reports are not licensed inspection reports and should
          not be used as substitutes. If a licensed assessment is needed, we
          will say so — that is the REFER TO VENDOR verdict.
        </p>
        <p>
          We do not issue safety certifications, engineering opinions, or
          insurance documents. We do not assess structural integrity, electrical
          systems, or any condition requiring specialized access or equipment.
        </p>
        <h2>Why this scope matters</h2>
        <p>
          Property-related decisions benefit from a specific kind of input that
          most parties in the STR ecosystem cannot provide: observation with no
          stake in the outcome. Vendors, property managers, and contractors all
          bring expertise — but they also bring interests. CabinVerify
          doesn&rsquo;t have a position on what you should do with the
          information in the report.
        </p>
        <p>
          The report is for the owner. It&rsquo;s documentation they can use to
          make a faster, more informed decision — without having to rely solely
          on accounts from parties who benefit from a particular outcome.
        </p>
      </>
    ),
  },
};

export function generateStaticParams() {
  return [
    { slug: "when-should-an-str-owner-get-a-neutral-second-opinion" },
    { slug: "how-property-managers-use-third-party-verification" },
    { slug: "what-cabinverify-does-and-what-we-dont-do" },
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES[slug];
  if (!article) return {};
  return {
    title: article.title,
    openGraph: {
      title: article.title,
      url: `https://cabinverify.com/blog/${slug}`,
    },
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = ARTICLES[slug];
  if (!article) notFound();

  return (
    <>
      <section className="bg-ridge-night py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="text-white/50 hover:text-white text-sm transition-colors mb-6 inline-block"
          >
            ← CabinVerify Insights
          </Link>
          <h1
            className="text-white text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
          >
            {article.title}
          </h1>
          <p className="text-white/50 text-sm">
            CabinVerify Team · {article.date}
          </p>
        </div>
      </section>

      <SectionWrapper className="bg-white" as="article">
        <div className="max-w-3xl mx-auto prose-custom">
          <div
            className="text-slate leading-relaxed space-y-5 text-base"
            style={{
              counterReset: "none",
            }}
          >
            <ArticleContent content={article.content} />
          </div>
        </div>
      </SectionWrapper>

      <section className="bg-mist border-t border-slate/10 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border-l-4 border-smoky-forest p-6">
            <h3 className="text-hollow font-semibold mb-2">
              About CabinVerify
            </h3>
            <p className="text-slate text-sm leading-relaxed mb-4">
              CabinVerify provides neutral third-party visual verification for
              Smoky Mountain short-term rental owners and property managers.
              $99 per issue. Reports within 24–48 hours of the visit.
            </p>
            <Button variant="primary" href="/contact">
              Request a Verification — $99
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

function ArticleContent({ content }: { content: React.ReactNode }) {
  return <div className="article-body [&>p]:mb-5 [&>h2]:text-hollow [&>h2]:text-xl [&>h2]:font-semibold [&>h2]:mt-8 [&>h2]:mb-3">{content}</div>;
}
