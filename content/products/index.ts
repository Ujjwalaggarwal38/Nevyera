// ⚠ names, SKUs and figures used in examples are placeholders

export type FeatureBlock = { title: string; body: string };

export type Product = {
  slug: string;
  href: string;
  name: string;
  index: string;
  status: "LIVE" | "BESPOKE";
  short: string;
  tryIt: string;
  headline: string;
  body: string;
  features: readonly string[];
  /** product page only */
  metaTitle: string;
  metaDescription: string;
  heroPromise: string;
  problem: { heading: string; body: string };
  featureBlocks: readonly FeatureBlock[];
  faq: readonly { q: string; a: string }[];
};

export const whatsappLeadManager: Product = {
  slug: "whatsapp-lead-manager",
  href: "/products/whatsapp-lead-manager",
  name: "WhatsApp Lead Manager",
  index: "01",
  status: "LIVE",
  short: "Every WhatsApp enquiry captured, owned by a named person, and closed.",
  tryIt: "Type a message as the customer and watch it arrive as a lead, get an owner's name on it, and close.",
  headline: "Every enquiry gets a name on it.",
  body: "A message arrives on your business number and becomes a lead by itself. Somebody is responsible for it. Everyone can see who. Six months later you can still read what was said.",
  features: [
    "Shared live inbox",
    "Named lead owners",
    "Admin · Manager · Agent roles",
    "Saved reply templates",
    "Official WhatsApp Business API",
  ],
  metaTitle: "WhatsApp Lead Manager",
  metaDescription:
    "Turn your business WhatsApp number into a shared inbox where every enquiry becomes a lead with a named owner. Built on Meta's official Business API.",
  heroPromise:
    "Your business WhatsApp number becomes a shared inbox. Every enquiry arrives as a lead with a name against it, and stays readable long after whoever handled it has forgotten.",
  problem: {
    heading: "The number on your board goes to somebody's personal phone.",
    body: "It gets read between customers and answered when there's a gap. Nobody can tell you how many enquiries came in last week, who replied, or which ones went quiet — because nothing was ever written down. The business runs on one person remembering, and remembering goes home at 8pm.",
  },
  featureBlocks: [
    {
      title: "One inbox the whole team can see",
      body: "Messages from your business number land in a shared inbox that updates live. No forwarding screenshots, no \u201cdid anyone reply to this?\u201d, no enquiries sitting unread on a phone that's gone home.",
    },
    {
      title: "Every lead has an owner",
      body: "Assign a lead to a person and their name stays on it. It stops being everybody's problem and therefore nobody's, and you can see at a glance who is carrying how much.",
    },
    {
      title: "Roles that match how you actually work",
      body: "Admins run the account, managers see everything, agents see what's theirs. Nobody has to be trusted with more access than their job needs.",
    },
    {
      title: "Templates for the things you type daily",
      body: "Price lists, directions, opening hours, the same three questions. Save them once and send in a tap, so a fast reply doesn't depend on who's on shift.",
    },
    {
      title: "Built on Meta's official API",
      body: "The Cloud API, not a browser automation workaround. The unofficial route works until it doesn't, and when it stops, it takes your business number with it.",
    },
  ],
  faq: [
    {
      q: "Do I need a new phone number?",
      a: "No. Your existing business number can be connected, though it must not be active on the normal WhatsApp Business app at the same time. We walk through this on the setup call.",
    },
    {
      q: "Will my customers know they're talking to software?",
      a: "No. It's the same WhatsApp conversation on their side. Nothing is automated unless you choose to use a template.",
    },
    {
      q: "What happens to conversations if we leave?",
      a: "You export them. Every lead and message goes out as CSV whenever you want, with no notice period and no export fee.",
    },
  ],
};

export const inventory: Product = {
  slug: "inventory",
  href: "/products/inventory",
  name: "Inventory",
  index: "02",
  status: "LIVE",
  short: "Stock, warehouses and vendors — with bidding built into procurement.",
  tryIt: "Scan a QR to issue stock, then ask three vendors to bid and watch the cheapest one win the order.",
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
  metaTitle: "Inventory",
  metaDescription:
    "Stock across warehouses tracked by QR, vendors bidding for your purchase orders, GST-ready records and billing through Zoho.",
  heroPromise:
    "Stock moves by QR across every warehouse. When something runs low, your vendors compete for the order instead of you ringing round for quotes.",
  problem: {
    heading: "Reordering costs more than the parts do.",
    body: "Somebody notices a shelf is empty, rings three suppliers, writes the prices on a pad, and picks whoever answered first because the customer is waiting. The gap between the best price and the one you paid never shows up anywhere, so nobody ever fixes it.",
  },
  featureBlocks: [
    {
      title: "Vendors bid against each other",
      body: "Send one request and every approved vendor quotes at once. You see the spread side by side and the order goes to the best price \u2014 not to whoever picked up the phone first.",
    },
    {
      title: "Stock moves by QR",
      body: "Scan when it comes in, scan when it goes out. The count is right because nobody had to remember to update it, and you can trace where any unit went.",
    },
    {
      title: "Every warehouse in one view",
      body: "What's on which shelf, what's in transit, what's promised. Reorder points raise themselves before a shelf runs dry rather than after.",
    },
    {
      title: "Vendors and purchases in one place",
      body: "Who you buy from, what you agreed, what's outstanding and what it cost last time \u2014 so the next negotiation starts from facts.",
    },
    {
      title: "GST-ready, billed through Zoho",
      body: "Records are structured for GST, and billing runs through an integration with Zoho. It's an integration, not native billing \u2014 worth knowing before you switch.",
    },
  ],
  faq: [
    {
      q: "Does this replace Zoho?",
      a: "No. Billing runs through an integration with Zoho rather than being rebuilt inside Nevyera. If you already use Zoho Books, it keeps working.",
    },
    {
      q: "Do I need special QR hardware?",
      a: "No. Any phone camera works. Dedicated scanners work too if you already have them.",
    },
    {
      q: "How many vendors can bid on one request?",
      a: "As many as you've approved. They each see only their own bid, not each other's.",
    },
  ],
};

export const customSoftware: Product = {
  slug: "custom",
  href: "/custom",
  name: "Custom software",
  index: "03",
  status: "BESPOKE",
  short: "When the tool your business needs doesn't exist yet, we build it.",
  tryIt: "Pick your kind of business and see roughly what we'd scope for it.",
  headline: "We map what you do, then build to that.",
  body: "Most software asks you to change how you work to suit it. We go the other way. Pick a business on the right and see roughly what we'd scope.",
  features: [
    "Your process mapped first",
    "Built for the people using it",
    "You own the code",
    "Supported by the people who wrote it",
  ],
  metaTitle: "Custom software",
  metaDescription:
    "Software built around how your business already works, delivered in weeks rather than quarters. You own the code.",
  heroPromise:
    "Some businesses don't have a product that fits them. We map how you already work, build to that, and hand you the code at the end.",
  problem: {
    heading: "The tool for your business doesn't exist, so you use six that nearly fit.",
    body: "A spreadsheet for one thing, a WhatsApp group for another, a notebook at the counter, and one person who understands how they connect. It works until that person is on leave. Off-the-shelf software asks you to change your process to suit it; most businesses quietly refuse, and go back to the spreadsheet.",
  },
  featureBlocks: [
    {
      title: "We watch before we build",
      body: "The first week is spent with the people who'll use it, mapping what actually happens \u2014 including the parts that live on paper, in WhatsApp, and in somebody's head.",
    },
    {
      title: "A working version in three weeks",
      body: "Not a prototype or a clickable mockup. Something handling real work, so the feedback comes from using it rather than imagining it.",
    },
    {
      title: "Built for the people who'll use it",
      body: "The person at the counter is the user, not the person who signed the contract. If it needs a training day, we designed it wrong.",
    },
    {
      title: "You own the code",
      body: "It's yours at the end \u2014 repository, data, everything. No licence you can't leave and no rebuild required if you ever part ways with us.",
    },
  ],
  faq: [
    {
      q: "How much does it cost?",
      a: "It depends entirely on scope, so we quote after the first conversation rather than publishing a number that would be wrong for everyone.",
    },
    {
      q: "What if we already have software that half works?",
      a: "That's common. Often the answer is to build the missing piece and integrate, not to replace what already works.",
    },
    {
      q: "Do you keep supporting it afterwards?",
      a: "Yes, by the people who wrote it. You can also take it elsewhere \u2014 you own the code.",
    },
  ],
};

export const products = [whatsappLeadManager, inventory, customSoftware] as const;

export function productBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
