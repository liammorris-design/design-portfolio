import Image from "next/image";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HomeSectionLink } from "@/components/home-section-link";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteCopyright, siteSitemap } from "@/lib/landing-content";

const footerLinkClass =
  "text-sm font-medium text-copy-primary transition-opacity hover:opacity-70";

function FooterLink({ href, children }: { href: string; children: string }) {
  if (href.startsWith("/#")) {
    return (
      <HomeSectionLink href={href} className={footerLinkClass}>
        {children}
      </HomeSectionLink>
    );
  }
  return (
    <Link href={href} className={footerLinkClass}>
      {children}
    </Link>
  );
}

export function Footer() {
  return (
    <footer
      className="border-t bg-background text-copy-secondary"
      style={{ borderColor: "var(--footer-rule)" }}
    >
      <div className="page-container py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.075em] text-palette-accent">
              Site
            </p>
            <nav className="flex flex-col gap-2" aria-label="Footer site links">
              {siteSitemap.colA.map((item) => (
                <FooterLink key={item.label} href={item.href}>
                  {item.label}
                </FooterLink>
              ))}
            </nav>
          </div>
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.075em] text-palette-accent">
              More
            </p>
            <nav className="flex flex-col gap-2" aria-label="Footer secondary links">
              {siteSitemap.colB.map((item) =>
                item.href ? (
                  <FooterLink key={item.label} href={item.href}>
                    {item.label}
                  </FooterLink>
                ) : (
                  <span key={item.label} className="text-sm text-copy-tertiary">
                    {item.label} (soon)
                  </span>
                )
              )}
            </nav>
          </div>
          <div className="lg:col-span-2">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.075em] text-palette-accent">
              Social
            </p>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="icon" className="rounded-full" asChild>
                <a
                  href="https://www.linkedin.com/in/liammorrisdesign/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Image
                    src="/linkedin-icon.svg"
                    alt=""
                    width={20}
                    height={20}
                    className="size-5"
                    aria-hidden
                  />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full" asChild>
                <a
                  href="https://dribbble.com/liamMorris/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Dribbble"
                >
                  <Image
                    src="/dribbble.svg"
                    alt=""
                    width={20}
                    height={20}
                    className="size-5"
                    aria-hidden
                  />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <hr className="landing-section-rule my-10 md:my-12" aria-hidden />

        <div className="flex w-full flex-col items-stretch justify-between gap-6 sm:flex-row sm:items-center">
          <p className="text-sm text-copy-tertiary">{siteCopyright}</p>
          <div className="flex w-full flex-wrap items-center justify-between gap-4 sm:w-auto sm:justify-end">
            <ThemeToggle />
            <Button variant="outline" size="sm" className="!pl-4 pr-3" asChild>
              <HomeSectionLink href="/#hero" className="gap-2">
                Back to top
                <ArrowUp className="size-4" />
              </HomeSectionLink>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
