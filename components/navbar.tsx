 "use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border-subtle bg-background transition-[border-color] duration-200">
      <div className="section-frame mx-auto flex h-16 w-full items-center md:h-[72px]">
        <nav className="relative flex h-full w-full items-center justify-between px-4 sm:px-5">
        <Link
          href="/"
          className="group shrink-0 text-foreground transition-opacity hover:opacity-[0.66]"
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
              onClick={(e) => scrollToSection(e, href)}
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="hidden shrink-0 items-center gap-4 md:flex">
          <Button
            size="default"
            className="flex h-8 items-center justify-center gap-1.5 py-0 text-sm font-medium"
            asChild
          >
            <a
              href="https://calendly.com/liammorris/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5"
            >
              Book an intro
              <ArrowUpRight className="size-4" />
            </a>
          </Button>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <Button variant="outline" size="icon" className="rounded-full" aria-label="Email me" asChild>
            <a href="mailto:hello@liammorris.co.uk">
              <Mail className="size-5" />
            </a>
          </Button>
        </div>
        </nav>
      </div>
    </header>
  );
}
