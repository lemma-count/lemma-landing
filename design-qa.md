# Design QA — Pricing plan feature lists

## Comparison target

- Route: pricing (`/pricing`)
- Source visual truth:
  - `output/pricing-feature-matrix-qa-20260724/before-pricing-cards-1280x720.jpg`
- Rendered implementation:
  - `output/pricing-feature-matrix-qa-20260724/after-pricing-cards-1280x720.jpg`
  - `output/pricing-feature-matrix-qa-20260724/after-pricing-features-1280x720.jpg`
- Combined comparison input:
  - `output/pricing-feature-matrix-qa-20260724/comparison-before-after-2560x720.jpg`

## Capture state

- CSS viewport: 1280 × 720
- Source and implementation pixels: 1280 × 720 per capture
- Combined comparison pixels: 2560 × 720
- Density normalization: none required; source and implementation use the same browser, viewport, scale, and image dimensions
- State: default desktop layout, fixed header visible, pricing cards aligned to the viewport

## Findings

- No actionable P0, P1, or P2 differences remain.
- Each plan now exposes six verified capabilities inside its own card, removing the large empty middle and the detached shared-features band.
- Starter, Growth, and Scale intentionally use the same capability list. The audited product entitlements differ by Managed-lead capacity, so progressive feature gates would be inaccurate.
- The CTA remains above the feature detail, preserving the fast comparison path while making the included product surface easy to scan.
- All three cards retain equal height, aligned CTAs, aligned rules, and consistent row rhythm.
- The pricing section has no horizontal page overflow.

## Required fidelity surfaces

- Fonts and typography: unchanged from the existing Lemma system; plan labels, price hierarchy, body copy, and mono “Included” labels remain consistent.
- Spacing and layout rhythm: 10px feature-row padding and a 26px icon/text grid keep six rows readable without making the cards visually heavy.
- Colors and visual tokens: no new colors were introduced; check icons use the current `--klein` brand token.
- Iconography: Lucide check icons are decorative and marked `aria-hidden`; list semantics carry the content.
- Copy and content: claims are grounded in the product audit. “Sign in with Google” describes the implemented OAuth flow without implying enterprise SAML/SCIM SSO. “In-app chat support” describes the implemented support channel without implying priority support or an SLA.

## Focused comparison

- The full-card implementation capture shows price, capacity, description, CTA, and the beginning of each list in one viewport.
- The second implementation capture shows all six list rows, the aligned card bottoms, and the existing billing fine print.

## Interaction and runtime checks

- Three plan cards render with six list items each.
- CTA destinations remain:
  - Starter: `https://app.heylemma.com/settings/account?plan=starter`
  - Growth: `https://app.heylemma.com/settings/account?plan=growth`
  - Scale: `https://app.heylemma.com/settings/account?plan=scale`
- Browser console: no application warnings or errors; only the standard React development-tools information message.
- `npm run typecheck`: passed.
- `npm run build`: passed; all static routes generated.
- `git diff --check`: passed.

## Responsive note

- The in-app browser was fixed at 1280 × 720 for visual comparison.
- At the existing `max-width: 899px` breakpoint, the pricing grid remains single-column, card `min-height` returns to `auto`, description `min-height` returns to `0`, and every feature list remains visible.
- No new fixed widths or breakpoint-specific feature hiding were introduced.

## Comparison history

1. The source placed all product capabilities in a detached band below three mostly empty cards.
2. The shared list was expanded from four to six verified capabilities, including Google sign-in and in-app chat support.
3. The duplicated bottom band was removed and the verified list was placed inside every plan card.
4. The CTA was kept before the detail list, and the cards were rebalanced around a compact label, divider, and six aligned rows.
5. Desktop visual comparison, responsive CSS review, console inspection, typecheck, and production build found no P0, P1, or P2 regressions.

final result: passed
