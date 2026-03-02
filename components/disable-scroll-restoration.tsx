"use client";

import { useLayoutEffect } from "react";

/**
 * Set once on app load so the browser never restores scroll position on navigation.
 * This prevents the "scroll down then animate to top" effect when entering project pages.
 */
export function DisableScrollRestoration() {
  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    window.history.scrollRestoration = "manual";
  }, []);
  return null;
}
