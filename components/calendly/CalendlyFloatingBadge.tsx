"use client";

import { useEffect } from "react";
import { calendly } from "@/lib/contact";
import "./types";

/**
 * Site-wide Calendly badge. The widget script loads once in the root layout.
 */
export default function CalendlyFloatingBadge() {
  useEffect(() => {
    let cancelled = false;
    const started = Date.now();

    function openBadge() {
      if (cancelled) return;
      if (window.Calendly) {
        window.Calendly.initBadgeWidget({
          url: calendly.showingUrl,
          text: "Book a showing",
          color: "#0069ff",
          textColor: "#ffffff",
          branding: false,
        });
        return;
      }
      if (Date.now() - started < 10000) {
        window.setTimeout(openBadge, 200);
      }
    }

    openBadge();
    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}
