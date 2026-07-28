import { Minus, Plus } from "lucide-react";
import { lemmaTrial } from "@/lib/pricing";
import { TrackedDetails } from "./TrackedDetails";
import styles from "./LemmaMarketing.module.css";

export const landingFaqItems = [
  {
    q: "What does Lemma do today?",
    a: "Lemma researches the people you choose, prepares and sends LinkedIn messages within your rules, follows up over time, and can send a link to an AI voice conversation when more questions need answering.",
  },
  {
    q: "What do “Lead” and “Mission” mean in Lemma?",
    a: "A Lead is simply a person you may want to turn into a customer. A Mission is one customer-finding goal: the Leads to contact, the outcome you want, and the rules Lemma must follow.",
  },
  {
    q: "What is the difference between self-run and Lemma-managed outreach?",
    a: "With self-run outreach, you choose and send every step yourself. With Lemma-managed outreach, Lemma researches each person, prepares the next move, and runs only the actions your rules allow. Self-run outreach uses no Lemma credits.",
  },
  {
    q: "Who chooses the people Lemma contacts?",
    a: "You do. Lemma only works on the people you add.",
  },
  {
    q: "Is an AI voice conversation a phone call?",
    a: "No. Lemma sends a link. The person opens it when ready, so there is no call to schedule or attend.",
  },
  {
    q: "What happens in an AI voice conversation?",
    a: "The AI asks follow-up questions and answers the person’s questions. The whole exchange stays with the same person and customer-finding goal.",
  },
  {
    q: "Can Lemma act without my approval?",
    a: "You set the rules for what Lemma may do. Anything outside those rules, plus problems and decisions that need judgment, comes back to you.",
  },
  {
    q: "When does Lemma stop working on someone?",
    a: "When the person is interested, not interested, or the next step needs a decision from you.",
  },
  {
    q: "How does pricing work?",
    a: "Each plan includes monthly Lemma credits. One credit starts Lemma-managed research and follow-up for one new person. Outreach you run yourself is unlimited and uses no credits.",
  },
  {
    q: "Do I need a card for the trial?",
    a: `No. The ${lemmaTrial.days}-day trial includes ${lemmaTrial.lemmaCredits} Lemma credits, enough for Lemma to start work on ${lemmaTrial.lemmaCredits} people, and does not require a card.`,
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
