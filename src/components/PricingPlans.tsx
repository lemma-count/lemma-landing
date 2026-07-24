import { getLemmaPlanUrl } from "@/lib/links";
import { lemmaPlans, planSharedFeatures } from "@/lib/pricing";
import { TrackedLink } from "./TrackedLink";
import styles from "./LemmaMarketing.module.css";

export function PricingPlans() {
  return (
    <div className={styles.pricingPlans}>
      {lemmaPlans.map((plan) => (
        <article key={plan.id} className={styles.pricingPlan}>
          <h2 className={styles.planName}>{plan.name}</h2>
          <p className={styles.planPrice}>
            ${plan.monthlyPrice}
            <span className={styles.planPeriod}>/ month</span>
          </p>
          <p className={styles.planCapacity}>
            <strong>{plan.managedLeads.toLocaleString("en-US")}</strong>{" "}
            Managed leads
          </p>
          <p className={styles.planDescription}>{plan.description}</p>

          <div className={styles.planRule} aria-hidden />
          <ul className={styles.planFeatures}>
            {planSharedFeatures.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>

          <TrackedLink
            href={getLemmaPlanUrl(plan.id)}
            event="pricing_cta_click"
            eventProps={{
              plan: plan.name,
              label: plan.cta,
              page: "pricing",
              location: "plan",
            }}
            className={styles.planAction}
          >
            {plan.cta}
          </TrackedLink>
        </article>
      ))}

      <div className={styles.allPlansInclude}>
        <p>Every plan includes</p>
        <ul>
          {planSharedFeatures.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
