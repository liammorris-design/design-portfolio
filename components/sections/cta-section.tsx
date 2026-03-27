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
    <section id="cta" className="page-section scroll-mt-24 bg-background">
      <div className="grid min-w-0 gap-8 md:grid-cols-[1fr_1fr] md:gap-x-20 md:gap-y-[120px]">
          {/* Left: Contact info */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <Mail className="size-4 shrink-0 text-copy-tertiary" aria-hidden />
              <span className="font-mono text-sm uppercase tracking-section-label text-copy-tertiary">
                Contact
              </span>
            </div>
            <h2 className="text-copy-primary">
              Got a project you need help on? Let&apos;s talk.
            </h2>
            <p className="leading-relaxed text-copy-secondary">
              I&apos;m currently available from March 2026 for fully remote
              product design contracts.
            </p>
            <div className="hidden w-full flex-col gap-3 sm:flex sm:flex-row sm:flex-wrap sm:items-center">
              <Button
                size="lg"
                className="has-[>svg]:px-6 w-full px-6 rounded-full text-base leading-6 sm:w-auto"
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
                className="has-[>svg]:px-6 w-full px-6 rounded-full text-base leading-6 sm:w-auto"
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
          <div className="flex w-full flex-col gap-6 overflow-hidden rounded-[var(--radius-card)] border border-border bg-card px-6 py-6 text-copy-primary md:px-8 md:py-8">
            {isSubmitted ? (
              <div className="flex flex-col items-center gap-4 py-8 text-center">
                <CheckCircle2 className="size-12 text-emerald-600 dark:text-emerald-500" aria-hidden />
                <h3 className="text-copy-primary">
                  Message sent
                </h3>
                <p className="text-copy-secondary">
                  Thanks for getting in touch. I&apos;ll respond as soon as possible.
                </p>
              </div>
            ) : (
              <>
            <h3 className="text-copy-primary">
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
    </section>
  );
}