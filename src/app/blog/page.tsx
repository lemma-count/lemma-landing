import type { Metadata } from "next";
import Link from "next/link";
import { posts, formatDate } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog — Lemma",
  description: "Field observations and practical thinking on AI adoption for teams and businesses.",
};

export default function BlogPage() {
  return (
    <main className="pt-8 md:pt-12">
      <div className="mx-auto max-w-[1280px] px-6 py-12 md:px-10 md:py-16">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-4xl font-semibold tracking-tight text-ink md:text-6xl">
            Blog
          </h1>
          <p className="mt-4 text-base text-muted md:text-lg">
            Field observations and practical thinking on AI adoption for teams.
          </p>

          {posts.length === 0 ? (
            <p className="mt-16 text-sm text-subtle">No posts yet.</p>
          ) : (
            <ul className="mt-12 divide-y divide-border">
              {posts.map((post) => (
                <li key={post.slug} className="py-8 first:pt-0">
                  <Link href={`/blog/${post.slug}`} className="group block">
                    <time className="text-xs text-subtle" dateTime={post.date}>
                      {formatDate(post.date)}
                    </time>
                    <h2 className="mt-2 text-xl font-semibold text-ink transition-colors group-hover:text-accent">
                      {post.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {post.description}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent">
                      Read article
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden className="transition-transform group-hover:translate-x-0.5">
                        <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </main>
  );
}
