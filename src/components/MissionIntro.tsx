import styles from "./LemmaMarketing.module.css";

const tradeoffs = [
  {
    label: "Volume automation",
    value: "More messages. Less relevance.",
    active: false,
  },
  {
    label: "Manual prospecting",
    value: "Better care. Too many hours.",
    active: false,
  },
  {
    label: "Lemma",
    value: "Personal relevance. Continuous progress.",
    active: true,
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
            Most outbound tools optimize for sending more messages. That
            usually means less research, less relevance, and fewer reasons to
            reply.
          </p>
        </div>

        <div className={styles.falseChoiceGrid}>
          {tradeoffs.map((item) => (
            <div
              key={item.label}
              className={`${styles.falseChoiceCell} ${
                item.active ? styles.falseChoiceCellActive : ""
              }`}
            >
              <span className={styles.falseChoiceLabel}>{item.label}</span>
              <p className={styles.falseChoiceValue}>{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
