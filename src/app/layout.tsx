import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { GrowthAnalyticsProvider } from "@/components/GrowthAnalyticsProvider";
import { SiteHeader } from "@/components/SiteHeader";
import { Footer } from "@/components/Footer";
import {
  createMetadata,
  organizationJsonLd,
  stringifyJsonLd,
  websiteJsonLd,
} from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = createMetadata({
  title: "Lemma | Human Context for AI-Native Teams",
  description:
    "Lemma helps founders and AI-native teams ask adaptive follow-up questions, collect human context, and turn it into usable intelligence for people and agents.",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: stringifyJsonLd([organizationJsonLd, websiteJsonLd]),
          }}
        />
        <SiteHeader />
        {children}
        <Footer />
        <GrowthAnalyticsProvider />
        <Analytics />
      </body>
    </html>
  );
}
