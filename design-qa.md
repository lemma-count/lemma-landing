# Lemma landing page — design QA

## Scope and source truth

- Route reviewed: `/`, plus the linked `/pricing` route for commercial continuity.
- State: unauthenticated public landing page on the Paper theme.
- Product screenshots and simulated product UI are intentionally excluded.
- Brand source: Open Passage Brand Book release `public/brand/lemma/v1.4.0`.
- Selected Klein Blue hero reference: `output/pro-agency-direction-20260723/28-selected-klein-hero-reference.png`.
- Reference size: 1672 × 941 physical pixels.
- Implementation evidence: 1280 × 720 CSS viewport at device scale 1.

The selected hero reference is a 16:9 art-direction target. Fidelity is judged directly at the implementation’s 1280 × 720 viewport for composition, hierarchy, Klein Blue pigment, type scale, image crop, and semantic use of Signal orange. The rest of the page retains the longer production structure required for real copy, pricing, FAQ, navigation, and responsive behavior.

## Comparison evidence

Implementation captures:

- `output/pro-agency-direction-20260723/18-implementation-hero-1280x720.png`
- `output/pro-agency-direction-20260723/19-implementation-false-choice-1280x720.png`
- `output/pro-agency-direction-20260723/20-implementation-alignment-1280x720.png`
- `output/pro-agency-direction-20260723/21-implementation-warm-1280x720.png`
- `output/pro-agency-direction-20260723/22-implementation-permission-1280x720.png`
- `output/pro-agency-direction-20260723/23-implementation-pricing-1280x720.png`

Combined comparison sheets reviewed:

- `output/pro-agency-direction-20260723/24-reference-vs-implementation-story-contact-sheet.png`
- `output/pro-agency-direction-20260723/25-hero-reference-vs-implementation.png`
- `output/pro-agency-direction-20260723/26-false-choice-reference-vs-implementation.png`
- `output/pro-agency-direction-20260723/27-return-pricing-reference-vs-implementation.png`
- `output/pro-agency-direction-20260723/29-implementation-klein-hero-1280x720.png`
- `output/pro-agency-direction-20260723/30-klein-reference-vs-implementation.png`
- `output/pro-agency-direction-20260723/31-brand-portal-klein-hero-1280x720.png`
- `output/pro-agency-direction-20260723/32-brand-portal-rounded-library-1280x720.png`

## Fidelity review

### Typography

- Inter Tight remains the primary display and body face.
- Sometype Mono is limited to structural labels, states, pricing facts, and chapter navigation.
- The hero preserves the concept's monumental five-line rhythm and plain-language promise.
- Supporting sections use editorial sentence case so monumental scale remains exceptional.

### Layout and spacing

- The page uses the Brand Portal's 12-column field, 1px architectural rules, hard-edged cells, asymmetrical image fields, and long vertical intervals.
- The selected option's left index rail is removed.
- The hero, false-choice field, Alignment chapter, warm-content field, Permission/Return chapter, and pricing comparison each use a distinct composition.
- The separate Permission/Return chapter is an intentional product-truth addition before pricing; it clarifies what Lemma runs and when human judgment returns.

### Color

- Paper and Ink remain the dominant fields, with Klein Blue directing the major visual chapters.
- Signal orange is deliberately more visible without becoming a button or background color.
- Orange appears only as four semantic cues: the hero promise period, the active Lemma choice, the warm-conversation period, and the “Needs you / Human judgment” state.
- No decorative orange button, pricing badge, large orange surface, or repeated ornamental dot was introduced.

### Imagery

- All visible architecture comes from approved Open Passage v1.4.0 WebP assets through `lemmaBrandVisual()`.
- Alignment Court, Horizon Court, Signal Colonnade, Permission Gate, and the approved closing field carry product meaning rather than acting as a gallery.
- The downstream `/brand` library now exposes all twelve Architectural Horizon assets, including Alignment Arcs, Permission Aperture, and Return Curve as the approved rounded value counterparts.
- Rounded forms remain structural: broad continuous arcs, protected apertures, and returning planes. No decorative pills, bubbles, blobs, or soft-SaaS geometry appear.
- Image crops preserve their documented focal areas and remain square-cornered.
- No fake UI, CSS illustration, inline SVG approximation, stock photo, or retired Guided Horizon asset is present.

### Copy and product truth

- The false-choice section directly under the hero states the market problem: volume creates noise; manual prospecting does not scale; Lemma combines relevance with consistent execution.
- “Reach the right people” is used instead of implying that Lemma is merely a Lead-sourcing database.
- The warm-content chapter explicitly describes sharing the right content with the right person.
- Pricing preserves the exact managed-lead model: Starter $29 / 50, Growth $99 / 200, Scale $299 / 1,000, plus unlimited manual Sequences.
- Trial copy remains 7 days, no credit card, and 10 Managed leads.

## Responsive and interaction checks

- Browser-reviewed at 1280 × 720, 768 × 1024, 390 × 844, and 320 × 800.
- The current Klein/rounded pass was re-reviewed at 1280 × 720; the responsive structure is unchanged from the earlier breakpoint pass except for local brand-font loading and additional library cards.
- No horizontal overflow at any tested width.
- Hero copy, both CTAs, and trial facts remain readable and reachable on mobile.
- The chapter rail becomes horizontally scrollable on narrow screens without reintroducing a left index.
- The mobile navigation opens as a full-screen dialog, moves focus to Close, and closes cleanly without exposing a duplicate logo.
- Chapter links move to their corresponding page sections.
- FAQ disclosure opens and exposes its answer.
- Pricing actions remain complete when the table becomes stacked mobile plan cards.
- Reduced-motion rules disable non-essential image transitions.
- Browser console review found no errors or warnings.

## Iteration history and resolved findings

1. P2 — The original middle sections repeated generic SaaS compositions and felt assembled rather than art-directed. Resolved by giving Alignment, Warm Content, Permission/Return, and Pricing distinct Brand Portal-derived compositions.
2. P2 — The selected option initially retained a decorative left index. Removed throughout the landing page.
3. P2 — The market problem was not explicit enough immediately after the hero. Added the ruled false-choice field directly below it.
4. P2 — The first revised direction underused Signal orange after the user's correction. Added four purposeful semantic accents and regenerated the selected reference to make that choice explicit.
5. P2 — The warm-section title overlapped its neighboring copy at desktop widths. Expanded the statement grid and split the title into controlled lines.
6. P2 — The mobile menu showed the underlying and drawer logos together. Made the mobile panel full-viewport.
7. P2 — The desktop hero CTA fell below the initial viewport. Tightened the hero's top spacing and type scale while preserving the composition.
8. P3 — The production page is vertically more spacious than the compressed concept. Accepted: the difference is intentional and protects real content, commercial detail, accessibility, and responsive readability.
9. P1 — The downstream `/brand` route initially failed at runtime because dynamic Next Image assets lacked `fill` or explicit dimensions. Added `fill`, reloaded in a fresh browser tab, and confirmed zero broken images and zero console errors.
10. P2 — The downstream `/brand` route still exposed the retired Guided Horizon library and IBM Plex typography. Replaced it with the twelve v1.4 Architectural Horizon assets and the canonical Inter Tight / Sometype Mono pair.
11. P2 — The visual library had only rectilinear value motifs. Added three approved rounded siblings while preserving one passage, one Signal, and the Klein/Paper material system.

No unresolved P0, P1, or P2 issues remain.

## Technical verification

- TypeScript verification passed with the final component structure.
- The production Webpack build compiled successfully, completed TypeScript, generated all 36 static pages, and collected build traces.
- Google-hosted IBM Plex dependencies were removed. Inter Tight and Sometype Mono now load from the versioned local Brand OS snapshot, eliminating build-time font requests and keeping downstream typography canonical.
- The local Turbopack build process did not complete under the sandbox, so the final production signal is the successful Webpack build plus browser runtime verification on the Next.js development server.
- `git diff --check` passed.

final result: passed
