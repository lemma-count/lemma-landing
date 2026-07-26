import styles from "./LemmaMarketing.module.css";

const tradeoffs = [
  {
    label: "Volume automation",
    value: "More messages. Less relevance.",
  },
  {
    label: "Manual prospecting",
    value: "Better care. Too many hours.",
  },
] as const;

export function MissionIntro() {
  return (
    <section className={`${styles.section} ${styles.falseChoiceSection}`}>
      <div className={`${styles.frame} ${styles.sectionGrid}`}>
        <div className={styles.falseChoiceIntro}>
          <p className={styles.eyebrow}>01 / The false choice</p>
          <h2 className={`${styles.sectionTitle} ${styles.editorialTitle}`}>
            More volume does not mean more clients.
          </h2>
          <p className={styles.sectionBody}>
            Outbound has forced the same trade-off for years: automate more and
            lose relevance, or do it manually and lose the hours.
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
