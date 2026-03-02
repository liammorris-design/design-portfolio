export const PROJECTS = [
  {
    slug: "lloyds-bank-mvp",
    company: "LLOYDS BANK",
    title: "FX Trading Platform MVP",
    description:
      "Designed a 0-to-1 FX platform processing £1B+ in flow. Focused on transactional workflows and audit logging for compliance.",
    image: "/project cover images/lloyds-bank-cover.png",
    tags: ["Enterprise", "Web App", "Commercial Banking"],
    requiresPassword: false,
    isComingSoon: false,
  },
  {
    slug: "project-2",
    company: "COBA TECHNOLOGY",
    title: "Whitelabel B2B SaaS Platform",
    description:
      "Architected a Treasury-first banking engine with account ingestion and cashflow forecasting. Built for modular, multi-bank deployment.",
    image: "/project cover images/coba-cover.png",
    tags: ["SaaS", "Web App", "Fintech B2B"],
    requiresPassword: false,
    isComingSoon: false,
  },
  {
    slug: "familypay",
    company: "FAMILYPAY",
    title: "B2C Mobile Digital Wallet App",
    description:
      "Designed a digital wallet and prepaid card solution. Delivered lean KYC onboarding and instant fund allocation for international families.",
    image: "/project cover images/family-pay-cover.png",
    tags: ["Remittance", "Mobile App", "B2C"],
    requiresPassword: false,
    isComingSoon: false,
  },
  {
    slug: "an-post-money",
    company: "AN POST MONEY",
    title: "Modernising Retail Banking with Smart Money Management",
    description:
      "Scaled a retail banking app with open-banking and automated savings. Partnered with cross-functional squads to drive 4.5-star growth.",
    image: "/project cover images/an-post-cover.png",
    tags: ["Consumer", "Mobile App", "Retail Banking B2C"],
    requiresPassword: false,
    isComingSoon: false,
  },
  {
    slug: "project-4",
    company: "BORDERLY",
    title: "Compliance Tracker App",
    description:
      "Coming Soon. A custom-built mobile app designed for digital nomads to track tax and visa residency. Vibe-coded from scratch.",
    image: "/placeholder.png",
    tags: ["Vibe-Coded", "iOS App", "Travel Tech"],
    requiresPassword: false,
    isComingSoon: true,
    hiddenFromLanding: true,
  },
] as const;

export const PROJECT_PASSWORD = "password";

export type Project = (typeof PROJECTS)[number];
export type ProjectSlug = Project["slug"];
