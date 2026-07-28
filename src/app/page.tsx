import type { Metadata } from "next";
import { AsyncInterviewSection } from "@/components/AsyncInterviewSection";
import { Hero } from "@/components/Hero";
import { LandingFaq, landingFaqItems } from "@/components/LandingFaq";
import { LongHorizonSection } from "@/components/LongHorizonSection";
import { PricingPreview } from "@/components/PricingPreview";
import { SolutionWorkflowSection } from "@/components/SolutionWorkflowSection";
import { WhyNowSection } from "@/components/WhyNowSection";
import styles from "@/components/LemmaMarketing.module.css";
import { createMetadata, faqJsonLd, stringifyJsonLd } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Outbound that keeps the relationship moving — Lemma",
  description:
    "Lemma plans and runs supervised LinkedIn outreach, can send links to AI voice conversations, and keeps working until there is a clear outcome or a decision needs you.",
  path: "/",
  image: {
    url: "/brand/lemma/v2.0.0/visuals/lemma-alignment-court.webp",
    width: 1500,
    height: 1452,
    alt: "Airy Klein Blue architectural planes converging toward one precise passage and a tiny orange marker.",
  },
});

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: stringifyJsonLd(
            faqJsonLd(
              landingFaqItems.map((item) => ({
                question: item.q,
                answer: item.a,
              })),
            ),
          ),
        }}
      />
      <main className={`${styles.root} ${styles.homeRoot}`}>
        <Hero />
        <WhyNowSection />
        <SolutionWorkflowSection />
        <AsyncInterviewSection />
        <LongHorizonSection />
        <PricingPreview />
        <LandingFaq />
      </main>
    </>
  );
}
