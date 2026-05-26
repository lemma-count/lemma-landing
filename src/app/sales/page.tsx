import type { Metadata } from "next";
import { SolutionPage } from "@/components/SolutionPage";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Lemma for Sales — Capture the context behind buyer intent",
  description:
    "Lemma uses adaptive voice conversations to capture buyer context, urgency, objections, and next steps before a sales conversation starts.",
  path: "/sales",
});

export default function SalesPage() {
  return (
    <SolutionPage
      hero={{
        title: "Capture the context behind buyer intent.",
        body: "A demo request tells you someone raised their hand. Lemma helps you understand the use case, urgency, constraints, objections, and next step before the call.",
        ctaLabel: "Get Started Free",
        ctaHref: "https://app.heylemma.com",
        cardImage: "/assets/card-plg-discovery.png",
        cardImageAlt: "Create PLG Discovery Engine product card",
      }}
      feature={{
        title: "Turn product signals into sales context.",
        body: "Usage data shows activity, not intent. Lemma helps sales teams ask the follow-up questions that explain why a buyer is interested and what would make the next conversation useful.",
        image: "/assets/report-coverage.png",
        imageAlt: "Sample Automated Product-Led Discovery Report",
        items: [
          {
            title: "Start from a high-intent moment.",
            body: "Use Lemma after a demo request, pricing view, product milestone, onboarding stall, or lead qualification form.",
          },
          {
            title: "Ask the next sales question.",
            body: "Capture use case, urgency, constraints, decision process, likely objections, and what would make the call useful.",
          },
          {
            title: "Give the team a useful brief.",
            body: "Turn buyer conversations into themes, quotes, objections, summaries, and next steps the sales team can use.",
          },
        ],
      }}
    />
  );
}
