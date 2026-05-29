# CabinVerify Launch Checklist
**Status:** Pre-launch | Updated: 2026-05-28

---

## 1. Brand & Identity

- [ ] Decide on logo concept (icon + wordmark vs. wordmark only)
- [ ] Choose logo direction: cabin silhouette, checkmark/shield, magnifying glass, or combination
- [ ] Generate 3–5 logo options (use AI design tools or hire a designer)
- [ ] Finalize logo with primary green (#2E5E3E) and gold (#B58B48) palette
- [ ] Export logo in SVG, PNG (transparent), and favicon sizes
- [ ] Write a one-sentence brand descriptor to use on all materials:
  > *"Local eyes. Neutral proof. Faster owner decisions."*
- [ ] Confirm CabinVerify is operating as its own brand (separate from Trailhead WebCraft)
- [ ] Set up separate email: `verify@cabinverify.com` or `info@cabinverify.com`

---

## 2. Website (cabinverify.com)

- [ ] Confirm DNS is pointed correctly for cabinverify.com
- [ ] Choose website platform (Webflow, Squarespace, or custom)
- [ ] Build homepage with:
  - [ ] Hero: tagline + single CTA ("Request a Verification")
  - [ ] What we do (3-column: Neutral / Photo-Backed / Fast Turnaround)
  - [ ] Who we serve (owners, PMs, guests)
  - [ ] Primary use cases (6 listed in brand context)
  - [ ] Pricing: $99 Simple Verification
  - [ ] How it works (3-step: Report it → We visit → You decide)
  - [ ] About / Credibility section (MBA, Navy chaplain, no repair kickbacks)
  - [ ] Scope & Limitations disclaimer
  - [ ] Contact / Request form
- [ ] Add sample report PDF (redacted or fictional) as a download
- [ ] Add schema markup: LocalBusiness (Sevier County, TN)
- [ ] Set up Google Search Console and submit sitemap
- [ ] Set up Google Business Profile for CabinVerify
- [ ] Add privacy policy and terms of service pages

---

## 3. Report Generator Web App

> Goal: Private web app where you upload photos, fill in report details, and generate a client-facing .docx — similar to the TVS audit workflow but browser-based.

### Architecture Decision
- [ ] Decide on tech stack (suggested: Python + Flask or Streamlit, hosted on Railway or Render)
- [ ] Confirm hosting platform and estimated monthly cost
- [ ] Decide on auth method (simple password or Google OAuth for private access)

### App Features — Phase 1 (MVP)
- [ ] Upload 4–8 photos with captions
- [ ] Form fields mapping to template:
  - Property name / area
  - Requested by (owner or PM name)
  - Owner concern (one sentence)
  - Visit date and time
  - Verification type ($99 Simple / future tiers)
  - Overall finding (Verified / Not verified / Inconclusive / Refer to vendor)
  - Observations table (up to 5 rows: observation, evidence level, relevance)
  - Guest impact, urgency, recommended action
  - Executive summary text
  - Plain-English owner note
- [ ] "Generate Report" button → produces client-facing .docx
- [ ] .docx output strips all internal template notes (Tables 5–6 and Template Notes section should NOT appear in client output)
- [ ] Output saves locally and/or emails to you for delivery
- [ ] Photo placeholders in Word document replaced with actual uploaded images

### App Features — Phase 2
- [ ] Report history / log (list of past reports)
- [ ] Multiple report tiers (Standard, Owner Dispute)
- [ ] PDF export option alongside .docx
- [ ] Client delivery via email directly from the app
- [ ] Auto-populate visit date/time on form load

### Development Steps
- [ ] Set up project repo (GitHub private repo)
- [ ] Build Flask app skeleton with login wall
- [ ] Build HTML form matching all report fields
- [ ] Build docx generation script using python-docx (based on existing template)
- [ ] Integrate photo upload → photo insertion into docx
- [ ] Test with real site visit scenario (fictional data)
- [ ] Deploy to Railway or Render
- [ ] Test end-to-end: fill form → upload photos → download .docx → review output
- [ ] Document the workflow for your own use

---

## 4. Report Template

- [x] Scan template for issues
- [x] Apply CabinVerify green (#2E5E3E) color scheme
- [ ] Review `_v2.docx` in Word and confirm visual appearance
- [ ] Fix gold accent (`#B58B48`) — decide if it stays or gets replaced
- [ ] Add CabinVerify logo to header (once logo is finalized)
- [ ] Add footer with: website URL, "Not a licensed inspection or repair estimate"
- [ ] Create clean client-facing template (remove all internal template note sections)
- [ ] Create separate internal cheat-sheet version (keep the quick-fill checklist)
- [ ] Save final client-facing template as the base for the web app generator

---

## 5. Lead Development

> Target: Property managers AND out-of-town owners simultaneously.

### Property Manager Outreach
- [ ] Build a list of Sevier County / Smoky Mountain property management companies
  - Research: VRBO/Airbnb listing managers, local PM firms (Cabins USA, Cabin Fever, Smoky Mountain Rentals, etc.)
  - Target: companies managing 10+ cabins
- [ ] Find direct contact (office manager, owner, ops lead) for top 20 companies
- [ ] Write PM outreach email (position as: neutral third-party that helps them get owner approval faster)
- [ ] Cold email sequence: 3 emails over 10 days
  - Email 1: Problem + who you are + $99 offer
  - Email 2: Sample report as attachment (fictional) — show the product
  - Email 3: Short follow-up asking if neutral verification is something they deal with

### Out-of-Town Owner Outreach
- [ ] Identify out-of-town cabin owners in Sevier County (STR permit records, Airbnb/VRBO listings with management notes)
- [ ] Build a list of 25–50 owner targets (names + contact if findable)
- [ ] Write owner outreach email (position as: your local eyes when you can't be there)
- [ ] Consider Facebook groups for STR owners (Smoky Mountain Cabin Owners, etc.) for soft outreach

### Direct Outreach — Both Audiences
- [ ] Draft LinkedIn message template (short, no-fluff)
- [ ] Set up a simple CRM or tracking sheet (Notion, Airtable, or Google Sheets)
  - Fields: Name, Company, Type (PM/Owner), Contact, Status, Follow-up date, Notes
- [ ] Set a weekly lead activity goal: e.g., 10 new contacts per week
- [ ] Get first 3 paying clients before scaling outreach

### Proof & Credibility Building
- [ ] Complete 1–2 free or discounted verifications in exchange for a testimonial
- [ ] Photograph the process for website / social proof
- [ ] Write a case study from the first real verification

---

## 6. Operations & Legal

- [ ] Confirm Tennessee LLC is active and CabinVerify name is covered
- [ ] Confirm Sevier County business license covers this service category
- [ ] Draft service agreement / terms of engagement for clients
  - Must include: scope limitations, not a licensed inspection, no repair diagnosis
- [ ] Create invoicing method (Square, Stripe, or direct invoice)
- [ ] Set up a scheduling / booking link (Calendly or similar) for site visit requests
- [ ] Define turnaround time commitment (suggested: report delivered within 24–48 hrs of visit)
- [ ] Write internal SOP for a site visit (what to document, how many photos, order of operations)

---

## 7. Marketing & Presence

- [ ] Create a CabinVerify Google Business Profile
- [ ] Post the sample report on the website as a downloadable PDF
- [ ] Write 2–3 short blog posts for the site (for SEO):
  - "When should an STR owner get a neutral second opinion?"
  - "How property managers use third-party verification to get faster owner approval"
  - "What CabinVerify does (and what we don't do)"
- [ ] Set up a simple email capture on the website ("Get a sample report")
- [ ] Consider Facebook/Instagram page for CabinVerify (light presence, not required at launch)

---

## Launch Milestone Targets

| Milestone | Target Date |
|---|---|
| Logo finalized | Week 2 |
| Website live (basic) | Week 3 |
| Report template finalized | Week 1 |
| Web app MVP deployed | Week 6 |
| First 20 PM contacts reached | Week 3 |
| First paying client | Week 4 |
| First 3 clients + testimonials | Week 8 |

---

*This checklist is a living document. Update status as items complete.*
