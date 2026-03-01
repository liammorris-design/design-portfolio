import Image from "next/image";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-background text-foreground">
      <div className="section-frame px-20 py-20">
        {/* Bottom row */}
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            Copyright © 2026 Liam Morris Design.
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" className="rounded-full" asChild>
                <a
                  href="https://www.linkedin.com/in/liammorris/"
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
              className="pl-[18px] pr-3"
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
