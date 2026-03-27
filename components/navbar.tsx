"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LiamMorrisLogo } from "@/components/liam-morris-logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { NavBookCallLink } from "@/components/nav-book-call-link";

const quicklinks = [
  { href: "/#work", hash: "work", label: "Work" },
  { href: "/#services", hash: "services", label: "Services" },
  { href: "/#about", hash: "about", label: "About" },
  { href: "/#contact", hash: "contact", label: "Contact" },
] as const;

const menuEase = [0.16, 1, 0.3, 1] as const;

/** Shared chrome for theme + menu controls in the mobile header row (`lg:hidden`). */
const mobileHeaderIconButtonClass =
  "size-11 shrink-0 rounded-full border-0 bg-transparent text-copy-primary shadow-none hover:bg-muted/60 dark:hover:bg-muted/40 focus-visible:ring-2 focus-visible:ring-ring/50 motion-reduce:transition-none";

/** Two-bar menu glyph (open state); pairs with `X` for the close state — same transition as former `Menu` icon. */
function MobileMenuTwoBarsIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn(
        "h-5 w-5 text-copy-primary",
        className,
      )}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <line
        x1="3"
        y1="7"
        x2="17"
        y2="7"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <line
        x1="3"
        y1="13"
        x2="17"
        y2="13"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

function scrollToSection(e: React.MouseEvent<HTMLAnchorElement>, hash: string) {
  const el = document.getElementById(hash);
  if (el) {
    e.preventDefault();
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", "/");
  }
}

type MobileMenuBodyProps = {
  onNavLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => void;
};

function MobileMenuBody({ onNavLinkClick }: MobileMenuBodyProps) {
  const reduceMotion = useReducedMotion();

  const staggerBase = reduceMotion ? 0 : 0.06;
  const itemDelay = reduceMotion ? 0 : 0.055;
  const linkTransition = {
    duration: reduceMotion ? 0 : 0.4,
    ease: menuEase,
  };

  return (
    <div
      className={cn(
        "flex h-full min-h-0 flex-col px-5",
        "pt-6",
        "pb-[max(2.5rem,calc(env(safe-area-inset-bottom,0px)+2rem))]",
      )}
    >
      <SheetTitle className="sr-only">Navigation menu</SheetTitle>

      <motion.div
        className="flex min-h-0 w-full flex-1 flex-col pt-2"
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: reduceMotion ? 0 : 0.22,
          delay: reduceMotion ? 0 : 0.04,
          ease: "easeOut",
        }}
      >
        <nav className="flex w-full flex-col" aria-label="Primary">
          {quicklinks.map(({ href, hash, label }, i) => (
            <motion.div
              key={href}
              initial={reduceMotion ? false : { opacity: 0, y: -14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                ...linkTransition,
                delay: staggerBase + i * itemDelay,
              }}
            >
              <Link
                href={href}
                className="mobile-sheet-nav-link flex h-16 w-full items-center border-b border-border/70 text-copy-primary transition-colors hover:bg-muted/40 active:bg-muted/50"
                onClick={(e) => onNavLinkClick(e, hash)}
              >
                {label}
              </Link>
            </motion.div>
          ))}
        </nav>

        <motion.div
          className="mt-auto w-full space-y-3 pt-10"
          initial={reduceMotion ? false : { opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ...linkTransition,
            delay: reduceMotion ? 0 : staggerBase + quicklinks.length * itemDelay,
          }}
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch sm:gap-3">
            <Button
              className={cn(
                "flex-1 rounded-full px-6 py-0 text-sm font-semibold",
                "min-h-12 h-12 !h-12",
                "hover:bg-primary",
                "ease-in-out [transition-property:background-color,opacity,color]",
              )}
              asChild
            >
              <NavBookCallLink
                href="https://calendly.com/liammorris/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 h-12 items-center justify-center !py-0 leading-none"
              >
                Book a call
              </NavBookCallLink>
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export type NavbarProps = {
  /** When true, sits under the announcement strip inside `AppHeader` (no separate `fixed` / `top` offset). */
  embedded?: boolean;
  announcementStripVisible: boolean;
  onAnnouncementStripVisibleChange: (visible: boolean) => void;
};

const SCROLL_COOLDOWN_MS = 450;
const SCROLL_DOWN_HIDE_DELTA = 10;
const SCROLL_UP_SHOW_DELTA = 12;

export function Navbar({
  embedded = false,
  announcementStripVisible,
  onAnnouncementStripVisibleChange,
}: NavbarProps) {
  const pathname = usePathname();
  const [sheetOpen, setSheetOpen] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const sheetOpenRef = useRef(false);
  const reduceMotionRef = useRef(false);
  const scrollCooldownUntilRef = useRef(0);
  sheetOpenRef.current = sheetOpen;

  const menuChromeTop = announcementStripVisible
    ? "calc(var(--site-announcement-bar-height) + 5rem)"
    : "5rem";
  const menuChromeHeight = announcementStripVisible
    ? "calc(100dvh - var(--site-announcement-bar-height) - 5rem)"
    : "calc(100dvh - 5rem)";

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    reduceMotionRef.current = mq.matches;
    const onMq = () => {
      reduceMotionRef.current = mq.matches;
      if (mq.matches) onAnnouncementStripVisibleChange(true);
    };
    mq.addEventListener("change", onMq);
    return () => mq.removeEventListener("change", onMq);
  }, [onAnnouncementStripVisibleChange]);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        if (sheetOpenRef.current || reduceMotionRef.current) {
          onAnnouncementStripVisibleChange(true);
          lastScrollY.current = window.scrollY;
          ticking.current = false;
          return;
        }

        const now = Date.now();
        const y = window.scrollY;
        const delta = y - lastScrollY.current;
        lastScrollY.current = y;

        if (now < scrollCooldownUntilRef.current) {
          ticking.current = false;
          return;
        }

        if (y < 12) {
          if (!announcementStripVisible) {
            scrollCooldownUntilRef.current = now + SCROLL_COOLDOWN_MS;
            onAnnouncementStripVisibleChange(true);
          }
        } else if (delta > SCROLL_DOWN_HIDE_DELTA) {
          if (announcementStripVisible) {
            scrollCooldownUntilRef.current = now + SCROLL_COOLDOWN_MS;
            onAnnouncementStripVisibleChange(false);
          }
        } else if (delta < -SCROLL_UP_SHOW_DELTA) {
          if (!announcementStripVisible) {
            scrollCooldownUntilRef.current = now + SCROLL_COOLDOWN_MS;
            onAnnouncementStripVisibleChange(true);
          }
        }
        ticking.current = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [announcementStripVisible, onAnnouncementStripVisibleChange]);

  const onNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    if (pathname === "/") {
      scrollToSection(e, hash);
    }
    setSheetOpen(false);
  };

  return (
    <header
      className={cn(
        "w-full border-b border-border-subtle bg-background",
        embedded
          ? "relative z-10 shrink-0"
          : cn(
              "fixed inset-x-0 z-50",
              "transition-[top] ease-out motion-reduce:transition-none",
              announcementStripVisible
                ? "top-[var(--site-announcement-bar-height)] duration-[280ms]"
                : "top-0 duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)]",
            ),
      )}
    >
      <div className="page-container flex h-20 w-full items-center">
        <nav className="relative flex h-full w-full min-w-0 items-center justify-between gap-4">
          <Link
            href="/"
            className="group shrink-0 transition-opacity hover:opacity-[0.66]"
            aria-label="Liam Morris"
            onClick={(e) => {
              if (pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
                window.history.replaceState(null, "", "/");
              }
            }}
          >
            <LiamMorrisLogo className="block h-nav-logo w-auto shrink-0 text-brand-wordmark" />
          </Link>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <Button
              size="default"
              className={cn(
                "hidden h-9 px-5 text-sm font-medium md:inline-flex",
                "hover:bg-primary",
                "ease-in-out [transition-property:background-color,opacity,color]",
              )}
              asChild
            >
              <NavBookCallLink
                href="https://calendly.com/liammorris/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center"
              >
                Book a call
              </NavBookCallLink>
            </Button>

            <span className="hidden h-6 w-px shrink-0 bg-border lg:inline-block" aria-hidden />

            <div className="hidden lg:block">
              <ThemeToggle />
            </div>

            <div className="flex items-center gap-1.5 lg:hidden">
              <ThemeToggle compact buttonClassName={mobileHeaderIconButtonClass} />
              <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className={cn(mobileHeaderIconButtonClass, "relative")}
                  aria-expanded={sheetOpen}
                  aria-controls="mobile-navigation-sheet"
                  aria-label={sheetOpen ? "Close menu" : "Open menu"}
                  onClick={() => setSheetOpen((open) => !open)}
                >
                  <span className="pointer-events-none relative flex size-11 items-center justify-center">
                    <span
                      className={cn(
                        "absolute transition-all duration-200 ease-out motion-reduce:transition-none",
                        sheetOpen ? "scale-50 rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100",
                      )}
                    >
                      <MobileMenuTwoBarsIcon />
                    </span>
                    <X
                      strokeWidth={1.75}
                      className={cn(
                        "absolute size-5 text-copy-primary transition-all duration-200 ease-out motion-reduce:transition-none",
                        sheetOpen ? "scale-100 rotate-0 opacity-100" : "scale-50 -rotate-90 opacity-0",
                      )}
                      aria-hidden
                    />
                  </span>
                </Button>
                <SheetContent
                  id="mobile-navigation-sheet"
                  side="fullscreen"
                  showCloseButton={false}
                  sheetTop={menuChromeTop}
                  sheetHeight={menuChromeHeight}
                  className="overflow-hidden overflow-y-auto"
                >
                  <MobileMenuBody onNavLinkClick={onNavLinkClick} />
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
