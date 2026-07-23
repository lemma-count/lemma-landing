import lock from "../../lemma-brand.lock.json";

/**
 * Pinned corporate-brand release for the public marketing site.
 *
 * This intentionally does not replace the existing site implementation in one
 * step. New marketing surfaces can adopt it deliberately, while the current
 * landing stays stable until each route has been reviewed against the release.
 */
export const lemmaBrandRelease = lock;

export const lemmaBrandAssetBase = "/brand/lemma/v1.2.0";

export function lemmaBrandVisual(fileName: string) {
  return `${lemmaBrandAssetBase}/visuals/${fileName}`;
}

export const lemmaBrandLogos = {
  horizontalInk: `${lemmaBrandAssetBase}/logo/lemma-lockup-horizontal-ink.svg`,
  horizontalPaper: `${lemmaBrandAssetBase}/logo/lemma-lockup-horizontal-paper.svg`,
  markInk: `${lemmaBrandAssetBase}/logo/lemma-mark-ink.svg`,
  markPaper: `${lemmaBrandAssetBase}/logo/lemma-mark-paper.svg`,
} as const;
