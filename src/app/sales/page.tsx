import type { Metadata } from "next";
import { SolutionPage } from "@/components/SolutionPage";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Lemma for PLG Sales - Turn self-serve intent into buyer context",
  description:
    "Lemma helps sales teams turn self-serve signals into buyer briefs.",
  path: "/sales",
});

export default function SalesPage() {
  return (
    <SolutionPage
      hero={{
        title: "Turn self-serve intent into sales context.",
        body: "Self-serve activity tells sales something happened. Lemma asks why it happened and turns the answer into a buyer brief.",
        ctaLabel: "Start a conversation",
        ctaHref: "https://app.heylemma.com",
        cardImage: "/assets/solution-sales-context.png",
        cardImageAlt:
          "Sales teammates preparing for a buyer call with notes and an account plan.",
      }}
      feature={{
        title: "Qualify product-led demand without guessing from activity.",
        body: "Use Lemma after a demo request, pricing view, or product signal. It asks follow-ups before a rep decides the next move.",
        visual: "sales",
        items: [
          {
            title: "Separate usage from intent.",
            body: "A pricing view is a signal. Lemma asks what changed and whether there is a real buying moment.",
          },
          {
            title: "Understand the account context.",
            body: "Capture the current workflow, urgency, and next step that would make the sales conversation useful.",
          },
          {
            title: "Route the right human follow-up.",
            body: "Give sales enough context to choose the right follow-up.",
          },
        ],
      }}
    />
  );
}
