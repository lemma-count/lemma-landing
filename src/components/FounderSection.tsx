import styles from "./LemmaMarketing.module.css";

export function FounderSection() {
  return (
    <section className={`${styles.section} ${styles.founderSection}`}>
      <div className={`${styles.frame} ${styles.sectionGrid}`}>
        <div className={styles.founderCopy}>
          <p className={styles.eyebrow}>05 / Why we built Lemma</p>
          <p className={styles.sectionBody}>
            We knew the problem firsthand: the prospect lists, research,
            messages, follow-ups, and replies that keep a business alive also
            steal time from the work clients actually pay for.
          </p>
        </div>

        <blockquote className={styles.founderQuote}>
          The work should run. Your judgment should remain.
        </blockquote>
        <p className={styles.founderNote}>
          Lemma takes on the repetitive outbound work without treating your
          reputation, relationships, or closing decisions as something to
          automate away.
        </p>
      </div>
    </section>
  );
}
