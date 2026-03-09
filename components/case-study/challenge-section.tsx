"use client";

import { useState } from "react";
import { AlertTriangle, Angry, ChevronDown, Goal } from "lucide-react";
import { cn } from "@/lib/utils";
import type { CaseStudyChallengeContent } from "@/lib/case-studies";

type ChallengeSectionProps = {
  content: CaseStudyChallengeContent;
};

export function ChallengeSection({ content }: ChallengeSectionProps) {
  const [problemOpen, setProblemOpen] = useState(true);
  const [objectiveOpen, setObjectiveOpen] = useState(false);

  return (
    <section className="cs-challenge">
      <div className="section-frame px-[var(--cs-padding-x)] py-10 md:py-20">
        <div className="cs-challenge-inner">
          <div className="cs-challenge-header">
            <div className="cs-challenge-label-wrap">
              <Angry
                className="cs-challenge-label-icon size-[14px] shrink-0"
                aria-hidden
              />
              <span className="cs-challenge-label" aria-hidden>
                The Challenge
              </span>
            </div>
            <h2 className="cs-challenge-heading">{content.heading}</h2>
          </div>
          <div className="cs-challenge-panels">
            <div className="cs-challenge-panel relative flex w-full flex-col gap-2 overflow-hidden rounded-[var(--radius-card)] border border-border bg-white px-5 py-5 text-foreground dark:bg-white/[0.03] md:px-8 md:py-8">
              <button
                type="button"
                onClick={() => setProblemOpen((o) => !o)}
                className="cs-challenge-panel-title cs-challenge-panel-trigger group absolute inset-0 left-0 right-0 top-0 flex w-full cursor-pointer appearance-none flex-col items-stretch border-none bg-transparent p-0 text-left md:static md:flex-row md:pointer-events-none md:cursor-default"
                aria-expanded={problemOpen}
                aria-controls="cs-challenge-problem-content"
                id="cs-challenge-problem-trigger"
              >
                <span className="flex flex-1 items-center gap-2 pl-5 pt-5 md:pl-0 md:pt-0 md:py-0">
                  <AlertTriangle
                    className="cs-challenge-icon cs-challenge-icon-problem"
                    aria-hidden
                  />
                  Problem
                </span>
                <ChevronDown
                  className={cn(
                    "cs-challenge-chevron absolute right-5 top-5 size-4 shrink-0 transition-transform duration-200 md:relative md:right-0 md:top-0 md:hidden",
                    problemOpen && "rotate-180"
                  )}
                  aria-hidden
                />
              </button>
              <div
                id="cs-challenge-problem-content"
                aria-labelledby="cs-challenge-problem-trigger"
                className={cn(
                  "cs-challenge-panel-content relative z-10",
                  !problemOpen && "hidden",
                  "md:!block"
                )}
              >
                <p className="cs-challenge-panel-text">{content.problem}</p>
              </div>
            </div>
            <div className="cs-challenge-panel relative flex w-full flex-col gap-2 overflow-hidden rounded-[var(--radius-card)] border border-border bg-white px-5 py-5 text-foreground dark:bg-white/[0.03] md:px-8 md:py-8">
              <button
                type="button"
                onClick={() => setObjectiveOpen((o) => !o)}
                className="cs-challenge-panel-title cs-challenge-panel-trigger group absolute inset-0 left-0 right-0 top-0 flex w-full cursor-pointer appearance-none flex-col items-stretch border-none bg-transparent p-0 text-left md:static md:flex-row md:pointer-events-none md:cursor-default"
                aria-expanded={objectiveOpen}
                aria-controls="cs-challenge-objective-content"
                id="cs-challenge-objective-trigger"
              >
                <span className="flex flex-1 items-center gap-2 pl-5 pt-5 md:pl-0 md:pt-0 md:py-0">
                  <Goal
                    className="cs-challenge-icon cs-challenge-icon-objective"
                    aria-hidden
                  />
                  Objective
                </span>
                <ChevronDown
                  className={cn(
                    "cs-challenge-chevron absolute right-5 top-5 size-4 shrink-0 transition-transform duration-200 md:relative md:right-0 md:top-0 md:hidden",
                    objectiveOpen && "rotate-180"
                  )}
                  aria-hidden
                />
              </button>
              <div
                id="cs-challenge-objective-content"
                aria-labelledby="cs-challenge-objective-trigger"
                className={cn(
                  "cs-challenge-panel-content relative z-10",
                  !objectiveOpen && "hidden",
                  "md:!block"
                )}
              >
                <p className="cs-challenge-panel-text">{content.objective.intro}</p>
                <ul className="cs-challenge-list" role="list">
                  {content.objective.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
