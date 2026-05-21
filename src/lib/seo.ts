import type { Metadata } from "next";

export const siteUrl = "https://www.heylemma.com";
export const siteName = "Lemma";

const defaultImage = {
  url: "/assets/forms-vs-interviews-og.png",
  width: 1200,
  height: 630,
  alt: "Lemma adaptive AI voice forms turn richer answers into decision-ready reports.",
};

type MetadataImage = {
  url: string;
  width: number;
  height: number;
  alt: string;
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

export function createMetadata({
  title,
  description,
  path = "/",
  image = defaultImage,
  noIndex = false,
}: {
  title: string;
  description: string;
  path?: string;
  image?: MetadataImage;
  noIndex?: boolean;
}): Metadata {
  const url = absoluteUrl(path);

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName,
      type: "website",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.url],
    },
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteName,
  url: siteUrl,
  logo: absoluteUrl("/assets/lemma-logo-black.png"),
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteName,
  url: siteUrl,
  description:
    "Lemma runs adaptive voice interviews with customers, buyers, users, employees, and stakeholders, then turns their answers into evidence your team can use before the decision is made.",
};

export function stringifyJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
