"use client";

import { useLayoutEffect, useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Force instant scroll to top when entering any project case study.
 * Runs in useLayoutEffect (before paint) and again in useEffect (after any
 * other layout effects, e.g. Next.js scroll) so we always win.
 */
export function ProjectsScrollToTop() {
  const pathname = usePathname();

  const scrollToTop = () => {
    if (typeof window === "undefined") return;
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  };

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    window.history.scrollRestoration = "manual";
    document.documentElement.style.scrollBehavior = "auto";
    scrollToTop();
  }, [pathname]);

  // Run after paint so we override any scroll Next.js does in its useLayoutEffect
  useEffect(() => {
    scrollToTop();
    queueMicrotask(scrollToTop);
    const t = window.setTimeout(scrollToTop, 0);
    return () => window.clearTimeout(t);
  }, [pathname]);

  return null;
}
