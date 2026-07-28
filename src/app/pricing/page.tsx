import type { Metadata } from "next";
import { LandingFaq } from "@/components/LandingFaq";
import { PricingPlans } from "@/components/PricingPlans";
import { TrackedLink } from "@/components/TrackedLink";
import styles from "@/components/LemmaMarketing.module.css";
import { LEMMA_START_TRIAL_URL } from "@/lib/links";
import { lemmaTrial } from "@/lib/pricing";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Pricing — Lemma",
  description:
    "Simple monthly pricing based on how many new people Lemma starts work for. Start with a seven-day trial, ten Lemma credits, and no credit card. Outreach you run yourself is unlimited.",
  path: "/pricing",
  image: {
    url: "/brand/lemma/v1.4.0/visuals/lemma-alignment-court.webp",
    width: 1500,
    height: 1452,
    alt: "Airy Klein Blue architectural planes converging toward one precise passage and a tiny orange marker.",
  },
});

const lemmaCreditRules = [
  {
    index: "01",
    title: "Charged when Lemma starts work",
    body: "One credit is used when Lemma begins managing a new person. Retrying the same start does not use another credit.",
  },
  {
    index: "02",
    title: "Your credits reset each month",
    body: "Each renewal gives you a new monthly set of credits. People Lemma already manages are not charged again. If Starter’s 10 credits are used, upgrading to Growth adds 90 more. A downgrade starts next month.",
  },
  {
    index: "03",
    title: "One active outreach plan per person",
    body: "A person can be in one active self-run or Lemma-managed plan at a time. Moving that person between plans does not use another credit. Starting again after the previous work ended does.",
  },
  {
    index: "04",
    title: "Outreach you run yourself stays unlimited",
    body: "You can run as many outreach plans and contact as many people yourself as you want, without using credits. When a trial or subscription ends, sending stops and the workspace remains available to read.",
  },
] as const;

export default function PricingPage() {
  return (
    <main className={styles.root}>
      <section className={styles.pricingHero}>
        <div className={`${styles.frame} ${styles.sectionGrid}`}>
          <div className={styles.pricingHeroCopy}>
            <p className={styles.eyebrow}>Pricing / Lemma credits</p>
            <h1 className={`${styles.sectionTitle} ${styles.pricingHeroTitle}`}>
              Pay when Lemma starts work on a new contact.
            </h1>
            <p className={`${styles.sectionBody} ${styles.pricingHeroBody}`}>
              One Lemma credit starts Lemma-managed research and follow-up for
              one new person. Outreach you run yourself stays unlimited.
            </p>
          </div>

          <div className={styles.trialBand}>
            <div className={styles.trialBandCopy}>
              <div className={styles.trialMetric}>
                <strong>{lemmaTrial.days} days</strong>
                <span>Free trial</span>
              </div>
              <div className={styles.trialMetric}>
                <strong>{lemmaTrial.lemmaCredits}</strong>
                <span>Lemma credits</span>
              </div>
              <div className={styles.trialMetric}>
                <strong>No card</strong>
                <span>Required</span>
              </div>
            </div>

            <TrackedLink
              href={LEMMA_START_TRIAL_URL}
              event="pricing_cta_click"
              eventProps={{
                plan: "trial",
                label: "Start free trial",
                page: "pricing",
                location: "trial",
              }}
              className={`${styles.primaryAction} ${styles.trialBandAction}`}
            >
              Start free trial
            </TrackedLink>
          </div>
        </div>
      </section>

      <section className={styles.pricingSection}>
        <div className={`${styles.frame} ${styles.sectionGrid}`}>
          <PricingPlans />
        </div>
      </section>

      <section className={styles.section}>
        <div className={`${styles.frame} ${styles.sectionGrid}`}>
          <div className={styles.definitionLead}>
            <p className={styles.eyebrow}>One clear unit</p>
            <h2 className={`${styles.sectionTitle} ${styles.editorialTitle}`}>
              One credit lets Lemma manage one new person over time.
            </h2>
            <p className={styles.sectionBody}>
              The credit is used when Lemma starts work for that person. Lemma
              can then research, follow up, and adapt as the relationship
              develops—without charging for every message.
            </p>
          </div>

          <div className={styles.definitionRules}>
            {lemmaCreditRules.map((rule) => (
              <article key={rule.index} className={styles.definitionRule}>
                <span>{rule.index}</span>
                <div>
                  <h3>{rule.title}</h3>
                  <p>{rule.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <LandingFaq />
    </main>
  );
}
