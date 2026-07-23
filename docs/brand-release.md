# Lemma Brand Release — consumer contract

This site is pinned to **Open Passage v1.2.1** through [`lemma-brand.lock.json`](../../lemma-brand.lock.json). It is a release snapshot, not a runtime dependency on Wilu Ops or the internal portal.

The approved runtime subset is under `public/brand/lemma/v1.2.0/` and is exposed through `src/lib/lemma-brand-release.ts`. Adopt it route by route after a visual and copy review; do not mix it casually with the historical Guided Horizon image system.

For new public pages, use the approved logo exports, tokens, and Architectural Horizon assets. Validate customer-facing claims against the Brand OS claim registry before publishing. The full Brand Kit, source material catalogue, and release governance live in the private Brand OS at `wilu-ops/brand/lemma`.

To upgrade, regenerate the lock and runtime subset from that directory, review the visual change, then update this document and the lock in the same pull request.
