import { Minus, Plus } from "lucide-react";
import { lemmaTrial } from "@/lib/pricing";
import { TrackedDetails } from "./TrackedDetails";
import styles from "./LemmaMarketing.module.css";

export const landingFaqItems = [
  {
    q: "What does Lemma do?",
    a: "Lemma researches the Leads you choose, starts permitted LinkedIn conversations, follows up across days and weeks, and brings replies or problems back to you.",
  },
  {
    q: "What exactly is a Managed lead?",
    a: "A Managed lead is a Lead currently assigned to a live Lemma-led Mission. It counts while Lemma is actively running that work for you.",
  },
  {
    q: "Which channel does Lemma support?",
    a: "Lemma currently runs outbound through your LinkedIn account.",
  },
  {
    q: "Can Lemma act without my approval?",
    a: "You decide what Lemma may run. Anything outside those rules, plus blockers and sensitive decisions, comes back to you.",
  },
  {
    q: "Do I need a credit card for the trial?",
    a: `No. The ${lemmaTrial.days}-day trial includes ${lemmaTrial.managedLeads} Managed leads and does not require a credit card.`,
  },
] as const;

export function LandingFaq() {
  return (
    <section id="faq" className={`${styles.section} ${styles.faqSection}`}>
      <div className={`${styles.frame} ${styles.sectionGrid}`}>
        <div className={styles.faqLead}>
          <p className={styles.eyebrow}>06 / The basics</p>
          <h2 className={`${styles.sectionTitle} ${styles.editorialTitle}`}>
            What you need to know.
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
