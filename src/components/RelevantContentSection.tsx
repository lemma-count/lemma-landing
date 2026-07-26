import Image from "next/image";
import { lemmaBrandVisual } from "@/lib/lemma-brand-release";
import styles from "./LemmaMarketing.module.css";

export function RelevantContentSection() {
  return (
    <section id="product" className={styles.warmSection}>
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
          <p className={styles.eyebrow}>03 / After the first message</p>
          <h2 className={styles.warmTitle}>
            <span>Silence</span>
            <span>is not a</span>
            <span>
              send button<span className={styles.warmSignalPeriod}>.</span>
            </span>
          </h2>
        </div>

        <div className={styles.warmExplanation}>
          <p>
            If there is nothing useful to say, Lemma waits. When there is, it
            follows up with context—not a “just checking in.”
          </p>
          <p className={styles.warmSequence}>
            Wait · Add value · Keep the thread
          </p>
        </div>
      </div>
    </section>
  );
}
