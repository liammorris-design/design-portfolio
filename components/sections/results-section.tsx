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
    <section id="results" className="scroll-mt-14 border-b border-border bg-background">
      <div className="section-frame px-5 py-5 md:px-20 md:py-20 text-center">
        <div className="mb-3 flex items-center justify-center gap-2">
          <Trophy className="size-4 shrink-0 text-muted-foreground" aria-hidden />
          <span className="font-mono text-sm font-medium uppercase tracking-section-label text-muted-foreground">
            Results
          </span>
        </div>
        <h2 className="mb-12 text-foreground">
          Results that speak for themselves.
        </h2>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {METRICS.map(({ value, description }) => (
            <div key={value} className="flex flex-col gap-2">
              <p className="text-[40px] font-semibold leading-[48px] tracking-[-1.6px] text-foreground">{value}</p>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
