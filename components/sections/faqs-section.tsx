"use client";

import { LifeBuoy } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const FAQ_ITEMS = [
  {
    question: "What engagements do you typically take on?",
    answer:
      "I specialise in high-velocity, remote contract roles (3–12 months), primarily focused on 0–1 product development and design strategy. I typically partner with teams to transform complex requirements into scalable design systems, launch high-performance MVPs, or modernise legacy enterprise platforms. Please note that I am not available for full-time roles at this time.",
  },
  {
    question: "Where are you based?",
    answer:
      "I work fully remote but operate on UK business hours. I am used to collaborating with distributed teams across Europe and the US, ensuring enough crossover for synchronous workshops while maintaining deep-work blocks for delivery.",
  },
  {
    question: "Are you open to fixed-price projects?",
    answer:
      "Yes. I typically work on a weekly or monthly retainer to allow for the natural pivots of early-stage product development, but for clearly defined, short-term scopes—such as a specific audit or MVP roadmap—I am happy to discuss a fixed-price engagement.",
  },
  {
    question: "How do you handle complex Fintech projects?",
    answer:
      "I have extensive experience in enterprise-level design for Tier 1 banks, where I’ve balanced high-security constraints and complex data with modern, accessible UI. Rather than applying a rigid template, I tailor my end-to-end UX process to the specific problem at hand, ensuring every edge case is accounted for in the final product.",
  },
  {
    question: 'What is your "Vibe-coding" process?',
    answer:
      "It is a technical design workflow that uses AI to bridge the gap between Figma and code. Instead of static hand-offs, I deliver functional, production-ready components and interactive prototypes using platforms like Cursor and Claude, significantly reducing the time from design to deployment.",
    isNew: true,
  },
  {
    question: "How does your AI workflow help developers?",
    answer:
      "Instead of handing over static files and 'hoping for the best,' I deliver functional, production-ready UI components. By using AI-assisted coding to bridge the gap, I provide developers with clean code that respects the design intent, which can shave weeks off a typical build cycle.",
    isNew: true,
  },
];

export function FAQsSection() {
  return (
    <section id="faqs" className="scroll-mt-14 border-b border-border-subtle bg-background">
      <div className="section-frame px-5 py-10 md:px-20 md:py-5 md:py-20">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-12 text-center">
          {/* Section title */}
          <div>
            <div className="mb-3 flex items-center justify-center gap-2">
              <LifeBuoy className="size-4 shrink-0 text-muted-foreground" aria-hidden />
              <span className="font-mono text-sm font-medium tracking-section-label text-muted-foreground" style={{ textTransform: "none" }}>
                FAQs
              </span>
            </div>
            <h2 className="text-foreground">
              Frequently Asked Questions.
            </h2>
          </div>

          {/* Accordion */}
          <Accordion type="single" collapsible className="w-full [&_[data-slot=accordion-trigger]>svg]:text-muted-foreground [&_[data-slot=accordion-trigger]]:text-base">
            {FAQ_ITEMS.map(({ question, answer, isNew }, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-border"
              >
                <AccordionTrigger className="py-5 text-left text-foreground font-semibold hover:no-underline hover:text-foreground/80 md:text-center">
                  <span className="inline-flex flex-nowrap items-center gap-2">
                    {question}
                    {isNew && (
                      <Badge className="shrink-0 font-mono text-[10px] font-medium uppercase tracking-[1px] bg-emerald-100 text-emerald-800 hover:bg-emerald-100 hover:text-emerald-800 dark:bg-[#003E30] dark:text-[#bef264] dark:hover:bg-[#003E30] dark:hover:text-[#bef264]">
                        New
                      </Badge>
                    )}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-left text-base text-muted-foreground leading-relaxed pb-6">
                  {answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
