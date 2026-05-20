"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  initGrowthAnalytics,
  refreshGrowthAnalyticsProperties,
  trackGrowthPageview,
} from "@/lib/growth-analytics";

export function GrowthAnalyticsProvider() {
  const pathname = usePathname();

  useEffect(() => {
    if (initGrowthAnalytics()) {
      refreshGrowthAnalyticsProperties();
      trackGrowthPageview();
    }
  }, [pathname]);

  return null;
}
