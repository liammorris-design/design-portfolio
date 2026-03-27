import Link from "next/link";
import { landingNav, siteAnnouncement } from "@/lib/landing-content";

/** Pulsing “live” dot — emerald reads on charcoal sticky bar in light and dark theme. */
function AvailabilityStatusDot() {
  return (
    <span className="relative inline-flex size-2.5 shrink-0" aria-hidden>
      <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/55 motion-reduce:animate-none" />
      <span className="relative block size-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.45)] ring-2 ring-emerald-300/35 motion-reduce:shadow-none motion-reduce:ring-0" />
    </span>
  );
}

/** Top availability strip — `bg-sticky-bar` / `text-sticky-bar-fg` (charcoal bar, light copy in both themes). */
export function SiteAnnouncementBar() {
  return (
    <div
      role="region"
      aria-label="Availability"
      className="w-full shrink-0 border-b border-white/10 bg-sticky-bar text-sticky-bar-fg"
    >
      <div className="page-container flex min-h-0 items-center justify-between gap-5 py-3 sm:min-h-[var(--site-announcement-bar-height)] sm:justify-center sm:gap-4 sm:py-2">
        <div className="flex min-w-0 flex-1 items-center gap-2.5 text-left sm:flex-none sm:w-auto sm:justify-center">
          <AvailabilityStatusDot />
          <p className="min-w-0 flex-1 truncate text-sm font-medium leading-6 tracking-tight text-sticky-bar-fg sm:flex-none sm:overflow-visible sm:text-center sm:whitespace-normal">
            {siteAnnouncement.message}
          </p>
        </div>
        <Link
          href={landingNav.calendlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 text-sm font-semibold leading-6 tracking-tight text-sticky-bar-fg underline decoration-solid underline-offset-4 transition-opacity hover:opacity-90"
        >
          {siteAnnouncement.ctaLabel}
        </Link>
      </div>
    </div>
  );
}
