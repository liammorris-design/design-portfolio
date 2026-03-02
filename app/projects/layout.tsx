import { Footer } from "@/components/footer";
import { ProjectsScrollToTop } from "@/components/scroll-to-top-on-mount";
import "@/components/case-study/case-study.css";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ProjectsScrollToTop />
      {children}
      <Footer />
    </>
  );
}
