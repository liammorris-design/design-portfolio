import type { ProjectSlug } from "./projects";
import type { Project } from "./projects";

export type CaseStudyHeroContent = {
  logo: string;
  logoDefaultSvg?: string;
  logoLightSvg?: string;
  heading: string;
  subHeading: string;
  tags: readonly string[];
  heroImage: string;
  heroVideo?: readonly { src: string; type: string }[];
  heroVideoAutoplay?: boolean;
};

export type CaseStudyOverviewProjectDetails = {
  client: string;
  platform: string;
  team: readonly string[];
  industry: readonly string[];
};

export type CaseStudyOverviewContent = {
  title: string;
  description: string;
  projectDetails?: CaseStudyOverviewProjectDetails;
};

export type CaseStudyChallengeContent = {
  heading: string;
  problem: string;
  objective: {
    intro: string;
    items: readonly string[];
  };
};

export type CaseStudySolutionItem = {
  title?: string;
  description?: string;
  layout: "single" | "featured" | "double" | "grid";
  images: readonly string[];
};

export type CaseStudySolutionContent = {
  heading: string;
  headingImage?: string;
  items: readonly CaseStudySolutionItem[];
  footerNote?: string;
};

export type CaseStudyResultsMetric = {
  value: string;
  description: string;
};

export type CaseStudyResultsContent = {
  heading: string;
  subheading: string;
  metrics: readonly CaseStudyResultsMetric[];
};

export type CaseStudyTestimonialContent = {
  heading: string;
  name: string;
  title: string;
  quote: string;
  text: string;
  avatar: string;
  companyLogo: "lloyds" | "coba" | "generic";
};

const CASE_STUDIES: Partial<Record<ProjectSlug, CaseStudyHeroContent>> = {
  "lloyds-bank-mvp": {
    logo: "LLOYDS",
    logoDefaultSvg: "/lloyds-logo-default.svg",
    logoLightSvg: "/lloyds-logo-light.svg",
    heading: "From concept to £1B+ in trades: designing Lloyds' MVP",
    subHeading:
      "Designing a digital-first FX trading experience to replace high-friction manual booking and legacy portals for the largest SME business bank in the UK.",
    tags: ["Enterprise", "Web App", "B2B", "Commercial Banking"],
    heroImage: "/Lloyds Bank Project/lloydsbank-hero.png",
    heroVideo: [{ src: "/lloyds-bank-hero-video.mp4", type: "video/mp4" }],
    heroVideoAutoplay: true,
  },
};

const OVERVIEW_CONTENT: Partial<Record<ProjectSlug, CaseStudyOverviewContent>> = {
  "lloyds-bank-mvp": {
    title: "Delivering a high-performance banking MVP in six months.",
    description:
      "I led the design of a commercial banking MVP for Lloyds Banking Group, transitioning SME customers from legacy workflows into a modern SaaS environment. As the sole designer, I architected the end-to-end strategy for a core FX trading module and a foundation that now supports Cash Flow, Forecasting, and accounting integrations. The platform was designed and shipped in less than six months and remains the bank's leading digital channel for its commercial division.",
    projectDetails: {
      client: "Lloyds Bank Group",
      platform: "Responsive web app",
      team: ["Design Lead (me)", "Dev team + QA", "Business Analyst"],
      industry: ["Commercial Banking", "SaaS B2B"],
    },
  },
};

const CHALLENGE_CONTENT: Partial<Record<ProjectSlug, CaseStudyChallengeContent>> = {
  "lloyds-bank-mvp": {
    heading: "Reclaiming the Digital Edge: Modernising Institutional FX",
    problem:
      "Lloyds was losing market share to fintechs offering digital-first FX. SME customers faced fragmented legacy portals and poor UX, driving many to manual phone-in trades. Reliance on manual bookings led to slow fulfilment and costly trade reversals.",
    objective: {
      intro:
        "Launch a high-performance FX trading platform MVP within 6 months to protect market share and streamline SME FX. Objectives included:",
      items: [
        "Protect market share by competing with digital brokers.",
        "Remove friction for SMEs making time-sensitive trades.",
        "Reduce overhead by eliminating manual trade errors.",
        "Ensure AA+ accessibility and scalable architecture.",
      ],
    },
  },
};

const SOLUTION_CONTENT: Partial<Record<ProjectSlug, CaseStudySolutionContent>> = {
  "lloyds-bank-mvp": {
    heading: "A Secure Banking MVP Engineered for Trust.",
    headingImage: "/lloyds-bank-images/login.png",
    items: [
      {
        title: "Dynamic Command Centre",
        description:
          "Monitor live currency exposure and team-wide interactions through a fully customisable, widget-based interface.",
        layout: "single",
        images: ["/lloyds-bank-images/dashboard.png"],
      },
      {
        title: "Precision Trade Execution",
        description:
          "An FX trade module and 3-step trade flow with real-time rates and digital confirmations to eliminate manual booking errors and pricing uncertainty.",
        layout: "featured",
        images: [
          "/lloyds-bank-images/foreign-exchange.png",
          "/lloyds-bank-images/new-quote.png",
          "/lloyds-bank-images/confirm-quote.png",
          "/lloyds-bank-images/confirmation.png",
        ],
      },
      {
        title: "Institutional Governance & Access Control",
        description:
          "Strengthening security through granular role-based permissions, multi-layer authentication, and comprehensive audit transparency.",
        layout: "grid",
        images: [
          "/lloyds-bank-images/mfa.png",
          "/lloyds-bank-images/otp.png",
          "/lloyds-bank-images/role-based-access.png",
          "/lloyds-bank-images/audit-activity.png",
        ],
      },
      {
        title: "Mobile-Responsive Trading",
        description:
          "Optimised layouts for secure, on-the-go execution, ensuring treasurers can manage exposure without being tethered to a desktop.",
        layout: "single",
        images: ["/lloyds-bank-images/mobile.png"],
      },
      {
        title: "Market-First: Automated Exposure & Hedge Execution",
        description:
          "Eliminating manual data entry by synchronising ERP journals to provide a real-time view of payables and receivables for instant, high-volume hedging.",
        layout: "featured",
        images: [
          "/lloyds-bank-images/cash-flow.png",
          "/lloyds-bank-images/explainer.png",
          "/lloyds-bank-images/connect-asp.png",
          "/lloyds-bank-images/transactions.png",
          "/lloyds-bank-images/navigation.png",
        ],
      },
    ],
  },
};

const RESULTS_CONTENT: Partial<Record<ProjectSlug, CaseStudyResultsContent>> = {
  "lloyds-bank-mvp": {
    heading: "Results",
    subheading: "From concept to go-live, in just 6 months.",
    metrics: [
      {
        value: "£1B+",
        description: "Trade flow for a tier 1 bank within 18 months",
      },
      {
        value: "~20%",
        description: "Uplift in FX trading volume vs legacy process",
      },
      {
        value: "~15%",
        description: "Increase in new commercial clients",
      },
      {
        value: "15,000+",
        description: "Staff hours automated from manual tasks",
      },
    ],
  },
};

const TESTIMONIAL_CONTENT: Partial<Record<ProjectSlug, CaseStudyTestimonialContent>> = {
  "lloyds-bank-mvp": {
    heading: "Testimonial",
    name: "Danny Hill",
    title: "Director, Lloyds Banking Group",
    quote: "Liam was core to the delivery. I highly recommend him for any senior design role.",
    text: "Liam brought clarity to a complex mix of detailed regulatory requirements and senior-leader ideas, and translated them into a simple, consistent, and scalable client experience. He worked as the solo designer at pace, demonstrated strong design judgement, and collaborated closely with the bank's internal teams to meet precise brand and compliance standards. The results were excellent. Both clients and internal teams consistently praised the platform's design, and it continues to develop on the foundations he set.",
    avatar: "/danny-hill.png",
    companyLogo: "lloyds",
  },
};

export function getCaseStudyHero(slug: ProjectSlug, project: Project): CaseStudyHeroContent {
  const custom = CASE_STUDIES[slug];
  if (custom) {
    return { ...custom, tags: custom.tags.length > 0 ? custom.tags : project.tags };
  }
  return {
    logo: project.company,
    heading: project.title,
    subHeading: project.description,
    tags: project.tags,
    heroImage: project.image,
  };
}

export function getCaseStudyOverview(slug: ProjectSlug, project: Project): CaseStudyOverviewContent {
  const custom = OVERVIEW_CONTENT[slug];
  if (custom) return custom;
  return {
    title: project.title,
    description: project.description,
  };
}

export function getCaseStudyChallenge(slug: ProjectSlug): CaseStudyChallengeContent | null {
  const custom = CHALLENGE_CONTENT[slug];
  if (custom) return custom;
  return null;
}

export function getCaseStudySolution(slug: ProjectSlug): CaseStudySolutionContent | null {
  const custom = SOLUTION_CONTENT[slug];
  if (custom) return custom;
  return null;
}

export function getCaseStudyResults(slug: ProjectSlug): CaseStudyResultsContent | null {
  const custom = RESULTS_CONTENT[slug];
  if (custom) return custom;
  return null;
}

export function getCaseStudyTestimonial(slug: ProjectSlug): CaseStudyTestimonialContent | null {
  const custom = TESTIMONIAL_CONTENT[slug];
  if (custom) return custom;
  return null;
}
