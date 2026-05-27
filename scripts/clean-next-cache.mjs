import { rmSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const fresh = process.argv.includes("--fresh");

const paths = fresh
  ? [".next"]
  : [
      ".next/dev",
      ".next/lock",
      ".next/cache",
      ".next/cache 2",
    ];

for (const path of paths) {
  rmSync(join(root, path), { force: true, recursive: true });
}

console.log(
  fresh
    ? "Removed .next for a fresh production build."
    : "Removed stale Next/Turbopack dev cache and build locks."
);
