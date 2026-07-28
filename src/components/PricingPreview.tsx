import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  getLemmaPlanUrl,
  LEMMA_START_TRIAL_URL,
} from "@/lib/links";
import { lemmaPlans, lemmaTrial } from "@/lib/pricing";
import { TrackedLink } from "./TrackedLink";
import styles from "./LemmaMarketing.module.css";

export function PricingPreview() {
  return (
    <section
      id="pricing"
      className={`${styles.section} ${styles.pricingPreviewSection}`}
    >
      <div className={`${styles.frame} ${styles.pricingPreviewGrid}`}>
        <div className={styles.pricingPreviewIntro}>
          <p className={styles.eyebrow}>Pricing / Lemma-managed contacts</p>
          <h2 className={styles.pricingPreviewTitle}>
            Run your own outreach without limits. Pay when Lemma starts work.
          </h2>
          <p className={styles.pricingPreviewBody}>
            Outreach you run yourself is unlimited. A Lemma credit is used only
            when Lemma starts researching and following up with a new person
            for you.
          </p>
          <p className={styles.pricingThesis}>
            1 Lemma credit = Lemma starts work for 1 new person.
          </p>
          <TrackedLink
            href={LEMMA_START_TRIAL_URL}
            event="pricing_cta_click"
            eventProps={{
              plan: "trial",
              label: "Start free",
              page: "home",
              location: "pricing-preview",
            }}
            className={`${styles.primaryAction} ${styles.pricingStartAction}`}
          >
            Start free
            <ArrowUpRight size={16} strokeWidth={1.5} aria-hidden />
          </TrackedLink>
          <Link href="/pricing" className={styles.textLink}>
            See all plans
            <ArrowUpRight size={16} strokeWidth={1.5} aria-hidden />
          </Link>
        </div>

        <div className={styles.pricingComparison}>
          <table className={styles.pricingTable}>
            <caption>Lemma monthly plan comparison</caption>
            <thead>
              <tr>
                <th scope="col">Plan</th>
                {lemmaPlans.map((plan) => (
                  <th key={plan.id} scope="col">
                    {plan.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Lemma credits / month</th>
                {lemmaPlans.map((plan) => (
                  <td key={plan.id}>
                    {plan.lemmaCredits.toLocaleString("en-US")}
                  </td>
                ))}
              </tr>
              <tr>
                <th scope="row">Outreach you run yourself</th>
                {lemmaPlans.map((plan) => (
                  <td key={plan.id}>Unlimited</td>
                ))}
              </tr>
              <tr className={styles.pricingTablePriceRow}>
                <th scope="row">Monthly</th>
                {lemmaPlans.map((plan) => (
                  <td key={plan.id}>
                    <strong>${plan.monthlyPrice}</strong>
                    <span>/month</span>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>

          <div className={styles.pricingMobilePlans}>
            {lemmaPlans.map((plan) => (
              <article key={plan.id} className={styles.pricingMobilePlan}>
                <div>
                  <h3>{plan.name}</h3>
                  <p>
                    <strong>${plan.monthlyPrice}</strong>
                    <span>/month</span>
                  </p>
                </div>
                <ul>
                  <li>
                    {plan.lemmaCredits.toLocaleString("en-US")} Lemma
                    credits per month
                  </li>
                  <li>Unlimited outreach you run yourself</li>
                </ul>
                <TrackedLink
                  href={getLemmaPlanUrl(plan.id)}
                  event="pricing_cta_click"
                  eventProps={{
                    plan: plan.name,
                    label: plan.cta,
                    page: "home",
                    location: "pricing-preview-mobile",
                  }}
                  className={styles.planAction}
                >
                  {plan.cta}
                </TrackedLink>
              </article>
            ))}
          </div>

          <p className={styles.pricingComparisonNote}>
            A credit is used once, when Lemma starts work for a new person.
            Trial: {lemmaTrial.lemmaCredits} people for {lemmaTrial.days} days.
            No card.
          </p>
        </div>
      </div>
    </section>
  );
}
