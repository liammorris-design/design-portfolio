import { Trophy } from "lucide-react";
import type { CaseStudyResultsContent } from "@/lib/case-studies";

type ResultsSectionProps = {
  content: CaseStudyResultsContent;
};

export function ResultsSection({ content }: ResultsSectionProps) {
  return (
    <section className="cs-results page-section">
      <div className="cs-results-inner">
        <div className="mb-3 flex items-center justify-start gap-2">
          <Trophy className="cs-results-icon size-4 shrink-0" aria-hidden />
          <span className="cs-results-label">{content.heading}</span>
        </div>
        <h2 className="cs-results-heading">{content.subheading}</h2>
        <div
          className={
            content.metrics.length === 2
              ? "cs-results-grid cs-results-grid--two"
              : "cs-results-grid"
          }
        >
          {content.metrics.map(({ value, description }) => (
            <div key={value} className="cs-results-item">
              <p className="cs-results-value">{value}</p>
              <p className="cs-results-desc">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
