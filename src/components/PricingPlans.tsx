"use client";

import { TrackedLink } from "./TrackedLink";

// Set to true once prices are confirmed to display them.
const SHOW_PRICES = false;

type Plan = {
  name: string;
  tagline: string;
  monthlyPrice: string;
  annualPrice: string;
  cta: { label: string; href: string };
  featuresHeading: string;
  features: string[];
  highlighted?: boolean;
};

const plans: Plan[] = [
  {
    name: "Starter",
    tagline: "For trying Lemma on a real use case.",
    monthlyPrice: "€0",
    annualPrice: "€0",
    cta: { label: "Start for free", href: "https://app.heylemma.com" },
    featuresHeading: "Includes",
    features: [
      "3 one-time interview credits.",
      "Unlimited teammates.",
      "AI voice interviewer.",
      "Smart follow-up questions.",
      "Transcript and summary for every interview.",
      "Extra interview credits available.",
    ],
  },
  {
    name: "Professional",
    tagline: "For people who run interviews regularly.",
    monthlyPrice: "€XX",
    annualPrice: "€XX",
    cta: { label: "Get Started", href: "https://app.heylemma.com" },
    featuresHeading: "Everything in Starter +",
    features: [
      "50 interview credits / month.",
      "Unlimited text-based surveys.",
      "Dynamic variables & localization.",
      "Themes, quotes, objections, blockers, and sentiment.",
      "Integrations with docs, slides, CRM, support tools, and AI workspaces.",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    tagline: "For high-volume interviews and custom workflows.",
    monthlyPrice: "Sur devis",
    annualPrice: "Sur devis",
    cta: { label: "Contact Sales", href: "/contact" },
    featuresHeading: "Everything in Professional +",
    features: [
      "Custom interview volume.",
      "API and webhooks.",
      "Dedicated account manager.",
      "SSO, SAML & enterprise-ready security policies.",
      "Onboarding, training & migration support.",
      "24/7 phone & email support.",
    ],
  },
];

function Check({ light = false }: { light?: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden
      className={`mt-1 shrink-0 ${light ? "text-white/70" : "text-muted"}`}
    >
      <path
        d="M2.5 7.5L5.5 10.5L11.5 4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Card({ plan, annual }: { plan: Plan; annual: boolean }) {
  const dark = plan.highlighted;
  const wrap = dark
    ? "relative isolate overflow-hidden bg-black text-white"
    : "bg-white text-ink";
  const ctaBg = dark
    ? "bg-accent text-white hover:bg-[#2f3fd6]"
    : "bg-black text-white hover:bg-neutral-800";

  return (
    <div
      className={`flex flex-col rounded-lg border border-border ${wrap}`}
    >
      {dark && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(120%_80%_at_50%_30%,rgba(180,80,160,0.55),rgba(60,20,55,0.5)_45%,#000_75%)]"
        />
      )}
      <div className="min-h-[9rem] p-6">
        <h3 className="text-xl font-semibold">{plan.name}</h3>
        <p className={`mt-2 text-sm ${dark ? "text-white/75" : "text-muted"}`}>
          {plan.tagline}
        </p>
        {SHOW_PRICES && (
          <p className={`mt-4 text-3xl font-semibold ${dark ? "text-white" : "text-ink"}`}>
            {annual ? plan.annualPrice : plan.monthlyPrice}
            {plan.monthlyPrice !== "Sur devis" && (
              <span className={`ml-1 text-sm font-normal ${dark ? "text-white/60" : "text-muted"}`}>
                /mo
              </span>
            )}
          </p>
        )}
      </div>
      <div className="px-6 pb-6">
        <TrackedLink
          href={plan.cta.href}
          event="pricing_cta_click"
          eventProps={{ plan: plan.name }}
          className={`inline-flex w-full items-center justify-center rounded-md px-5 py-2.5 text-sm font-medium transition-colors ${ctaBg}`}
        >
          {plan.cta.label}
        </TrackedLink>
      </div>
      <div className={`mt-6 border-t ${dark ? "border-white/15" : "border-border"} p-6`}>
        <p className={`text-sm font-medium ${dark ? "text-white" : "text-ink"}`}>
          {plan.featuresHeading}
        </p>
        <ul className="mt-4 space-y-3">
          {plan.features.map((f) => (
            <li
              key={f}
              className={`flex gap-2 text-sm leading-6 ${
                dark ? "text-white/85" : "text-muted"
              }`}
            >
              <Check light={dark} />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function PricingPlans({ annual = true }: { annual?: boolean }) {
  return (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
      {plans.map((p) => (
        <Card key={p.name} plan={p} annual={annual} />
      ))}
    </div>
  );
}
