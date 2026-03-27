export const PROJECTS = [
  {
    slug: "lloyds-bank-mvp",
    company: "LLOYDS BANK",
    title: "FX Trading Platform MVP",
    description:
      "Designed a 0-to-1 FX platform processing £1B+ in flow. Focused on transactional workflows and audit logging for compliance.",
    image: "/project cover images/lloyds-cover-2.png",
    tags: ["Enterprise", "Web App", "Commercial Banking"],
    requiresPassword: false,
    isComingSoon: false,
  },
] as const;

export const PROJECT_PASSWORD = "password";

export type Project = (typeof PROJECTS)[number];
export type ProjectSlug = Project["slug"];
