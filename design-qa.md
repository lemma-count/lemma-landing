# Design QA — Homepage viewport chapters

## Scope

- Page: homepage only (`/`)
- Intent: make every major landing-page section occupy at least one viewport while preserving natural growth for dense content
- Reference: current public homepage before the viewport-chapter change
- Brand and content: unchanged, including the Open Passage Klein blue `#002FA7`

## Visual evidence

- Combined source/implementation comparison: `output/fullscreen-qa/comparison-contact-sheet.png`
- Desktop source: `output/fullscreen-qa/source-desktop-1440x900.png`
- Desktop implementation: `output/fullscreen-qa/implementation-desktop-1440x900.png`
- Mobile source: `output/fullscreen-qa/source-mobile-390x844.png`
- Mobile implementation: `output/fullscreen-qa/implementation-mobile-390x844.png`

## Capture state

- Desktop: CSS viewport 1440 × 900, DPR 1, second homepage chapter aligned to the top of the viewport
- Mobile: CSS viewport 390 × 844, DPR 1, second homepage chapter aligned to the top of the viewport
- UI state: default, menu closed, no FAQ expanded, Long Horizon playback paused
- The source and implementation images were reviewed together in one contact sheet

## Full-view comparison

- Desktop source weakness: short chapters ended well before the bottom of the viewport, making the page read as a continuous document rather than a sequence of deliberate chapters.
- Desktop result: short chapters are vertically centered and consume one full viewport. Adjacent chapters no longer leak into the same screen.
- Mobile result: the visual structure remains consistent with the source. Sections use the viewport as a minimum, then grow when stacked cards, pricing tiers, FAQ content, or controls need more room.
- Typography, copy, imagery, colors, borders, and component order remain unchanged.

## Focused comparison

- The false-choice chapter now has balanced whitespace above and below its narrative and comparison grid on desktop.
- The How It Works chapter reserves space for the fixed header, so the chapter rail is not hidden when the section starts.
- The Long Horizon chapter fits a 1440 × 900 viewport after reducing excess outer padding; on shorter laptops it grows instead of clipping the interactive timeline.
- The closing section has a compact short-laptop layout while retaining every CTA, legal link, and footer element.
- No global scroll snapping was added, so tabs, playback controls, FAQ expansion, keyboard focus, and mobile horizontal content remain predictable.

## Responsive evidence

- 1440 × 900: all eight homepage sections and the closing section measure approximately one viewport.
- 1280 × 720: all short chapters measure one viewport; the Long Horizon section grows to fit its interactive content.
- 768 × 1024: simple chapters fill the viewport; Long Horizon and pricing grow naturally.
- 390 × 844 and 320 × 568: no horizontal page overflow and no clipped content.
- `/pricing` remains outside the homepage-scoped viewport rules.

## Interaction and runtime checks

- Voice qualification tab: selected state updates correctly.
- Long Horizon play control: Play/Pause state updates correctly.
- FAQ: expands without clipping and increases the section height naturally.
- Mobile menu: opens and closes correctly.
- Browser console: no application warnings or errors in the final local interaction run.
- `npm run typecheck`: passed.
- `npm run build`: passed; all static routes generated.
- `git diff --check`: passed.

## Severity review

- P0 blockers: none.
- P1 major visual or interaction defects: none.
- P2 responsive or accessibility regressions: none observed.

## Comparison history

1. Initial audit found fixed pixel minimums and large static padding that left visible unused space on desktop.
2. Homepage-only viewport chapters were added with a `100vh` fallback and `100svh` progressive enhancement.
3. Dense sections were allowed to grow, short-laptop spacing was tightened, and fixed-header offsets were included.
4. Post-fix screenshots and responsive measurements confirmed the intended one-screen rhythm without clipping or global scroll snapping.

final result: passed
