"use client";

import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import { useState } from "react";
import { PROJECTS } from "@/lib/projects";
import { PasswordDialog } from "@/components/password-dialog";
import { landingWork } from "@/lib/landing-content";

const PLACEHOLDER_COUNT = 2;

const workCarouselTileClass =
  "landing-work-carousel-slide min-w-0 shrink-0 snap-start text-left";

export function LandingProjects() {
  const [passwordOpen, setPasswordOpen] = useState(false);
  const [passwordSlug, setPasswordSlug] = useState<(typeof PROJECTS)[number]["slug"]>(PROJECTS[0].slug);

  const visible = PROJECTS.filter((p) => !("hiddenFromLanding" in p && p.hiddenFromLanding));
  const primary = visible[0];

  const openProject = (slug: (typeof PROJECTS)[number]["slug"]) => {
    const p = PROJECTS.find((x) => x.slug === slug);
    if (p?.requiresPassword) {
      setPasswordSlug(slug);
      setPasswordOpen(true);
    }
  };

  return (
    <section id="work" className="min-w-0 scroll-mt-28 py-16 md:py-24 lg:py-40">
      <PasswordDialog
        open={passwordOpen}
        onOpenChange={setPasswordOpen}
        projectSlug={passwordSlug}
      />

      <div className="mb-14 flex flex-col gap-3 md:mb-16">
        <p className="text-eyebrow">
          {landingWork.label}
        </p>
        <h2 className="landing-section-display text-copy-primary">{landingWork.title}</h2>
      </div>

      {/* Track starts with section (shell) width; extends to viewport right so tiles can sit past the 1440 shell without being clipped there */}
      <div className="min-w-0 w-full">
        <div className="landing-work-carousel-gap flex min-w-0 max-w-none w-[calc((100vw+100%)/2)] flex-row flex-nowrap items-start justify-start overflow-x-auto overflow-y-visible pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory">
          {primary && (
            <ProjectCard
              title="£1bn in FX trades for the UK’s largest commercial bank"
              client="Lloyds Banking Group"
              image={primary.image}
              href={`/projects/${primary.slug}`}
              requiresPassword={primary.requiresPassword}
              onPassword={() => openProject(primary.slug)}
            />
          )}
          {Array.from({ length: PLACEHOLDER_COUNT }).map((_, i) => (
            <div
              key={`ph-${i}`}
              className={workCarouselTileClass}
              aria-hidden={i > 0}
            >
              <div className="flex aspect-[1095/730] w-full items-center justify-center bg-[var(--surface-media)] p-10 shadow-[0_4px_16px_rgba(15,15,15,0.01)]">
                <Play className="size-8 text-white/80" strokeWidth={1.25} aria-hidden />
              </div>
              <div className="mt-6 space-y-2">
                <p className="font-heading text-h5 tracking-[var(--text-h5--letter-spacing)] text-copy-primary">
                  More case studies coming soon
                </p>
                <p className="text-lg leading-6 text-copy-secondary">—</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

type CardProps = {
  title: string;
  client: string;
  image: string;
  href: string;
  requiresPassword: boolean;
  onPassword: () => void;
};

function ProjectCard({ title, client, image, href, requiresPassword, onPassword }: CardProps) {
  const inner = (
    <>
      <div className="relative aspect-[1095/730] w-full overflow-hidden bg-[var(--surface-media)] shadow-[0_4px_16px_rgba(15,15,15,0.01)]">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 1440px"
        />
      </div>
      <div className="mt-6 space-y-2">
        <p className="font-heading text-h5 tracking-[var(--text-h5--letter-spacing)] text-copy-primary">{title}</p>
        <p className="text-lg leading-6 text-copy-secondary">{client}</p>
      </div>
    </>
  );

  const className = `block ${workCarouselTileClass}`;

  if (requiresPassword) {
    return (
      <button type="button" onClick={onPassword} className={className}>
        {inner}
      </button>
    );
  }

  return (
    <Link href={href} scroll={false} className={className}>
      {inner}
    </Link>
  );
}
