# Nevyera — website

Marketing site for Nevyera: WhatsApp Lead Manager, Inventory, and custom
software for Indian small businesses.

Static site. No backend, no auth, no database. Every page is prerendered HTML.

---

## Status

| Area | State |
| --- | --- |
| Design direction | **Settled.** `demo/v5.html` is the reference build |
| Homepage | **Built** — fully ported from v5 |
| Design system | **Built** — tokens, motion primitives, content architecture |
| Product / pricing / about / legal pages | **Stubs.** Routed and linked, not written |
| Demo form | **Not connected.** Deliberately — see below |
| Real content | **Placeholders throughout.** See "Before launch" |

---

## Quick start

```bash
npm install
npm run dev          # http://localhost:3000
```

| Script | Does |
| --- | --- |
| `npm run dev` | Dev server |
| `npm run build` | Production build → static HTML in `out/` |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run lint` | Next lint |

Requires Node 20+. Built and verified on Node 24.

---

## Stack

- **Next.js 16** (App Router) with `output: "export"` — every route is static
  HTML at build time. Chosen over a client-rendered SPA because organic search
  is the main acquisition channel, and an SPA both ranks worse and paints slower
  on a 4G Android, which is where this audience actually opens the site.
- **React 19**, **TypeScript**, **Tailwind v4**.
- **No component library.** shadcn/Radix earn their weight in an app with
  dialogs and complex form state. This site has a nav, some cards, a tab strip
  and one form. A component system here costs bytes and buys consistency we
  define ourselves.
- **Fonts self-hosted** via `next/font/google`, which downloads at build time
  and serves from our own origin. The built HTML makes **zero** requests to
  Google — verify with `grep -c fonts.googleapis out/index.html` → `0`.

> **Don't remove `axes: ["opsz"]` from the Fraunces config in `app/layout.tsx`.**
> Fraunces is an optical-size variable font. With the axis loaded, the browser
> picks the tight display cut at 104px and the wide legible cut at body sizes.
> Without it the font freezes on the text cut — glyphs get wider, the `ch` unit
> grows with them, and the hero headline silently wraps to five lines instead of
> three, pushing the demo below the fold. It looks like a layout bug and isn't.

---

## Layout

```
app/
  layout.tsx          fonts + metadata
  globals.css         THE DESIGN SYSTEM — tokens, buttons, motion primitives
  sections.css        how homepage sections are composed
  page.tsx            homepage (composition only)
  */page.tsx          eight stub routes

components/
  layout/             Nav, Footer, PageShell
  motion/             Reveal, GoldRule, CountUp, Marquee, useInView
  demos/              LeadDemo, InventoryDemo, CustomScope
  sections/           one file per homepage section
  DemoForm.tsx

content/              ALL copy, pricing and product data
  site.ts             nav, footer, proof points, company details
  pricing.ts          tiers, ₹ figures, showPrices flag
  products/index.ts   the three solutions

demo/                 v1–v5 design iterations. v5 is the reference
docs/superpowers/specs/  the design spec and why each decision was made
```

---

## The rules

These are not style preferences. Each one was earned by a rejected iteration,
and the reasoning is in the spec. Breaking one will make the site look wrong in
a way that is hard to diagnose afterwards.

**1. No glassmorphism. Anywhere.**
There is no `backdrop-filter` in this codebase and there shouldn't be. Every
surface is solid with a 1px border (`.panel`). Mixing translucent and solid
surfaces reads as accidental, because it is.

```bash
# must return nothing (matches the CSS property, not the comments about it)
grep -rn "backdrop-filter:" app components
```

**2. Gold never fills a button.**
`--color-gold` is for hairlines, rules and accents. Primary buttons are solid
ivory on dark, obsidian on light, with a gold wipe on hover. Gold buttons were
tried and rejected as not eye-catching.

**3. One easing curve, one travel distance.**
`--ease-brand` and `--travel` in `globals.css`. Every entrance on the site is
`.rv` (26px up, `--dur-slow`). Adding *more* motion is fine. Adding a *second*
curve or distance is not — that's what made an earlier version feel random.
This is why the primitives live in `components/motion/` instead of being
hand-rolled per section.

**4. The signature is the gold hairline.**
`<GoldRule />` draws itself to 84px at every section head. It is doing more work
than it looks like — it's the thing that makes the page read as one design
rather than a stack of ideas.

**5. No two sections share a structure.**
Oversized numerals, full-bleed statements, two-column prose with a drop cap,
full-width rows, offset pricing tiers. Six sections built to the same
`eyebrow → headline → lede → grid` template is what made an earlier draft read
as machine-generated. Things are also allowed to cross their boundaries — the
hero demo overflows its container and hangs into the marquee, and the featured
pricing tier pushes up out of its row. That's intentional.

**6. Green is a signal, never the room.**
An all-green build was rejected outright. `--color-live` is for status only.

**7. No fabricated social proof. Ever.**
No testimonials, customer logos, or "trusted by N businesses" counts until they
are real, with names and numbers a prospect could ring. The proof section says
this out loud. For a brand whose entire argument is trustworthiness, an invented
quote is the one lie that would actually sink it.

---

## Changing content

Nothing a visitor reads should live in a component.

- **Copy, nav, footer, proof points** → `content/site.ts`
- **Prices and plan limits** → `content/pricing.ts`
- **Product names and features** → `content/products/index.ts`

`content/pricing.ts` mirrors the backend `SubscriptionPlan` entity
(`monthlyPrice`, `maxTeamMembers`, `maxLeads`, `features`) so the two can be
reconciled later without a rewrite.

Set `showPrices = false` to hide every figure site-wide and swap the tiers to
"Contact us". No component changes needed.

> **Caveat worth knowing.** This is a statically exported site. Changing a price
> means a redeploy — a git push, about a minute. It is **not** live-editable.
> Making it live-editable means reading plans from the Spring backend or adding
> a CMS, both out of scope for v1.

---

## The interactive demos

The three panels in the hero and the Solutions tabs are the reason a visitor
stays on the page. Nobody else in this market lets you use the product before
handing over a phone number.

- **`LeadDemo`** — you type a message as the customer; it becomes a lead,
  gets assigned, gets replied to.
- **`InventoryDemo`** — QR stock issue, and vendor bidding. Bidding is the real
  differentiator, so it gets shown working rather than listed as a bullet.
- **`CustomScope`** — pick a business type, see roughly what we'd scope.

All three are self-contained. No network calls, nothing leaves the browser.

---

## Before launch

**Every specific on this site is invented.** The proof section promises we don't
fabricate, so the page itself cannot. Replace all of it:

- [ ] Company city (`content/site.ts` → `company.city` — currently "Gurugram")
- [ ] The example business ("Sharma Motors"), customer names, and the SKU
- [ ] Vendor names and ₹ bid figures in `InventoryDemo`
- [ ] Real pricing in `content/pricing.ts`
- [ ] **Photography** — the biggest remaining gap. Four real images: your
      workspace or team, a customer's counter or reception, a warehouse with
      stock on shelves, and genuine product screenshots. No stock photos.
- [ ] Confirm the Inventory feature wording, especially that Zoho is described
      as an *integration* and not as native billing
- [ ] `/privacy` and `/terms` — these are a **product dependency**, not a
      compliance chore: Meta requires public Privacy Policy and Terms URLs to
      approve WhatsApp Business API access
- [ ] Wire up `DemoForm`. `contactDestination` in `content/site.ts` is `null`,
      so the form tells the visitor it isn't connected instead of silently
      swallowing a real enquiry. Decide between an email address and a POST into
      the Lead Manager (Nevyera as its own first customer), then implement it.

---

## Git

This repo uses the **personal** GitHub identity, set locally so the machine's
global work identity is untouched:

```bash
git config user.name              # Ujjwal
git config user.email             # ujjwalaggarwal175@gmail.com
git remote get-url origin         # git@github-personal:Ujjwalaggarwal38/Nevyera.git
```

`github-personal` is an SSH host alias in `~/.ssh/config` pointing at
`~/.ssh/personal1`. Check it with `ssh -T git@github-personal`.

If you clone this elsewhere, set the local identity again — otherwise commits
get attributed to the work account.

---

## Deploying

Static export works on any static host.

```bash
npm run build      # → out/
```

Vercel and Netlify both detect Next.js automatically. `trailingSlash: true` is
set so `/about/index.html` is emitted and any host serves it correctly.

---

## Design history

`demo/` holds all five iterations. They're kept deliberately — the spec's
decisions log explains what each one got wrong, which is more useful than the
final answer alone.

| File | Direction | Outcome |
| --- | --- | --- |
| `v1.html` | Warm paper, serif, forest green | "Looks basic — no life" |
| `v2.html` | Dark green, glassmorphism, interactive demo | Too green; glass rejected; effects "random" |
| `v3.html` | Warm near-black, antique gold, one motion language | Closer; gold CTAs weak, content lead-heavy |
| `v4.html` | Ivory CTAs, tabbed three-solution showcase | Right structure, still read as AI-generated |
| `v5.html` | Broken grid, varied sections, essay copy | **Accepted** |

Full reasoning: `docs/superpowers/specs/2026-09-13-nevyera-website-design.md`.
