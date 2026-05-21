import type { Metadata } from "next";
import { SolutionPage } from "@/components/SolutionPage";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Lemma for Founders - Find where the market is pulling",
  description:
    "Lemma helps founders turn target-market conversations into market-pull evidence: who is most likely to buy, what pain to lead with, and what to build next before betting more runway.",
  path: "/founders",
});

export default function FoundersPage() {
  return (
    <SolutionPage
      hero={{
        title: "Find where the market is pulling.",
        body: "Lemma helps founders talk to the market before they bet more runway. Find who is most likely to buy, what pain to lead with, and what to build next.",
        ctaLabel: "Get Started Free",
        ctaHref: "https://app.heylemma.com",
        cardImage: "/assets/card-customer-evidence.png",
        cardImageAlt: "Create Customer Evidence Engine product card",
      }}
      feature={{
        title: "Turn target-market conversations into decisions.",
        body: "When the product can go in five directions, Lemma helps you hear which direction the market is actually pulling.",
        image: "/assets/report-coverage.png",
        imageAlt: "Sample Lemma report: evidence coverage across market signals",
        items: [
          {
            title: "Find who is most likely to buy.",
            body: "Compare segments, urgency, buying triggers, and current workarounds before you commit another quarter of product and GTM effort.",
          },
          {
            title: "Separate interest from pull.",
            body: "Probe past polite feedback to hear the pain, objections, urgency, and language that show whether people actually care.",
          },
          {
            title: "Decide what to build next.",
            body: "Turn conversations into roadmap signals, narrative risks, and evidence your team can use before the next product bet.",
          },
        ],
      }}
    />
  );
}
