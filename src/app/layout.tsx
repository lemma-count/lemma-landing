import type { Metadata } from "next";
import localFont from "next/font/local";
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

const lemmaInterTight = localFont({
  src: "../../public/brand/lemma/v2.1.0/fonts/inter-tight-latin-variable.woff2",
  variable: "--font-lemma-inter-tight",
  weight: "100 900",
  display: "swap",
});

const lemmaSometypeMono = localFont({
  src: "../../public/brand/lemma/v2.1.0/fonts/sometype-mono-latin-variable.woff2",
  variable: "--font-lemma-sometype-mono",
  weight: "400 700",
  display: "swap",
});

export const metadata: Metadata = createMetadata({
  title: "Lemma — Outbound without the sales team",
  description:
    "Lemma plans and runs supervised LinkedIn outreach, can send links to AI voice conversations, and keeps working until there is a clear outcome or a decision needs you.",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${lemmaInterTight.variable} ${lemmaSometypeMono.variable}`}
    >
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: stringifyJsonLd([organizationJsonLd, websiteJsonLd]),
          }}
        />
        <SiteHeader />
        <div id="main-content" tabIndex={-1}>
          {children}
        </div>
        <Footer />
        <GrowthAnalyticsProvider />
        <Analytics />
      </body>
    </html>
  );
}
