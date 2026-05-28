import type { Metadata } from "next";
import { SolutionPage } from "@/components/SolutionPage";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Lemma for Customer Success - Understand churn, renewal, and value",
  description:
    "Lemma helps customer success teams understand why customers get stuck, stay, or leave.",
  path: "/customer-success",
});

export default function CustomerSuccessPage() {
  return (
    <SolutionPage
      hero={{
        title: "Understand why customers get stuck, stay, or leave.",
        body: "Scores and tags show the signal. Lemma asks the follow-up that explains what happened.",
        ctaLabel: "Start a conversation",
        ctaHref: "https://app.heylemma.com",
        cardImage: "/assets/solution-customer-success-context.png",
        cardImageAlt:
          "Customer success team reviewing renewal and customer feedback notes together.",
      }}
      feature={{
        title: "Turn customer moments into retention context.",
        body: "Use Lemma after a stall, downgrade, cancellation, or NPS response to learn what should change.",
        visual: "customerSuccess",
        items: [
          {
            title: "Explain churn risk.",
            body: "Understand what changed and what value was missing.",
          },
          {
            title: "Find activation friction.",
            body: "Ask what the customer tried to do, where the workflow broke, and what would have made the experience click.",
          },
          {
            title: "Surface expansion signals.",
            body: "Hear where customers see value and what would make expansion worth discussing.",
          },
        ],
      }}
    />
  );
}
