import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { lemmaBrandVisual } from "@/lib/lemma-brand-release";
import styles from "./LemmaMarketing.module.css";

export function ProofOverview() {
  return (
    <section id="how-it-works" className={styles.journeySection}>
      <div className={`${styles.frame} ${styles.journeyFrame}`}>
        <article id="product" className={styles.alignmentChapter}>
          <div className={styles.alignmentCopy}>
            <p className={styles.eyebrow}>How it works · Step 1</p>
            <h2 className={styles.alignmentTitle}>Choose who to reach.</h2>
            <p className={styles.alignmentBody}>
              Add the people you want to contact. Tell Lemma what you sell and
              what kinds of LinkedIn messages it may send.
            </p>
            <Link href="/#follow-up" className={styles.chapterTextLink}>
              Next: research, messages, and follow-up
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
