"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import type { CaseStudyTestimonialContent } from "@/lib/case-studies";

type TestimonialSectionProps = {
  content: CaseStudyTestimonialContent;
};

export function TestimonialSection({ content }: TestimonialSectionProps) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const lloydsSrc =
    !mounted || resolvedTheme !== "dark" ? "/lloyds-black.svg" : "/lloyds-white.svg";
  const cobaSrc =
    !mounted || resolvedTheme !== "dark" ? "/coba-black.svg" : "/coba-white.svg";

  return (
    <section className="cs-testimonial page-section">
      <div className="cs-testimonial-inner">
          <div className="cs-testimonial-card max-w-[680px]">
            <div className="cs-testimonial-logo-wrap">
              {content.companyLogo === "lloyds" ? (
                <Image
                  src={lloydsSrc}
                  alt="Lloyds"
                  width={116}
                  height={32}
                  className="cs-testimonial-logo"
                />
              ) : content.companyLogo === "coba" ? (
                <Image
                  src={cobaSrc}
                  alt="CoBa Technology"
                  width={82}
                  height={32}
                  className="cs-testimonial-logo"
                />
              ) : null}
            </div>
            <blockquote className="cs-testimonial-quote-block">
              <span className="cs-testimonial-quote">
                &ldquo;{content.quote}&rdquo;
              </span>
              <p className="cs-testimonial-text">{content.text}</p>
            </blockquote>
            <div className="cs-testimonial-footer">
              <div className="cs-testimonial-avatar-wrap">
                <Image
                  src={content.avatar}
                  alt=""
                  width={48}
                  height={48}
                  className="cs-testimonial-avatar"
                />
              </div>
              <div>
                <p className="cs-testimonial-name">{content.name}</p>
                <p className="cs-testimonial-title">{content.title}</p>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}
