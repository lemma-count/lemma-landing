export const pricingTruth = {
  asOf: "2026-07-26",
  source: "Founder-approved website pricing brief",
  currency: "USD",
  billingPeriod: "monthly",
} as const;

export const lemmaTrial = {
  days: 7,
  managedLeads: 10,
  cardRequired: false,
} as const;

export const lemmaPlans = [
  {
    id: "starter",
    name: "Starter",
    monthlyPrice: 29,
    managedLeads: 50,
    description: "For getting a focused, repeatable outbound motion live.",
    supportLevel: "Standard",
    support: "In-app support for setup and day-to-day questions.",
    cta: "Subscribe to Starter",
  },
  {
    id: "growth",
    name: "Growth",
    monthlyPrice: 99,
    managedLeads: 200,
    description: "For running outbound consistently every week.",
    supportLevel: "Enhanced",
    support: "More hands-on support as your outbound motion grows.",
    cta: "Subscribe to Growth",
  },
  {
    id: "scale",
    name: "Scale",
    monthlyPrice: 299,
    managedLeads: 1000,
    description: "For lean teams coordinating several active Missions.",
    supportLevel: "Premium",
    support: "Our highest level of support for more complex outbound operations.",
    cta: "Subscribe to Scale",
  },
] as const;

export const planSharedFeatures = [
  "Unlimited manual Sequences",
  "LinkedIn execution",
  "Lead research and 1:1 drafts",
  "Mission, Cockpit, and Outbox visibility",
  "Sign in with Google",
] as const;
