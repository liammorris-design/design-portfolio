"use client";

import Image from "next/image";
import { TrendingUp } from "lucide-react";
import type { CaseStudySolutionContent } from "@/lib/case-studies";

type SolutionSectionProps = {
  content: CaseStudySolutionContent;
};

const ASPECT_RATIO = 16 / 10;

export function SolutionSection({ content }: SolutionSectionProps) {
  return (
    <section className="cs-solution">
      <div className="section-frame px-[var(--cs-padding-x)] py-5 md:py-20">
        <div className="cs-solution-inner">
          <div className="cs-solution-label-wrap">
            <TrendingUp
              className="cs-solution-label-icon size-[14px] shrink-0"
              aria-hidden
            />
            <span className="cs-solution-label" aria-hidden>
              The Solution
            </span>
          </div>
          <h2 className="cs-solution-heading">{content.heading}</h2>
          {content.headingImage && (
            <div
              className="cs-solution-image-wrap cs-solution-heading-image"
              style={{ aspectRatio: ASPECT_RATIO }}
            >
              <Image
                src={content.headingImage}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1080px) 100vw, 1080px"
              />
            </div>
          )}
          <div className="cs-solution-items">
            {content.items.map((item, idx) => (
              <div key={idx} className="cs-solution-item">
                {item.title && <h4 className="cs-solution-item-title">{item.title}</h4>}
                {item.description && <p className="cs-solution-item-desc">{item.description}</p>}
                {item.layout === "single" ? (
                  <div
                    className="cs-solution-image-wrap"
                    style={{ aspectRatio: ASPECT_RATIO }}
                  >
                    <Image
                      src={item.images[0]}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(max-width: 1080px) 100vw, 1080px"
                    />
                  </div>
                ) : item.layout === "double" ? (
                  <div className="cs-solution-image-double">
                    {item.images.slice(0, 2).map((src, i) => (
                      <div
                        key={i}
                        className="cs-solution-image-wrap cs-solution-image-grid-item"
                      >
                        <img
                          src={src}
                          alt=""
                          className="cs-solution-image-grid-img"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="cs-solution-featured">
                    <div
                      className="cs-solution-image-wrap cs-solution-image-main"
                      style={{ aspectRatio: ASPECT_RATIO }}
                    >
                      <img
                        src={item.images[0]}
                        alt=""
                        width={2160}
                        height={1440}
                        className="cs-solution-image-main-img"
                      />
                    </div>
                    <div className="cs-solution-image-grid">
                      {item.images.slice(1, 4).map((src, i) => (
                        <div
                          key={i}
                          className="cs-solution-image-wrap cs-solution-image-grid-item"
                        >
                          <img
                            src={src}
                            alt=""
                            className="cs-solution-image-grid-img"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          {content.footerNote && (
            <p className="mt-12 text-center text-sm text-muted-foreground">
              {content.footerNote}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
