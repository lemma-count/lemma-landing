import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Page not found — Lemma",
  description: "This page doesn't exist or has been moved.",
  noIndex: true,
});

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="text-sm font-medium text-accent">404</p>
      <h1 className="mt-4 text-3xl font-semibold text-ink md:text-4xl">
        Page not found
      </h1>
      <p className="mt-3 text-base text-muted">
        This page doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#2f3fd6]"
      >
        ← Back to home
      </Link>
    </main>
  );
}
