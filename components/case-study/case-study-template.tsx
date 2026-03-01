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
    <div data-case-study>
      <HeroSection content={heroContent} />
      <OverviewSection content={overviewContent} />
      {challengeContent && (
        <ChallengeSection content={challengeContent} />
      )}
      {solutionContent && (
        <SolutionSection content={solutionContent} />
      )}
      {resultsContent && (
        <ResultsSection content={resultsContent} />
      )}
      {testimonialContent && (
        <TestimonialSection content={testimonialContent} />
      )}
      <ViewMoreSection currentSlug={project.slug} />
      {children}
    </div>
  );
}
