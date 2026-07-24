# Lemma long-horizon section — design QA

## Scope and source truth

- Route reviewed: `/`, unauthenticated public landing page.
- New section: `#long-horizon`, between the relevant-content chapter and the Operator-control chapter.
- Interaction source: the approved Takeoff-inspired Lemma prototype.
- Brand source: Open Passage Brand Book v1.4.0 in `public/brand/lemma/v1.4.0`.
- Canonical active blue: Klein Blue `#002FA7`.
- Canonical Signal orange: `#FF7A45`.
- Canonical type: Inter Tight for display/body and Sometype Mono for structural metadata.

## Comparison evidence

- Desktop source: `/Users/wissem/.codex/visualizations/2026/07/24/019f9318-48ac-7c00-a289-d793212d5f5f/lemma-long-horizon-prototype/audit-copy-04-after-content-desktop.jpg`
- Mobile source: `/Users/wissem/.codex/visualizations/2026/07/24/019f9318-48ac-7c00-a289-d793212d5f5f/lemma-long-horizon-prototype/audit-copy-06-after-mobile.jpg`
- Desktop implementation: `output/long-horizon-qa/implementation-content-1280x720.png`
- Mobile implementation: `output/long-horizon-qa/implementation-content-mobile-390x844.png`
- Desktop same-input comparison: `output/long-horizon-qa/source-vs-implementation-content.png`
- Mobile same-input comparison: `output/long-horizon-qa/source-vs-implementation-mobile.png`

The implementation keeps the source hierarchy, event taxonomy, 28-day ruler,
shared-path/continuation model, event density, playback control, detail panel,
and mobile event rail. Intentional differences are limited to production
integration: the current Brand Book palette and typography, the live site’s
sticky header, and the surrounding landing-page rhythm.

## Fidelity review

### Typography and copy

- The section headline now uses the same 680 weight as the live landing’s major
  section titles and visually matches the approved prototype.
- Structural labels use Sometype Mono; narrative and event copy use Inter Tight.
- Copy remains claim-safe and Operator-controlled.
- Voice qualification explicitly says `Preview · Available soon`.
- Voice starts only after disclosure, Lead consent, and Mission permission.
- Qualification covers use case, current process, pain, urgency, scope,
  constraints, and fit.
- Booking is conditional on permission and approved calendar access.
- Every branch ends by returning full context to the Operator.

### Layout and spacing

- Desktop preserves the two-column heading/control composition and full-width
  28-day graph.
- The graph reaches Day 28 without the former dead space on the right.
- Event halos and focus rings are not clipped at Day 1 or Day 28.
- The play control is compact and lives in the timeline toolbar.
- The section’s desktop top rhythm was reduced to keep all four event lanes
  understandable on a 720px-high laptop viewport.
- Mobile uses a dedicated day rail and horizontally scrollable event cards
  rather than a shrunken desktop graph.
- Mobile scenario tabs deliberately expose part of the next option as a scroll
  affordance.

### Color and visual language

- Computed active tab and timeline color is `rgb(0, 47, 167)` / `#002FA7`.
- Signal orange is reserved for current progress, handoff emphasis, and the
  headline period.
- Focus indicators use Klein Blue for sufficient contrast.
- Small active-day and handoff text uses Ink while orange remains the visual
  marker.
- Rules, grids, dashed waits, and future states use the Brand Book’s restrained
  Paper/Ink/Grid system.

### Behavior and accessibility

- Tabs use `tablist`/`tab` semantics, roving focus, Arrow keys, Home, and End.
- Event nodes and mobile cards support click inspection plus Arrow/Home/End
  keyboard navigation.
- Play, pause, continue, and replay states were exercised.
- Tab changes preserve the shared Days 1–3 history and animate only the selected
  continuation.
- The animation pauses when offscreen or when the document is hidden.
- Reduced-motion users advance chapter by chapter instead of receiving autoplay.
- A screen-reader event list and user-triggered polite announcements are present.
- Effective node/play targets are at least 44px.
- Browser console review found no errors or warnings.

## Responsive review

- Reviewed at 1440px, 1280×720, 1181px, 1180px, 768px, 390×844, and 320px.
- The 1181px desktop graph fits all 28 days and all four lanes.
- The 1180px breakpoint switches cleanly to the mobile rail/card view.
- `scrollWidth === clientWidth` at the breakpoint; no page-level horizontal
  overflow was introduced.
- Headline, tabs, Lead context, playback, event cards, and detail copy remain
  readable at 320px.

## Resolved findings

1. P1 — The feature branch originally inherited an older mainline while
   production was one commit ahead. Resolved by merging the exact live
   production commit before integration.
2. P1 — The first integration used the previous cobalt palette. Resolved by
   binding the section to Brand Book v1.4.0 tokens, including Klein Blue
   `#002FA7`.
3. P2 — The integrated headline was visibly lighter than both the prototype and
   current site. Resolved with the live system’s 680 display weight.
4. P2 — Desktop top spacing hid too much of the graph on common laptop
   viewports. Resolved by tightening the interactive section’s top interval.
5. P2 — The first mobile tab sizing hid the third scenario without a clear
   affordance. Resolved by exposing a deliberate next-tab preview.
6. P2 — Signal-orange focus and small text states had insufficient contrast.
   Resolved with Klein focus rings and Ink text while retaining orange markers.
7. P2 — Starting the development server during a production build caused a
   temporary cache lock. The server was stopped, the cache was rebuilt cleanly,
   and final checks were rerun.

No unresolved P0, P1, or P2 design issues remain.

## Technical verification

- `npm run typecheck` passed.
- `npm run build` passed with all 36 static pages generated.
- `git diff --check` passed.
- Interaction checks passed in the in-app browser.
- The final source-versus-implementation comparison was reviewed at desktop and
  mobile sizes.

final result: passed
