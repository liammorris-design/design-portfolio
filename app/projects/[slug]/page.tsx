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

  return (
    <main className="min-h-screen">
      {project.requiresPassword ? (
        <ProjectGate slug={slug}>{content}</ProjectGate>
      ) : (
        content
      )}
    </main>
  );
}
