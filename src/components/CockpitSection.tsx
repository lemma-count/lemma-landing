import Image from "next/image";
import { lemmaBrandVisual } from "@/lib/lemma-brand-release";
import styles from "./LemmaMarketing.module.css";

const lemmaHandles = [
  "Research",
  "LinkedIn outreach",
  "Follow-up",
] as const;

const operatorKeeps = [
  "The target",
  "The rules",
  "Sensitive decisions",
  "The close",
] as const;

export function CockpitSection() {
  return (
    <section id="control" className={styles.permissionSection}>
      <div className={`${styles.frame} ${styles.permissionGrid}`}>
        <div className={styles.permissionMedia} aria-hidden>
          <Image
            src={lemmaBrandVisual("lemma-permission-gate.webp")}
            alt=""
            fill
            sizes="(max-width: 899px) 100vw, 50vw"
            unoptimized
            className={styles.permissionImage}
          />
        </div>

        <div id="return" className={styles.permissionCopy}>
          <p className={styles.eyebrow}>04 / You stay in control</p>
          <h2 className={styles.permissionTitle}>Lemma works. You decide.</h2>
          <p className={styles.permissionBody}>
            You set the target and the rules. Lemma handles the routine work and
            brings you replies, problems, and sensitive decisions with the full
            story.
          </p>
          <p className={styles.permissionSignal}>
            <span className={styles.permissionSignalDot} aria-hidden />
            <span>Ready for you</span>
          </p>

          <div className={styles.permissionColumns}>
            <div className={styles.permissionColumn}>
              <h3>Lemma does</h3>
              <ul>
                {lemmaHandles.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className={styles.permissionColumn}>
              <h3>You decide</h3>
              <ul>
                {operatorKeeps.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
