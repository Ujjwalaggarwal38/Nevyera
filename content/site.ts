
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
    title: "Official WhatsApp Business API",
    body: "Meta's Cloud API, not a browser automation workaround. The unofficial route works until it doesn't, and then your business number is gone. Ask any vendor which one they use.",
  },
  {
    n: "02",
    title: "A team in India you can phone",
    body: "Support is a person in your timezone who knows the product. There's no ticket queue because there aren't enough of us to need one.",
  },
  {
    n: "03",
    title: "Your data leaves when you do",
    body: "Export leads, stock and conversations whenever you want, in a format you can open. We'll say that out loud because most contracts don't.",
  },
  {
    n: "04",
    title: "Running this afternoon",
    body: "Connect your number, add your team, begin. No implementation project, no consultant, no three-month rollout that quietly becomes six.",
  },
] as const;

export const noTestimonialsNote =
  "We don't have customers yet. Inventing quotes from businesses that don't exist would be a strange way to ask you to trust us with yours. When they're real they'll be here, with names and numbers you can ring.";

export const contactDestination: string | null = null;
