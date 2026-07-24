import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

const base = siteUrl;
const siteUpdatedAt = new Date("2026-07-23");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base, lastModified: siteUpdatedAt, changeFrequency: "monthly", priority: 1 },
    {
      url: `${base}/pricing`,
      lastModified: siteUpdatedAt,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
