/**
 * Product content. Both products are LIVE — neither carries a "coming soon"
 * badge. Custom software is a service, not a product, and is typed the same way
 * only because it shares the page template.
 *
 * Nothing here describes a capability that hasn't been confirmed. The Inventory
 * feature list was confirmed verbally by Ujjwal; the Lead Manager list is
 * grounded in the actual implementation at ~/Downloads/whatsapp-lead.
 */

export type Product = {
  slug: string;
  name: string;
  status: "LIVE" | "BESPOKE";
  /** One line, used on the tab and in nav */
  short: string;
  /** The promise, used as the pane headline */
  headline: string;
  body: string;
  features: readonly string[];
};

export const whatsappLeadManager: Product = {
  slug: "whatsapp-lead-manager",
  name: "WhatsApp Lead Manager",
  status: "LIVE",
  short: "Every WhatsApp enquiry captured, owned by a named person, and closed.",
  headline: "Every enquiry gets a name on it.",
  body: "A message arrives on your business number and becomes a lead by itself. Somebody is responsible for it. Everyone can see who. Six months later you can still read what was said.",
  features: [
    "Shared live inbox",
    "Named lead owners",
    "Admin · Manager · Agent roles",
    "Saved reply templates",
    "Official WhatsApp Business API",
  ],
};

export const inventory: Product = {
  slug: "inventory",
  name: "Inventory",
  status: "LIVE",
  short: "Stock, warehouses and vendors — with bidding built into procurement.",
  headline: "Vendors bid. You stop ringing round for prices.",
  body: "Stock moves by QR across warehouses. When something hits its reorder point, your vendors compete for the order instead of you calling three of them for quotes.",
  features: [
    "QR-tracked stock movement",
    "Multi-warehouse",
    "Vendor bidding on purchase needs",
    "Vendor & purchase management",
    "GST-ready",
    "Billing through Zoho",
  ],
};

export const customSoftware: Product = {
  slug: "custom",
  name: "Custom software",
  status: "BESPOKE",
  short: "When the tool your business needs doesn't exist yet, we build it.",
  headline: "We map what you do, then build to that.",
  body: "Most software asks you to change how you work to suit it. We go the other way. Pick a business on the right and see roughly what we'd scope.",
  features: [
    "Your process mapped first",
    "Built for the people using it",
    "You own the code",
    "Supported by the people who wrote it",
  ],
};

export const products = [whatsappLeadManager, inventory, customSoftware] as const;
