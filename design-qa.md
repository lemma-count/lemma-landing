# Design QA — Pricing support positioning

## Comparison target

- Route: pricing (`/pricing`)
- Previous implementation:
  - `output/pricing-feature-matrix-qa-20260724/after-pricing-cards-1280x720.jpg`
- Revised implementation:
  - `output/pricing-support-positioning-qa-20260726/after-pricing-cards-1280x720.png`
  - `output/pricing-support-positioning-qa-20260726/after-support-features-1280x720.png`
  - `output/pricing-support-positioning-qa-20260726/after-support-positioning-390x844.png`
  - `output/pricing-support-positioning-qa-20260726/after-scale-support-390x844.png`
- Side-by-side comparison:
  - `output/pricing-support-positioning-qa-20260726/comparison-before-after-2560x760.png`

## Capture state

- Desktop CSS viewport: 1280 × 720
- Mobile CSS viewport: 390 × 844
- State: default pricing page, fixed header visible, plan cards aligned at the same desktop scroll position
- Browser overflow: 0px horizontally on desktop and mobile

## Findings

- No actionable P0, P1, or P2 visual differences remain.
- Support is now a separate service layer instead of appearing as one more product feature.
- The support promise sits before the CTA so the service difference is visible at decision time.
- The progression is explicit without claiming a support channel, response time, SLA, onboarding program, or named account owner that has not been verified:
  - Starter: in-app help for setup and day-to-day questions
  - Growth: more hands-on support as the outbound motion grows
  - Scale: Lemma’s most hands-on support for more complex outbound operations
- The five verified product capabilities remain identical and are labelled “Same product in every plan.”
- The commercial differences remain Managed-lead capacity and the service relationship. No feature gate was invented.
- All three desktop cards retain equal height, aligned CTAs, aligned support blocks, and consistent feature-row rhythm.

## Required fidelity surfaces

- Typography: existing Lemma body, display, and mono styles are reused.
- Spacing: the support block uses the existing card rhythm and a shared minimum height on desktop; mobile returns to natural height.
- Colors: no new colors were introduced; existing `--ink`, `--muted`, `--grid`, and `--klein` tokens remain the only visual primitives.
- Product claims: “Sign in with Google” continues to describe OAuth without implying enterprise SSO. The support copy intentionally avoids “priority,” “dedicated,” “24/7,” response-time, and SLA claims.

## Interaction and runtime checks

- Three plan cards render with one support block and five identical product rows each.
- CTA destinations remain unchanged:
  - Starter: `https://app.heylemma.com/settings/account?plan=starter`
  - Growth: `https://app.heylemma.com/settings/account?plan=growth`
  - Scale: `https://app.heylemma.com/settings/account?plan=scale`
- `git diff --check`: passed.
- `npm run typecheck`: passed.
- `npm run build`: passed; all static routes generated.

## Responsive note

- Desktop cards remain equal-height and do not overflow horizontally.
- At the existing `max-width: 899px` breakpoint, cards stack, descriptions and support blocks return to natural height, and the full Scale proposition remains readable in one continuous card.

final result: passed
