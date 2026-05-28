import type { Metadata } from "next";

export const siteUrl = "https://www.heylemma.com";
export const siteName = "Lemma";

const defaultImage = {
  url: "/assets/context-layer-visual.png",
  width: 1672,
  height: 941,
  alt: "Human conversations flowing through an adaptive voice layer into structured context for teams and agents.",
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
    "Lemma runs AI-led voice conversations with the people who matter and turns what they say into usable context.",
};

export function stringifyJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
