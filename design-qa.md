# Design QA — Explicit pricing support levels

## Comparison target

- Route: pricing (`/pricing`)
- Previous implementation:
  - `output/pricing-support-positioning-qa-20260726/after-pricing-cards-1280x720.png`
- Revised implementation:
  - `output/pricing-support-levels-qa-20260726/after-support-levels-1280x720.png`
  - `output/pricing-support-levels-qa-20260726/after-premium-support-390x844.png`
- Side-by-side comparison:
  - `output/pricing-support-levels-qa-20260726/comparison-support-levels-2560x760.png`

## Capture state

- Desktop CSS viewport: 1280 × 720
- Mobile CSS viewport: 390 × 844
- State: default pricing page, plan cards aligned at the same desktop scroll position
- Browser overflow: 0px horizontally on desktop and mobile

## Findings

- No actionable P0, P1, or P2 visual differences remain.
- The tier progression is now explicit at scan speed:
  - Starter: `Support / Standard`
  - Growth: `Support / Enhanced`
  - Scale: `Support / Premium`
- The explanation remains directly below each support level and before the CTA.
- Scale now states “Our highest level of support” without claiming response times, SLAs, a dedicated channel, onboarding, or an account manager.
- The five verified product capabilities remain identical and are still labelled “Same product in every plan.”
- All three desktop cards retain equal height and aligned support, CTA, and feature rows.

## Runtime checks

- Three plan cards render with one support level, one support explanation, and five identical product rows each.
- CTA destinations remain unchanged.
- `git diff --check`: passed.
- `npm run typecheck`: passed.
- `npm run build`: passed; all static routes generated.

## Responsive note

- Desktop cards remain equal-height and do not overflow horizontally.
- Mobile cards stack without horizontal overflow; the Premium label and full Scale support proposition remain readable before the CTA.

final result: passed

---

# Lemma Sunrise Threshold — public website design QA

## Visual source and implementation evidence

- Selected source: `/Users/wissem/.codex/generated_images/019fa8e6-8bba-7ab1-b878-f49a139aa9ed/call_Jy0x7RwM4rS5mUkWZXBjyPPw.png`.
- Public release master: `/brand/lemma/v2.0.0/logo/lemma-mark-ink.svg`.
- Reviewed route: `/brand`.
- Full-view capture: `design-qa/public-brand-desktop.png`.
- Logo-system capture: `design-qa/public-brand-marks-desktop.png`.
- Browser-rendered master: `design-qa/public-logo-master-browser.png`.
- Combined comparison input: `design-qa/source-vs-public-master.png`.
- Capture viewport: `1280 × 720` CSS px, density `1`.
- State: default public Brand System page with Ink and Paper masters visible.

## Five-surface fidelity review

| Surface | Result |
| --- | --- |
| Content and composition | Passed — navigation, Brand System cards, lockups, and release references all resolve to the v2.0.0 Sunrise Threshold assets. |
| Typography | Passed — the approved Lemma wordmark remains unchanged and aligned at navigation and card sizes. |
| Colour and material | Passed — the production mark uses flat Ink, Paper, and Signal colours and remains legible on both light and dark fields. |
| Responsive behaviour | Passed — no layout CSS changed; the intrinsic 160 × 160 master and existing responsive image contracts preserve aspect ratio at navigation, card, favicon, Touch, PWA, and maskable sizes. |
| Runtime and accessibility | Passed — the logo images have meaningful alt text, all masters load with non-zero dimensions, and no logo-related browser error or warning was emitted. |

## Comparison history

1. The selected direction and the public browser render were reviewed side by side in one combined image.
2. The website master preserves the doorway, opening, and sunrise proportions while removing the source raster texture for deterministic rendering.
3. The public Brand System page was inspected with both Ink and Paper masters visible. No P0, P1, or P2 logo mismatch remains.

## Runtime checks

- TypeScript passed.
- Next.js production build passed with webpack; the equivalent Turbopack build stalled without an error in this local environment.
- The only browser warning was an existing LCP hint for the Architectural Horizon hero image, unrelated to the logo release.
- `git diff --check` passed.

final result: passed
