# Nevyera Website — Design Spec

**Date:** 2026-09-13
**Status:** Approved design, pending implementation plan
**Location:** `/Users/apple/Downloads/PersonalSpace/nevyera-website`

---

## 1. What this is

A marketing website for Nevyera, a new Indian software company selling business
software to small and medium businesses. The site markets three things: two live
products (WhatsApp Lead Manager, Inventory) and a custom software service.

It is a **marketing site with a contact form**. It does not contain a dashboard,
authentication, or a live connection to any product backend. The primary
conversion action on every page is *Book a free demo*.

### Out of scope for v1

- User accounts, login, or any authenticated area
- Live integration with the Spring Boot Lead Manager backend
- Self-serve signup or payment
- A CMS or any runtime-editable content
- Wisp. It is deliberately **not** on this site (see §9)
- Domain purchase, DNS, and legal copy — deferred by the user until design is settled

---

## 2. Audience

Indian SMB owners and managers: clinics, car dealerships, coaching centres,
retail shops. Typically non-technical. Often evaluating on an inexpensive Android
phone over 4G. They currently run sales through a personal WhatsApp inbox and a
spreadsheet.

Consequences that bind the whole design:

- Copy is plain and outcome-led. No "AI-powered omnichannel engagement platform."
- Pricing is in ₹.
- Performance on a mid-range Android is a hard requirement, not a nice-to-have.
  A slow, janky site actively destroys the trust the visual direction exists to build.
- Credibility must come from verifiable facts, because there are no customers yet (§7).

---

## 3. Positioning

Products-led, with custom development alongside. The narrative is:
*"We build the software small businesses actually run on — and if what you need
doesn't exist yet, we'll build that too."*

Navigation reflects this: Products is the first and widest menu; Custom is a
single peer item, not a co-equal pillar.

---

## 4. Visual direction

**Reference build: `demo/v5.html`. That file is the spec for look, motion and
layout — where this section and v5 ever disagree, v5 wins.**

Five iterations were needed. Recording what was rejected matters more than usual
here, because each rejection was a real constraint discovered late:

| Version | Direction | Outcome |
| --- | --- | --- |
| v1 | Warm paper, serif, forest green | "Looks basic — no life" |
| v2 | Dark green, glassmorphism, interactive demo | "Too greenish and bad"; glass rejected; effects "random" |
| v3 | Warm near-black, antique gold, one motion language | Closer, but gold CTAs weak and content lead-heavy |
| v4 | Ivory CTAs, tabbed three-solution showcase | Right structure, still read as AI-generated |
| **v5** | **Broken grid, varied sections, essay copy** | **Accepted** |

### Identity

| Element | Value |
| --- | --- |
| Wordmark | `Nevyera.` — Fraunces 400, tracking `-0.03em`, gold full stop |
| Logo mark | **None.** Wordmark only, by explicit choice |
| Favicon | `N` in Fraunces, ivory on obsidian |
| Display typeface | Fraunces — used at weight **300**, never bold |
| Text typeface | Inter |

Both typefaces self-hosted via `next/font/local`. **No Google Fonts request in
production** — a third-party font fetch is a measurable latency cost in India.
(The `demo/` files do use the Google CDN; that is preview-only.)

### Palette — warm black, not green

| Token | Hex | Role |
| --- | --- | --- |
| `obsidian` | `#14110E` | Primary canvas. Brown-leaning, never a cold grey-black |
| `char` | `#1E1A16` | Raised surfaces (every panel) |
| `ivory` | `#F7F3EC` | Light canvas **and primary button fill** |
| `cream` | `#F2ECE2` | Alternate light section |
| `gold` | `#C9A227` | Antique. Hairlines, rules, accents — **never a button fill** |
| `rust` | `#A8543F` | Failure states only (unanswered, overdue) |
| `live` | `#4BAE7E` | Status only. Green is a signal, never the room |

Hard constraints, each earned through a rejected iteration:

- **No glassmorphism anywhere.** No `backdrop-filter`, no translucent panels.
  Every surface is solid with a 1px border. Mixed transparency read as accidental.
- **No colour dominance.** An all-green build was rejected outright. Accent
  colours stay accents.
- **Gold never fills a button.** It failed the "eye-catching" test. Primary
  buttons are solid ivory on dark / obsidian on light, with a gold wipe on hover.

### Motion — one language, no exceptions

The single most important rule on this page. Effects invented individually were
rejected twice as "random". Everything obeys:

- **One easing curve:** `cubic-bezier(.22,.61,.36,1)`. No other easing exists.
- **One travel distance:** `26px`. Every entrance moves exactly this far.
- **One signature:** a gold hairline that draws itself to 84px as a section
  enters. Repeated at every section head — this is what ties the page together.

Built on that base: word-by-word headline entrance, a gold scroll-progress rule,
count-up numerals, a paused-on-hover marquee, tab-pane slides, and gold flashes
on changing stock figures. Adding motion is allowed; adding a *second* easing
curve or travel distance is not.

**Motion budget.** Everything collapses under `prefers-reduced-motion: reduce`.
No 3D parallax — rejected as fragile on low-end Android and the fastest-ageing
effect available.

### Layout — the grid must break

The v4→v5 note: six sections built to an identical `eyebrow → headline → lede →
grid` template is what made the page read as machine-generated. Required:

- **No two sections share a structure.** Oversized numerals, full-bleed
  statements, two-column prose with a drop cap, full-width rows, offset tiers.
- **Things cross their boundaries.** The hero demo overflows the container's
  right edge and hangs below the hero. The middle pricing tier pushes up out of
  its row.
- **Rhythm varies.** Airy sections next to tight ones. Uniform vertical spacing
  is the tell.
- **A horizontal band** (the marquee) interrupts the vertical stack.

### Copy

Four paragraphs of plain prose beat six clever one-liners. A page where every
section lands an aphorism reads as generated. Vary sentence length, let some
lines be flat, and prefer concrete specifics (SKU numbers, ₹ figures, place
names) over polish.

**All invented specifics in `demo/v5.html` — the Sector 14 dealership, Gurugram,
Sharma Motors, SKU BP-4417, the vendor names and prices — are placeholders and
must be replaced with true details before launch.** A page whose proof section
promises no fabrication cannot itself contain fabricated detail.

---

## 5. Technical approach

- **Next.js (App Router) with `output: "export"`** — static HTML at build time.
  Chosen over the user's familiar Vite SPA because organic search is the main
  acquisition channel for this audience, and a client-rendered SPA both ranks
  worse and paints slower on a 4G Android.
- **Tailwind CSS v4**, matching the version already used in the Lead Manager
  frontend, with the palette and type scale defined as design tokens.
- **TypeScript**, matching existing project conventions.
- **No component library.** shadcn/Radix earn their weight in an application with
  dialogs, popovers, and forms with complex state. This site has a nav, cards, an
  accordion, and one form. Pulling in a component system here costs bytes and
  buys consistency we're defining ourselves anyway.
- **Hosting:** Vercel or Netlify free tier. Static export works on either.

### Content architecture

All copy, pricing, and product data live in typed content files under
`content/`, separate from components:

```
content/
  site.ts          nav, footer, company details, contact destination
  products/
    whatsapp-lead-manager.ts
    inventory.ts
    custom.ts
  pricing.ts       tiers, ₹ figures, limits, showPrices flag
  faq.ts
```

This is what makes pricing "configurable" as requested: `pricing.ts` holds the
tiers, prices, limits and a `showPrices: boolean` that hides figures site-wide
without touching a component. **Constraint the user should hold onto:** because
the site is statically exported, changing a price requires a redeploy (a git push,
roughly a minute). It is not live-editable. Making it live-editable means reading
plans from the Spring backend or adding a CMS, which is explicitly out of scope
for v1.

`pricing.ts` mirrors the shape of the backend `SubscriptionPlan` entity
(`monthlyPrice`, `currency`, `maxTeamMembers`, `maxContacts`, `maxLeads`,
`features`) so the two can be reconciled later without a rewrite.

---

## 6. Site structure

```
/                                   Home
/products/whatsapp-lead-manager     Flagship product page
/products/inventory                 Inventory product page (live product)
/custom                             Custom software service
/pricing                            Tiers, from pricing.ts
/about                              Who Nevyera is
/contact                            Book a demo form
/privacy                            Stub — copy deferred
/terms                              Stub — copy deferred
```

`/privacy` and `/terms` ship as routed stubs so footer links resolve and the
information architecture is final. Their content is deferred at the user's
request. Note for later: Meta requires public Privacy Policy and Terms URLs to
approve WhatsApp Business API access, so these become a product dependency, not
just a compliance chore.

---

## 7. Homepage anatomy

| # | Section | Job |
| --- | --- | --- |
| 1 | Nav | Wordmark, Products ▾, Custom, Pricing, About, *Book a demo*. Sticky; gains a solid background on scroll |
| 2 | Hero | Aurora + headline left, live inbox right. One primary CTA, one secondary |
| 3 | The problem | Names the visitor's actual day: enquiries sit unread, nobody knows whose lead it is, follow-ups happen when someone remembers |
| 4 | Three products | Cursor-tilt cards: Lead Manager, Inventory, Custom. Both products are live; neither carries a "coming soon" badge |
| 5 | How it works | Three steps — connect your WhatsApp number → leads land in a shared inbox → assign, reply, close. Defuses "is this hard to set up?" |
| 6 | Why Nevyera | Verifiable credibility (see below) |
| 7 | Pricing preview | Three tiers from `pricing.ts`, linking to `/pricing` |
| 8 | Final CTA | The contact form inline, not a link to it |
| 9 | Footer | Products, company, legal |

### Section 6 and the honesty constraint

This is conventionally where customer logos and testimonials go. Nevyera has no
customers yet, and **no fabricated quotes, logos, or "trusted by N businesses"
counts will appear anywhere on this site.** For a brand whose entire chosen
direction is built on trust, an invented testimonial is the single failure a
prospect could actually catch.

Section 6 instead carries claims that are true and checkable: built on the
official WhatsApp Business API, India-based team, a stated response-time
commitment, and explicit data-ownership language. The section is structured as a
list of proof items so that real customer quotes can replace these one-for-one as
they arrive, with no redesign.

---

## 8. Product pages

Both product pages share one template, driven by their content file:

1. Hero — product name, one-sentence promise, CTA, product visual
2. The problem this product solves
3. Feature blocks — alternating text/visual
4. How it works
5. Pricing pointer
6. FAQ
7. CTA

**WhatsApp Lead Manager** copy is grounded in the real implementation reviewed on
this machine (`~/Downloads/whatsapp-lead`): WhatsApp Cloud API onboarding with
embedded signup and phone activation, a shared inbox over WebSocket/STOMP, leads
with status and agent assignment, team roles (Admin / Manager / Agent / User),
message templates, media handling, and multi-tenant businesses.

**Inventory** is a live product, but its source is not on this machine and could
not be reviewed. The feature set below was confirmed verbally by the user and is
the basis for its page copy:

- Stock management with QR code tracking
- Warehouse setup and multi-location stock
- Vendor management
- Procurement bidding — vendors bid on purchase requirements
- GST handling
- Billing through a Zoho integration

Two notes for the copy pass. **Bidding** is the unusual one — no competing SMB
inventory tool leads with it, so it is a differentiator rather than a checklist
item and should get its own feature block, not a bullet. **Zoho billing** must be
described accurately as an integration, not as native billing; getting that wrong
is the kind of claim a prospect discovers on a demo call.

Exact feature wording will be confirmed with the user before the page ships. No
capability beyond the confirmed list above will be described.

---

## 9. Wisp is excluded

Wisp — the Electron AI overlay at `~/Downloads/PersonalSpace/invisible-overlay` —
does not appear on nevyera.com. It gets its own separate landing page, which is a
distinct project and **out of scope for this build**.

Reasoning, recorded because it will come up again: Wisp's defining feature is
being invisible to screen sharing, and its most obvious application is helping
someone appear to know things they don't during a call or interview. Placing it
beside business software sold on trustworthiness to clinic and dealership owners
works against the positioning of both. The audiences are also unrelated. This was
raised with the user and the separation was their decision.

---

## 10. Accessibility and performance targets

- Lighthouse mobile performance ≥ 90, throttled to a mid-range Android profile
- Text contrast meets WCAG AA against Paper and Forest surfaces. Gold on Paper
  fails AA for body text and is therefore restricted to large text, borders, and
  decorative marks — never small type
- Full keyboard operability; visible focus states in Forest
- Every animation collapses under `prefers-reduced-motion: reduce`
- Semantic landmarks and one `h1` per page
- No layout shift from font loading — `font-display: swap` with metric-matched
  fallbacks

---

## 11. Open content inputs

Not blockers. The site is built with these as clearly-marked placeholders in
content files; each drops in without touching components.

1. **Contact form destination** — an email address, or a single form POST into
   the Lead Manager (Nevyera as its own first customer). Either way this is one
   outbound submission to one endpoint, not an integration: the site still reads
   nothing from any backend, and §1 holds
3. **Pricing figures** — ₹ per tier and the real limits, or `showPrices: false`
4. **Company legal name and city** — for `/privacy`, `/terms`, and the footer
5. **Domain** — deferred

---

## 12. Decisions log

| Decision | Chosen | Rejected | Why |
| --- | --- | --- | --- |
| Positioning | Products + custom | Pure SaaS; pure agency | Two live products plus real custom capability |
| Site scope | Marketing + contact form | Backend-integrated signup | Keeps v1 shippable; no CORS/auth/deploy coupling |
| Audience | Indian SMBs | Global SaaS buyers; mixed | Sharpest copy; matches what the products solve |
| Stack | Next.js static export | Vite SPA; plain HTML | SEO and first paint on 4G Android |
| Visual direction | Warm Trust | Quiet Infrastructure; Editorial Bold | Dark/technical and loud/editorial both misread to a non-technical owner |
| Motion | Aurora + live inbox + cursor tilt | Full 3D panel deck | Life without the low-end-device cost; 3D depth ages fastest |
| Identity | Fraunces + Inter | Instrument Serif; Plus Jakarta Sans | Warm but not template; gold gives a second accent |
| Logo | Wordmark only, gold stop | Three logo marks | User rejected all marks; gold stop restores the accent |
| Components | Hand-built | shadcn/Radix | A nav, cards, an accordion and one form don't justify the weight |
| Wisp | Separate site | On nevyera.com | Positioning conflict; unrelated audience |
| Testimonials | Verifiable proof only | Placeholder social proof | No fabricated credibility on a trust-led brand |
