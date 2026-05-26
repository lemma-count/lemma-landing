import type { Metadata } from "next";
import { SolutionPage } from "@/components/SolutionPage";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Lemma for Customer Success - Understand churn, renewal, and value",
  description:
    "Lemma helps customer success teams collect customer context around value, friction, complaints, renewal risk, churn, and expansion opportunities.",
  path: "/customer-success",
});

export default function CustomerSuccessPage() {
  return (
    <SolutionPage
      hero={{
        title: "Understand why customers stay, leave, or stop getting value.",
        body: "Scores and tags can route the work. Lemma helps customer success teams collect the context behind the score, complaint, renewal risk, or churn reason.",
        ctaLabel: "Start a conversation",
        ctaHref: "https://app.heylemma.com",
        cardImage: "/assets/card-customer-evidence.png",
        cardImageAlt: "Create Customer Evidence Engine product card",
      }}
      feature={{
        title: "Turn customer moments into evidence.",
        body: "Send a short voice conversation after support issues, onboarding stalls, downgrades, renewals, cancellations, or NPS responses. Lemma asks the follow-up and returns a report your team can use.",
        image: "/assets/report-coverage.png",
        imageAlt: "Sample Lemma report showing customer success evidence coverage",
        items: [
          {
            title: "Go past the label",
            body: "A churn reason like too expensive or missing features is only useful when you understand the situation behind it.",
          },
          {
            title: "Learn while the moment is fresh",
            body: "Ask what happened, why it mattered, what changed, and what would have made the experience work.",
          },
          {
            title: "Give teams the next action",
            body: "Turn customer conversations into themes, quotes, recovery opportunities, renewal risks, and product feedback.",
          },
        ],
      }}
    />
  );
}
