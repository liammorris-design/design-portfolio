import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Building2, CodeXml, Rocket, TrendingUp, Users, Video } from "lucide-react";
import { NavBookCallLink } from "@/components/nav-book-call-link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  landingAbout,
  landingContact,
  landingExpertise,
  landingHero,
  landingNav,
  landingTestimonials,
  siteCopyright,
  siteSitemap,
} from "@/lib/landing-content";
import { HomeSectionLink } from "@/components/home-section-link";
import { LandingFaqs } from "@/components/landing/landing-faqs";
import { LandingProjects } from "@/components/landing/landing-projects";

const expertiseIcons = [Building2, Users, TrendingUp, Rocket, CodeXml] as const;

const clientLogoSlotCount = 5;
const clientLogoSlotIndices = Array.from({ length: clientLogoSlotCount }, (_, i) => i);

function SectionRule() {
  return (
    <div className="flex w-full justify-center py-2.5" aria-hidden>
      <hr className="landing-section-rule w-full border-0" />
    </div>
  );
}

const landingFooterLinkClass =
  "landing-footer-link inline-flex w-fit border-b border-[var(--footer-rule)] py-1 font-medium text-copy-primary/60";

const landingFooterLinkInteractiveClass = `${landingFooterLinkClass} transition-opacity hover:opacity-100`;

export function LandingPage() {
  return (
    <div className="min-h-screen max-w-full overflow-x-visible bg-background text-left">
      <div className="landing-shell min-w-0">
        {/* Hero: intro + reel */}
        <header id="hero" className="scroll-mt-28 pt-24 pb-20 md:pt-32 lg:pt-40">
          <div
            className={cn(
              "flex min-w-0 flex-col gap-6 sm:gap-12",
              "lg:grid lg:grid-rows-[auto_auto] lg:items-start lg:gap-y-6 lg:gap-x-10 xl:gap-x-16",
              /* 1fr absorbs remaining space; `auto` reserves the portrait width so copy never overlaps the image */
              "lg:grid-cols-[minmax(0,1fr)_auto]",
            )}
          >
            <div className="flex w-full shrink-0 justify-start lg:col-start-2 lg:row-start-1 lg:w-fit lg:shrink-0 lg:justify-self-end lg:self-center">
              <div className="relative aspect-[350/352] w-20 shrink-0 overflow-hidden rounded-none md:w-[120px] lg:w-52 lg:max-w-none">
                <Image
                  src={landingHero.profileImage}
                  alt="Liam Morris"
                  fill
                  className="object-cover"
                  sizes="(max-width: 767px) 80px, (max-width: 1023px) 120px, 208px"
                  priority
                />
              </div>
            </div>
            <div className="landing-hero-copy landing-hero-copy--grid-bridge">
              <h1 className="landing-hero-display min-w-0 text-balance lg:col-start-1 lg:row-start-1 lg:w-full lg:max-w-landing-hero-copy lg:justify-self-start lg:self-center">
                {landingHero.titlePrefix}
                <span className="text-copy-tertiary">{landingHero.titleAccent}</span>
              </h1>
              <p className="min-w-0 text-hero-lead font-normal tracking-[var(--text-hero-lead--letter-spacing)] text-copy-secondary lg:col-start-1 lg:row-start-2 lg:w-full lg:max-w-landing-hero-copy lg:justify-self-start">
                {landingHero.leadLine1}
                {/* Line break only at lg+ so desktop keeps the split; mobile flows as one paragraph (space before “requirements” is on `leadLine1`). */}
                <br className="hidden lg:block" aria-hidden />
                {landingHero.leadLine2}
              </p>
            </div>
          </div>

          <div className="mt-12 min-w-0 w-full md:mt-20">
            <div className="landing-hero-reel bg-[var(--surface-media)] shadow-[0px_3.5px_34px_rgba(10,9,11,0.01)]">
              {/* Placeholder until the final reel asset is ready (`reelVideo` / `reelPoster` in landing-content). */}
              <div
                className="absolute inset-0 flex items-center justify-center"
                role="img"
                aria-label="Video placeholder"
              >
                <Video
                  className="size-14 text-white/45 md:size-16 md:text-white/50"
                  strokeWidth={1.25}
                  aria-hidden
                />
              </div>
            </div>
          </div>
        </header>

        {/* About / fintech */}
        <section id="about" className="scroll-mt-28 space-y-16 pb-24 pt-12 md:space-y-28 md:pb-40 md:pt-20">
          <div className="landing-about-split flex w-full min-w-0 flex-col min-[1240px]:flex-row min-[1240px]:items-center">
            <div className="min-w-0 w-full max-w-full flex-1 basis-0 space-y-3 min-[639px]:max-[1239px]:max-w-about-copy-tablet-range min-[639px]:max-[1239px]:self-start">
              <p className="text-eyebrow">
                {landingAbout.label}
              </p>
              <h2 className="landing-section-display text-copy-primary">
                <span>{landingAbout.headlinePrefix}</span>
                <span>{landingAbout.headlineSuffix}</span>
              </h2>
              <p className="w-full min-w-0 text-body-lead-relaxed tracking-tight text-copy-secondary">
                {landingAbout.body}
              </p>
            </div>
            <div className="min-w-0 w-full flex-1 basis-0">
              <div className="grid w-full min-w-0 grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-10 sm:gap-y-12 md:gap-x-16 md:gap-y-20">
                {landingAbout.metrics.map((m) => (
                  <div
                    key={m.caption}
                    className="relative min-w-0 border-l border-border pl-8 sm:pl-12"
                  >
                    <p className="min-w-0 font-heading text-h2 tracking-[var(--text-h2--letter-spacing)] text-copy-primary">
                      {m.value}
                    </p>
                    <p className="mt-2.5 text-sm font-normal leading-5 tracking-tight text-copy-tertiary">
                      {m.caption}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Placeholder logo slots — mobile: infinite horizontal marquee; sm+: grid. */}
          <div
            className={cn(
              "sm:hidden",
              "-mx-[var(--page-pad-x)] w-[calc(100%+2*var(--page-pad-x))] overflow-hidden",
            )}
            role="region"
            aria-label="Client logos"
          >
            <div className="landing-client-logos-marquee-track">
              <ul className="flex list-none gap-8 pr-8">
                {clientLogoSlotIndices.map((i) => (
                  <li key={i} className="shrink-0">
                    <div
                      className="relative aspect-[5/2] w-36 overflow-hidden rounded-md bg-muted"
                      aria-hidden
                    />
                  </li>
                ))}
              </ul>
              <ul className="flex list-none gap-8 pr-8" aria-hidden>
                {clientLogoSlotIndices.map((i) => (
                  <li key={`marquee-dup-${i}`} className="shrink-0">
                    <div
                      className="relative aspect-[5/2] w-36 overflow-hidden rounded-md bg-muted"
                      aria-hidden
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <ul
            className="hidden min-w-0 list-none sm:grid sm:grid-cols-3 sm:gap-5 md:gap-6 lg:grid-cols-5 lg:gap-8"
            aria-label="Client logos"
          >
            {clientLogoSlotIndices.map((i) => (
              <li key={i} className="min-w-0">
                <div
                  className="relative aspect-[5/2] w-full min-w-0 overflow-hidden rounded-md bg-muted lg:aspect-auto lg:h-[71px]"
                  aria-hidden
                />
              </li>
            ))}
          </ul>
        </section>

        <SectionRule />

        <LandingProjects />

        <SectionRule />

        {/* Expertise */}
        <section id="services" className="scroll-mt-28 py-16 md:py-24 lg:py-40">
          <div className="mb-12 space-y-3 md:mb-20">
            <p className="text-eyebrow">
              {landingExpertise.label}
            </p>
            <h2 className="landing-section-display max-w-[54rem] text-copy-primary">
              {landingExpertise.headline}
            </h2>
            <p className="max-w-[43rem] text-body-lead tracking-tight text-copy-secondary">
              {landingExpertise.intro}
            </p>
          </div>

          <div className="landing-services-split grid min-h-0 w-full min-w-0 grid-cols-1 md:grid-cols-2">
            <div className="min-h-0 min-w-0">
              <div className="md:sticky md:top-28 md:w-full">
                <div
                  className="h-[320px] w-full rounded-[var(--radius-card)] bg-[var(--surface-media)] lg:h-[508px]"
                  aria-hidden
                />
              </div>
            </div>

            <div className="min-h-0 min-w-0 space-y-0">
              {landingExpertise.rows.map((row, i) => {
                const Icon = expertiseIcons[i] ?? Building2;
                const isLast = i === landingExpertise.rows.length - 1;
                return (
                  <div
                    key={row.title}
                    className={`flex flex-col gap-6 border-border pb-12 pt-16 md:gap-6 md:pb-16 ${isLast ? "" : "border-b"}`}
                  >
                    <div className="flex size-14 items-center justify-center border border-border bg-card shadow-[0_3px_14px_rgba(0,0,0,0.02)]">
                      <Icon
                        className="size-7 text-copy-primary"
                        strokeWidth={1.75}
                        aria-hidden
                      />
                    </div>
                    <div className="max-w-[43rem] space-y-3 pr-0 md:pr-8">
                      <div className="flex flex-wrap items-center gap-4">
                        <p className="font-heading text-h5 tracking-[var(--text-h5--letter-spacing)] text-copy-primary">
                          {row.title}
                        </p>
                        {"isNew" in row && row.isNew && (
                          <span className="rounded-full bg-[var(--badge-new-bg)] px-3 py-0.5 font-mono text-sm font-bold uppercase leading-6 text-[var(--badge-new-fg)]">
                            NEW
                          </span>
                        )}
                      </div>
                      <p className="text-services-row text-copy-secondary">
                        {row.body}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <SectionRule />

        {/* Testimonials */}
        <section id="testimonials" className="scroll-mt-28 py-16 pb-32 md:py-24 md:pb-40 lg:py-40 lg:pb-48">
          <div className="mb-12 space-y-3 text-center md:mb-20">
            <p className="text-eyebrow">
              {landingTestimonials.label}
            </p>
            <h2 className="landing-section-display mx-auto max-w-[54rem] text-copy-primary">
              {landingTestimonials.title}
            </h2>
          </div>

          <div className="grid justify-items-center gap-8 lg:grid-cols-2 lg:gap-10">
            {landingTestimonials.cards.map((card) => (
              <article
                key={card.name}
                className="max-w-landing-testimonial-card flex w-full min-h-[520px] flex-col justify-between border border-border bg-card p-10 shadow-[0_3px_14px_rgba(0,0,0,0.02)] md:p-14"
              >
                <div className="space-y-10">
                  <div className="relative h-10 w-36">
                    <Image
                      src={card.logoLight}
                      alt=""
                      fill
                      className="object-contain object-left dark:hidden"
                    />
                    <Image
                      src={card.logoDark}
                      alt=""
                      fill
                      className="hidden object-contain object-left dark:block"
                    />
                  </div>
                  <blockquote className="font-heading text-2xl font-normal leading-[44px] tracking-tight text-copy-primary">
                    &ldquo;{card.quote}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-5">
                    <div className="relative size-16 shrink-0 overflow-hidden bg-muted">
                      <Image src={card.avatar} alt="" fill className="object-cover" sizes="64px" />
                    </div>
                    <div className="min-w-0 text-lg tracking-tight text-copy-primary">
                      <p className="font-bold leading-9">{card.name}</p>
                      <p className="text-base font-normal leading-6 text-copy-secondary/80">
                        {card.role}
                      </p>
                    </div>
                  </div>
                </div>
                {card.ctaHref.startsWith("/#") ? (
                  <HomeSectionLink
                    href={card.ctaHref}
                    className="inline-flex shrink-0 items-center gap-2 border-b border-[var(--footer-rule)] pb-3 text-lg font-medium text-copy-primary"
                  >
                    {card.ctaLabel}
                    <span className="text-base text-copy-secondary/50">→</span>
                  </HomeSectionLink>
                ) : (
                  <Link
                    href={card.ctaHref}
                    className="inline-flex shrink-0 items-center gap-2 border-b border-[var(--footer-rule)] pb-3 text-lg font-medium text-copy-primary"
                  >
                    {card.ctaLabel}
                    <span className="text-base text-copy-secondary/50">→</span>
                  </Link>
                )}
              </article>
            ))}
          </div>
        </section>

        <SectionRule />

        <LandingFaqs />

        <SectionRule />

        {/* Contact + site chrome (Figma bottom) */}
        <footer id="contact" className="scroll-mt-28 space-y-24 pb-16 pt-16 md:space-y-28 md:pb-20 md:pt-24 lg:pt-40">
          <div className="relative w-full overflow-hidden bg-card p-10 shadow-[0_3px_14px_rgba(0,0,0,0.02)] dark:border dark:border-border md:p-16 lg:py-28">
            <div className="relative z-[1] max-w-[625px] space-y-10">
              <div className="space-y-6">
                <h2 className="landing-section-display text-copy-primary">
                  {landingContact.bannerTitle}
                </h2>
                <p className="text-body-lead-relaxed tracking-tight text-copy-secondary">
                  {landingContact.bannerBody}
                </p>
              </div>
              <Button
                className={cn(
                  "h-9 px-5 text-sm font-medium",
                  "hover:bg-primary",
                  "ease-in-out [transition-property:background-color,opacity,color]",
                )}
                asChild
              >
                <NavBookCallLink
                  href={landingNav.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center"
                >
                  {landingContact.bannerCta}
                </NavBookCallLink>
              </Button>
            </div>
            <div className="pointer-events-none absolute right-0 top-12 hidden w-[42%] max-w-[411px] lg:block">
              <div className="relative aspect-square w-full">
                <Image
                  src={landingHero.profileImage}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="411px"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-start">
            <div className="min-w-0 space-y-5 text-left">
              <h2 className="landing-section-display text-copy-primary">
                {landingContact.letsTalk}{" "}
                <span className="font-sans font-medium" aria-hidden>
                  💬
                </span>
              </h2>
              <div className="flex flex-col gap-1">
                <a href={`mailto:${landingNav.email}`} className={landingFooterLinkClass}>
                  {landingNav.email}
                </a>
                <p className={landingFooterLinkClass}>{landingNav.phoneDisplay}</p>
                <a
                  href={landingNav.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={landingFooterLinkClass}
                >
                  {landingContact.introCallLabel}
                </a>
              </div>
            </div>

            <div className="flex min-w-0 flex-wrap justify-start gap-16 text-left lg:gap-20">
              <nav className="flex flex-col gap-1" aria-label="Sitemap column one">
                {siteSitemap.colA.map((item) => (
                  <SitemapRow key={item.label} href={item.href}>
                    {item.label}
                  </SitemapRow>
                ))}
              </nav>
              <nav className="flex flex-col gap-1" aria-label="Sitemap column two">
                {siteSitemap.colB.map((item) =>
                  item.href ? (
                    <SitemapRow key={item.label} href={item.href}>
                      {item.label}
                    </SitemapRow>
                  ) : (
                    <span key={item.label} className={landingFooterLinkClass}>
                      {item.label}
                    </span>
                  )
                )}
              </nav>
            </div>
          </div>

          <p className="text-base leading-6 text-copy-primary/50">{siteCopyright}</p>
        </footer>
      </div>
    </div>
  );
}

function SitemapRow({ href, children }: { href: string; children: ReactNode }) {
  if (href.startsWith("/#")) {
    return (
      <HomeSectionLink href={href} className={landingFooterLinkInteractiveClass}>
        {children}
      </HomeSectionLink>
    );
  }
  return (
    <Link href={href} className={landingFooterLinkInteractiveClass}>
      {children}
    </Link>
  );
}
