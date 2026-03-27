import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

/** Calendly CTA anchor: pairs with `Button asChild` + `.nav-book-cta` hover (globals.css). */
export function NavBookCallLink({
  className,
  children,
  ...props
}: ComponentProps<"a">) {
  return (
    <a className={cn("nav-book-cta", className)} {...props}>
      <span className="nav-book-cta__label relative z-10 min-w-0">{children}</span>
      <span className="nav-book-cta__shimmer" aria-hidden />
    </a>
  );
}
