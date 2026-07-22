import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Serif } from "next/font/google";
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

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-ibm-plex-sans",
  display: "swap",
});

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-ibm-plex-serif",
  display: "swap",
});

export const metadata: Metadata = createMetadata({
  title: "Lemma — The AI that runs your outbound",
  description:
    "Get new clients without doing the prospecting. Lemma runs your LinkedIn outbound from strategy to booked meeting.",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${ibmPlexSans.variable} ${ibmPlexSerif.variable}`}
    >
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
