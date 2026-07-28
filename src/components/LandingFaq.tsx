import { Minus, Plus } from "lucide-react";
import { lemmaTrial } from "@/lib/pricing";
import { TrackedDetails } from "./TrackedDetails";
import styles from "./LemmaMarketing.module.css";

export const landingFaqItems = [
  {
    q: "What does Lemma do, and who stays in control?",
    a: "You choose the people, goal, and rules. Lemma researches, sends, and follows up within those rules; anything that needs judgment comes back to you.",
  },
  {
    q: "What do “Lead” and “Mission” mean in Lemma?",
    a: "A Lead is simply a person you may want to turn into a customer. A Mission is one customer-finding goal: the Leads to contact, the outcome you want, and the rules Lemma must follow.",
  },
  {
    q: "What is the difference between self-run and Lemma-managed outreach?",
    a: "You send every step in self-run outreach. In Lemma-managed outreach, Lemma researches and runs the permitted next moves. Self-run outreach uses no credits.",
  },
  {
    q: "How do AI voice conversations work?",
    a: "Lemma sends a link, not a phone call. The person answers when ready; the AI asks and answers follow-up questions without requiring a meeting.",
  },
  {
    q: "When does Lemma stop working on someone?",
    a: "When the person is interested, not interested, or the next step needs a decision from you.",
  },
  {
    q: "How do pricing and the trial work?",
    a: `One credit starts Lemma-managed work for one new person; self-run outreach is unlimited. The ${lemmaTrial.days}-day trial includes ${lemmaTrial.lemmaCredits} credits and requires no card.`,
  },
] as const;

export function LandingFaq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className={`${styles.section} ${styles.faqSection}`}
    >
      <div className={`${styles.frame} ${styles.sectionGrid}`}>
        <div className={styles.faqLead}>
          <p className={styles.eyebrow}>Questions and answers</p>
          <h2
            id="faq-title"
            className={`${styles.sectionTitle} ${styles.editorialTitle}`}
          >
            Questions before you start.
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
