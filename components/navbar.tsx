 "use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { MenuIcon, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const quicklinks = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#faqs", label: "FAQs" },
  { href: "#cta", label: "Contact" },
];

function scrollToSection(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) {
    e.preventDefault();
    window.history.pushState(null, "", href);
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

const linkClass =
  "flex h-9 min-h-9 items-center justify-center rounded-full px-3 py-3 text-sm font-medium text-foreground transition-colors hover:bg-foreground/[0.04]";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { resolvedTheme } = useTheme();
  const themeToggleLabel =
    resolvedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border-subtle bg-background transition-[border-color] duration-200">
      <nav className="relative mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between px-4 sm:px-5">
        <Link
          href="/"
          className="shrink-0 text-foreground transition-opacity hover:opacity-[0.66]"
          onClick={(e) => {
            if (pathname === "/") {
              e.preventDefault();
              window.location.href = "/";
            }
          }}
        >
          <div className="flex h-8 w-auto items-center">
            <span
              className="text-base font-semibold leading-6"
              style={{ letterSpacing: "-0.5px" }}
            >
              Liam Morris
            </span>
          </div>
        </Link>

        <div className="absolute left-1/2 top-0 bottom-0 hidden -translate-x-1/2 items-center justify-center gap-1 md:flex">
          {quicklinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={linkClass}
              onClick={(e) => {
                scrollToSection(e, href);
                setOpen(false);
              }}
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="hidden shrink-0 items-center gap-4 md:flex">
          <Button
            size="default"
            className="group flex h-8 items-start justify-center overflow-hidden py-0 text-sm font-medium"
            asChild
          >
            <a
              href="https://calendly.com/liammorris/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="gap-2"
            >
              <span className="flex w-full flex-col transition-transform duration-300 ease-out group-hover:-translate-y-1/2">
                <span className="flex h-8 min-h-8 shrink-0 items-center justify-center">
                  Book an intro
                </span>
                <span className="flex h-8 min-h-8 shrink-0 items-center justify-center">
                  <ArrowUpRight className="size-4" />
                </span>
              </span>
            </a>
          </Button>
          <span className="h-4 w-px bg-border" aria-hidden />
          <span className="inline-flex">
            <ThemeToggle />
          </span>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <span className="inline-flex">
            <ThemeToggle />
          </span>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <MenuIcon className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[320px]">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="mt-8 flex flex-col gap-6">
                {quicklinks.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="flex min-h-9 items-center justify-center rounded-full px-3 py-3 text-lg font-medium text-foreground transition-colors hover:bg-foreground/[0.04]"
                    onClick={(e) => {
                      scrollToSection(e, href);
                      setOpen(false);
                    }}
                  >
                    {label}
                  </Link>
                ))}
                <Button
                  className="group flex h-8 items-start justify-center overflow-hidden py-0 text-sm font-medium"
                  asChild
                >
                  <a
                    href="https://calendly.com/liammorris/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gap-2"
                    onClick={() => setOpen(false)}
                  >
                    <span className="flex w-full flex-col transition-transform duration-300 ease-out group-hover:-translate-y-1/2">
                      <span className="flex h-8 min-h-8 shrink-0 items-center justify-center">
                        Book an intro
                      </span>
                      <span className="flex h-8 min-h-8 shrink-0 items-center justify-center">
                        <ArrowUpRight className="size-4" />
                      </span>
                    </span>
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
