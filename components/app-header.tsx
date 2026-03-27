"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { SiteAnnouncementBar } from "@/components/site-announcement-bar";
import { cn } from "@/lib/utils";

export function AppHeader() {
  const pathname = usePathname();
  const isProjectPage = pathname?.startsWith("/projects/");
  const [announcementStripVisible, setAnnouncementStripVisible] = useState(true);
  const shellRef = useRef<HTMLDivElement>(null);
  const [chromeHeight, setChromeHeight] = useState(0);

  useLayoutEffect(() => {
    if (isProjectPage) return;
    const el = shellRef.current;
    if (!el) return;

    const update = () => {
      setChromeHeight(el.getBoundingClientRect().height);
    };

    update();
    const ro = new ResizeObserver(() => {
      requestAnimationFrame(update);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [isProjectPage, announcementStripVisible]);

  if (isProjectPage) return null;

  return (
    <>
      <div
        ref={shellRef}
        className="fixed inset-x-0 top-0 z-[60] flex w-full flex-col bg-background"
      >
        <div
          className={cn(
            "w-full overflow-hidden motion-reduce:transition-none",
            announcementStripVisible
              ? "max-h-[12rem] duration-[280ms] ease-out sm:max-h-[5rem]"
              : "max-h-0 duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)]",
          )}
        >
          <SiteAnnouncementBar />
        </div>
        <Navbar
          embedded
          announcementStripVisible={announcementStripVisible}
          onAnnouncementStripVisibleChange={setAnnouncementStripVisible}
        />
      </div>
      <div
        className="shrink-0 motion-reduce:transition-none"
        style={{
          height: chromeHeight > 0 ? chromeHeight : undefined,
          minHeight:
            chromeHeight > 0 ? undefined : "calc(var(--site-announcement-bar-height) + 5rem)",
        }}
        aria-hidden
      />
    </>
  );
}
