import type { MetadataRoute } from "next";
import { posts } from "@/lib/posts";
import { siteUrl } from "@/lib/seo";

const base = siteUrl;
const siteUpdatedAt = new Date("2026-05-28");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: siteUpdatedAt, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/product`, lastModified: siteUpdatedAt, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/templates`, lastModified: siteUpdatedAt, changeFrequency: "monthly", priority: 0.84 },
    { url: `${base}/templates/customer-feedback-form`, lastModified: siteUpdatedAt, changeFrequency: "monthly", priority: 0.82 },
    { url: `${base}/templates/demo-request-form`, lastModified: siteUpdatedAt, changeFrequency: "monthly", priority: 0.82 },
    { url: `${base}/consultants`, lastModified: siteUpdatedAt, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/product-growth`, lastModified: siteUpdatedAt, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/marketing`, lastModified: siteUpdatedAt, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/sales`, lastModified: siteUpdatedAt, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/customer-success`, lastModified: siteUpdatedAt, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/founders`, lastModified: siteUpdatedAt, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/pricing`, lastModified: siteUpdatedAt, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog`, lastModified: siteUpdatedAt, changeFrequency: "weekly", priority: 0.6 },
    { url: `${base}/contact`, lastModified: siteUpdatedAt, changeFrequency: "yearly", priority: 0.5 },
  ];

  const postRoutes: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...postRoutes];
}
