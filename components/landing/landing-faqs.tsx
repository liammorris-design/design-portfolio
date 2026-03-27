"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { landingFaqs } from "@/lib/landing-content";

export function LandingFaqs() {
  return (
    <section id="faqs" className="scroll-mt-28 py-16 md:py-24 lg:py-40">
      <div className="flex w-full flex-col gap-12 lg:flex-row lg:gap-0">
        <div className="w-full shrink-0 lg:max-w-[700px] lg:pr-8">
          <p className="text-eyebrow">
            {landingFaqs.label}
          </p>
          <h2 className="landing-section-display mt-4 max-w-[28rem] text-copy-primary">
            {landingFaqs.title}
          </h2>
        </div>

        <div className="min-w-0 flex-1 lg:pt-5">
          <Accordion type="single" collapsible className="w-full">
            {landingFaqs.items.map((item, i) => {
              const isNew = "isNew" in item && item.isNew;
              return (
                <AccordionItem
                  key={item.question}
                  value={`faq-${i}`}
                  className="border-0 border-b border-border"
                >
                  <AccordionTrigger className="py-6 text-left hover:no-underline [&>svg]:text-copy-secondary">
                    <span className="flex flex-1 flex-wrap items-center gap-3 pr-4 text-left text-body-lead font-normal tracking-[var(--tracking-faq-question)] text-copy-primary">
                      {item.question}
                      {isNew && (
                        <span className="rounded-full bg-[var(--badge-new-bg)] px-3 py-0.5 font-mono text-xs font-bold uppercase leading-6 text-[var(--badge-new-fg)]">
                          NEW
                        </span>
                      )}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-faq-answer pb-6 text-copy-secondary">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
