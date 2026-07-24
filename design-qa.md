# Design QA — Problem narrative simplification

## Comparison target

- Route: homepage (`/`)
- Source visual truth:
  - `output/narrative-simplification-qa-20260724/before-false-choice-1280x720.jpg`
  - `output/narrative-simplification-qa-20260724/before-how-it-works-1280x720.jpg`
- Rendered implementation:
  - `output/narrative-simplification-qa-20260724/after-false-choice-1280x720.jpg`
  - `output/narrative-simplification-qa-20260724/after-how-it-works-1280x720.jpg`
- Combined comparison input:
  - `output/narrative-simplification-qa-20260724/before-after-contact-sheet.png`

## Capture state

- CSS viewport: 1280 × 720
- Source and implementation pixels: 1280 × 720 per capture
- Density normalization: none required; source and implementation use the same browser, viewport, scale, and image dimensions
- State: default desktop layout, fixed header visible, each reviewed section aligned to the top of the viewport

## Findings

- No actionable P0, P1, or P2 differences remain.
- The False Choice section now stays entirely on the problem. It presents the two failed alternatives as equal peers and no longer introduces Lemma as a product solution.
- The revised paragraph explicitly sets up both remaining alternatives, so the comparison grid reads as the consequence of the argument rather than as product feature cards.
- The How It Works section now begins with “Reach the right people.” The redundant 1–2–3 navigation rail and its competing numbering hierarchy are gone.
- Both reviewed sections still occupy one browser viewport and have no horizontal page overflow.

## Required fidelity surfaces

- Fonts and typography: unchanged from the existing Lemma system; hierarchy, weight, wrapping, and mono eyebrows remain consistent.
- Spacing and layout rhythm: the problem grid is balanced across two columns, and the How It Works chapter retains its full-screen composition after the rail removal.
- Colors and visual tokens: no new colors were introduced; the current brand tokens remain intact.
- Image quality and asset fidelity: the existing full-resolution How It Works visual is unchanged and remains sharp.
- Copy and content: the product resolution was removed from the problem section, the two trade-offs are now introduced directly, and the first operational chapter remains intact.

## Focused comparison

- A separate crop was not needed because the complete changed regions, including all relevant copy and spacing, are legible at full size in the combined contact sheet.

## Interaction and runtime checks

- `#alignment`, `#control`, and `#return` anchors remain present.
- “Then keep them engaged” remains linked to `/#product`.
- The removed chapter navigation leaves no orphaned interactive controls.
- Browser console: no application warnings or errors.
- `npm run typecheck`: passed.
- `npm run build`: passed; all static routes generated.
- `git diff --check`: passed.

## Responsive note

- The in-app browser was fixed at 1280 × 720 for this comparison. The mobile grid continues to use the existing single-column rule, while all removed navigation styles were deleted at every breakpoint.

## Comparison history

1. The source showed Lemma as a selected third card inside a section intended to explain the problem, and a second three-card rail immediately below it.
2. The Lemma card and selected-state styling were removed; the remaining problem cards were rebalanced to two columns.
3. The chapter rail and all of its responsive styles were removed; the existing section anchors and continuation CTA were preserved.
4. The post-fix contact sheet showed the intended narrative separation with no visible P0, P1, or P2 regressions.

final result: passed
