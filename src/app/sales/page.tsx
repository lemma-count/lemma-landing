import type { Metadata } from "next";
import { SolutionPage } from "@/components/SolutionPage";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Lemma for PLG Sales - Turn self-serve intent into buyer context",
  description:
    "Lemma helps PLG and self-serve sales teams turn product signals, demo requests, pricing intent, and activation stalls into buyer context.",
  path: "/sales",
});

export default function SalesPage() {
  return (
    <SolutionPage
      hero={{
        title: "Turn self-serve intent into sales context.",
        body: "PLG and self-serve motions create signals before a rep enters the conversation. Lemma helps sales teams hear why the account is active now, what they are trying to solve, what blocks expansion, and when human follow-up is worth it.",
        ctaLabel: "Start a conversation",
        ctaHref: "https://app.heylemma.com",
        cardImage: "/assets/solution-sales-context.png",
        cardImageAlt:
          "Sales teammates preparing for a buyer call with notes and an account plan.",
      }}
      feature={{
        title: "Qualify product-led demand without guessing from activity.",
        body: "Use Lemma after demo requests, pricing views, activation stalls, product milestones, invite spikes, or expansion triggers. It asks adaptive voice follow-ups and returns the account context sales needs before acting.",
        visual: "sales",
        items: [
          {
            title: "Separate usage from intent.",
            body: "A pricing view, signup spike, or feature milestone says something happened. Lemma asks what changed, who cares, and whether there is a real buying moment.",
          },
          {
            title: "Understand the account context.",
            body: "Capture the use case, current workaround, team constraints, urgency, stakeholders, and what would make the next step useful.",
          },
          {
            title: "Route the right human follow-up.",
            body: "Give sales a brief with fit, intent, objections, expansion signal, useful quotes, and the clearest next move before a rep reaches out.",
          },
        ],
      }}
    />
  );
}
