"use client";

import * as React from "react";
import Link from "next/link";
import { X, Mail, ExternalLink } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ContactModal({ open, onOpenChange }: ContactModalProps) {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const formRef = React.useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Placeholder – add form submission logic (e.g. API route, email service)
    await new Promise((r) => setTimeout(r, 500));
    setIsSubmitting(false);
    onOpenChange(false);
    formRef.current?.reset();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        animation="slideUp"
        className="max-h-[90vh] max-w-[calc(100vw-1rem)] overflow-y-auto border border-zinc-200 bg-white p-0 text-zinc-900 shadow-2xl shadow-black/20 dark:border-zinc-600/60 dark:bg-zinc-800 dark:text-white dark:shadow-black/80 sm:max-w-3xl"
        aria-describedby={undefined}
      >
        <button
          type="button"
          onClick={() => onOpenChange(false)}
          className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full bg-zinc-100 text-zinc-700 transition-colors hover:bg-zinc-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 dark:focus-visible:ring-white"
          aria-label="Close"
        >
          <X className="size-5" />
        </button>

        <div className="grid gap-8 p-6 sm:p-8 md:grid-cols-[1fr_1fr] md:gap-12">
          {/* Left: Contact info */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                Contact
              </span>
            </div>
            <h2 className="text-zinc-900 dark:text-white">
              Got a project you need help on? Let&apos;s talk.
            </h2>
            <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
              I&apos;m currently available from March 2026 for fully remote
              product design contracts.
            </p>
            <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
              Get in touch using the buttons below, send me an email at{" "}
              <Link
                href="mailto:hello@liammorris.co.uk"
                className="underline hover:text-zinc-900 dark:hover:text-white"
              >
                hello@liammorris.co.uk
              </Link>{" "}
              or using the enquiry form.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                size="lg"
                variant="secondary"
                className="rounded-full bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-white/90"
                asChild
              >
                <Link
                  href="mailto:hello@liammorris.co.uk"
                  className="inline-flex items-center gap-2"
                >
                  Email me
                  <Mail className="size-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-zinc-300 bg-transparent text-zinc-900 hover:bg-zinc-100 dark:border-white/30 dark:bg-transparent dark:text-white dark:hover:bg-white/10 dark:hover:text-white"
                asChild
              >
                <a
                  href="https://www.linkedin.com/in/liammorris/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  Contact on LinkedIn
                  <ExternalLink className="size-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right: Enquiry form */}
          <div className="flex flex-col gap-6">
            <DialogTitle className="text-xl font-semibold text-zinc-900 dark:text-white">
              Send enquiry
            </DialogTitle>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col gap-5"
            >
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-name"
                  className="text-sm font-medium text-zinc-900 dark:text-white"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Name"
                  required
                  className="w-full rounded-lg border border-zinc-300 bg-zinc-50 px-4 py-3 text-zinc-900 placeholder:text-zinc-500 focus:border-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-200 dark:border-white/20 dark:bg-white/5 dark:text-white dark:placeholder:text-zinc-500 dark:focus:border-white/50 dark:focus:ring-white/20"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-email"
                  className="text-sm font-medium text-zinc-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full rounded-lg border border-zinc-300 bg-zinc-50 px-4 py-3 text-zinc-900 placeholder:text-zinc-500 focus:border-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-200 dark:border-white/20 dark:bg-white/5 dark:text-white dark:placeholder:text-zinc-500 dark:focus:border-white/50 dark:focus:ring-white/20"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-message"
                  className="text-sm font-medium text-zinc-900 dark:text-white"
                >
                  Message or enquiry
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Your message here..."
                  rows={4}
                  required
                  className="w-full resize-none rounded-lg border border-zinc-300 bg-zinc-50 px-4 py-3 text-zinc-900 placeholder:text-zinc-500 focus:border-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-200 dark:border-white/20 dark:bg-white/5 dark:text-white dark:placeholder:text-zinc-500 dark:focus:border-white/50 dark:focus:ring-white/20"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full rounded-full bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-white/90"
              >
                {isSubmitting ? "Sending…" : "Send"}
              </Button>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
