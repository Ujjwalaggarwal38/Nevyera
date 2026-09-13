// ⚠ founding year, city and team size are placeholders — confirm before launch

export const aboutIntro = {
  eyebrow: "About Nevyera",
  heading: "A small team building the software small businesses actually run on.",
  lede: "We started because we kept watching businesses lose money to admin rather than to competitors. Not to a better rival down the road — to an enquiry nobody answered and a purchase order nobody compared.",
};

/** Plain facts. Nothing here should be unverifiable or aspirational. */
export const facts = [
  { label: "Founded", value: "2026" },
  { label: "Based in", value: "Gurugram, India" },
  { label: "Products live", value: "Two" },
  { label: "Built on", value: "Meta WhatsApp Cloud API" },
  { label: "Billing integration", value: "Zoho" },
  { label: "Reply within", value: "One working day" },
  { label: "Contract length", value: "Monthly, no lock-in" },
  { label: "Data export", value: "CSV, any time, free" },
] as const;

export const story = [
  "Nevyera is a few months old. We have two products running — a WhatsApp lead manager and an inventory system with vendor bidding built into it — and a third thing we sell, which is the time of the people who built both.",
  "Neither product was designed in a workshop. Both came out of watching a real business lose track of something it couldn't afford to lose. The lead manager exists because a dealership was answering enquiries from a personal phone that went home at eight. The inventory system exists because reordering was costing more than the parts did.",
  "That's the whole method, and we're not going to dress it up: find something expensive that nobody has written software for, sit with the people it happens to, and build the smallest thing that fixes it.",
];

export const principles = [
  {
    title: "The person using it is the customer",
    body: "Not the person who signed. If someone at a counter needs a training day to use it, we designed it wrong and we'll say so before you do.",
  },
  {
    title: "Official routes only",
    body: "The lead manager runs on Meta's Cloud API, not an automation workaround. The unofficial path is cheaper right up until it takes your business number with it.",
  },
  {
    title: "Leaving has to be possible",
    body: "Export everything as CSV whenever you want — no notice period, no fee, no call with a retention team. A product that needs lock-in to keep customers isn't good enough.",
  },
  {
    title: "We'll tell you when it isn't a fit",
    body: "Some businesses don't need what we sell. Saying so on the first call costs us one deal and saves you a year.",
  },
];

export const wontDo = [
  "Invent testimonials or customer counts before we have them",
  "Quote a price for custom work before understanding the process",
  "Describe a Zoho integration as if we built billing ourselves",
  "Put you on an annual contract to make our numbers look better",
];
