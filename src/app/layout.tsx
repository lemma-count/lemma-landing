import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
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

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = createMetadata({
  title: "Lemma | Talk to More of the People Your Business Depends On",
  description:
    "Lemma runs adaptive voice interviews with customers, buyers, users, employees, and stakeholders, then turns their answers into evidence your team can use before the decision is made.",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${inter.variable}`}>
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
