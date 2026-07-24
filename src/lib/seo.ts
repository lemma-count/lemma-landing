import type { Metadata } from "next";

export const siteUrl = "https://www.heylemma.com";
export const siteName = "Lemma";

const defaultImage = {
  url: "/brand/lemma/v1.4.0/visuals/lemma-alignment-court.webp",
  width: 1500,
  height: 1452,
  alt: "Airy Klein Blue architectural planes converging toward one precise passage and a tiny orange horizon signal.",
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
  logo: absoluteUrl("/brand/lemma/v1.4.0/logo/lemma-mark-ink.svg"),
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteName,
  url: siteUrl,
  description:
    "Get new clients without doing the prospecting. Lemma researches prospects, runs permitted LinkedIn work, keeps conversations warm with relevant content, and makes the next decision visible.",
};

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqJsonLd(
  items: Array<{ question: string; answer: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function articleJsonLd({
  title,
  description,
  path,
  datePublished,
  author,
}: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  author: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: absoluteUrl(path),
    datePublished,
    author: {
      "@type": "Person",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      name: siteName,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/brand/lemma/v1.4.0/logo/lemma-mark-ink.svg"),
      },
    },
  };
}

export function stringifyJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
