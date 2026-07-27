import { Minus, Plus } from "lucide-react";
import { lemmaTrial } from "@/lib/pricing";
import { TrackedDetails } from "./TrackedDetails";
import styles from "./LemmaMarketing.module.css";

export const landingFaqItems = [
  {
    q: "What does Lemma do today?",
    a: "Lemma runs supervised LinkedIn outreach. You choose the Leads, goal, and rules. Lemma plans the work, sends the messages, follows up, and can send a link to an AI voice conversation when more questions need answering.",
  },
  {
    q: "Who chooses the people Lemma contacts?",
    a: "You do. Lemma only works on the people you add.",
  },
  {
    q: "Is an AI voice conversation a phone call?",
    a: "No. Lemma sends a link. The Lead opens it when ready, so there is no call to schedule or attend.",
  },
  {
    q: "What happens in an AI voice conversation?",
    a: "The AI asks follow-up questions and answers the Lead’s questions. The whole exchange stays with the same Lead, goal, rules, and Mission.",
  },
  {
    q: "Can Lemma act without my approval?",
    a: "You set the rules for what Lemma may do. Anything outside those rules, plus problems and decisions that need judgment, comes back to you.",
  },
  {
    q: "When does Lemma stop working on a Lead?",
    a: "When the Lead is a good fit, not a fit, or needs a decision from you.",
  },
  {
    q: "How does pricing work?",
    a: "Your plan sets how many Leads Lemma can actively manage at once. A Lead counts while Lemma-led work on their Mission is active. Pricing is not based on how many LinkedIn messages or follow-ups Lemma sends.",
  },
  {
    q: "Do I need a card for the trial?",
    a: `No. The ${lemmaTrial.days}-day trial lets Lemma work on ${lemmaTrial.managedLeads} people at once and does not require a card.`,
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
