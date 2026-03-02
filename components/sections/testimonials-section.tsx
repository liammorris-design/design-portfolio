"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { MessageCircle, ArrowLeft, ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";

const TESTIMONIALS = [
  {
    name: "Danny Hill",
    title: "Director, Lloyds Banking Group",
    quote: "Highly recommended for any senior design role.",
    text: "Liam designed and delivered a new digital SaaS channel for our commercial banking division, navigating highly regulated requirements and senior stakeholder input as the solo designer. The results were excellent and the platform continues to be praised by our clients.",
    companyLogo: "lloyds",
    avatar: "/danny-hill.png",
  },
  {
    name: "Carl Hasty",
    title: "CEO at CoBa Technology",
    quote: "I would hire him again without hesitation.",
    text: "As our Founding Product Designer, Liam built a complex white-label SaaS platform from scratch for a Tier 1 bank. He operated well beyond design, contributing to product strategy, sales demos, and senior client engagements. With strong commercial instincts and the ability to deliver under pressure, Liam was core to getting the platform live.",
    companyLogo: "coba",
    avatar: "/carl-hasty.png",
  },
];

const GENERIC_LOGO_LIGHT =
  "https://placehold.co/80x32/e2e8f0/64748b?text=Company";
const GENERIC_LOGO_DARK =
  "https://placehold.co/80x32/64748b/94a3b8?text=Company";

export function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = next (left), -1 = prev (right)
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  const t = TESTIMONIALS[active];

  useEffect(() => {
    setMounted(true);
  }, []);

  const goTo = (index: number) => {
    setDirection(index > active ? 1 : -1);
    setActive(index);
  };
  const goPrev = () => {
    setDirection(-1);
    setActive((p) => (p === 0 ? TESTIMONIALS.length - 1 : p - 1));
  };
  const goNext = () => {
    setDirection(1);
    setActive((p) => (p === TESTIMONIALS.length - 1 ? 0 : p + 1));
  };

  // Lloyds logo: black for light mode, white for dark mode
  const lloydsSrc =
    !mounted || resolvedTheme !== "dark" ? "/lloyds-black.svg" : "/lloyds-white.svg";
  const cobaSrc =
    !mounted || resolvedTheme !== "dark" ? "/coba-black.svg" : "/coba-white.svg";

  // Auto-cycle every 9 seconds
  useEffect(() => {
    const id = setInterval(goNext, 9000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="testimonials" className="scroll-mt-14 border-b border-border-subtle bg-background">
      <div className="section-frame px-5 py-5 md:px-20 md:py-5 md:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* Left: Section title - max 315px */}
          <div className="max-w-[315px]">
            <div className="mb-3 flex items-center gap-2">
              <MessageCircle className="size-4 shrink-0 text-muted-foreground" aria-hidden />
              <span className="font-mono text-sm font-medium uppercase tracking-section-label text-muted-foreground">
                Testimonials
              </span>
            </div>
            <h2 className="text-foreground">
              What clients have said.
            </h2>
          </div>

          {/* Right: Testimonial card - Figma design */}
          <div className="flex flex-col gap-8">
            <div className="relative h-[560px] min-h-[560px] w-full overflow-hidden">
              <AnimatePresence initial={false} mode="popLayout">
                <motion.div
                  key={active}
                  initial={{
                    x: direction > 0 ? "100%" : "-100%",
                    opacity: 0,
                  }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    transition: { duration: 0.3, ease: "easeOut" },
                  }}
                  exit={{
                    x: direction > 0 ? "-100%" : "100%",
                    opacity: 0,
                    transition: { duration: 0.3, ease: "easeIn" },
                  }}
                  className="absolute inset-0 flex flex-col overflow-hidden rounded-[var(--radius-card)] border border-border bg-white p-[48px] dark:bg-white/[0.03]"
                >
                  <div className="mb-6 flex shrink-0 items-start gap-4">
                    <div className="relative flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800">
                      {t.avatar ? (
                        <Image
                          src={t.avatar}
                          alt=""
                          width={48}
                          height={48}
                          className="size-full object-cover"
                        />
                      ) : (
                        <span className="text-zinc-500 dark:text-zinc-400">?</span>
                      )}
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-zinc-900 dark:text-white">
                        {t.name}
                      </p>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">
                        {t.title}
                      </p>
                    </div>
                  </div>
                  <blockquote className="mb-6 flex flex-1 flex-col gap-4">
                    <span className="text-2xl font-semibold leading-tight tracking-[-1px] text-zinc-900 dark:text-white md:text-[28px]">
                      &ldquo;{t.quote}&rdquo;
                    </span>
                    <p className="flex-1 text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
                      {t.text}
                    </p>
                  </blockquote>
                  <div className="mt-auto h-8 shrink-0">
                    {t.companyLogo === "lloyds" ? (
                      <Image
                        src={lloydsSrc}
                        alt="Lloyds"
                        width={116}
                        height={32}
                        className="h-8 w-auto object-contain object-left"
                      />
                    ) : t.companyLogo === "coba" ? (
                      <Image
                        src={cobaSrc}
                        alt="CoBa Technology"
                        width={82}
                        height={32}
                        className="h-8 w-auto object-contain object-left"
                      />
                    ) : (
                      <Image
                        src={
                          resolvedTheme === "dark"
                            ? GENERIC_LOGO_DARK
                            : GENERIC_LOGO_LIGHT
                        }
                        alt="Company"
                        width={80}
                        height={32}
                        className="h-8 w-20 object-contain object-left opacity-70"
                      />
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Carousel nav - progress bar per testimonial + arrows */}
            <div className="mt-4 flex w-full items-center justify-between gap-4">
              <div className="flex items-center gap-2" aria-label="Carousel position">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => goTo(i)}
                    className="h-[4px] w-12 overflow-hidden rounded-none bg-zinc-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring dark:bg-muted-foreground/50"
                    aria-label={`Go to testimonial ${i + 1}`}
                    aria-current={active === i ? "true" : undefined}
                  >
                    {active === i ? (
                      <span
                        key={active}
                        className="testimonial-progress-fill block h-full w-full rounded-none bg-foreground"
                      />
                    ) : null}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={goPrev}
                  className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border bg-white text-foreground shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring dark:bg-background dark:shadow-none"
                  aria-label="Previous testimonial"
                >
                  <ArrowLeft className="size-4" />
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border bg-white text-foreground shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring dark:bg-background dark:shadow-none"
                  aria-label="Next testimonial"
                >
                  <ArrowRight className="size-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
