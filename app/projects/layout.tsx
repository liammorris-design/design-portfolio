import { Footer } from "@/components/footer";
import "@/components/case-study/case-study.css";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
