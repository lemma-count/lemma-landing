import type { Metadata } from "next";
import { SolutionPage } from "@/components/SolutionPage";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Lemma for Consultants - Turn stakeholder context into evidence",
  description:
    "Lemma helps consultants capture workflows, blockers, tradeoffs, and alignment gaps, then turn stakeholder conversations into client-ready evidence.",
  path: "/consultants",
});

export default function ConsultantsPage() {
  return (
    <SolutionPage
      hero={{
        title: "Turn stakeholder conversations into structured evidence.",
        body: "Lemma helps consultants capture the context behind workflows, blockers, tradeoffs, and alignment gaps before the room fills with opinions.",
        ctaLabel: "Start a conversation",
        ctaHref: "https://app.heylemma.com",
        cardImage: "/assets/solution-consultants-context.png",
        cardImageAlt:
          "Consultant facilitating a stakeholder workshop with client decision makers.",
      }}
      feature={{
        title: "From stakeholder input to client-ready context.",
        body: "Use Lemma to collect richer input from stakeholders, experts, customers, and employees, then turn it into briefs, patterns, quotes, and evidence for stronger recommendations.",
        visual: "consultants",
        items: [
          {
            title: "Capture stakeholder briefs.",
            body: "Collect each person's role, workflow, constraints, goals, objections, and view of what needs to change.",
          },
          {
            title: "Map hidden friction.",
            body: "Surface broken handoffs, bottlenecks, tradeoffs, alignment gaps, and local workarounds.",
          },
          {
            title: "Support the recommendation.",
            body: "Turn conversations into patterns, quote banks, risk maps, and workshop briefs clients can trust.",
          },
        ],
      }}
    />
  );
}
