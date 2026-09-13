// ⚠ every ₹ figure is a placeholder

export type Tier = {
  code: "TRIAL" | "BASIC" | "ADVANCE";
  name: string;
  tagline: string;
  monthlyPrice: number;
  currency: "INR";
  period: string;
  maxTeamMembers: number;
  maxLeads: number | null;
  features: readonly string[];
  featured?: boolean;
  badge?: string;
  cta: { label: string; href: string };
};

export const showPrices = true;
export const currencySymbol = "₹";

export const tiers: readonly Tier[] = [
  {
    code: "TRIAL",
    name: "Trial",
    tagline: "See whether it fits before you pay anything.",
    monthlyPrice: 0,
    currency: "INR",
    period: "for 14 days",
    maxTeamMembers: 2,
    maxLeads: 100,
    features: ["2 team members", "100 leads", "No card required"],
    cta: { label: "Start free", href: "/contact" },
  },
  {
    code: "BASIC",
    name: "Basic",
    tagline: "A shop or clinic with a handful of people on the floor.",
    monthlyPrice: 1499,
    currency: "INR",
    period: "per month",
    maxTeamMembers: 5,
    maxLeads: 2000,
    features: ["5 team members", "2,000 leads a month", "Email support"],
    featured: true,
    badge: "Most businesses start here",
    cta: { label: "Book a demo", href: "/contact" },
  },
  {
    code: "ADVANCE",
    name: "Advance",
    tagline: "More than one location, or a team that answers all day.",
    monthlyPrice: 3999,
    currency: "INR",
    period: "per month",
    maxTeamMembers: 20,
    maxLeads: null,
    features: [
      "20 team members",
      "Unlimited leads",
      "Priority support",
      "Onboarding call",
    ],
    cta: { label: "Book a demo", href: "/contact" },
  },
] as const;

/** True of every tier, so it never belongs in a per-tier bullet list. */
export const includedInEvery = [
  "The entire product — no locked features",
  "Official WhatsApp Business API",
  "Shared inbox and named lead owners",
  "Export your data any time",
  "Support from the people who built it",
] as const;

export const pricingIntro =
  "Every plan is the whole product. The tiers are about how many people and how many records — never about withholding features.";

export const comparison = [
  { label: "Team members", values: ["2", "5", "20"] },
  { label: "Leads a month", values: ["100", "2,000", "Unlimited"] },
  { label: "Shared inbox", values: ["Yes", "Yes", "Yes"] },
  { label: "Named lead owners", values: ["Yes", "Yes", "Yes"] },
  { label: "Roles & permissions", values: ["Yes", "Yes", "Yes"] },
  { label: "Saved reply templates", values: ["Yes", "Yes", "Yes"] },
  { label: "Inventory & vendor bidding", values: ["Yes", "Yes", "Yes"] },
  { label: "Data export", values: ["Yes", "Yes", "Yes"] },
  { label: "Support", values: ["Email", "Email", "Priority"] },
  { label: "Onboarding call", values: ["—", "—", "Included"] },
] as const;

export const pricingFaq = [
  {
    q: "What happens when the trial ends?",
    a: "Nothing disappears. We'll tell you before it runs out and you choose whether to carry on. If you don't, your data is still exportable.",
  },
  {
    q: "Is there a contract?",
    a: "No lock-in and no notice period. Monthly, and you can stop at the end of any month.",
  },
  {
    q: "What counts as a lead?",
    a: "One customer conversation, however many messages it contains. Somebody messaging you forty times in a day is one lead, not forty.",
  },
  {
    q: "Do I pay separately for Inventory?",
    a: "No. Both products are included in every plan — the tiers only change limits.",
  },
] as const;

export function formatPrice(tier: Tier): string {
  if (!showPrices) return "Contact us";
  return `${currencySymbol}${tier.monthlyPrice.toLocaleString("en-IN")}`;
}
