import Image from "next/image";
import { lemmaBrandVisual } from "@/lib/lemma-brand-release";
import styles from "./LemmaMarketing.module.css";

export function RelevantContentSection() {
  return (
    <section id="follow-up" className={styles.warmSection}>
      <div className={`${styles.frame} ${styles.warmGrid}`}>
        <div className={styles.warmMedia}>
          <Image
            src={lemmaBrandVisual("lemma-signal-colonnade.webp")}
            alt=""
            fill
            sizes="(max-width: 899px) 100vw, 42vw"
            className={styles.warmImage}
          />
        </div>

        <div className={styles.warmStatement}>
          <p className={styles.eyebrow}>04 / Workflow · 2 of 3</p>
          <h2 className={styles.warmTitle}>
            <span>Keep the</span>
            <span>relationship</span>
            <span>
              moving<span className={styles.warmSignalPeriod}>.</span>
            </span>
          </h2>
        </div>

        <div className={styles.warmExplanation}>
          <p>
            Lemma sends, waits, follows up with something useful, and adapts
            when the customer replies. The work continues across days and weeks
            without forcing the next touch.
          </p>
          <p className={styles.warmSequence}>
            Send · Wait · Add value · Adapt
          </p>
        </div>
      </div>
    </section>
  );
}
