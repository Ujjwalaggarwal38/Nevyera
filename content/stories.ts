// ⚠ names, SKUs, vendors and figures are placeholders

export type Beat = {
  clock: string;
  title: string;
  body: string;
  marker: { label: string; detail: string };
};

export type Story = {
  eyebrow: string;
  heading: string;
  intro: string;
  beats: readonly Beat[];
  payoff: { value: number; unit: string; note: string };
};

export const stories: Record<string, Story> = {
  "whatsapp-lead-manager": {
    eyebrow: "A Saturday at a dealership",
    heading: "Rohit asked at 9:14. Booked by 9:22.",
    intro:
      "Nothing clever happens here. The enquiry just has somewhere to land and a name attached to it.",
    beats: [
      {
        clock: "09:14",
        title: "It lands somewhere real",
        body: "Rohit's message reaches the business number and becomes a lead on its own — his name, his number, and what he asked. Nobody wrote anything down.",
        marker: { label: "Rohit Kumar", detail: "Captured as a lead" },
      },
      {
        clock: "09:15",
        title: "Priya owns it",
        body: "Assigned, with her name on it, visible to the team. It stops being everybody's problem and therefore nobody's.",
        marker: { label: "Assigned to Priya", detail: "Owner set · team notified" },
      },
      {
        clock: "09:22",
        title: "It closes",
        body: "She replies from the shared inbox and books the test drive for 11:40. The conversation is still readable next year.",
        marker: { label: "Test drive booked", detail: "11:40 · lead closed" },
      },
    ],
    payoff: {
      value: 8,
      unit: "minutes",
      note: "Start to finish. The version without software took four hours and lost two enquiries out of three.",
    },
  },

  inventory: {
    eyebrow: "A Tuesday in the stockroom",
    heading: "Stock ran low at 11:04. Reordered by 11:19.",
    intro:
      "Nobody rang a single vendor. The reorder point noticed, the vendors competed, and the cheapest one won.",
    beats: [
      {
        clock: "11:04",
        title: "The shelf notices first",
        body: "A QR scan takes brake pads out for a job and Warehouse A drops to 17. That's below the reorder point, so the system raises it instead of waiting for someone to spot a gap.",
        marker: { label: "BP-4417 below floor", detail: "Warehouse A · 17 left" },
      },
      {
        clock: "11:06",
        title: "Three vendors are asked at once",
        body: "A bid request for 200 units goes to every approved vendor simultaneously. No phone calls, no WhatsApp groups, no waiting on whoever answers first.",
        marker: { label: "Bids requested", detail: "3 vendors · 200 units" },
      },
      {
        clock: "11:19",
        title: "The cheapest bid wins",
        body: "Three quotes come back between ₹171 and ₹184. The order goes to the lowest automatically, and 200 units move into transit against the same SKU.",
        marker: { label: "Order placed · ₹171", detail: "200 units in transit" },
      },
    ],
    payoff: {
      value: 15,
      unit: "minutes",
      note: "Start to finish. Ringing three vendors for quotes and comparing them by hand is a two-day job that usually ends with whoever picked up.",
    },
  },

  custom: {
    eyebrow: "A build, start to finish",
    heading: "First conversation to live in six weeks.",
    intro:
      "No discovery phase that bills for a quarter. We watch how you already work, then build to that.",
    beats: [
      {
        clock: "WEEK 1",
        title: "We watch you work",
        body: "We sit with the people who'll actually use it and map what they do now — including the parts that happen on paper, on WhatsApp, and in somebody's head.",
        marker: { label: "Process mapped", detail: "With the people using it" },
      },
      {
        clock: "WEEK 3",
        title: "You use the first version",
        body: "Not a demo or a prototype — a working version handling real work, so the feedback comes from using it rather than imagining it.",
        marker: { label: "First version in use", detail: "Real work, real data" },
      },
      {
        clock: "WEEK 6",
        title: "It's live, and it's yours",
        body: "Running across your team, with the code in your hands and support from the people who wrote it. No lock-in, no licence you can't leave.",
        marker: { label: "Live across the team", detail: "You own the code" },
      },
    ],
    payoff: {
      value: 6,
      unit: "weeks",
      note: "From first conversation to software your team uses every day. Most custom builds are still in requirements-gathering at this point.",
    },
  },
};
