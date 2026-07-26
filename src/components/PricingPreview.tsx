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
          <p className={styles.eyebrow}>05 / Simple pricing</p>
          <h2 className={styles.pricingPreviewTitle}>
            Pay for the Leads Lemma manages.
          </h2>
          <p className={styles.pricingPreviewBody}>
            Start with {lemmaTrial.managedLeads} Managed leads free for{" "}
            {lemmaTrial.days} days. No credit card.
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
                <th scope="row">Managed leads</th>
                {lemmaPlans.map((plan) => (
                  <td key={plan.id}>
                    {plan.managedLeads.toLocaleString("en-US")}
                  </td>
                ))}
              </tr>
              <tr>
                <th scope="row">Manual Sequences</th>
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
                    {plan.managedLeads.toLocaleString("en-US")} Managed leads
                  </li>
                  <li>Unlimited manual Sequences</li>
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
            Unlimited manual outbound is included on every plan. Managed leads
            are the only plan limit.
          </p>
        </div>
      </div>
    </section>
  );
}
