import type { Metadata } from "next";
import { SolutionPage } from "@/components/SolutionPage";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Lemma for Marketing — Customer context for better messaging",
  description:
    "Lemma runs adaptive voice conversations with customers and turns their answers into buyer language, proof points, objections, quotes, and story briefs.",
  path: "/marketing",
});

export default function MarketingPage() {
  return (
    <SolutionPage
      hero={{
        title:
          "Get the customer context behind better messaging.",
        body: "Lemma helps marketing teams hear how customers describe the problem, the alternatives, the value, and the objections, then turns those conversations into proof your team can use.",
        ctaLabel: "Start a conversation",
        ctaHref: "https://app.heylemma.com",
        cardImage: "/assets/card-customer-evidence.png",
        cardImageAlt: "Create Customer Evidence Engine product card",
      }}
      feature={{
        title: "Turn customer conversations into proof.",
        body: "Send conversations after key customer moments. Lemma asks useful follow-ups and returns themes, quotes, objections, story angles, and buyer language.",
        image: "/assets/report-coverage.png",
        imageAlt: "Sample Customer Proof & Story Report",
        items: [
          {
            title: "Share interview links",
            body: "Trigger interviews after onboarding, product usage, renewals, expansions, support moments, launch feedback, or story nominations.",
          },
          {
            title: "Let Lemma ask the follow-ups.",
            body: "Lemma conducts each voice interview and probes for sentiment, value, objections, unmet needs, examples, and the words customers actually use.",
          },
          {
            title: "Turn context into assets",
            body: "Receive reports, quote banks, proof points, story briefs, launch-message inputs, and sales proof your team can review and use.",
          },
        ],
      }}
    />
  );
}
