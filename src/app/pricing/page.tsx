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
    "Simple monthly pricing based on how many new people Lemma starts work for. Start with a seven-day trial, ten Lemma credits, and no credit card. Work you direct step by step uses no credits.",
  path: "/pricing",
  image: {
    url: "/brand/lemma/v2.1.0/visuals/lemma-alignment-court.webp",
    width: 1500,
    height: 1452,
    alt: "Airy Klein Blue architectural planes converging toward one precise passage and a tiny orange marker.",
  },
});

const lemmaCreditRules = [
  {
    index: "01",
    title: "Charged when Lemma starts work",
    body: "One credit is used when Lemma begins managing a new person. Retrying the same start uses no extra credit.",
  },
  {
    index: "02",
    title: "Your credits reset each month",
    body: "People already managed are not charged again. Upgrades add the difference immediately; downgrades start next month.",
  },
  {
    index: "03",
    title: "One active outreach plan per person",
    body: "Moving someone between plans is free. Starting again after the previous work ended uses a new credit.",
  },
  {
    index: "04",
    title: "The work you direct stays unlimited",
    body: "Choose every message and timing without using credits. When a trial or subscription ends, sending stops; the workspace stays readable.",
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
              Choose every message and timing yourself—unlimited. Or use one
              credit when Lemma starts research and follow-up for a new person.
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
          <div className={styles.pricingModesIntro}>
            <p className={styles.eyebrow}>Two ways to work</p>
            <div className={styles.pricingModes}>
              <article className={styles.pricingMode}>
                <span>01</span>
                <div>
                  <h2>You direct every step.</h2>
                  <p>
                    Choose each message and timing. Unlimited and no credits.
                  </p>
                </div>
              </article>
              <article className={styles.pricingMode}>
                <span>02</span>
                <div>
                  <h2>
                    Lemma runs the work from first message to next step.
                  </h2>
                  <p>
                    Lemma researches, prepares, and adapts the next move. One
                    credit per new person.
                  </p>
                </div>
              </article>
            </div>
          </div>
          <PricingPlans />
        </div>
      </section>

      <section className={styles.section}>
        <div className={`${styles.frame} ${styles.sectionGrid}`}>
          <div className={styles.definitionLead}>
            <p className={styles.eyebrow}>One clear unit</p>
            <h2 className={`${styles.sectionTitle} ${styles.editorialTitle}`}>
              One credit. One new person managed over time.
            </h2>
            <p className={styles.sectionBody}>
              It covers Lemma’s research, follow-up, and adaptation—not each
              message.
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
