export const pricingTruth = {
  asOf: "2026-07-23",
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
    description: "For starting a focused, repeatable outbound motion.",
    cta: "Subscribe to Starter",
  },
  {
    id: "growth",
    name: "Growth",
    monthlyPrice: 99,
    managedLeads: 200,
    description: "For running client acquisition consistently each week.",
    cta: "Subscribe to Growth",
  },
  {
    id: "scale",
    name: "Scale",
    monthlyPrice: 299,
    managedLeads: 1000,
    description: "For lean teams running several active Missions.",
    cta: "Subscribe to Scale",
  },
] as const;

export const planSharedFeatures = [
  "Unlimited manual Sequences",
  "LinkedIn execution",
  "Lead research and 1:1 drafts",
  "Mission, Cockpit, and Outbox visibility",
  "Sign in with Google",
  "In-app chat support",
] as const;
