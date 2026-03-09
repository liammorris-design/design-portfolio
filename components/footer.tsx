import Image from "next/image";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-background text-foreground">
      <div className="section-frame px-5 py-10 md:px-20 md:py-5 md:py-20">
        {/* Bottom row */}
        <div className="flex w-full flex-col items-stretch justify-between gap-6 sm:flex-row sm:items-center sm:flex-initial">
          <div className="flex flex-row flex-wrap items-center gap-x-2 gap-y-1">
            <p className="text-sm text-muted-foreground">
              Copyright © 2026 Liam Morris Design.
            </p>
          </div>
          <div className="flex w-full items-center justify-between sm:w-auto sm:justify-end sm:gap-2">
            <span className="inline-flex">
              <ThemeToggle />
            </span>
            <div className="hidden">
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
            <Button
              variant="outline"
              size="sm"
              className="!pl-4 pr-3"
              asChild
            >
              <Link href="/#hero" className="gap-2">
                Back to top
                <ArrowUp className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
