import {
  getCaseStudyHero,
  getCaseStudyOverview,
  getCaseStudyChallenge,
  getCaseStudySolution,
  getCaseStudyResults,
  getCaseStudyTestimonial,
} from "@/lib/case-studies";
import type { Project } from "@/lib/projects";
import { HeroSection } from "./hero-section";
import { OverviewSection } from "./overview-section";
import { ChallengeSection } from "./challenge-section";
import { SolutionSection } from "./solution-section";
import { ResultsSection } from "./results-section";
import { TestimonialSection } from "./testimonial-section";
import { ViewMoreSection } from "./view-more-section";

type CaseStudyTemplateProps = {
  project: Project;
  children?: React.ReactNode;
};

export function CaseStudyTemplate({ project, children }: CaseStudyTemplateProps) {
  const heroContent = getCaseStudyHero(project.slug, project);
  const overviewContent = getCaseStudyOverview(project.slug, project);
  const challengeContent = getCaseStudyChallenge(project.slug);
  const solutionContent = getCaseStudySolution(project.slug);
  const resultsContent = getCaseStudyResults(project.slug);
  const testimonialContent = getCaseStudyTestimonial(project.slug);

  return (
    <div data-case-study className="min-w-0 overflow-x-hidden">
      <div className="page-container min-w-0">
        <HeroSection content={heroContent} />
        <hr className="section-divider" aria-hidden />
        <OverviewSection content={overviewContent} />
        {challengeContent && (
          <>
            <hr className="section-divider" aria-hidden />
            <ChallengeSection content={challengeContent} />
          </>
        )}
        {solutionContent && (
          <>
            <hr className="section-divider" aria-hidden />
            <SolutionSection content={solutionContent} />
          </>
        )}
        {resultsContent && (
          <>
            <hr className="section-divider" aria-hidden />
            <ResultsSection content={resultsContent} />
          </>
        )}
        {testimonialContent && (
          <>
            <hr className="section-divider" aria-hidden />
            <TestimonialSection content={testimonialContent} />
          </>
        )}
        <hr className="section-divider" aria-hidden />
        <ViewMoreSection currentSlug={project.slug} />
        {children}
      </div>
    </div>
  );
}
