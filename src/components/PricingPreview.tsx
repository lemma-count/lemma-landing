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
          <p className={styles.eyebrow}>Simple pricing</p>
          <h2 className={styles.pricingPreviewTitle}>
            Pay for the people Lemma is working on.
          </h2>
          <p className={styles.pricingPreviewBody}>
            Plans are based on how many people Lemma can work on at once. Start
            with {lemmaTrial.managedLeads} people for {lemmaTrial.days} days. No
            card.
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
                <th scope="row">People Lemma can work on at once</th>
                {lemmaPlans.map((plan) => (
                  <td key={plan.id}>
                    {plan.managedLeads.toLocaleString("en-US")}
                  </td>
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
                    Lemma can work on{" "}
                    {plan.managedLeads.toLocaleString("en-US")} people at once
                  </li>
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
            Plans differ only by how many people Lemma can work on at once.
          </p>
        </div>
      </div>
    </section>
  );
}
