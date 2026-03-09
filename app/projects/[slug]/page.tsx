import { notFound } from "next/navigation";
import { PROJECTS } from "@/lib/projects";
import { ProjectGate } from "@/components/project-gate";
import { CaseStudyTemplate } from "@/components/case-study";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return { title: "Project" };
  return { title: `${project.title} | Liam Morris` };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();

  const content = <CaseStudyTemplate project={project} />;

  const mainClassName =
    project.slug === "an-post-money"
      ? "min-h-screen overflow-x-hidden md:overflow-x-visible"
      : "min-h-screen";

  return (
    <main className={mainClassName}>
      {project.requiresPassword ? (
        <ProjectGate slug={slug}>{content}</ProjectGate>
      ) : (
        content
      )}
    </main>
  );
}
