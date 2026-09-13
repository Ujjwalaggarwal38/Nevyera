
export const company = {
  name: "Nevyera",
  wordmark: "Nevyera.", // the gold full stop is the identity; no logo mark exists
  tagline:
    "Lead management, inventory, and the software nobody has written for you yet.",
  city: "Gurugram", // ⚠ placeholder — confirm
  country: "India",
  replyWindow: "one working day",
} as const;

export const nav = [
  { label: "Solutions", href: "/#solutions" },
  { label: "How it works", href: "/#how" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
] as const;

export const footerColumns = [
  {
    heading: "Solutions",
    links: [
      { label: "Lead Manager", href: "/products/whatsapp-lead-manager" },
      { label: "Inventory", href: "/products/inventory" },
      { label: "Custom software", href: "/custom" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Pricing", href: "/pricing" },
      { label: "Book a demo", href: "/contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy policy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
] as const;

export const servedBusinesses = [
  "Car dealerships",
  "Dental clinics",
  "Coaching centres",
  "Hardware stores",
  "Diagnostic labs",
  "Furniture showrooms",
  "Auto spare parts",
  "Salons & spas",
  "Tyre dealers",
  "Electronics retail",
] as const;

export const proofPoints = [
  {
    n: "01",
    title: "Ask for our WhatsApp Business Account ID",
    body: "We'll give it to you on the first call. Check it against Meta's records — and ask whoever else you're talking to for theirs. Unofficial workarounds get business numbers banned eventually.",
  },
  {
    n: "02",
    title: "Support is a phone number",
    body: "Not a form, not a ticket queue. You'll have the number before you've paid us anything, and the person answering it knows the product because they built it.",
  },
  {
    n: "03",
    title: "Take your data and go",
    body: "Export every lead, conversation and stock record to CSV whenever you want. No notice period, no export fee, no call with a retention team.",
  },
  {
    n: "04",
    title: "Live by this afternoon, or we got it wrong",
    body: "Connect your number, add your team, start. No implementation project and no consultant. If setup takes longer than an afternoon, that's on us.",
  },
] as const;

export const proofHeading = "We're new. So don't take our word for it.";
export const proofIntro =
  "No logos and no testimonials. Four things you can check for yourself instead.";

export const noTestimonialsNote =
  "We don't have customers yet. Inventing quotes from businesses that don't exist would be a strange way to ask you to trust us with yours. When they're real they'll be here, with names and numbers you can ring.";

export const contactDestination: string | null = null;
