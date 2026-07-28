import styles from "./LemmaMarketing.module.css";

const attentionShift = [
  {
    label: "More products",
    value: "Small teams can build and launch faster than ever.",
  },
  {
    label: "More outreach",
    value: "Automation makes it easy to flood every buyer’s inbox.",
  },
  {
    label: "The same attention",
    value: "Buyers still have one inbox and the same hours in the day.",
  },
] as const;

export function WhyNowSection() {
  return (
    <section
      id="why-now"
      aria-labelledby="why-now-title"
      className={`${styles.section} ${styles.whyNowSection}`}
    >
      <div className={`${styles.frame} ${styles.sectionGrid}`}>
        <header className={styles.falseChoiceIntro}>
          <p className={styles.eyebrow}>Why now</p>
          <h2
            id="why-now-title"
            className={`${styles.sectionTitle} ${styles.editorialTitle}`}
          >
            Everyone can send more. Buyers cannot read more.
          </h2>
        </header>

        <ol className={styles.falseChoiceGrid}>
          {attentionShift.map((item, index) => (
            <li
              key={item.label}
              className={`${styles.falseChoiceCell} ${
                index === attentionShift.length - 1
                  ? styles.whyNowCellActive
                  : ""
              }`}
            >
              <span className={styles.falseChoiceLabel}>{item.label}</span>
              <p className={styles.falseChoiceValue}>{item.value}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
