# CabinVerify Website — Claude Code Build Prompt

---

Build a complete multi-page marketing website for **CabinVerify** (cabinverify.com) — a neutral third-party visual verification service for Smoky Mountain / Sevier County, TN short-term rental owners and property managers.

---

## Stack

- **Next.js 15** with App Router (TypeScript)
- **Tailwind CSS v4** (CSS-first config via `@import "tailwindcss"` + `@theme` block in `app/globals.css`)
- **Google Fonts**: Montserrat (700, 600, 300 italic) + Inter (400, 500) loaded via `next/font/google`
- **Lucide React** for icons
- **Deployment target: Vercel** — do NOT use `output: 'export'`. Leave next.config.ts as standard Next.js defaults. Vercel handles builds natively.
- No database, no auth, no CMS — pure static marketing site
- The blog `[slug]` dynamic route must include `generateStaticParams()` returning all three article slugs so pages pre-render at build time

---

## Color Tokens (define in `@theme` inside `globals.css`)

```css
@theme {
  --color-ridge-night: #1C3829;
  --color-smoky-forest: #2E5E3E;
  --color-amber: #9C7A3C;
  --color-slate: #4A5568;
  --color-mist: #F6F3EC;
  --color-hollow: #1F2937;
  --color-white: #FFFFFF;
}
```

Use these as Tailwind utility classes everywhere (e.g. `bg-ridge-night`, `text-amber`, `border-smoky-forest`). Never use default Tailwind green, blue, or any color outside this palette.

---

## Typography

- **Headings (H1–H3)**: Montserrat SemiBold 600, tracking `0.03em`, line-height 1.2
- **Display / Hero**: Montserrat Bold 700
- **Tagline / Callout**: Montserrat Light Italic 300
- **Body / Prose**: Inter Regular 400, line-height 1.6, minimum 16px
- **Status badges**: ALL CAPS, Inter 500, small (12–13px)

Apply fonts via CSS variables from `next/font`. Base body color: `#1F2937` (hollow). Background: `#F6F3EC` (mist).

---

## Site Pages & Navigation

### Navigation (shared header across all pages)

- Logo left: SVG text-based logo — "CabinVerify" in Montserrat Bold, deep forest green `#1C3829`, with a simple inline SVG mountain-peak-checkmark icon to its left (two clean geometric peaks, right peak curves into a checkmark stroke, all `#2E5E3E`)
- Nav links center/right: Home · How It Works · Services · Sample Report · About · Blog
- CTA button right: **"Request a Verification"** — solid `bg-smoky-forest` text-white, hover darken to `bg-ridge-night`, rounded-sm, px-5 py-2
- Mobile: hamburger menu, full-screen slide-down or drawer
- Header background: white, subtle `border-b border-mist`, sticky on scroll with slight shadow

### Footer (shared)

- Background: `bg-ridge-night`, text white
- Left column: Logo (white version) + tagline in amber italic
- Center column: Quick links (all pages)
- Right column: Contact info (`verify@cabinverify.com`), service area (Sevier County, TN), small print: "CabinVerify is not a licensed home inspector, contractor, engineer, or insurance adjuster."
- Bottom bar: © 2026 CabinVerify · Privacy Policy · Terms of Service

---

## Page 1: Home (`/`)

### Section 1 — Hero
- Full-width, background `bg-ridge-night`
- Large H1 (Montserrat Bold, white): **"Local Eyes. Neutral Proof."**
- Subhead (Inter, slate-200, 20px): "When you need to know if a reported issue is real — without calling a contractor."
- Body sentence (Inter, slate-300): "CabinVerify is a neutral third-party verification service for Smoky Mountain short-term rental owners and property managers. We visit. We document. You decide."
- Two CTAs side by side: **"Request a Verification — $99"** (amber bg, hollow text) and **"See a Sample Report"** (outline white)
- Tagline below CTAs in Montserrat Light Italic, amber: *"Local eyes. Neutral proof. Faster owner decisions."*
- No hero image — use subtle mountain ridgeline SVG illustration as a decorative background element (simple geometric peaks, low opacity white, right side of hero)

### Section 2 — Three-Column Trust Strip
- White background, `py-16`
- Three columns with top icon, heading, body:
  1. **Neutral** — "We don't repair, quote repairs, or receive vendor kickbacks. Our only product is accurate documentation."
  2. **Photo-Backed** — "Every report includes timestamped photos, a structured findings table, and a clear verdict."
  3. **Fast Turnaround** — "Reports delivered within 24–48 hours of the site visit. When decisions are stuck, speed matters."
- Icons: Lucide `Scale`, `Camera`, `Clock` in `text-smoky-forest`

### Section 3 — Who We Serve
- Background `bg-mist`, `py-16`
- H2: "Who uses CabinVerify?"
- Three cards (rounded border, white bg, subtle shadow):
  1. **Out-of-Town Owners** — "You can't drive up every time someone reports a problem. We're your local eyes."
  2. **Property Managers** — "Get neutral documentation that helps owners approve repairs faster — without you being the one asking."
  3. **Dispute Resolution** — "When a guest claim, vendor report, or cleaner note creates uncertainty, a neutral third-party record resolves it."

### Section 4 — Use Cases
- White background
- H2: "When to call CabinVerify"
- Six use case tiles in a 2×3 grid (or 3×2 on desktop), each with a Lucide icon, bold short label, and one-sentence explanation:
  1. **Repair or replace?** — Owner isn't sure if a repair or full replacement is actually necessary.
  2. **PM needs owner approval** — Property manager needs neutral documentation to unlock owner sign-off.
  3. **Guest damage claim** — Reported damage needs photo-backed documentation before decisions are made.
  4. **Listing accuracy** — Photos or listed amenities may no longer match what guests find on arrival.
  5. **Tech not working** — Wi-Fi, smart lock, smart TV, or QR guidebook issue needs basic verification.
  6. **Second opinion** — Out-of-town owner wants a local set of eyes before committing to a vendor's recommendation.
- Icons: Wrench, FileText, AlertTriangle, Image, Wifi, Eye (all Lucide)

### Section 5 — How It Works (Summary)
- Background `bg-ridge-night`, text white
- H2: "Three steps. One clear answer."
- Three numbered steps in a horizontal row with connecting line:
  1. **Report it** — "You tell us the issue and the property. We confirm availability and schedule a visit."
  2. **We visit** — "We conduct a brief, focused site visit and document what we observe with photos and notes."
  3. **You decide** — "You receive a structured report with photos, findings, and a clear verdict within 24–48 hours."
- CTA below: "Request a Verification →"

### Section 6 — Pricing
- White background
- Single pricing card, centered, max-width `max-w-lg`, border `border-smoky-forest`, rounded
- Badge at top: "Simple STR Issue Verification"
- Price: **$99** large, Montserrat Bold, `text-smoky-forest`
- What's included (checkmark list, `text-smoky-forest` check icons):
  - One reported issue, one property
  - Short on-site visit
  - Timestamped photo documentation
  - Concise owner-facing summary report
  - Clear finding: Verified / Not Verified / Inconclusive / Refer to Vendor
  - Delivered within 24–48 hours
- Note below: "Additional issues at the same property during the same visit: $25 each"
- CTA: "Request a Verification"

### Section 7 — Credibility / About Snippet
- Background `bg-mist`
- H2: "Why trust CabinVerify?"
- Two-column layout (text left, simple callout box right):
  - Left: Founder bio paragraph — "CabinVerify is operated by a Sevier County-based business owner with an MBA, strong documentation discipline from a background as a U.S. Navy chaplain, and no financial ties to any repair or replacement vendor. That last point matters most. We don't profit from the outcome of our findings — only from accurate documentation."
  - Right: Callout box `bg-white border-l-4 border-amber` — "We are not a home inspector. Not a contractor. Not an insurance adjuster. Our scope is narrow on purpose: visible conditions, photo-backed, neutrally documented. That's what makes the report useful."

### Section 8 — Limitations Disclosure
- Thin section, `bg-mist border-t border-slate/20`
- Small text, centered, `text-slate`, `max-w-2xl mx-auto`
- Text: "CabinVerify documents visible conditions only. Our reports are not licensed home inspections, safety certifications, engineering opinions, insurance adjustments, or repair estimates. Findings reflect observable conditions at the time of the visit."

### Section 9 — Final CTA
- `bg-smoky-forest`, white text
- H2: "Get a clear answer — fast."
- Subtext: "One visit. One report. One decision you can make with confidence."
- CTA button: "Request a Verification — $99" (amber bg, hollow text)

---

## Page 2: How It Works (`/how-it-works`)

Full-page detailed walkthrough of the verification process.

### Sections:
1. **Hero** — `bg-ridge-night`, H1 "How CabinVerify Works", subtext, no CTA needed
2. **The Problem** — Two-column layout explaining the decision paralysis STR owners face: "Someone reports something is broken. You're three states away. Your property manager is waiting for your call. Your vendor gave you a number. But is the thing actually broken?" — calm, clear prose
3. **What We Do** — Detailed explanation of the visit process: how we're contacted, what we look for, how we document, how we do not diagnose or speculate
4. **Step-by-Step** — Numbered vertical timeline (large step numbers in `text-smoky-forest`):
   1. You submit a request (form or email) with the property address, reported issue, and contact info
   2. We confirm availability and schedule the site visit, typically within 1–3 business days
   3. We conduct a focused site visit — observing, photographing, and noting visible conditions
   4. We write the report using our standard structure: findings table, photo evidence, overall verdict
   5. You receive the report via email within 24–48 hours of the visit
5. **What's in the Report** — Preview of report structure (can be a styled mock of the findings table from the brand guide): property info, issue summary, observation table, overall finding badge (VERIFIED / NOT VERIFIED / INCONCLUSIVE / REFER TO VENDOR in styled badges), photo evidence, plain-English owner note
6. **Finding Verdicts Explained** — Four cards, each explaining one verdict:
   - VERIFIED (green badge) — "The reported issue was clearly present and visible at the time of our visit."
   - NOT VERIFIED (slate badge) — "We did not observe the reported issue during our visit. Conditions were normal."
   - INCONCLUSIVE (amber badge) — "Visible evidence was present but insufficient to confirm or rule out the reported issue."
   - REFER TO VENDOR (border badge) — "The condition observed requires professional assessment beyond visual documentation."
7. **Scope Limitations** — Full-width mist background section restating limitations clearly
8. **CTA** — Request a Verification

---

## Page 3: Services (`/services`)

### Sections:
1. **Hero** — H1 "CabinVerify Services", subhead "Neutral verification for STR decisions."
2. **Primary Service Card** — Full-width featured card for $99 Simple Verification with full feature list
3. **Use Case Matrix** — Table or card grid: columns are the six primary use cases, each with a short description and "This is a good fit for:" note
4. **What We Don't Do** — Explicit section with a clean two-column table: "We Do" vs. "We Don't" — important for trust and liability positioning. E.g., We Do: document visible conditions | We Don't: diagnose cause or assign fault. We Do: photograph evidence | We Don't: repair, quote, or recommend specific vendors.
5. **Coming Soon (Future Tiers)** — Muted section noting that additional service tiers are in development: Owner Dispute Documentation, Listing Accuracy Verification, Multi-Issue Property Walk
6. **CTA**

---

## Page 4: Sample Report (`/sample-report`)

### Sections:
1. **Hero** — H1 "See What You'll Receive", subhead explaining the report format
2. **Report Preview** — Styled HTML mock-up of a CabinVerify report (fictional property, fictional issue — hot tub cover condition), replicating the structure from the brand guide:
   - Header with CabinVerify branding
   - Property info table
   - Issue summary
   - Observation findings table (3–4 rows) with severity scale
   - Overall finding badge: VERIFIED
   - Photo evidence placeholders (gray boxes with camera icon and caption)
   - Plain-English owner note
   - Scope limitations footer
3. **Download CTA** — "Download the sample report (PDF)" — link to `/sample-report.pdf` (placeholder, to be replaced when real PDF is ready)
4. **CTA** — Request your own verification

---

## Page 5: About (`/about`)

### Sections:
1. **Hero** — H1 "About CabinVerify", `bg-ridge-night`
2. **The Problem We Solve** — 2–3 paragraphs: the gap in the market between "call a contractor" and "just trust the report" — the neutral third party that doesn't exist in the STR space
3. **Founder Section** — Photo placeholder (gray circle) + bio: Sevier County-based, MBA, U.S. Navy chaplain background (methodical documentation, calm under pressure, no judgment — exactly the skills that matter), Tennessee LLC, Sevier County business license. Key line: "I don't repair anything. I don't refer anyone. I document what I see."
4. **Why No Repair Kickbacks Matters** — Standalone callout or section explaining the conflict-of-interest problem in the inspection/repair space and why CabinVerify's model is different
5. **Service Area** — "We serve Sevier County and the surrounding Smoky Mountain region." Map placeholder (static image or iframe placeholder)
6. **CTA**

---

## Page 6: Blog (`/blog`)

### Blog Index
- H1 "CabinVerify Insights"
- Subhead: "Resources for STR owners and property managers."
- Three article cards with title, excerpt, date, and "Read →" link
- Pre-populate with three placeholder articles (stub pages with full title and intro paragraph, rest lorem)

### Article stubs (each at `/blog/[slug]`):
1. **"When Should an STR Owner Get a Neutral Second Opinion?"** — Intro paragraph about the specific scenarios that call for verification over just calling a vendor
2. **"How Property Managers Use Third-Party Verification to Get Faster Owner Approval"** — Intro paragraph about the PM workflow problem and how neutral documentation accelerates decisions
3. **"What CabinVerify Does (and What We Don't Do)"** — Intro paragraph reiterating scope in plain language for discovery SEO

Each article page: full article layout with a header, byline (CabinVerify Team · Date), body prose, inline callout box, and CTA at bottom.

---

## Page 7: Contact / Request (`/contact`)

### Sections:
1. **Hero** — H1 "Request a Verification", `bg-ridge-night`, brief instructions
2. **Two-column layout**:
   - Left: Contact form with fields:
     - Your name (required)
     - Email address (required)
     - Phone number (optional)
     - Property name or address (required)
     - Describe the reported issue (textarea, required)
     - How did you hear about us? (select: Google / Property Manager referral / Owner referral / Other)
     - Submit button: "Submit Verification Request" — `bg-smoky-forest` white text
   - Right: Info sidebar
     - Service area: Sevier County, TN and surrounding Smoky Mountain region
     - Turnaround: Report within 24–48 hours of visit
     - Pricing: $99 Simple Verification
     - Contact: `verify@cabinverify.com`
3. **Form action**: On submit, show an inline success state ("We've received your request. Expect a response within one business day."). Wire to a static success message — no backend needed. Add `action` attribute pointing to a Formspree or Netlify Forms endpoint placeholder with a comment noting it needs to be configured.

---

## Page 8: Privacy Policy (`/privacy`)

Standard short privacy policy. Plain prose. Sections: What we collect (name, email, property address from contact form), How we use it (only to respond to service requests, never sold), Third parties (none), Contact.

---

## Page 9: Terms of Service (`/terms`)

Short terms. Key points: Service is visual observation only, not a licensed inspection or engineering opinion, not an insurance document, not a repair estimate. Findings are based on visible conditions at time of visit. Not a substitute for licensed professional inspection.

---

## SEO & Technical

- Every page: `<title>`, `<meta name="description">`, canonical URL
- Home page: LocalBusiness schema markup in JSON-LD:
  ```json
  {
    "@type": "LocalBusiness",
    "name": "CabinVerify",
    "description": "Neutral third-party visual verification for Smoky Mountain short-term rental owners and property managers.",
    "url": "https://cabinverify.com",
    "areaServed": "Sevier County, Tennessee",
    "priceRange": "$99"
  }
  ```
- `robots.txt` and `sitemap.xml` — generate sitemap via `app/sitemap.ts` using Next.js built-in sitemap support (returns a `MetadataRoute.Sitemap` array with all page URLs)
- `og:image` meta placeholder on all pages
- All images have `alt` text
- Semantic HTML: `<main>`, `<nav>`, `<section>`, `<article>`, `<header>`, `<footer>` used correctly
- Accessible color contrast on all text (the palette is designed for this)

---

## Component Architecture

Create these shared components in `components/`:

- `Header.tsx` — sticky nav with mobile hamburger
- `Footer.tsx` — full footer
- `HeroSection.tsx` — reusable hero with props for bg color, headline, subhead, CTAs
- `SectionWrapper.tsx` — consistent vertical padding + max-width container
- `Button.tsx` — primary (smoky-forest), secondary (outline), accent (amber) variants
- `Badge.tsx` — VERIFIED / NOT VERIFIED / INCONCLUSIVE / REFER TO VENDOR status badges with correct colors
- `FeatureCard.tsx` — icon + title + body card used in multiple sections
- `StepList.tsx` — numbered vertical timeline component

---

## Important Design Rules

1. **Never use blue.** No Tailwind `blue-*` classes anywhere.
2. **Never use bright green** — no `green-400`, `green-500`, etc. Only the custom palette colors.
3. **No orange or red** except inside the Badge component for urgency indicators within report mocks.
4. **No rustic textures, no cabin illustrations, no photo of mountains** in the UI. The brand is clean documentation authority, not tourism.
5. **Buttons**: rounded-sm only (not pill-shaped). Sharp enough to feel professional.
6. **Spacing**: generous whitespace. Sections get `py-20` minimum. Nothing feels cramped.
7. **The word "inspection"** must not appear anywhere on the site except inside the scope limitations / what-we-don't-do sections, always preceded by "not a licensed" or similar.
8. **Tone in all copy**: calm, neutral, plain English. No exclamation points. No "amazing" or "incredible." Documentation-grade language.
9. **Status badge colors**:
   - VERIFIED: `bg-smoky-forest text-white`
   - NOT VERIFIED: `bg-slate text-white`
   - INCONCLUSIVE: `bg-amber text-white`
   - REFER TO VENDOR: `border border-slate text-slate bg-white`

---

## File Structure

```
/app
  layout.tsx          ← fonts, global metadata, Header + Footer
  page.tsx            ← Home
  /how-it-works/page.tsx
  /services/page.tsx
  /sample-report/page.tsx
  /about/page.tsx
  /blog/page.tsx
  /blog/[slug]/page.tsx
  /contact/page.tsx
  /privacy/page.tsx
  /terms/page.tsx
/components
  Header.tsx
  Footer.tsx
  HeroSection.tsx
  SectionWrapper.tsx
  Button.tsx
  Badge.tsx
  FeatureCard.tsx
  StepList.tsx
/public
  robots.txt
  sitemap.xml         ← placeholder
/app/globals.css      ← Tailwind v4 @theme config
next.config.ts
```

---

## Notes

- The logo SVG is a placeholder until a final vector is available. Build it as an inline SVG component (`LogoSVG.tsx`) so it can be swapped easily.
- The contact form is static (no server action needed yet). Wrap it with a comment: `// TODO: Connect to Formspree or similar — endpoint: https://formspree.io/f/YOUR_ID`
- The sample report PDF download is a placeholder. Add `public/sample-report.pdf` as an empty placeholder file and note in a comment that it should be replaced with the real PDF.
- All copy in the build should match the brand voice: calm, neutral, plain English. Do not use marketing superlatives. Do not use "comprehensive" or "thorough" — use "focused" and "structured."
