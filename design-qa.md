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
