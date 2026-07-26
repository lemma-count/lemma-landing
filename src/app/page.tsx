import type { Metadata } from "next";
import { CockpitSection } from "@/components/CockpitSection";
import { Hero } from "@/components/Hero";
import { LandingFaq, landingFaqItems } from "@/components/LandingFaq";
import { LongHorizonSection } from "@/components/LongHorizonSection";
import { PricingPreview } from "@/components/PricingPreview";
import { ProofOverview } from "@/components/ProofOverview";
import { RelevantContentSection } from "@/components/RelevantContentSection";
import styles from "@/components/LemmaMarketing.module.css";
import { createMetadata, faqJsonLd, stringifyJsonLd } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "LinkedIn research and follow-up that keeps going — Lemma",
  description:
    "Lemma researches the people you choose, runs the LinkedIn work you allow, follows up across days and weeks, and brings replies or problems back to you.",
  path: "/",
  image: {
    url: "/brand/lemma/v1.4.0/visuals/lemma-alignment-court.webp",
    width: 1500,
    height: 1452,
    alt: "Airy Klein Blue architectural planes converging toward one precise passage and a tiny orange horizon signal.",
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
        <ProofOverview />
        <RelevantContentSection />
        <CockpitSection />
        <LongHorizonSection />
        <PricingPreview />
        <LandingFaq />
      </main>
    </>
  );
}
