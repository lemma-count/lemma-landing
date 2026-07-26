import { Minus, Plus } from "lucide-react";
import { lemmaTrial } from "@/lib/pricing";
import { TrackedDetails } from "./TrackedDetails";
import styles from "./LemmaMarketing.module.css";

export const landingFaqItems = [
  {
    q: "Who chooses the people Lemma contacts?",
    a: "You do. Lemma only works on the people you add.",
  },
  {
    q: "Which channel does Lemma use?",
    a: "Lemma currently works through your LinkedIn account.",
  },
  {
    q: "Can Lemma act without my approval?",
    a: "You set the rules for what Lemma may send. Work outside those rules, plus problems and replies that need you, comes back to you.",
  },
  {
    q: "What happens when someone replies?",
    a: "Lemma records the reply and shows you the prior messages and the next action. You decide what happens next when the reply needs you.",
  },
  {
    q: "What counts toward my plan?",
    a: "A person counts while Lemma is actively working on them. Your plan sets how many people Lemma can work on at once.",
  },
  {
    q: "Do I need a card for the trial?",
    a: `No. The ${lemmaTrial.days}-day trial lets Lemma work on ${lemmaTrial.managedLeads} people at once and does not require a card.`,
  },
] as const;

export function LandingFaq() {
  return (
    <section id="faq" className={`${styles.section} ${styles.faqSection}`}>
      <div className={`${styles.frame} ${styles.sectionGrid}`}>
        <div className={styles.faqLead}>
          <p className={styles.eyebrow}>Questions</p>
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
