// ⚠ DRAFT. Written as a starting point, not by a lawyer. Have these reviewed
// before launch — Meta also requires working Privacy and Terms URLs to approve
// WhatsApp Business API access, so they are a product dependency.

export type LegalSection = { heading: string; paras: readonly string[] };

export const legalDraftNotice =
  "Draft. This wording is a starting point and has not been reviewed by a lawyer. Remove this notice once it has.";

export const privacy = {
  title: "Privacy policy",
  updated: "Not yet published",
  intro:
    "This explains what Nevyera collects, why, and what you can do about it. It covers both the people who use our software and the customers whose messages pass through it.",
  sections: [
    {
      heading: "Who we are",
      paras: [
        "Nevyera builds and operates lead management and inventory software for businesses in India. Where you are our customer, you are the data controller for your own customers' information and we act as a processor on your instructions.",
      ],
    },
    {
      heading: "What we collect",
      paras: [
        "Account information you give us: name, business name, email address, phone number and billing details.",
        "Business data you put into the product: leads, customer names and phone numbers, message history, stock records, vendors and purchase information.",
        "WhatsApp conversation content that arrives on a business number you have connected, processed so we can show it to you in the shared inbox.",
        "Basic technical information: IP address, browser, and pages visited, used to keep the service running and secure.",
      ],
    },
    {
      heading: "Why we collect it",
      paras: [
        "To provide the product you are paying for, to support you when something breaks, to bill you, and to meet legal obligations. We do not sell data, and we do not use your business data to train models.",
      ],
    },
    {
      heading: "Who we share it with",
      paras: [
        "Meta, because WhatsApp messages are delivered through the official WhatsApp Business Cloud API.",
        "Zoho, where billing is handled through our integration.",
        "Our hosting and infrastructure providers, which store data on our behalf.",
        "Nobody else, unless we are legally required to.",
      ],
    },
    {
      heading: "How long we keep it",
      paras: [
        "For as long as your account is open, and for a limited period afterwards where we have to for tax or legal reasons. You can delete data from the product at any time.",
      ],
    },
    {
      heading: "Your rights",
      paras: [
        "You can export everything as CSV whenever you want, with no notice period and no fee. You can ask us to correct or delete your information, and you can close your account without speaking to anyone.",
      ],
    },
    {
      heading: "Contact",
      paras: [
        "Questions about this policy, or a request about your data, can go to the address on our contact page and we will reply within one working day.",
      ],
    },
  ] as readonly LegalSection[],
};

export const terms = {
  title: "Terms of service",
  updated: "Not yet published",
  intro:
    "The agreement between Nevyera and the business using its software. Written to be read rather than skimmed past.",
  sections: [
    {
      heading: "The service",
      paras: [
        "Nevyera provides software for managing enquiries and inventory, and optionally builds custom software under a separate written scope. Access is provided on a monthly basis unless agreed otherwise in writing.",
      ],
    },
    {
      heading: "Your account",
      paras: [
        "You are responsible for who you give access to and for what they do with it. Tell us promptly if you think an account has been compromised.",
      ],
    },
    {
      heading: "Acceptable use",
      paras: [
        "You must follow WhatsApp's Business Messaging Policy and Meta's Commerce Policy when using the lead manager. Unsolicited bulk messaging is not permitted, and doing it can get your business number restricted by Meta — a decision that is theirs, not ours.",
        "You must not use the product to break Indian law, to harass people, or to store data you have no right to hold.",
      ],
    },
    {
      heading: "Fees",
      paras: [
        "Plans are billed monthly in advance. There is no minimum term and no notice period — cancel and the plan ends at the end of the paid month. We will give you clear warning before any price change.",
      ],
    },
    {
      heading: "Your data",
      paras: [
        "Your business data stays yours. You can export it at any time, and we will not hold it hostage to keep you as a customer. For custom software builds, ownership of the code transfers to you as set out in the scope document.",
      ],
    },
    {
      heading: "Availability",
      paras: [
        "We work to keep the service running but do not promise uninterrupted availability. Parts of the service depend on Meta's WhatsApp API and other third parties, and outages there affect us too.",
      ],
    },
    {
      heading: "Ending the agreement",
      paras: [
        "You can stop at any time. We can end the agreement if fees go unpaid or if the acceptable use terms are broken, and we will tell you why and give you the chance to export your data first.",
      ],
    },
    {
      heading: "Governing law",
      paras: [
        "These terms are governed by the laws of India, and disputes fall under the jurisdiction of the courts where Nevyera is registered.",
      ],
    },
  ] as readonly LegalSection[],
};
