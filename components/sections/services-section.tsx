import {
  Wrench,
  Rocket,
  Monitor,
  Users,
  Map,
  Paintbrush,
  Component,
} from "lucide-react";
import { Card, CardHeader, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SERVICES = [
  {
    icon: Paintbrush,
    title: "System Design (UX/UI)",
    description:
      "Creating easy-to-use interfaces for complex software and apps.",
  },
  {
    icon: Monitor,
    title: "Prototyping",
    description:
      "Building clickable versions of your idea to test before full development.",
  },
  {
    icon: Users,
    title: "Product Discovery",
    description:
      "Talking to stakeholders and real users to make sure we're building the right features.",
  },
  {
    icon: Map,
    title: "Product Strategy",
    description:
      "Planning what to build first to hit your business goals and save costs.",
  },
  {
    icon: Rocket,
    title: "MVP Design",
    description:
      "Building and launching the first version of your product from scratch.",
  },
  {
    icon: Wrench,
    title: "Design-to-Code",
    description:
      "Bridging the gap between Figma and production-ready code to accelerate delivery in high-velocity agile squads.",
    isNew: true,
  },
];

/** Set to true when service tile images are ready to show. */
const SHOW_SERVICE_IMAGES = false;

export function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-14 border-b border-border-subtle bg-background">
      <div className="section-frame px-5 py-5 md:px-20 md:py-5 md:py-20">
        <div className="mb-3 flex items-center gap-2">
          <Component className="size-4 shrink-0 text-muted-foreground dark:text-white" aria-hidden />
          <span className="font-mono text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Services
          </span>
        </div>
        <h2 className="mb-12 text-foreground">
          Core design services I offer.
        </h2>

        <div className="services-tile-grid grid gap-0 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, description, isNew }, index) => (
            <Card
              key={title}
              style={{ "--card-z": index } as React.CSSProperties}
              className="relative z-[var(--card-z)] rounded-none border-0 bg-neutral-50 pb-6 hover:z-10 focus-within:z-10 dark:bg-transparent"
            >
              {isNew && (
                <Badge className="absolute right-6 top-6 font-mono bg-emerald-100 text-emerald-900 hover:bg-emerald-100 hover:text-emerald-900 dark:bg-[#003E30] dark:text-[#bef264] dark:hover:bg-[#003E30] dark:hover:text-[#bef264]">
                  NEW
                </Badge>
              )}
              <CardHeader className="flex flex-col gap-2">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)] dark:bg-background dark:shadow-none">
                  <Icon className="size-[20px] text-muted-foreground dark:text-white" aria-hidden />
                </div>
                <h5 className="text-foreground">{title}</h5>
                <CardDescription>
                  {description}
                </CardDescription>
              </CardHeader>
              {SHOW_SERVICE_IMAGES && (
              <CardContent className="pb-0">
                <div className="flex aspect-[16/10] items-center justify-center rounded-[var(--radius-card)] bg-muted">
                  <Monitor className="size-10 text-muted-foreground dark:text-white" aria-hidden />
                </div>
              </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
