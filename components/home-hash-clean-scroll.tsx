"use client";

import { useEffect } from "react";

/**
 * When the home page loads with a hash (e.g. bookmark or link from another page),
 * scroll to that section then remove the hash from the address bar.
 */
export function HomeHashCleanScroll() {
  useEffect(() => {
    const raw = window.location.hash.slice(1);
    if (!raw) return;
    const id = decodeURIComponent(raw);
    const el = document.getElementById(id);
    if (!el) return;

    const run = () => {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", "/");
    };

    requestAnimationFrame(() => {
      requestAnimationFrame(run);
    });
  }, []);

  return null;
}
