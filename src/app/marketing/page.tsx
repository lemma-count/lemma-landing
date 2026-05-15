import type { Metadata } from "next";
import { SolutionPage } from "@/components/SolutionPage";

export const metadata: Metadata = {
  title: "Lemma for Marketing — Always-on customer research",
  description:
    "Lemma conducts AI-led voice interviews with customers and turns their answers into case-study briefs, quote banks, proof points, objection maps, buyer language, launch messaging, and sales collateral inputs.",
};

export default function MarketingPage() {
  return (
    <SolutionPage
      hero={{
        title:
          "Keep learning from customers. Turn every conversation into assets.",
        body: "Lemma conducts AI-led voice interviews with customers and turns their answers into case-study briefs, quote banks, proof points, objection maps, buyer language, launch messaging, and sales collateral inputs.",
        ctaLabel: "Get Started Free",
        ctaHref: "https://app.heylemma.com",
        cardImage: "/assets/card-customer-evidence.png",
        cardImageAlt: "Create Customer Evidence Engine product card",
      }}
      feature={{
        title: "Always-on customer research.",
        body: "Send interviews after key customer moments. Lemma does the research work and turns answers into themes, quotes, proof, and marketing material your team can use.",
        image: "/assets/report-coverage.png",
        imageAlt: "Sample Customer Proof & Story Report",
        items: [
          {
            title: "Share interview links",
            body: "Trigger interviews after onboarding, product usage, renewals, expansions, support moments, launch feedback, or story nominations.",
          },
          {
            title: "Let Lemma run the research.",
            body: "Lemma conducts each voice interview and probes for sentiment, value, objections, unmet needs, examples, and the words customers actually use.",
          },
          {
            title: "Turn insights into assets",
            body: "Receive reports, quote banks, proof points, story briefs, launch messaging, sales-slide inputs, and drafts your team can review and ship.",
          },
        ],
      }}
    />
  );
}
