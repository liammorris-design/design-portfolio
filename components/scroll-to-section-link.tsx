"use client";

import * as React from "react";

function scrollToSection(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) {
    e.preventDefault();
    window.history.pushState(null, "", href);
    el.scrollIntoView({ behavior: "smooth", block: "start" });
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
