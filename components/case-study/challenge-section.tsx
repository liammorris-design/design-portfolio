import { AlertTriangle, Angry, Goal } from "lucide-react";
import type { CaseStudyChallengeContent } from "@/lib/case-studies";

type ChallengeSectionProps = {
  content: CaseStudyChallengeContent;
};

export function ChallengeSection({ content }: ChallengeSectionProps) {
  return (
    <section className="cs-challenge">
      <div className="section-frame px-[var(--cs-padding-x)] py-16 md:py-20">
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
            <div className="cs-challenge-panel flex w-full flex-col gap-2 overflow-hidden rounded-[var(--radius-card)] border border-border bg-white px-8 py-8 text-foreground dark:bg-white/[0.03]">
              <h4 className="cs-challenge-panel-title">
                <AlertTriangle
                  className="cs-challenge-icon cs-challenge-icon-problem"
                  aria-hidden
                />
                Problem
              </h4>
              <p className="cs-challenge-panel-text">{content.problem}</p>
            </div>
            <div className="cs-challenge-panel flex w-full flex-col gap-2 overflow-hidden rounded-[var(--radius-card)] border border-border bg-white px-8 py-8 text-foreground dark:bg-white/[0.03]">
              <h4 className="cs-challenge-panel-title">
                <Goal
                  className="cs-challenge-icon cs-challenge-icon-objective"
                  aria-hidden
                />
                Objective
              </h4>
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
    </section>
  );
}
