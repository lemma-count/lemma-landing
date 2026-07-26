import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { lemmaBrandVisual } from "@/lib/lemma-brand-release";
import styles from "./LemmaMarketing.module.css";

export function ProofOverview() {
  return (
    <section id="product" className={styles.journeySection}>
      <div className={`${styles.frame} ${styles.journeyFrame}`}>
        <article id="alignment" className={styles.alignmentChapter}>
          <div className={styles.alignmentCopy}>
            <p className={styles.eyebrow}>03 / Workflow · 1 of 3</p>
            <h2 className={styles.alignmentTitle}>Set the mission.</h2>
            <p className={styles.alignmentBody}>
              Choose the Leads to reach, the outcome you want, and the rules.
              Lemma researches each Lead and finds a real reason to start the
              conversation.
            </p>
            <Link href="/#follow-up" className={styles.chapterTextLink}>
              Next: keep the relationship moving
              <ArrowRight size={16} strokeWidth={1.5} aria-hidden />
            </Link>
          </div>

          <div className={styles.alignmentVisual} aria-hidden>
            <Image
              src={lemmaBrandVisual("lemma-horizon-court.webp")}
              alt=""
              fill
              sizes="(max-width: 899px) 100vw, 68vw"
              className={styles.alignmentImage}
            />
          </div>
        </article>
      </div>
    </section>
  );
}
