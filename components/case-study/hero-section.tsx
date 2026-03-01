import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { CaseStudyHeroContent } from "@/lib/case-studies";
import { CaseStudyLogo } from "./case-study-logo";
import { Button } from "@/components/ui/button";
import { HeroVideoPlayer } from "./hero-video-player";

type HeroSectionProps = {
  content: CaseStudyHeroContent;
};

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <section className="relative">
      <div className="section-frame">
        <div className="cs-hero-content">
        <Button
          asChild
          variant="outline"
          size="sm"
          className="cs-back pr-4"
        >
          <Link href="/#work" aria-label="Back to work">
            <ArrowLeft className="size-4 shrink-0" aria-hidden />
            Back
          </Link>
        </Button>
        <CaseStudyLogo
          logoText={content.logo}
          logoDefaultSvg={content.logoDefaultSvg}
          logoLightSvg={content.logoLightSvg}
        />
        <h1 className="cs-heading">{content.heading}</h1>
        <p className="cs-subheading">{content.subHeading}</p>

        <div className="cs-tags" role="list">
          {content.tags.map((tag) => (
            <span key={tag} className="cs-tag" role="listitem">
              {tag}
            </span>
          ))}
        </div>

        <div className="cs-media relative">
          {content.heroVideo ? (
            <HeroVideoPlayer
              sources={content.heroVideo}
              poster={content.heroImage}
            />
          ) : (
            <Image
              src={content.heroImage}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1080px) 100vw, 1080px"
              priority
            />
          )}
        </div>
        </div>
      </div>
    </section>
  );
}
