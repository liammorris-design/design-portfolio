"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ProjectBackHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border-subtle bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex h-14 w-full max-w-[1200px] items-center px-4 sm:px-6">
        <Button variant="ghost" size="sm" className="gap-2 -ml-2" asChild>
          <Link href="/#work">
            <ArrowLeft className="size-4" aria-hidden />
            Back
          </Link>
        </Button>
      </nav>
    </header>
  );
}
