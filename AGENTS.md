<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Required operating rules

- Use a fresh `origin/main` as the evidence base for investigation. Do not use
  a primary checkout, an arbitrary local branch, or another repository as
  evidence. Implement in an owned worktree created from that ref.
- Keep changes direct: reuse the existing implementation before adding a new
  layer, registry, wrapper, or source of truth. Do not design for hypothetical
  edge cases before the ordinary path works.
- Preserve actionable failures. Do not swallow, relabel, or replace provider or
  application errors unless the affected interface explicitly requires a safe
  transformation; retain the original cause and details for debugging.

## Lemma landing product boundary

Before work that changes website copy, positioning, a customer-facing flow, or
product semantics, read [`docs/product-boundaries.md`](docs/product-boundaries.md).
It is this repository's product baseline. Verify claims about current behavior
against the production code/configuration that is actually active. Product
direction is not evidence of a shipped capability; expose conflicts rather than
silently choosing a claim. This site describes the product and does not redefine
it.

## Validation

Run `npm run check:context` after changing this file or the local product
boundary. Run the relevant existing checks (`npm run typecheck` and, for
rendering/build changes, `npm run build`) before delivery.
