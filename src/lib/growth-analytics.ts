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
  if (pathname === "/guides/forms-vs-interviews") return "lemma-forms-vs-interviews-guide";
  if (pathname.startsWith("/blog/")) return `lemma-blog-${pathname.split("/").pop()}`;

  return undefined;
}

function getContentId(pathname: string) {
  if (pathname.startsWith("/guides/")) return pathname.split("/").pop();
  if (pathname.startsWith("/blog/")) return pathname.split("/").pop();
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

  return {
    ...event,
    properties: {
      ...getGrowthAnalyticsProperties(),
      ...event.properties,
    } satisfies Properties,
  };
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
  posthog.register(getGrowthAnalyticsProperties());
  window.__growthPostHogInitialized = true;

  return true;
}

export function refreshGrowthAnalyticsProperties() {
  if (typeof window === "undefined" || !window.__growthPostHogInitialized) return;

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

  posthog.capture("growth_cta_clicked", {
    ...getGrowthAnalyticsProperties(),
    ...cleanProperties({
      cta_event: ctaEvent,
      ...properties,
    }),
  });
}
