import type { Metadata } from "next";
import { PricingPlans } from "@/components/PricingPlans";
import { TrackedLink } from "@/components/TrackedLink";
import styles from "@/components/LemmaMarketing.module.css";
import { LEMMA_START_TRIAL_URL } from "@/lib/links";
import { lemmaTrial, pricingTruth } from "@/lib/pricing";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Pricing — Lemma",
  description:
    "Simple monthly pricing based on Managed leads. Start with a seven-day trial, ten Managed leads, and no credit card. Manual Sequences are unlimited.",
  path: "/pricing",
  image: {
    url: "/brand/lemma/v1.4.0/visuals/lemma-alignment-court.webp",
    width: 1500,
    height: 1452,
    alt: "Airy Klein Blue architectural planes converging toward one precise passage and a tiny orange horizon signal.",
  },
});

const managedLeadRules = [
  {
    index: "01",
    title: "What counts",
    body: "A Lead counts while it is assigned to a live Lemma-led Mission and Lemma is actively running that work for you.",
  },
  {
    index: "02",
    title: "What does not free capacity",
    body: "A reply does not remove a Lead from your usage. The active Mission still holds that Managed-lead capacity.",
  },
  {
    index: "03",
    title: "What frees capacity",
    body: "Finish or archive the Mission, or release the Lead from Lemma-led work.",
  },
  {
    index: "04",
    title: "What happens at the limit",
    body: "New Lemma-led capacity is blocked until you upgrade. After the trial, new Lemma-led capacity is soft-locked behind the upgrade action.",
  },
] as const;

export default function PricingPage() {
  return (
    <main className={styles.root}>
      <section className={styles.pricingHero}>
        <div className={`${styles.frame} ${styles.sectionGrid}`}>
          <div className={styles.pricingHeroCopy}>
            <p className={styles.eyebrow}>Pricing / Managed leads</p>
            <h1 className={`${styles.sectionTitle} ${styles.pricingHeroTitle}`}>
              Simple pricing for the Leads Lemma runs.
            </h1>
            <p className={`${styles.sectionBody} ${styles.pricingHeroBody}`}>
              Pay for Managed leads on live Lemma-led Missions. Manual
              Sequences are unlimited and never count toward your plan.
            </p>
          </div>

          <div className={styles.trialBand}>
            <div className={styles.trialBandCopy}>
              <div className={styles.trialMetric}>
                <strong>{lemmaTrial.days} days</strong>
                <span>Free trial</span>
              </div>
              <div className={styles.trialMetric}>
                <strong>{lemmaTrial.managedLeads}</strong>
                <span>Managed leads</span>
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
          <p
            className={styles.pricingFinePrint}
            data-pricing-as-of={pricingTruth.asOf}
            data-pricing-source={pricingTruth.source}
          >
            Monthly plans in {pricingTruth.currency} · Monthly billing only ·
            Upgrade only · No credit packs or top-ups
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={`${styles.frame} ${styles.sectionGrid}`}>
          <div className={styles.definitionLead}>
            <p className={styles.eyebrow}>One clear unit</p>
            <h2 className={`${styles.sectionTitle} ${styles.editorialTitle}`}>
              What makes a Lead managed?
            </h2>
            <p className={styles.sectionBody}>
              The unit follows active Lemma-led work—not messages sent, replies
              received, or manual Sequences.
            </p>
          </div>

          <div className={styles.definitionRules}>
            {managedLeadRules.map((rule) => (
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
    </main>
  );
}
