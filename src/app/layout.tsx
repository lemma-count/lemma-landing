import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { Footer } from "@/components/Footer";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lemma | Understand Customers, Users, Employees, and Buyers at Scale",
  description:
    "Lemma runs adaptive AI-led voice conversations with customers, users, employees, buyers, partners, and stakeholders, then turns them into transcript-grounded insights, themes, quotes, and reports.",
  openGraph: {
    title:
      "Lemma | Understand Customers, Users, Employees, and Buyers at Scale",
    description:
      "Lemma runs adaptive AI-led voice conversations with customers, users, employees, buyers, partners, and stakeholders, then turns them into transcript-grounded insights, themes, quotes, and reports.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Lemma | Understand Customers, Users, Employees, and Buyers at Scale",
    description:
      "Lemma runs adaptive AI-led voice conversations with customers, users, employees, buyers, partners, and stakeholders, then turns them into transcript-grounded insights, themes, quotes, and reports.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${inter.variable}`}>
      <body>
        <SiteHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
