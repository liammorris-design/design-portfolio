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
        className="max-h-[90vh] max-w-[calc(100vw-1rem)] overflow-y-auto border border-border bg-card p-0 text-copy-primary shadow-2xl shadow-black/20 sm:max-w-3xl"
        aria-describedby={undefined}
      >
        <button
          type="button"
          onClick={() => onOpenChange(false)}
          className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full bg-muted text-copy-secondary transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label="Close"
        >
          <X className="size-5" />
        </button>

        <div className="grid gap-8 p-6 sm:p-8 md:grid-cols-[1fr_1fr] md:gap-12">
          {/* Left: Contact info */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs uppercase tracking-wider text-copy-tertiary">
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
            <p className="leading-relaxed text-copy-secondary">
              Get in touch using the buttons below, send me an email at{" "}
              <Link
                href="mailto:hello@liammorris.co.uk"
                className="underline hover:text-copy-primary"
              >
                hello@liammorris.co.uk
              </Link>{" "}
              or using the enquiry form.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                size="lg"
                variant="secondary"
                className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
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
                className="rounded-full border-border bg-transparent text-copy-primary hover:bg-accent hover:text-accent-foreground"
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
            <DialogTitle className="text-body-lead-relaxed font-normal text-copy-primary">
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
                  className="text-sm font-medium text-copy-primary"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Name"
                  required
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-copy-primary placeholder:text-copy-tertiary focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-email"
                  className="text-sm font-medium text-copy-primary"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-copy-primary placeholder:text-copy-tertiary focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-message"
                  className="text-sm font-medium text-copy-primary"
                >
                  Message or enquiry
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Your message here..."
                  rows={4}
                  required
                  className="w-full resize-none rounded-lg border border-input bg-background px-4 py-3 text-copy-primary placeholder:text-copy-tertiary focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
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
