"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { PROJECTS } from "@/lib/projects";
import { PasswordDialog } from "@/components/password-dialog";
import { Badge } from "@/components/ui/badge";
import type { ProjectSlug } from "@/lib/projects";

type ViewMoreSectionProps = {
  currentSlug: ProjectSlug;
};

export function ViewMoreSection({ currentSlug }: ViewMoreSectionProps) {
  const [passwordDialogOpen, setPasswordDialogOpen] = useState(false);
  const [passwordProjectSlug, setPasswordProjectSlug] =
    useState<ProjectSlug>(currentSlug);

  const otherProjects = PROJECTS.filter((p) => p.slug !== currentSlug).slice(
    0,
    2,
  );

  if (otherProjects.length === 0) return null;

  const handleProjectClick = (slug: ProjectSlug) => {
    const p = PROJECTS.find((x) => x.slug === slug);
    if (p?.requiresPassword) {
      setPasswordProjectSlug(slug);
      setPasswordDialogOpen(true);
    }
  };

  return (
    <section className="cs-view-more border-t border-border-subtle">
      <PasswordDialog
        open={passwordDialogOpen}
        onOpenChange={setPasswordDialogOpen}
        projectSlug={passwordProjectSlug}
      />
      <div className="section-frame px-[var(--cs-padding-x)] py-16 md:py-20">
        <h2 className="cs-view-more-heading text-center">View more projects</h2>
        <div className="cs-view-more-grid">
          {otherProjects.map((proj) => {
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
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span
                      className="flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground shadow-none"
                      aria-hidden
                    >
                      View project
                      <ArrowRight className="size-4 shrink-0" aria-hidden />
                    </span>
                  </div>
                </div>
                <div className="mt-3 flex flex-col gap-1.5 transition-opacity duration-300 group-hover:opacity-[0.66]">
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
    </section>
  );
}
