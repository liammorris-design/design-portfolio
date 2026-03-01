import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "@/lib/projects";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
type Project = (typeof PROJECTS)[number];

type ProjectPageContentProps = {
  project: Project;
  otherProjects: Project[];
};

export function ProjectPageContent({ project, otherProjects }: ProjectPageContentProps) {
  return (
    <div className="section-frame">
      <article className="px-20 py-20">
        {/* Project header */}
        <header className="mb-12">
          <h1 className="mb-4 text-foreground">
            {project.title}
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            A short case study describing the challenge, approach, and outcomes
            of this project. This is placeholder content—replace with your
            actual case study copy.
          </p>
        </header>

        {/* Hero image */}
        <div className="relative mb-12 aspect-[1080/680] w-full overflow-hidden rounded-[var(--radius-card)] border border-border bg-muted">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 1080px) 100vw, 1080px"
            priority
          />
        </div>

        {/* Case study content - placeholder sections */}
        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-12">
          <section>
            <h2 className="mb-4 text-foreground">
              The challenge
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Describe the problem or opportunity that prompted this project.
              What were the key constraints and success criteria?
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-foreground">
              The approach
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Outline your design process: research, ideation, prototyping, and
              iteration. How did you work with stakeholders and users?
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-foreground">
              The outcome
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Summarise the results. Include metrics, feedback, or learnings
              where relevant. What impact did the work have?
            </p>
          </section>
        </div>

        {/* See more projects */}
        <section className="mt-20 border-t border-border pt-20">
          <h2 className="mb-6 text-foreground">
            See more projects
          </h2>
          <div className="flex flex-wrap gap-4">
            {otherProjects.map((p) => (
              <Button key={p.slug} variant="outline" size="lg" asChild>
                <Link href={`/projects/${p.slug}`}>{p.title}</Link>
              </Button>
            ))}
            <Button variant="outline" size="lg" className="gap-2" asChild>
              <Link href="/#work">
                <ArrowLeft className="size-4" aria-hidden />
                All projects
              </Link>
            </Button>
          </div>
        </section>
      </article>
    </div>
  );
}
