"use client";

import * as React from "react";
import Link from "next/link";
import { Mail, CheckCircle2, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function CTASection() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const formRef = React.useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Placeholder – add form submission logic (e.g. API route, email service)
    await new Promise((r) => setTimeout(r, 500));
    setIsSubmitting(false);
    formRef.current?.reset();
    setIsSubmitted(true);
  };

  return (
    <section id="cta" className="scroll-mt-14 border-b border-border-subtle bg-background">
      <div className="section-frame px-5 py-10 md:px-20 md:py-20">
        <div className="grid gap-8 md:grid-cols-[1fr_1fr] md:gap-x-20 md:gap-y-[120px]">
          {/* Left: Contact info */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <Mail className="size-4 shrink-0 text-zinc-500 dark:text-zinc-400" aria-hidden />
              <span className="font-mono text-sm uppercase tracking-section-label text-zinc-500 dark:text-zinc-400">
                Contact
              </span>
            </div>
            <h2 className="text-foreground">
              Got a project you need help on? Let&apos;s talk.
            </h2>
            <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
              I&apos;m currently available from March 2026 for fully remote
              product design contracts.
            </p>
            <div className="flex w-full flex-row gap-3">
              <Button
                size="lg"
                className="has-[>svg]:px-6 w-fit px-6 rounded-full text-base leading-6"
                asChild
              >
                <a
                  href="https://calendly.com/liammorris/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-base leading-6"
                >
                  Book an intro call
                  <ArrowUpRight className="size-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="has-[>svg]:px-6 w-fit px-6 rounded-full text-base leading-6"
                asChild
              >
                <Link
                  href="mailto:hello@liammorris.co.uk"
                  className="inline-flex items-center gap-2 text-base leading-6"
                >
                  Email me
                </Link>
              </Button>
            </div>
          </div>

          {/* Right: Enquiry form or confirmation */}
          <div className="flex w-full flex-col gap-6 overflow-hidden rounded-[var(--radius-card)] border border-zinc-200 bg-white px-6 py-6 text-zinc-900 dark:border-zinc-600/60 dark:bg-zinc-900 dark:text-white md:px-8 md:py-8">
            {isSubmitted ? (
              <div className="flex flex-col items-center gap-4 py-8 text-center">
                <CheckCircle2 className="size-12 text-emerald-600 dark:text-emerald-500" aria-hidden />
                <h3 className="text-zinc-900 dark:text-white">
                  Message sent
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Thanks for getting in touch. I&apos;ll respond as soon as possible.
                </p>
              </div>
            ) : (
              <>
            <h3 className="text-zinc-900 dark:text-white">
              Get in touch
            </h3>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col justify-start items-end gap-5"
            >
              <div className="flex w-full flex-col gap-2">
                <Label htmlFor="cta-contact-name">Name</Label>
                <Input
                  id="cta-contact-name"
                  name="name"
                  type="text"
                  className="rounded-none"
                  required
                />
              </div>
              <div className="flex w-full flex-col gap-2">
                <Label htmlFor="cta-contact-email">Email</Label>
                <Input
                  id="cta-contact-email"
                  name="email"
                  type="email"
                  className="rounded-none"
                  required
                />
              </div>
              <div className="flex w-full flex-col gap-2">
                <Label htmlFor="cta-contact-message">Message or enquiry</Label>
                <Textarea
                  id="cta-contact-message"
                  name="message"
                  className="min-h-[84px] rounded-none"
                  rows={4}
                  required
                />
              </div>
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="mt-2 w-full rounded-full text-base"
              >
                {isSubmitting ? "Sending…" : "Send"}
              </Button>
            </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}