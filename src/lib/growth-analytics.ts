"use client";

import posthog from "posthog-js";
import type { CaptureResult, Properties } from "posthog-js";

const POSTHOG_PROJECT_TOKEN = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN;
const POSTHOG_HOST =
  process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com";

declare global {
  interface Window {
    __growthPostHogInitialized?: boolean;
  }
}

type GrowthPropertyValue = string | number | boolean;
type GrowthProperties = Record<string, GrowthPropertyValue>;
const optionalGrowthPropertyKeys = ["source_asset_id", "content_id"] as const;

const ROUTE_SCOPED_SUPER_PROPERTIES = [
  "source_asset_id",
  "content_id",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
];

function cleanProperties(
  properties: Record<string, GrowthPropertyValue | null | undefined>,
): GrowthProperties {
  return Object.fromEntries(
    Object.entries(properties).filter(([, value]) => value !== null && value !== undefined),
  ) as GrowthProperties;
}

function normalizePath(pathname: string) {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }

  return pathname || "/";
}

function getPageType(pathname: string) {
  if (pathname === "/") return "homepage";
  if (pathname === "/pricing") return "pricing";
  if (pathname === "/contact") return "contact";
  if (pathname === "/typeform-alternative") return "comparison_typeform";
  if (pathname === "/google-forms-alternative") return "comparison_google_forms";
  if (pathname === "/templates") return "templates_index";
  if (pathname.startsWith("/templates/")) return "template";
  if (pathname === "/guides") return "guides_index";
  if (pathname.startsWith("/guides/")) return "guide";
  if (pathname === "/marketing" || pathname === "/sales" || pathname === "/consultants") {
    return "solution_page";
  }
  if (pathname === "/blog") return "blog_index";
  if (pathname.startsWith("/blog/")) return "blog_post";

  return "marketing_page";
}

function getSourceAssetId(pathname: string) {
  if (pathname === "/typeform-alternative") return "lemma-typeform-alternative";
  if (pathname === "/google-forms-alternative") return "lemma-google-forms-alternative";
  if (pathname === "/templates") return "lemma-templates-hub";
  if (pathname === "/templates/demo-request-form") {
    return "lemma-demo-request-form-template-2026-05-20";
  }
  if (pathname.startsWith("/templates/")) return `lemma-template-${pathname.split("/").pop()}`;
  if (pathname.startsWith("/guides/")) return `lemma-guide-${pathname.split("/").pop()}`;
  if (pathname.startsWith("/blog/")) return `lemma-blog-${pathname.split("/").pop()}`;

  return undefined;
}

function getContentId(pathname: string) {
  if (pathname === "/templates") return "templates";
  if (pathname.startsWith("/templates/") || pathname.startsWith("/guides/")) {
    return pathname.split("/").pop();
  }
  if (pathname.startsWith("/blog/")) return pathname.split("/").pop();
  if (pathname === "/templates/demo-request-form") return "demo-request-form";
  if (pathname === "/marketing" || pathname === "/sales" || pathname === "/consultants") {
    return pathname.slice(1);
  }

  return undefined;
}

function getEnvironment(hostname: string) {
  if (hostname === "localhost" || hostname === "127.0.0.1") return "development";
  if (hostname.endsWith(".vercel.app")) return "preview";

  return "production";
}

function isInternalTraffic(url: URL) {
  const hostname = url.hostname;

  return (
    url.searchParams.get("growth_internal") === "1" ||
    hostname === "localhost" ||
    hostname === "127.0.0.1" ||
    hostname.endsWith(".vercel.app")
  );
}

export function getGrowthAnalyticsProperties(): GrowthProperties {
  if (typeof window === "undefined") {
    return {
      growth_os_version: "posthog-web-v1",
      venture_id: "lemma",
      site_id: "lemma-landing",
      traffic_surface: "marketing_site",
      page_type: "unknown",
      is_internal: true,
      environment: "server",
    };
  }

  const url = new URL(window.location.href);
  const pathname = normalizePath(url.pathname);

  return cleanProperties({
    growth_os_version: "posthog-web-v1",
    venture_id: "lemma",
    site_id: "lemma-landing",
    traffic_surface: "marketing_site",
    page_type: getPageType(pathname),
    source_asset_id: getSourceAssetId(pathname),
    content_id: getContentId(pathname),
    is_internal: isInternalTraffic(url),
    environment: getEnvironment(url.hostname),
    utm_source: url.searchParams.get("utm_source"),
    utm_medium: url.searchParams.get("utm_medium"),
    utm_campaign: url.searchParams.get("utm_campaign"),
    utm_term: url.searchParams.get("utm_term"),
    utm_content: url.searchParams.get("utm_content"),
  });
}

function enrichEvent(event: CaptureResult | null) {
  if (!event) return event;

  const growthProperties = getGrowthAnalyticsProperties();
  const eventProperties = { ...event.properties } as Properties;

  // PostHog super properties are sticky, so clear route-derived asset metadata
  // when the current route does not define it.
  optionalGrowthPropertyKeys.forEach((key) => {
    if (!(key in growthProperties)) {
      delete eventProperties[key];
    }
  });

  return {
    ...event,
    properties: {
      ...eventProperties,
      ...growthProperties,
    } satisfies Properties,
  };
}

function clearRouteScopedSuperProperties() {
  ROUTE_SCOPED_SUPER_PROPERTIES.forEach((property) => {
    posthog.unregister(property);
  });
}

export function initGrowthAnalytics() {
  if (typeof window === "undefined") return false;
  if (window.__growthPostHogInitialized) return true;
  if (!POSTHOG_PROJECT_TOKEN) return false;

  posthog.init(POSTHOG_PROJECT_TOKEN, {
    api_host: POSTHOG_HOST,
    defaults: "2026-01-30",
    capture_pageview: false,
    autocapture: false,
    disable_session_recording: true,
    request_batching: false,
    before_send: enrichEvent,
  });
  clearRouteScopedSuperProperties();
  posthog.register(getGrowthAnalyticsProperties());
  window.__growthPostHogInitialized = true;

  return true;
}

export function refreshGrowthAnalyticsProperties() {
  if (typeof window === "undefined" || !window.__growthPostHogInitialized) return;

  optionalGrowthPropertyKeys.forEach((key) => posthog.unregister(key));
  clearRouteScopedSuperProperties();
  posthog.register(getGrowthAnalyticsProperties());
}

export function trackGrowthPageview() {
  if (typeof window === "undefined" || !window.__growthPostHogInitialized) return;

  posthog.capture("$pageview", getGrowthAnalyticsProperties());
}

export function trackGrowthCta(
  ctaEvent: string,
  properties: Record<string, GrowthPropertyValue | null | undefined> = {},
) {
  if (typeof window === "undefined" || !window.__growthPostHogInitialized) return;

  const ctaText = properties.cta_text ?? properties.label;
  const ctaSurface = properties.cta_surface ?? properties.location;

  posthog.capture("growth_cta_clicked", {
    ...getGrowthAnalyticsProperties(),
    ...cleanProperties({
      cta_event: ctaEvent,
      ...properties,
      cta_text: ctaText,
      cta_surface: ctaSurface,
    }),
  });
}
