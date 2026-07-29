<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Lemma product and production context

Before any code or engineering change that can affect Lemma's shipped
system—and for any product behavior, website copy, positioning, customer-facing
flow, integration semantics, or product-decision work—read
[`../wilu-ops/context/lemma/PRODUCT.md`](../wilu-ops/context/lemma/PRODUCT.md)
end-to-end first. Use it as the product baseline, then identify the affected
production surface and verify its current behavior against the relevant code,
configuration, migrations, and feature flags effectively active in production.
Direction and vision guide choices but are not live capabilities. This website
describes the product; it does not redefine it. Only purely mechanical,
read-only Git or local-tooling work with no possible effect on the shipped
system may skip this context.
