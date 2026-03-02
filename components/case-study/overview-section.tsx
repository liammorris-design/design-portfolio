import { Presentation } from "lucide-react";
import type { CaseStudyOverviewContent } from "@/lib/case-studies";

type OverviewSectionProps = {
  content: CaseStudyOverviewContent;
};

export function OverviewSection({ content }: OverviewSectionProps) {
  return (
    <section className="cs-overview">
      <div className="section-frame px-[var(--cs-padding-x)] py-5 md:py-20">
        <div className="cs-overview-hero">
          <div className="cs-overview-left">
            <div className="cs-overview-label-wrap">
              <Presentation
                className="cs-overview-label-icon size-[14px] shrink-0"
                aria-hidden
              />
              <span
                className="cs-overview-label"
                aria-hidden
              >
                Overview
              </span>
            </div>
            <h3 className="cs-overview-title">{content.title}</h3>
          </div>
          <p className="cs-overview-desc">{content.description}</p>
        </div>
        {content.projectDetails && (
          <div className="cs-overview-details">
            <div className="cs-overview-details-col">
              <span className="cs-overview-details-label">Client</span>
              <p className="cs-overview-details-value">{content.projectDetails.client}</p>
            </div>
            <div className="cs-overview-details-col">
              <span className="cs-overview-details-label">Platform</span>
              <p className="cs-overview-details-value">{content.projectDetails.platform}</p>
            </div>
            <div className="cs-overview-details-col">
              <span className="cs-overview-details-label">Team</span>
              <div className="cs-overview-details-value cs-overview-details-list">
                {content.projectDetails.team.map((item, i) => (
                  <span key={i}>{item}</span>
                ))}
              </div>
            </div>
            <div className="cs-overview-details-col">
              <span className="cs-overview-details-label">Industry</span>
              <div className="cs-overview-details-value cs-overview-details-list">
                {content.projectDetails.industry.map((item, i) => (
                    <span key={i}>{item}</span>
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
