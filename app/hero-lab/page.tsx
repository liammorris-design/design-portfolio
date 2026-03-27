import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function HeroPreview({
  variant,
}: {
  variant: "orbs" | "points";
}) {
  return (
    <div className="relative min-h-[280px] overflow-hidden rounded-[var(--radius-card)]">
      <div className="hero-with-grid absolute inset-0" aria-hidden>
        <div className="hero-ambient-layer" aria-hidden>
        {variant === "orbs" ? (
          <>
            <div className="hero-orb hero-orb--tr" />
            <div className="hero-orb hero-orb--bl" />
          </>
        ) : (
          <>
            <span
              className="hero-grid-point"
              style={{ ["--x" as any]: "18%", ["--y" as any]: "24%", ["--delay" as any]: "0s" }}
            />
            <span
              className="hero-grid-point"
              style={{ ["--x" as any]: "34%", ["--y" as any]: "58%", ["--delay" as any]: "3s" }}
            />
            <span
              className="hero-grid-point"
              style={{ ["--x" as any]: "62%", ["--y" as any]: "18%", ["--delay" as any]: "6s" }}
            />
            <span
              className="hero-grid-point hero-grid-point--hide-mobile"
              style={{ ["--x" as any]: "74%", ["--y" as any]: "44%", ["--delay" as any]: "9s" }}
            />
            <span
              className="hero-grid-point"
              style={{ ["--x" as any]: "82%", ["--y" as any]: "70%", ["--delay" as any]: "12s" }}
            />
            <span
              className="hero-grid-point hero-grid-point--hide-mobile"
              style={{ ["--x" as any]: "10%", ["--y" as any]: "78%", ["--delay" as any]: "15s" }}
            />
            <span
              className="hero-grid-point hero-grid-point--hide-mobile"
              style={{ ["--x" as any]: "48%", ["--y" as any]: "36%", ["--delay" as any]: "18s" }}
            />
            <span
              className="hero-grid-point hero-grid-point--hide-mobile"
              style={{ ["--x" as any]: "90%", ["--y" as any]: "30%", ["--delay" as any]: "21s" }}
            />
          </>
        )}
        </div>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[42rem] flex-col items-center gap-6 p-6 text-center md:gap-8">
        <div className="flex items-center justify-center gap-3">
          <div className="relative inline-block size-10 shrink-0">
            <div className="size-10 overflow-hidden rounded-full ring-2 ring-border">
              <Image
                src="/avatar.png"
                alt="Liam Morris"
                width={40}
                height={40}
                className="object-cover"
                priority
              />
            </div>
            <span
              className="status-dot-wave absolute bottom-0 right-0 z-10 translate-x-1/4 translate-y-1/4 rounded-full bg-green-600 ring-4 ring-background dark:bg-green-500"
              aria-hidden
            />
          </div>
          <span className="font-mono text-xs font-medium uppercase text-copy-tertiary">
            Available: Q1 2026
          </span>
        </div>

        <h1 className="hero-reveal hero-reveal-delay-1">
          Senior Product Designer for Fintech &amp; Complex Platforms.
        </h1>

        <p className="hero-reveal hero-reveal-delay-4 max-w-2xl text-base leading-7 text-copy-secondary md:text-body-lead-relaxed">
          I design financial infrastructure and B2B SaaS products, turning complex systems into clear,
          reliable user experiences.
        </p>
      </div>
    </div>
  );
}

export default function HeroLabPage() {
  return (
    <div className="page-container page-section">
        <h1 className="mb-2">Hero lab</h1>
        <p className="mb-8 text-copy-secondary">
          Temporary page to compare hero background variants (we can delete this later).
        </p>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Light — Orbs</CardTitle>
            </CardHeader>
            <CardContent>
              <HeroPreview variant="orbs" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Light — Points</CardTitle>
            </CardHeader>
            <CardContent>
              <HeroPreview variant="points" />
            </CardContent>
          </Card>

          <div className="dark">
            <Card>
              <CardHeader>
                <CardTitle>Dark — Orbs</CardTitle>
              </CardHeader>
              <CardContent>
                <HeroPreview variant="orbs" />
              </CardContent>
            </Card>
          </div>

          <div className="dark">
            <Card>
              <CardHeader>
                <CardTitle>Dark — Points</CardTitle>
              </CardHeader>
              <CardContent>
                <HeroPreview variant="points" />
              </CardContent>
            </Card>
          </div>
        </div>
    </div>
  );
}

