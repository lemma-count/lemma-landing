import styles from "./LemmaMarketing.module.css";

const tradeoffs = [
  {
    label: "Short horizon",
    value: "What should we send next?",
  },
  {
    label: "Changing customer",
    value: "Timing and priorities move.",
  },
  {
    label: "Volume pressure",
    value: "More sends. Less care.",
  },
] as const;

export function MissionIntro() {
  return (
    <section className={`${styles.section} ${styles.falseChoiceSection}`}>
      <div className={`${styles.frame} ${styles.sectionGrid}`}>
        <div className={styles.falseChoiceIntro}>
          <p className={styles.eyebrow}>01 / The outbound problem</p>
          <h2 className={`${styles.sectionTitle} ${styles.editorialTitle}`}>
            The next touch is not the whole relationship.
          </h2>
          <p className={styles.sectionBody}>
            Outbound software automates one touch at a time: send, wait, follow
            up. But a customer relationship unfolds across weeks as timing,
            questions, and priorities change. Optimize the sequence for
            quantity and the relationship gets worse—not better.
          </p>
        </div>

        <div className={styles.falseChoiceGrid}>
          {tradeoffs.map((item) => (
            <div key={item.label} className={styles.falseChoiceCell}>
              <span className={styles.falseChoiceLabel}>{item.label}</span>
              <p className={styles.falseChoiceValue}>{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
