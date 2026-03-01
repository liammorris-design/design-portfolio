"use client";

import { useRef, useState } from "react";
import { Play } from "lucide-react";

type HeroVideoPlayerProps = {
  sources: readonly { src: string; type: string }[];
  poster: string;
};

export function HeroVideoPlayer({ sources, poster }: HeroVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);

  const handlePlayClick = () => {
    videoRef.current?.play();
    setIsOverlayVisible(false);
  };

  const handleVideoEnded = () => {
    setIsOverlayVisible(true);
  };

  const handleVideoClick = () => {
    if (!videoRef.current) return;
    if (!videoRef.current.paused) {
      videoRef.current.pause();
      setIsOverlayVisible(true);
    }
  };

  return (
    <>
      <video
        ref={videoRef}
        playsInline
        preload="auto"
        poster={poster}
        className="absolute inset-0 size-full object-cover cursor-pointer"
        onEnded={handleVideoEnded}
        onClick={handleVideoClick}
        aria-label="Case study hero video"
      >
        {sources.map((source) => (
          <source key={source.src} src={source.src} type={source.type} />
        ))}
      </video>
      {isOverlayVisible && (
        <button
          type="button"
          onClick={handlePlayClick}
          className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity hover:bg-black/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          aria-label="Play video"
        >
          <span className="flex size-16 items-center justify-center rounded-full border border-white/30 bg-white/20 shadow-lg backdrop-blur-md transition-transform hover:scale-105 focus:outline-none">
            <Play
              className="size-8 shrink-0 text-white"
              fill="currentColor"
              aria-hidden
            />
          </span>
        </button>
      )}
    </>
  );
}
