import { Trophy } from "lucide-react";

const METRICS = [
  {
    value: "£1B+",
    description: "Trade flow for a tier 1 bank within 18 months",
  },
  {
    value: "~20%",
    description: "Uplift in FX trading volume vs legacy process",
  },
  {
    value: "#11",
    description: "App store ranking in finance category (Ireland)",
  },
  {
    value: "~15%",
    description: "Increase in new users post-launch",
  },
];

export function ResultsSection() {
  return (
    <section id="results" className="page-section scroll-mt-24 bg-background">
      <div className="mb-3 flex items-center gap-2">
        <Trophy className="size-4 shrink-0 text-copy-tertiary" aria-hidden />
        <span className="font-mono text-sm font-medium uppercase tracking-section-label text-copy-tertiary">
          Results
        </span>
      </div>
      <h2 className="mb-12 text-copy-primary">Results that speak for themselves.</h2>

      <div className="grid min-w-0 gap-12 sm:grid-cols-2 lg:grid-cols-4">
        {METRICS.map(({ value, description }) => (
          <div key={value} className="flex flex-col items-start gap-2 text-left">
            <p
              className="font-semibold text-copy-primary"
              style={{
                fontSize: "var(--text-metric)",
                lineHeight: "var(--text-metric--line-height)",
                letterSpacing: "var(--text-metric--tracking)",
              }}
            >
              {value}
            </p>
            <p className="text-sm text-copy-secondary">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
