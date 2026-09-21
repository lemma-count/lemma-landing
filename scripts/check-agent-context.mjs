import { readFile } from "node:fs/promises";

const agents = await readFile(new URL("../AGENTS.md", import.meta.url), "utf8");
const productBoundaries = await readFile(
  new URL("../docs/product-boundaries.md", import.meta.url),
  "utf8",
);

const failures = [];

if (agents.includes("../wilu-ops") || agents.includes("@wilu-ops/")) {
  failures.push("AGENTS.md must not depend on Wilu Ops paths.");
}

if (!agents.includes("docs/product-boundaries.md")) {
  failures.push("AGENTS.md must route product work to the local boundary.");
}

if (!productBoundaries.includes("Lemma is an AI agent harness")) {
  failures.push("Local product boundary is missing its product baseline.");
}

if (failures.length > 0) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log("Portable agent context checks passed.");
