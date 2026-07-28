import styles from "./LemmaMarketing.module.css";

const workflow = [
  {
    index: "01",
    title: "Choose the people, goal, and rules.",
    body: "You decide who Lemma may contact, what a good result looks like, and what it may do.",
  },
  {
    index: "02",
    title: "Lemma works out the next useful move.",
    body: "It researches each person, prepares a relevant message, and decides when to send, wait, or follow up.",
  },
  {
    index: "03",
    title: "The conversation adapts until the next step is clear.",
    body: "Replies and new information stay with the same customer-finding goal. Lemma continues, stops, or brings you in when a decision needs you.",
  },
] as const;

export function SolutionWorkflowSection() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="solution-title"
      className={`${styles.section} ${styles.darkSection} ${styles.solutionSection}`}
    >
      <div
        id="product"
        className={`${styles.frame} ${styles.sectionGrid} ${styles.solutionGrid}`}
      >
        <header className={styles.workflowHeader}>
          <p className={styles.eyebrow}>The solution</p>
          <h2
            id="solution-title"
            className={`${styles.sectionTitle} ${styles.editorialTitle}`}
          >
            Move the right conversations forward—not the message count.
          </h2>
          <p className={styles.sectionBody}>
            In Lemma, a Mission is one customer-finding goal: the people to
            contact, the outcome you want, and the rules Lemma must follow.
            Lemma researches each person and keeps the conversation moving
            until there is a clear next step.
          </p>
        </header>

        <ol className={styles.workflowList}>
          {workflow.map((item) => (
            <li key={item.index} className={styles.workflowItem}>
              <span className={styles.workflowIndex}>{item.index}</span>
              <div>
                <h3 className={styles.workflowTitle}>{item.title}</h3>
                <p className={styles.workflowText}>{item.body}</p>
                {item.index === "03" && (
                  <p className={styles.solutionOutcome}>
                    Interested <span aria-hidden>·</span> Not interested{" "}
                    <span aria-hidden>·</span> Needs your decision
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
