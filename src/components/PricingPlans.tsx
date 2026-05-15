import Link from "next/link";

type Plan = {
  name: string;
  tagline: string;
  cta: { label: string; href: string };
  featuresHeading: string;
  features: string[];
  highlighted?: boolean;
};

const plans: Plan[] = [
  {
    name: "Starter",
    tagline: "For trying Lemma on a real use case.",
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

function Card({ plan }: { plan: Plan }) {
  const dark = plan.highlighted;
  const wrap = dark
    ? "relative isolate overflow-hidden bg-black text-white"
    : "bg-white text-ink";
  const bg = dark ? "bg-black hover:bg-neutral-900" : "bg-accent hover:bg-[#2f3fd6]";
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
      <div className="p-6">
        <h3 className="text-xl font-semibold">{plan.name}</h3>
        <p className={`mt-2 text-sm ${dark ? "text-white/75" : "text-muted"}`}>
          {plan.tagline}
        </p>
      </div>
      <div className="flex-1 px-6" />
      <div className="px-6">
        <Link
          href={plan.cta.href}
          className={`inline-flex w-full items-center justify-center rounded-md px-5 py-2.5 text-sm font-medium transition-colors ${ctaBg}`}
        >
          {plan.cta.label}
        </Link>
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

export function PricingPlans() {
  return (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
      {plans.map((p) => (
        <Card key={p.name} plan={p} />
      ))}
    </div>
  );
}
