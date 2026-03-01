"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { PROJECTS } from "@/lib/projects";
import { PasswordDialog } from "@/components/password-dialog";
import { Badge } from "@/components/ui/badge";

export function WorkCarousel() {
  const [passwordDialogOpen, setPasswordDialogOpen] = useState(false);
  const [passwordProjectSlug, setPasswordProjectSlug] = useState<
    (typeof PROJECTS)[number]["slug"]
  >(PROJECTS[0].slug);

  const handleProjectClick = (slug: (typeof PROJECTS)[number]["slug"]) => {
    const p = PROJECTS.find((x) => x.slug === slug);
    if (p?.requiresPassword) {
      setPasswordProjectSlug(slug);
      setPasswordDialogOpen(true);
    }
  };

  return (
    <div className="w-full">
      <PasswordDialog
        open={passwordDialogOpen}
        onOpenChange={setPasswordDialogOpen}
        projectSlug={passwordProjectSlug}
      />
      <div className="grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2">
        {PROJECTS.filter(
          (proj) => !("hiddenFromLanding" in proj && proj.hiddenFromLanding)
        ).map((proj) => {
          const isComingSoon = "isComingSoon" in proj && proj.isComingSoon;
          const cardContent = (
            <>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[var(--radius-card)] bg-muted">
                <Image
                  src={proj.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span
                    className="group/button flex items-center gap-1.5 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground shadow-none"
                    aria-hidden
                  >
                    {isComingSoon ? "Coming soon" : "View project"}
                    {!isComingSoon && (
                      <ArrowRight
                        className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover/button:translate-x-1.5"
                        aria-hidden
                      />
                    )}
                  </span>
                </div>
              </div>
              <div className="mt-4 flex flex-col gap-1.5 transition-opacity duration-300 group-hover:opacity-[0.66]">
                <span className="font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {proj.company}
                </span>
                <h4 className="font-semibold text-foreground">{proj.title}</h4>
                <p className="line-clamp-2 text-sm font-normal leading-relaxed text-muted-foreground">
                  {proj.description}
                </p>
                {proj.tags.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {proj.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="rounded-md text-xs font-medium"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </>
          );

          if (isComingSoon) {
            // Preview-only card: keep hover state but do not allow click/focus
            return (
              <div
                key={proj.slug}
                className="group flex flex-col text-left"
                aria-label={`${proj.title} (coming soon)`}
              >
                {cardContent}
              </div>
            );
          }

          if (proj.requiresPassword) {
            return (
              <button
                key={proj.slug}
                type="button"
                onClick={() => handleProjectClick(proj.slug)}
                aria-label={`View ${proj.title} (password required)`}
                className="group flex flex-col text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                {cardContent}
              </button>
            );
          }

          return (
            <Link
              key={proj.slug}
              href={`/projects/${proj.slug}`}
              aria-label={`View ${proj.title}`}
              className="group flex flex-col text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              {cardContent}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
