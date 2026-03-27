"use client";

import * as React from "react";

function hashIdFromHref(href: string): string | null {
  const i = href.indexOf("#");
  if (i === -1) return null;
  const id = href.slice(i + 1);
  return id || null;
}

function scrollToSection(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  const id = hashIdFromHref(href);
  if (!id) return;
  const el = document.getElementById(id);
  if (el) {
    e.preventDefault();
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    if (href.startsWith("/#")) {
      window.history.replaceState(null, "", "/");
    }
  }
}

export const ScrollToSectionLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentProps<"a"> & { href: string }
>(function ScrollToSectionLink({ href, onClick, ...props }, ref) {
  return (
    <a
      ref={ref}
      href={href}
      onClick={(e) => {
        scrollToSection(e, href);
        onClick?.(e);
      }}
      {...props}
    />
  );
});
