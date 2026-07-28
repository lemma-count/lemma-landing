export const pricingTruth = {
  asOf: "2026-07-28",
  source: "Founder-approved Lemma enrollment credit pricing brief",
  currency: "USD",
  billingPeriod: "monthly",
} as const;

export const lemmaTrial = {
  days: 7,
  lemmaCredits: 10,
  cardRequired: false,
} as const;

export const lemmaPlans = [
  {
    id: "starter",
    name: "Starter",
    monthlyPrice: 29,
    lemmaCredits: 10,
    description: "For starting a focused customer-finding effort with Lemma.",
    supportLevel: "Standard",
    support: "In-app support for setup and day-to-day questions.",
    cta: "Subscribe to Starter",
  },
  {
    id: "growth",
    name: "Growth",
    monthlyPrice: 99,
    lemmaCredits: 100,
    description: "For finding and following up with potential customers every week.",
    supportLevel: "Enhanced",
    support: "More hands-on support as your customer-finding work grows.",
    cta: "Subscribe to Growth",
  },
  {
    id: "scale",
    name: "Scale",
    monthlyPrice: 299,
    lemmaCredits: 400,
    description: "For lean teams running several customer-finding goals at once.",
    supportLevel: "Premium",
    support: "Our highest level of support for more complex customer-finding work.",
    cta: "Subscribe to Scale",
  },
] as const;

export const planSharedFeatureGroups = [
  {
    title: "Find and work",
    features: [
      "Import Leads from CSV or LinkedIn",
      "Research and one-to-one message drafts",
      "Review plans and drafts in the Cockpit and Outbox",
    ],
  },
  {
    title: "Stay in control",
    features: [
      "Sign in with Google",
      "Sending limits and active hours",
      "Do-not-contact controls and audit history",
    ],
  },
] as const;
