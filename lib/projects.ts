export const PROJECTS = [
  {
    slug: "project-1",
    company: "LLOYDS BANK",
    title: "FX Trading Platform MVP",
    description:
      "Designed a 0-to-1 MVP that processed £1B+ in trade flow and drove a 15% increase in new commercial clients within 18 months.",
    image: "/placeholder.png",
    tags: ["Enterprise", "Web App", "Commercial Banking"],
    requiresPassword: false,
    isComingSoon: false,
  },
  {
    slug: "project-2",
    company: "COBA TECHNOLOGY",
    title: "Whitelabel B2B SaaS Platform",
    description:
      "Led the end-to-end design of a modular banking engine, engineered for rapid multi-bank deployment and brand extensibility.",
    image: "/placeholder.png",
    tags: ["SaaS", "Web App", "Fintech B2B"],
    requiresPassword: false,
    isComingSoon: false,
  },
  {
    slug: "project-3",
    company: "AN POST MONEY",
    title: "Retail Banking Mobile App",
    description:
      "Scaled a European banking app featuring open-banking insights and automated savings tools, achieving a 4.5-star App Store rating.",
    image: "/placeholder.png",
    tags: ["Consumer", "Mobile App", "Fintech B2C"],
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
  {
    slug: "familypay",
    company: "FAMILYPAY",
    title: "B2C Mobile Digital Wallet App",
    description:
      "Designed a multi-currency digital wallet and family spending hub for a new fintech startup tackling global remittance challenges.",
    image: "/placeholder.png",
    tags: ["Remittance", "Mobile App", "B2C"],
    requiresPassword: false,
    isComingSoon: false,
  },
] as const;

export const PROJECT_PASSWORD = "password";

export type Project = (typeof PROJECTS)[number];
export type ProjectSlug = Project["slug"];
