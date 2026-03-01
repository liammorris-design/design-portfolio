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
      <div className="section-frame px-[var(--cs-padding-x)] py-16 md:py-20">
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
          <div className="cs-solution-items">
            {content.items.map((item, idx) => (
              <div key={idx} className="cs-solution-item">
                <h4 className="cs-solution-item-title">{item.title}</h4>
                <p className="cs-solution-item-desc">{item.description}</p>
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
                ) : (
                  <div className="cs-solution-featured">
                    <div
                      className="cs-solution-image-wrap cs-solution-image-main"
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
                    <div className="cs-solution-image-grid">
                      {item.images.slice(1, 4).map((src, i) => (
                        <div
                          key={i}
                          className="cs-solution-image-wrap"
                          style={{ aspectRatio: ASPECT_RATIO }}
                        >
                          <Image
                            src={src}
                            alt=""
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 360px"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
