import Image from "next/image";
import Link from "next/link";
import { Image as ImageIcon, Blocks, User, ExternalLink, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/sections/cta-section";
import { Footer } from "@/components/footer";
import { WorkCarousel } from "@/components/work-carousel";
import { ServicesSection } from "@/components/sections/services-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FAQsSection } from "@/components/sections/faqs-section";

const RIBBON_ITEMS = [
  { id: "1" },
  { id: "2" },
  { id: "3" },
  { id: "4" },
  { id: "5" },
  { id: "6" },
  { id: "7" },
  { id: "8" },
  { id: "9" },
  { id: "10" },
  { id: "11" },
  { id: "12" },
];

/** Set to true to show the infinite scroll ribbon (hero image strip) once images are ready. */
const SHOW_RIBBON = false;

export default function Home() {
  return (
    <section className="flex min-h-screen flex-col">
      {/* Hero – grid cropped to section-frame strokes */}
      <div
        id="hero"
        className="flex min-h-0 flex-1 flex-col"
      >
        <div className="section-frame hero-with-grid relative flex flex-1 flex-col items-center justify-center px-20 py-30">
          <div className="flex w-full max-w-2xl flex-col items-center gap-8 text-center">
            {/* Avatar 40px + Available from Q1 2026 to the right */}
            <div className="hero-reveal hero-reveal-delay-5 flex items-center justify-center gap-3">
              <div className="relative inline-block size-10 shrink-0">
                <div className="size-10 overflow-hidden rounded-full ring-2 ring-border">
                  <Image
                    src="/avatar.png"
                    alt="Liam Morris"
                    width={40}
                    height={40}
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Green status dot: 8px, anchored to bottom-right of avatar, overlapping the edge */}
                <span
                  className="status-dot-wave absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 rounded-full bg-green-600 ring-4 ring-background dark:bg-green-500 z-10"
                  aria-hidden
                />
              </div>
              <span className="font-mono text-xs font-medium uppercase text-muted-foreground">
                Available from Q1 2026
              </span>
            </div>

            <h1 className="hero-reveal hero-reveal-delay-1">
              Product Design Expert for AI, Fintech & SaaS.
            </h1>

            {/* Subheader: 20px, 36px line height, two lines */}
            <p className="hero-reveal hero-reveal-delay-4 max-w-2xl text-[20px] leading-[36px] text-muted-foreground">
              I bridge product strategy and production-ready design, helping teams
              launch world-class software at record speed.
            </p>

            {/* CTAs - sentence case, 16px font */}
            <div className="hero-reveal hero-reveal-delay-4 flex flex-wrap items-center justify-center gap-3 pt-2">
              <Button
                size="lg"
                className="group flex items-start justify-center overflow-hidden py-0 text-base"
                asChild
              >
                <a
                  href="https://calendly.com/liammorris/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-2"
                >
                  <span className="flex w-full flex-col transition-transform duration-300 ease-out group-hover:-translate-y-1/2">
                    <span className="flex h-11 min-h-11 shrink-0 items-center justify-center">
                      Book an intro call
                    </span>
                    <span className="flex h-11 min-h-11 shrink-0 items-center justify-center">
                      <ArrowUpRight className="size-4" />
                    </span>
                  </span>
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-base" asChild>
                <a href="#work">Recent work</a>
              </Button>
            </div>
          </div>
        </div>

        {/* Infinite ribbon: full viewport width – hidden until images ready; set SHOW_RIBBON = true to restore */}
        {SHOW_RIBBON && (
        <div className="ribbon-wrapper relative left-1/2 z-10 min-h-[12rem] w-screen -ml-[50vw] overflow-hidden pb-20">
          {/* Overlayed section-frame to draw side strokes only */}
          <div className="pointer-events-none absolute inset-0">
            <div className="section-frame h-full" aria-hidden />
          </div>
          <div className="ribbon-hover-zone group relative">
            {/* Edge fades */}
            <div
              className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 opacity-50 bg-gradient-to-r from-background to-transparent"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 opacity-50 bg-gradient-to-l from-background to-transparent"
              aria-hidden
            />
            <div className="ribbon-track flex w-max gap-5 pb-0 pt-0 will-change-transform transition-opacity duration-300 group-hover:opacity-50">
              {[...RIBBON_ITEMS, ...RIBBON_ITEMS].map((item, idx) => (
                <div
                  key={`ribbon-${idx}-${item.id}`}
                  className="flex h-44 w-[280px] shrink-0 items-center justify-center overflow-hidden rounded-none bg-muted md:h-52 md:w-[340px]"
                  aria-hidden
                >
                  <ImageIcon
                    className="size-8 shrink-0 text-muted-foreground/50"
                    width={32}
                    height={32}
                    aria-hidden
                  />
                </div>
              ))}
            </div>
            {/* Hover overlay: centered button (only within image strip) */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <Link
                href="https://dribbble.com/liamMorris/"
                target="_blank"
                rel="noopener noreferrer"
                className="pointer-events-auto flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground opacity-0 shadow-none transition-opacity duration-300 hover:bg-accent hover:text-accent-foreground group-hover:opacity-100"
              >
                View on Dribbble
                <ExternalLink className="size-4" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
        )}
      </div>

      {/* Bordered frame: work + surrounding strokes */}
      <div className="section-frame flex flex-col">
        {/* Stroke between hero and work - full viewport width */}
        <div
          className="relative left-1/2 w-screen -ml-[50vw] border-b border-border-subtle"
          aria-hidden
        />

        {/* Work */}
        <section id="work" className="scroll-mt-14 w-full overflow-x-visible">
          <div className="flex flex-col items-center overflow-x-visible px-20 py-20 text-center">
            <div className="mb-3 flex items-center justify-center gap-2">
            <Blocks className="size-4 shrink-0 text-muted-foreground" aria-hidden />
            <span className="font-mono text-sm font-medium uppercase tracking-section-label text-muted-foreground">
              work
            </span>
            </div>
            <h2 className="mb-8 text-foreground">
              Featured Projects
            </h2>
            <WorkCarousel />
          </div>
        </section>

        {/* Stroke after work - full viewport width */}
        <div
          className="relative left-1/2 w-screen -ml-[50vw] border-b border-border-subtle"
          aria-hidden
        />
      </div>

      {/* About: two-column bio, 1200px max, same spacing as Work */}
      <section id="about" className="scroll-mt-14 w-full border-b border-border-subtle">
        <div className="section-frame px-20 py-20">
          <div className="mb-3 flex items-center justify-center gap-2">
            <User className="size-4 shrink-0 text-muted-foreground" aria-hidden />
            <span className="font-mono text-sm font-medium uppercase tracking-section-label text-muted-foreground">
              About
            </span>
          </div>
          <h2 className="mb-8 text-center text-foreground">
            👋 Hi, I&apos;m Liam. Your strategic partner in design.
          </h2>

          <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_1.5fr] md:gap-x-12 md:gap-y-20">
            {/* Left: portrait placeholder */}
            <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-none border border-border bg-muted md:max-w-none">
              <Image
                src="/image-d6122e50-f1e0-438c-b34d-17f85bec7112.png"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>

            {/* Right: copy + links */}
            <div className="flex flex-col">
              <p className="mb-4 text-muted-foreground leading-relaxed">
                I&apos;m a Senior Product Designer with 12 years in the London
                tech scene, specialising in 0→1 product development for the past
                five. My approach is shaped by a unique background in commercial
                sales and business transformation, allowing me to design with a
                founder&apos;s focus on discovery, scope, and shipping fast.
              </p>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                Having delivered high-stakes UX/UI for Tier 1 enterprise banks
                and early-stage startups alike, I am equally effective as a solo
                lead or within a team. I have recently evolved my process to
                include an AI-assisted coding workflow, allowing me to bridge
                the gap between Figma and the front-end by delivering functional,
                production-ready UI in days rather than weeks.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ServicesSection />
      <TestimonialsSection />
      <FAQsSection />
      <CTASection />

      <Footer />
    </section>
  );
}
