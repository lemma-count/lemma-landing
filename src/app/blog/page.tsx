import type { Metadata } from "next";
import { TrackedLink } from "@/components/TrackedLink";
import { posts, formatDate } from "@/lib/posts";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Blog — Lemma",
  description:
    "Field observations on better questions, richer interviews, and turning scattered customer evidence into decisions.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <main>
      <div className="mx-auto max-w-[1280px] px-6 py-16 md:px-10 md:py-28">
        <div className="mx-auto max-w-[760px]">
          <h1 className="text-5xl font-semibold leading-[0.98] tracking-tight text-ink md:text-7xl">
            Blog
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-muted md:text-lg md:leading-8">
            Field observations on better questions, richer interviews, and
            turning scattered customer evidence into decisions.
          </p>

          {posts.length === 0 ? (
            <p className="mt-16 text-sm text-subtle">No posts yet.</p>
          ) : (
            <ul className="mt-16 divide-y divide-border border-t border-border">
              {posts.map((post) => (
                <li key={post.slug}>
                  <TrackedLink href={`/blog/${post.slug}`} event="blog_post_click" eventProps={{ slug: post.slug, title: post.title }} className="group block">
                    <article className="grid gap-4 py-8 transition-colors md:grid-cols-[140px_1fr] md:py-9">
                      <time className="text-xs text-subtle md:pt-1" dateTime={post.date}>
                        {formatDate(post.date)}
                      </time>
                      <div>
                        <h2 className="text-2xl font-semibold leading-tight text-ink transition-colors group-hover:text-accent">
                          {post.title}
                        </h2>
                        <p className="mt-3 text-sm leading-6 text-muted">
                          {post.description}
                        </p>
                        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
                          Read article
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden className="transition-transform group-hover:translate-x-0.5">
                            <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                      </div>
                    </article>
                  </TrackedLink>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </main>
  );
}
