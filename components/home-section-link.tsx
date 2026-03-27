"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";

const HOME_HASH_HREF = /^\/#([\w-]+)$/;

function scrollToIdAndClearHash(id: string) {
  const el = document.getElementById(id);
  if (!el) return false;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.replaceState(null, "", "/");
  return true;
}

/**
 * Same as `Link` for `/#section` targets on the home page, but scrolls in place and
 * keeps the address bar at `/` instead of `/#section`.
 */
export function HomeSectionLink({
  href,
  onClick,
  ...props
}: ComponentProps<typeof Link>) {
  const pathname = usePathname();
  const hrefStr = typeof href === "string" ? href : "";

  return (
    <Link
      href={href}
      onClick={(e) => {
        if (pathname !== "/") {
          onClick?.(e);
          return;
        }
        const match = HOME_HASH_HREF.exec(hrefStr);
        if (!match) {
          onClick?.(e);
          return;
        }
        if (scrollToIdAndClearHash(match[1])) {
          e.preventDefault();
        }
        onClick?.(e);
      }}
      {...props}
    />
  );
}
