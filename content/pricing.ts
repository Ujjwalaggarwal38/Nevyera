// ⚠ every ₹ figure is a placeholder

export type Tier = {
  code: "TRIAL" | "BASIC" | "ADVANCE";
  name: string;
  monthlyPrice: number;
  currency: "INR";
  period: string;
  maxTeamMembers: number;
  maxLeads: number | null;
  features: readonly string[];
  featured?: boolean;
  cta: { label: string; href: string };
};

export const showPrices = true;

export const currencySymbol = "₹";

export const tiers: readonly Tier[] = [
  {
    code: "TRIAL",
    name: "Trial",
    monthlyPrice: 0,
    currency: "INR",
    period: "14 days",
    maxTeamMembers: 2,
    maxLeads: 100,
    features: [
      "2 team members",
      "100 leads",
      "The entire product",
      "No card required",
    ],
    cta: { label: "Start free", href: "/contact" },
  },
  {
    code: "BASIC",
    name: "Basic",
    monthlyPrice: 1499,
    currency: "INR",
    period: "per month",
    maxTeamMembers: 5,
    maxLeads: 2000,
    features: ["5 team members", "2,000 leads", "Saved templates", "Email support"],
    featured: true,
    cta: { label: "Book a demo", href: "/contact" },
  },
  {
    code: "ADVANCE",
    name: "Advance",
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

export const pricingIntro =
  "Every plan is the whole product. The tiers are about how many people and how many records — never about withholding features.";

export function formatPrice(tier: Tier): string {
  if (!showPrices) return "Contact us";
  return `${currencySymbol}${tier.monthlyPrice.toLocaleString("en-IN")}`;
}
