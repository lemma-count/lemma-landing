import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  BlogContextVisual,
  ContextLayerImageVisual,
} from "@/components/ContextVisuals";
import { posts, getPost, formatDate } from "@/lib/posts";
import { createMetadata } from "@/lib/seo";

function getAdjacentPosts(slug: string) {
  const idx = posts.findIndex((p) => p.slug === slug);
  return {
    prev: idx > 0 ? posts[idx - 1] : null,
    next: idx < posts.length - 1 ? posts[idx + 1] : null,
  };
}

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return createMetadata({
    title: `${post.title} — Lemma`,
    description: post.description,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const { prev, next } = getAdjacentPosts(slug);
  const showContextLayerImage =
    slug === "ai-made-building-easy-now-context-is-the-moat" ||
    slug === "the-context-layer-for-ai-native-companies";

  const { default: Content } = await import(
    `@/content/posts/${slug}.mdx`
  ) as { default: React.ComponentType };

  return (
    <main>
      <div className="mx-auto max-w-[1280px] px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-[760px]">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-ink"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path d="M9 2.5L4 7l5 4.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Blog
          </Link>

          {/* Header */}
          <div className="mt-10 border-b border-border pb-10">
            <time className="text-xs text-subtle" dateTime={post.date}>
              {formatDate(post.date)}
            </time>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.04] tracking-tight text-ink md:text-6xl">
              {post.title}
            </h1>
            <p className="mt-5 text-base leading-7 text-muted md:text-lg md:leading-8">{post.description}</p>
            <p className="mt-4 text-sm text-subtle">{post.author}</p>
            <div className="mt-8">
              {showContextLayerImage ? (
                <ContextLayerImageVisual />
              ) : (
                <BlogContextVisual />
              )}
            </div>
          </div>

          {/* MDX body */}
          <div className="prose prose-neutral mt-10 max-w-none prose-headings:tracking-tight prose-p:leading-7">
            <Content />
          </div>

          {/* Post navigation */}
          {(prev || next) && (
            <nav className="mt-16 flex items-center justify-between gap-6 border-t border-border pt-8">
              {prev ? (
                <Link href={`/blog/${prev.slug}`} className="group flex flex-col gap-1">
                  <span className="text-xs text-subtle">← Previous article</span>
                  <span className="text-sm font-medium text-ink transition-colors group-hover:text-accent">
                    {prev.title}
                  </span>
                </Link>
              ) : <div />}
              {next ? (
                <Link href={`/blog/${next.slug}`} className="group flex flex-col items-end gap-1">
                  <span className="text-xs text-subtle">Next article →</span>
                  <span className="text-sm font-medium text-ink transition-colors group-hover:text-accent">
                    {next.title}
                  </span>
                </Link>
              ) : <div />}
            </nav>
          )}

          {/* Back to blog */}
          <div className="mt-10 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-neutral-50"
            >
              ← All articles
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
