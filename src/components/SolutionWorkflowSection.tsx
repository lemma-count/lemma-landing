import styles from "./LemmaMarketing.module.css";

const workflow = [
  {
    index: "01",
    title: "Choose the Leads and the goal.",
    body: "You decide who Lemma may contact, what a good result looks like, and what it may do.",
  },
  {
    index: "02",
    title: "Lemma plans and runs the outreach.",
    body: "It sends LinkedIn messages, waits, follows up, and controls the pace inside your rules.",
  },
  {
    index: "03",
    title: "Go beyond text with an AI voice conversation.",
    body: "When more questions need answering, Lemma can send a link to an AI voice conversation. It continues until the Lead is a good fit, not a fit, or needs your decision.",
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
            Give Lemma the goal, not a list of messages.
          </h2>
          <p className={styles.sectionBody}>
            A Mission keeps one outbound goal, the Leads, the rules, and every
            next step together.
          </p>
        </header>

        <ol className={styles.workflowList}>
          {workflow.map((item) => (
            <li key={item.index} className={styles.workflowItem}>
              <span className={styles.workflowIndex}>{item.index}</span>
              <div>
                <h3 className={styles.workflowTitle}>{item.title}</h3>
                <p className={styles.workflowText}>{item.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className={styles.solutionOutcome}>
          Good fit <span aria-hidden>·</span> Not a fit{" "}
          <span aria-hidden>·</span> Needs you
        </p>
      </div>
    </section>
  );
}
