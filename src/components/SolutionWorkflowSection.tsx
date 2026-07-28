import styles from "./LemmaMarketing.module.css";

const workflow = [
  {
    index: "01",
    title: "Choose the people, goal, and rules.",
  },
  {
    index: "02",
    title: "Lemma researches and runs the next useful move.",
  },
  {
    index: "03",
    title: "You step in when a decision needs you.",
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
            A Mission is one customer-finding goal: the people to contact, the
            outcome you want, and your rules. Lemma researches, sends, waits,
            and follows up within those rules.
          </p>
        </header>

        <ol className={styles.workflowList}>
          {workflow.map((item) => (
            <li key={item.index} className={styles.workflowItem}>
              <span className={styles.workflowIndex}>{item.index}</span>
              <div>
                <h3 className={styles.workflowTitle}>{item.title}</h3>
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
