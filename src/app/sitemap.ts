import type { MetadataRoute } from "next";
import { posts } from "@/lib/posts";
import { siteUrl } from "@/lib/seo";

const base = siteUrl;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/product`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/consultants`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/product-growth`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/marketing`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/sales`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/customer-success`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/founders`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/pricing`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.6 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.5 },
  ];

  const postRoutes: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...postRoutes];
}
