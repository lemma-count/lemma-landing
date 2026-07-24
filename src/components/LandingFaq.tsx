import { Minus, Plus } from "lucide-react";
import { lemmaTrial } from "@/lib/pricing";
import { TrackedDetails } from "./TrackedDetails";
import styles from "./LemmaMarketing.module.css";

export const landingFaqItems = [
  {
    q: "What exactly is a Managed lead?",
    a: "A Managed lead is a Lead currently assigned to a live Lemma-led Mission. It counts while Lemma is actively running that work for you.",
  },
  {
    q: "Does a reply free Managed-lead capacity?",
    a: "No. A reply does not free capacity. The Lead stops counting when you release the Lead or finish or archive the Mission.",
  },
  {
    q: "What happens when I reach my plan limit?",
    a: "New Lemma-led capacity is blocked until you upgrade. There are no credit packs or top-ups.",
  },
  {
    q: "Are manual Sequences really unlimited?",
    a: "Yes. Manual Sequences do not count as Managed leads and are unlimited on every plan.",
  },
  {
    q: "Which channel does Lemma support?",
    a: "Lemma currently runs outbound through your LinkedIn account.",
  },
  {
    q: "Does Lemma publish content for me?",
    a: "No. Lemma shares relevant content directly with the right person inside the 1:1 LinkedIn conversation. It does not run a public content program.",
  },
  {
    q: "Can Lemma run without my approval?",
    a: "You set the Mission boundaries and decide what Lemma may run. Work outside those boundaries, blockers, and consequential decisions return to you.",
  },
  {
    q: "Do I need a credit card for the trial?",
    a: `No. The ${lemmaTrial.days}-day trial includes ${lemmaTrial.managedLeads} Managed leads and does not require a credit card.`,
  },
] as const;

export function LandingFaq() {
  return (
    <section id="faq" className={styles.section}>
      <div className={`${styles.frame} ${styles.sectionGrid}`}>
        <div className={styles.faqLead}>
          <p className={styles.eyebrow}>06 / Practical details</p>
          <h2 className={`${styles.sectionTitle} ${styles.editorialTitle}`}>
            Know exactly what you are starting.
          </h2>
        </div>

        <ul className={styles.faqList}>
          {landingFaqItems.map((item) => (
            <li key={item.q} className={styles.faqItem}>
              <TrackedDetails question={item.q}>
                <summary className={styles.faqSummary}>
                  <span>{item.q}</span>
                  <span className={styles.faqMark} aria-hidden>
                    <Plus
                      className={styles.faqPlus}
                      size={16}
                      strokeWidth={1.5}
                    />
                    <Minus
                      className={styles.faqMinus}
                      size={16}
                      strokeWidth={1.5}
                    />
                  </span>
                </summary>
                <p className={styles.faqAnswer}>{item.a}</p>
              </TrackedDetails>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
