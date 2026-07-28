import { Check } from "lucide-react";
import { getLemmaPlanUrl } from "@/lib/links";
import { lemmaPlans, planSharedFeatureGroups } from "@/lib/pricing";
import { TrackedLink } from "./TrackedLink";
import styles from "./LemmaMarketing.module.css";

export function PricingPlans() {
  return (
    <div className={styles.pricingPlansBlock}>
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
          </article>
        ))}
      </div>

      <div className={styles.pricingSharedFeatures}>
        <p className={styles.planFeaturesLabel}>Included in every plan</p>
        <div className={styles.pricingSharedFeatureGroups}>
          {planSharedFeatureGroups.map((group) => (
            <div key={group.title} className={styles.pricingSharedFeatureGroup}>
              <h3>{group.title}</h3>
              <ul className={styles.planFeatures}>
                {group.features.map((feature) => (
                  <li key={feature}>
                    <Check size={14} strokeWidth={1.8} aria-hidden />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
