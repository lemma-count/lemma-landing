import { Check } from "lucide-react";
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
            <strong>{plan.lemmaCredits.toLocaleString("en-US")}</strong> Lemma
            credits / month
          </p>
          <p className={styles.planDescription}>{plan.description}</p>

          <div className={styles.planSupport}>
            <p className={styles.planSupportLabel}>
              Support / {plan.supportLevel}
            </p>
            <p className={styles.planSupportCopy}>{plan.support}</p>
          </div>

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

          <div className={styles.planRule} aria-hidden />
          <p className={styles.planFeaturesLabel}>Same product in every plan</p>
          <ul className={styles.planFeatures}>
            {planSharedFeatures.map((feature) => (
              <li key={feature}>
                <Check size={14} strokeWidth={1.8} aria-hidden />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
