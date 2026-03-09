"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion, type PanInfo } from "framer-motion";
import { TrendingUp } from "lucide-react";
import type { CaseStudySolutionContent } from "@/lib/case-studies";

type SolutionSectionProps = {
  content: CaseStudySolutionContent;
};

const ASPECT_RATIO = 16 / 10;

export function SolutionSection({ content }: SolutionSectionProps) {
  const headingOffset = content.headingImage ? 1 : 0;

  const itemImageOffsets: number[] = [];
  let runningIndex = headingOffset;
  for (let i = 0; i < content.items.length; i += 1) {
    itemImageOffsets[i] = runningIndex;
    runningIndex += content.items[i]?.images?.length ?? 0;
  }
  const totalImages = runningIndex;

  const allImages: string[] = [
    ...(content.headingImage ? [content.headingImage] : []),
    ...content.items.flatMap((item) => item.images),
  ];

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [lightboxDirection, setLightboxDirection] = useState(1);

  const isLightboxOpen = lightboxIndex !== null && totalImages > 0;

  const openLightbox = (index: number) => {
    if (totalImages === 0) return;
    if (typeof window !== "undefined" && window.innerWidth >= 768) return;
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const goToImage = (index: number) => {
    if (!isLightboxOpen || totalImages === 0 || lightboxIndex === null) return;
    const normalised = ((index % totalImages) + totalImages) % totalImages;
    setLightboxDirection(index > lightboxIndex ? 1 : -1);
    setLightboxIndex(normalised);
  };

  const goNextImage = () => {
    if (!isLightboxOpen || totalImages === 0 || lightboxIndex === null) return;
    goToImage(lightboxIndex + 1);
  };

  const goPrevImage = () => {
    if (!isLightboxOpen || totalImages === 0 || lightboxIndex === null) return;
    goToImage(lightboxIndex - 1);
  };

  const currentImageSrc =
    isLightboxOpen && lightboxIndex !== null ? allImages[lightboxIndex] : null;

  return (
    <section className="cs-solution">
      <div className="section-frame px-[var(--cs-padding-x)] py-10 md:py-20">
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
              onClick={() => openLightbox(0)}
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
            {content.items.map((item, idx) => {
              const baseIndex = itemImageOffsets[idx] ?? headingOffset;

              return (
                <div key={idx} className="cs-solution-item">
                  {item.title && <h4 className="cs-solution-item-title">{item.title}</h4>}
                  {item.description && (
                    <p className="cs-solution-item-desc">{item.description}</p>
                  )}
                  {item.layout === "single" ? (
                    <div
                      className="cs-solution-image-wrap"
                      style={{ aspectRatio: ASPECT_RATIO }}
                      onClick={() => openLightbox(baseIndex)}
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
                          onClick={() => openLightbox(baseIndex + i)}
                        >
                          <img src={src} alt="" className="cs-solution-image-grid-img" />
                        </div>
                      ))}
                    </div>
                  ) : item.layout === "grid" ? (
                    <div className="cs-solution-image-grid cs-solution-image-grid-2x2">
                      {item.images.slice(0, 4).map((src, i) => (
                        <div
                          key={i}
                          className="cs-solution-image-wrap cs-solution-image-grid-item"
                          onClick={() => openLightbox(baseIndex + i)}
                        >
                          <img src={src} alt="" className="cs-solution-image-grid-img" />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="cs-solution-featured">
                      <div
                        className="cs-solution-image-wrap cs-solution-image-main"
                        style={{ aspectRatio: ASPECT_RATIO }}
                        onClick={() => openLightbox(baseIndex)}
                      >
                        <img
                          src={item.images[0]}
                          alt=""
                          width={2160}
                          height={1440}
                          className="cs-solution-image-main-img"
                        />
                      </div>
                      {item.images.length - 1 === 4 ? (
                        <>
                          <div className="cs-solution-image-grid cs-solution-image-grid-2x2">
                            {item.images.slice(1, 3).map((src, i) => (
                              <div
                                key={i}
                                className="cs-solution-image-wrap cs-solution-image-grid-item"
                                onClick={() => openLightbox(baseIndex + 1 + i)}
                              >
                                <img
                                  src={src}
                                  alt=""
                                  className="cs-solution-image-grid-img"
                                />
                              </div>
                            ))}
                          </div>
                          <div className="cs-solution-image-grid">
                            {item.images.slice(3).map((src, i) => (
                              <div
                                key={i}
                                className="cs-solution-image-wrap cs-solution-image-grid-item"
                                onClick={() =>
                                  openLightbox(baseIndex + 3 + i)
                                }
                              >
                                <img
                                  src={src}
                                  alt=""
                                  className="cs-solution-image-grid-img"
                                />
                              </div>
                            ))}
                          </div>
                        </>
                      ) : (
                        <div className="cs-solution-image-grid">
                          {item.images.slice(1).map((src, i) => (
                            <div
                              key={i}
                              className="cs-solution-image-wrap cs-solution-image-grid-item"
                              onClick={() => openLightbox(baseIndex + 1 + i)}
                            >
                              <img
                                src={src}
                                alt=""
                                className="cs-solution-image-grid-img"
                              />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          {content.footerNote && (
            <p className="mt-12 text-center text-sm text-muted-foreground">
              {content.footerNote}
            </p>
          )}
        </div>
      </div>

      <AnimatePresence>
        {isLightboxOpen && currentImageSrc && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <div className="flex h-full w-full items-center justify-center p-4">
              <motion.div
                key={lightboxIndex ?? 0}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                dragMomentum={false}
                onDragEnd={(_, info: PanInfo) => {
                  if (info.offset.x < -50) {
                    goNextImage();
                  } else if (info.offset.x > 50) {
                    goPrevImage();
                  }
                }}
                initial={{
                  x: lightboxDirection > 0 ? 100 : -100,
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                  transition: { duration: 0.25, ease: "easeOut" },
                }}
                exit={{
                  x: lightboxDirection > 0 ? -100 : 100,
                  opacity: 0,
                  transition: { duration: 0.2, ease: "easeIn" },
                }}
                className="relative h-full w-full max-w-md overflow-hidden rounded-[var(--radius-card)] bg-background"
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  type="button"
                  className="absolute right-3 top-3 z-10 rounded-full bg-black/60 px-3 py-1 text-xs font-medium uppercase tracking-wide text-white"
                  onClick={closeLightbox}
                >
                  Close
                </button>
                <div className="relative h-full w-full">
                  <Image
                    src={currentImageSrc}
                    alt=""
                    fill
                    className="object-contain"
                    sizes="100vw"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
