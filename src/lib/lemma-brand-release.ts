import lock from "../../lemma-brand.lock.json";

/**
 * Pinned corporate-brand release for the public marketing site.
 *
 * The marketing site is pinned to this reviewed release snapshot. New surfaces
 * adopt it deliberately; the orange Signal roles are semantic and remain
 * subordinate to the product copy and evidence around them.
 */
export const lemmaBrandRelease = lock;

export const lemmaBrandAssetBase = "/brand/lemma/v2.1.0";

export function lemmaBrandVisual(fileName: string) {
  return `${lemmaBrandAssetBase}/visuals/${fileName}`;
}

export const lemmaBrandLogos = {
  horizontalInk: `${lemmaBrandAssetBase}/logo/lemma-lockup-horizontal-ink.svg`,
  horizontalPaper: `${lemmaBrandAssetBase}/logo/lemma-lockup-horizontal-paper.svg`,
  horizontalInkUi: `${lemmaBrandAssetBase}/logo/lemma-lockup-horizontal-ink-ui.svg`,
  horizontalPaperUi: `${lemmaBrandAssetBase}/logo/lemma-lockup-horizontal-paper-ui.svg`,
  markInk: `${lemmaBrandAssetBase}/logo/lemma-mark-ink.svg`,
  markPaper: `${lemmaBrandAssetBase}/logo/lemma-mark-paper.svg`,
  markInkUi: `${lemmaBrandAssetBase}/logo/lemma-mark-ink-ui.svg`,
  markPaperUi: `${lemmaBrandAssetBase}/logo/lemma-mark-paper-ui.svg`,
} as const;
