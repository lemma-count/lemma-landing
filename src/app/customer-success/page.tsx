import type { Metadata } from "next";
import { SolutionPage } from "@/components/SolutionPage";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Lemma for Customer Success - Understand churn, renewal, and value",
  description:
    "Lemma helps customer success teams capture the context behind churn risk, activation friction, renewal hesitation, and expansion potential.",
  path: "/customer-success",
});

export default function CustomerSuccessPage() {
  return (
    <SolutionPage
      hero={{
        title: "Understand why customers get stuck, stay, or leave.",
        body: "Scores and tags show the signal. Lemma helps customer success teams capture the context behind churn risk, activation friction, renewal hesitation, and expansion potential.",
        ctaLabel: "Start a conversation",
        ctaHref: "https://app.heylemma.com",
        cardImage: "/assets/solution-customer-success-context.png",
        cardImageAlt:
          "Customer success team reviewing renewal and customer feedback notes together.",
      }}
      feature={{
        title: "Turn customer moments into retention context.",
        body: "Use Lemma after onboarding stalls, support issues, renewals, downgrades, cancellations, or NPS responses to understand what happened and what should change.",
        visual: "customerSuccess",
        items: [
          {
            title: "Explain churn risk.",
            body: "Understand the situation behind the label: what changed, what value was missing, and what made the customer hesitate.",
          },
          {
            title: "Find activation friction.",
            body: "Ask what the customer tried to do, where the workflow broke, and what would have made the experience click.",
          },
          {
            title: "Surface expansion signals.",
            body: "Capture where customers see value, what else they need, and what would make expansion worth discussing.",
          },
        ],
      }}
    />
  );
}
