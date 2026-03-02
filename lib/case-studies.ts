import type { ProjectSlug } from "./projects";
import type { Project } from "./projects";

export type CaseStudyHeroContent = {
  logo: string;
  /** SVG path for light theme (dark logo on light background) */
  logoDefaultSvg?: string;
  /** SVG path for dark theme (light logo on dark background) */
  logoLightSvg?: string;
  heading: string;
  subHeading: string;
  tags: readonly string[];
  heroImage: string;
  /** Optional video sources; when defined, video is shown with heroImage as poster */
  heroVideo?: readonly { src: string; type: string }[];
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
  /** 'single' = 1 full-width image; 'featured' = 1 large + 3 smaller; 'double' = 2 images side by side */
  layout: "single" | "featured" | "double";
  images: readonly string[];
};

export type CaseStudySolutionContent = {
  heading: string;
  /** Optional image shown directly below the heading (e.g. hero for the section) */
  headingImage?: string;
  items: readonly CaseStudySolutionItem[];
  /** Optional footer note (e.g. "case study being updated") */
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
    tags: ["Enterprise", "Web App", "Commercial Banking", "B2B"],
    heroImage: "/Lloyds Bank Project/lloydsbank-hero.png",
  },
  "project-2": {
    logo: "COBA TECHNOLOGY",
    logoDefaultSvg: "/coba-black.svg",
    logoLightSvg: "/coba-white.svg",
    heading: "Designing a modular white-label SaaS platform for commercial banking",
    subHeading:
      "Designing a white-label SaaS platform that bridges legacy bank infrastructure with modern, modular tools for FX, Cash Flow, and Forecasting.",
    tags: [],
    heroImage: "/CoBa Project/Hero image.png",
  },
  familypay: {
    logo: "FAMILYPAY",
    logoDefaultSvg: "/familypage-logo-light-mode.png",
    logoLightSvg: "/familypage-logo-dark-mode.png",
    heading: "Redefining money movement for closed-currency markets",
    subHeading:
      "Designing a multi-currency digital wallet and spending infrastructure to bridge the gap between international expats and their families abroad.",
    tags: ["Fintech", "Mobile App", "B2C", "Money Exchange"],
    heroImage: "/FamilyPay/Hero.png",
  },
  "an-post-money": {
    logo: "AN POST MONEY",
    logoDefaultSvg: "/an-post-logo2.png",
    logoLightSvg: "/an-post-logo2.png",
    heading: "Modernising Retail Banking with Smart Money Management",
    subHeading:
      "Scaled a retail banking app with open-banking and automated savings. Partnered with cross-functional squads to drive 4.5-star growth.",
    tags: ["Consumer", "Mobile App", "Retail Banking B2C"],
    heroImage: "/anpost-hero-video-placeholder.png",
    heroVideo: [
      { src: "/anpost-hero.webm", type: "video/webm" },
      { src: "/anpost-hero.mp4", type: "video/mp4" },
    ],
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
  "project-2": {
    title: "Founding Product Designer for a modular, whitelabel commercial banking platform.",
    description:
      "I led the end-to-end product design for CoBa, a modular fintech engine designed to transition complex financial workflows into a white-label SaaS environment. As the sole designer, I architected the infrastructure for a core FX trading module and a foundation that supports Cash Flow, Forecasting, and accounting integrations. The platform was successfully deployed for a Tier 1 bank in the UK and is currently undergoing a pilot with a second Tier 1 institution in North America.",
    projectDetails: {
      client: "CoBa Technology",
      platform: "Responsive web app",
      team: ["Lead Product Designer (sole designer)", "Founders", "Engineering squad"],
      industry: ["Commercial Banking"],
    },
  },
  familypay: {
    title: "Orchestrating global family finance via a central digital wallet.",
    description:
      "I led the end-to-end design of FamilyPay, a mobile-first platform for managing multi-currency spending in closed-currency markets. As the sole designer, I architected a lean KYC onboarding experience and a multi-user ecosystem for the issuance and management of physical and virtual cards. My work established the core financial blueprint and brand identity for a secure, transparent hub, bridging the gap between internal operational flows and customer-facing wallet management.",
    projectDetails: {
      client: "myFamilyWallet (FamilyPay)",
      platform: "iOS & Android",
      team: ["Solo Product Designer"],
      industry: ["Consumer fintech (B2C)", "Remittance"],
    },
  },
  "an-post-money": {
    title: "Scaling digital banking for Ireland's largest postal service.",
    description:
      "As the cost of living rises, it’s more important than ever for providers to help customers keep on top of their finances—in the short term and over time. An Post wanted to put more financial power and control in users’ hands: helping them understand their spending behaviour, manage savings, and set budgets so they could stay on track with their goals. As the lead designer for the mobile pod, I delivered this by redesigning the central account dashboard, creating the end-to-end \"Savings Jars\" workflow, and designing the integration of Tink's Open Banking and Money Manager tools to provide users with a holistic, real-time financial overview.",
    projectDetails: {
      client: "An Post Money",
      platform: "iOS & Android mobile app",
      team: ["Mobile Pod Design Lead (me)", "Offshore dev team", "Product owner"],
      industry: ["Retail Banking", "Retail Banking B2C"],
    },
  },
  "project-4": {
    title: "Helping digital nomads stay compliant.",
    description:
      "Borderly is a concept for a mobile app that quietly tracks residency, tax, and visa obligations for people who live and work across multiple countries. The emphasis is on providing simple, proactive nudges instead of complex legal dashboards.",
    projectDetails: {
      client: "Borderly",
      platform: "iOS mobile app",
      team: ["Product Designer (me)", "Founding team"],
      industry: ["Travel Tech", "Compliance"],
    },
  },
};

const CHALLENGE_CONTENT: Partial<
  Record<ProjectSlug, CaseStudyChallengeContent>
> = {
  "lloyds-bank-mvp": {
    heading: "Fighting back against Fintech agility.",
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
  "project-2": {
    heading: "Bridging the gap between legacy data and modern UX.",
    problem:
      "Most Tier 1 banks struggle with fragmented legacy systems and isolated data lakes, leading to long build cycles and outdated customer portals. CoBa was designed to act as a modern intermediary, plugging into a bank's existing APIs to transform disparate data into a cohesive, out-of-the-box digital experience for their commercial clients.",
    objective: {
      intro:
        "Design a high-performance, system-led banking engine that can:",
      items: [
        "Be rapidly integrated and deployed across multiple institutions.",
        "Provide a flexible navigation and branding framework for white-label use.",
        "Allow banks to \"plug in\" specific financial tools as needed.",
        "Simplify complex financial data into actionable Cash Flow and Forecasting insights.",
      ],
    },
  },
  familypay: {
    heading: "Navigating the friction of restricted currency and manual transfers.",
    problem:
      "Families in closed-currency markets face significant barriers when shopping online or travelling, often relying on high-friction manual processes to access USD or EUR. Existing remittance tools focus on one-off transfers rather than a persistent, shared ecosystem where money storage, allocation, and real-time monitoring can be managed centrally.",
    objective: {
      intro: "Create a high-fidelity mobile prototype to secure investment and define the core money movement infrastructure.",
      items: [
        "Design a frictionless KYC onboarding flow integrated with Onfido for instant verification.",
        "Build a multi-user interface for managing sub-accounts and the issuance of prepaid cards.",
        "Establish a modern, trustworthy brand aesthetic for a 25–50-year-old demographic.",
      ],
    },
  },
  "an-post-money": {
    heading: "Modernising money management without overwhelming customers.",
    problem:
      "With the rising cost of living, it is increasingly difficult for consumers to keep track of their finances. Many lack a clear, holistic overview of their spending behaviour, making it harder to manage savings or stay on track with financial goals during tougher economic times.",
    objective: {
      intro:
        "Design a mobile experience that would help everyday users to:",
      items: [
        "See balance, spending, and commitments in one place with Open Banking.",
        "Set up savings and goals with personalised budgeting tools.",
        "Trust the app with a secure, transparent financial experience.",
        "Build better habits with categorised tracking and smart budgeting.",
      ],
    },
  },
  "project-4": {
    heading: "Tax and visa rules that are invisible until there is a problem.",
    problem:
      "Remote workers and digital nomads often only realise they have crossed a tax or visa threshold after the fact. Existing tools are fragmented, manual, or aimed at accountants rather than individuals planning their travel.",
    objective: {
      intro:
        "Explore how a simple mobile app could help people to:",
      items: [
        "Track days spent in each country without manual spreadsheets.",
        "Understand upcoming tax and residency thresholds at a glance.",
        "Receive gentle nudges before they create an issue, not after.",
        "Keep all documentation in one place for future conversations with advisors.",
      ],
    },
  },
};

const SOLUTION_CONTENT: Partial<
  Record<ProjectSlug, CaseStudySolutionContent>
> = {
  "lloyds-bank-mvp": {
    heading: "A lean, FX banking MVP built for trust.",
    headingImage: "/Lloyds Bank Project/Log in.png",
    items: [
      {
        title: "Precision Trade Execution",
        description:
          "An FX trade module and 3-step trade flow with real-time rates and digital confirmations to eliminate manual booking errors and pricing uncertainty.",
        layout: "featured",
        images: [
          "/Lloyds Bank Project/Foreign Exchange.png",
          "/Lloyds Bank Project/Exchange 1-3.png",
          "/Lloyds Bank Project/Exchange 2-3.png",
          "/Lloyds Bank Project/Exchange 3-3.png",
        ],
      },
      {
        title: "Customisable Dashboard",
        description:
          "A platform landing screen providing an immediate snapshot of currency positions and recent multi-user activity via customisable widgets, fully editable.",
        layout: "single",
        images: ["/Lloyds Bank Project/Dashboard.png"],
      },
      {
        title: "Mobile-Responsive Trading",
        description:
          "Optimised layouts for secure, on-the-go execution, ensuring treasurers can manage exposure without being tethered to a desktop.",
        layout: "single",
        images: ["/Lloyds Bank Project/Mobile.png"],
      },
    ],
  },
  "project-2": {
    heading: "A variable-driven, modular treasury ecosystem.",
    headingImage: "/CoBa Project/login.png",
    footerNote:
      "This case study is being updated with more images. Additional designs, including the FX module, Forecast module, and payment flows, are available upon request.",
    items: [
      {
        title: "Advanced Financial Modules",
        description:
          "While the architecture supports various modules, I focused on designing data-rich experiences for Cash Flow management and Forecasting. These tools allow users to synchronise real-time data from third-party accounting software to create predictive 2-year forecasts. I translated these complex datasets into aesthetic, chart-heavy dashboards that turn manual Excel processes into automated, visual workflows.",
        layout: "single",
        images: ["/CoBa Project/cash flow.png"],
      },
      {
        title: "White-Label Infrastructure",
        description:
          "I designed a highly flexible interface supporting both sidebar and top-navigation layouts to accommodate varied bank ecosystems. By leveraging a design system built on Figma variables and semantic groupings, the entire platform is engineered to be reskinned at the click of a button—allowing for instant changes to brand colours, typography, and component styling.",
        layout: "featured",
        images: [
          "/CoBa Project/ia.png",
          "/CoBa Project/transactions.png",
          "/CoBa Project/report-1.png",
        ],
      },
      {
        title: "Dual-Sided Intelligence",
        description:
          "The platform accounts for both commercial customers and bank employees. I designed a \"Bank View\" overlay that allows relationship managers to monitor their specific client patches and view real-time stats, enabling a more proactive and informed customer service experience.",
        layout: "double",
        images: ["/CoBa Project/brand.png", "/CoBa Project/brand-2.png"],
      },
    ],
  },
  familypay: {
    heading: "A transparent, high-speed family spending hub.",
    headingImage: "/FamilyPay/Zoom.png",
    items: [
      {
        title: "Lean Onboarding & Verification",
        description:
          "I designed a streamlined 'Know Your Customer' (KYC) journey, leveraging Onfido integration to ensure account security without compromising on speed. The flow focuses on clarity and trust, guiding users through ID verification and wallet setup in a matter of minutes.",
        layout: "single",
        images: ["/FamilyPay/KYC.png"],
      },
      {
        title: "The Family Spending Ecosystem",
        description:
          "The core of the app is a central hub where the primary account holder can allocate funds to family members instantaneously. I designed a comprehensive card management suite where users can toggle between virtual and physical cards, set granular spending rules for children, and monitor global transactions via real-time alerts.",
        layout: "single",
        images: ["/FamilyPay/Cards.png"],
      },
      {
        title: "Multi-Currency Exchange",
        description:
          "To solve the \"closed-currency\" pain point, I designed a single-step exchange interface. Users can hold balances in multiple currencies, allowing family members abroad to spend locally via their linked cards, effectively eliminating the need for physical cash and opaque black-market exchange rates.",
        layout: "single",
        images: ["/FamilyPay/Exchange.png"],
      },
      {
        title: "Brand Identity",
        description:
          "A cohesive visual language that elevated FamilyPay into a modern, trustworthy brand. I created a brand design strong enough to support the initial MVP launch and to impress investors—establishing a clear identity, tone of voice, and visual system that could scale as the product grew.",
        layout: "double",
        images: ["/FamilyPay/Brand-1.png", "/FamilyPay/Brand-2.png"],
      },
    ],
  },
  "an-post-money": {
    heading: "Designing for Financial Clarity and Control",
    items: [
      {
        layout: "single",
        images: ["/An Post Money/Explainers.png"],
      },
      {
        title: "Open Banking & Accounts Dashboard",
        description: "Accounts are securely linked in one place using Open Banking, providing a holistic view of your finances alongside real-time spending insights and analytics.",
        layout: "single",
        images: ["/An Post Money/Dashboard.png"],
      },
      {
        title: "Smart Onboarding & Guided Discovery",
        description: "Personalised walkthroughs and tooltips that simplify complex features, helping users to confidently navigate their accounts, manage budgets, and build better financial habits from the first log-in.",
        layout: "single",
        images: ["/An Post Money/Tooltips.png"],
      },
      {
        title: "Smart Budgeting & Spending Insights",
        description: "A seamless integration of Tink's Money Manager toolkit, providing users with real-time spending analysis and categorised insights. This allows for personalised budgeting and a deeper understanding of financial behaviour within a native experience.",
        layout: "double",
        images: ["/An Post Money/Money Manager.png", "/An Post Money/Budgeting.png"],
      },
      {
        title: "Automated Savings Jars",
        description: "An end-to-end workflow for creating personalised pots with automated savings through recurring transfers or round-ups. This allows users to set specific targets, track progress in real-time, and manage funds independently from their main account balance.",
        layout: "double",
        images: ["/An Post Money/Savings Jar.png", "/An Post Money/Savings Jar-1.png"],
      },
      {
        title: "Expense Categorisation",
        description: "Automatic categorisation of transactions for clearer spending insights and control.",
        layout: "single",
        images: ["/An Post Money/Expense Categorisation.png"],
      },
      {
        layout: "single",
        images: ["/An Post Money/Zoom.png"],
      },
    ],
  },
  "project-4": {
    heading: "A lightweight companion app for life on the move.",
    items: [
      {
        title: "Automatic day and country tracking",
        description:
          "An at-a-glance timeline and map showing where you have been, helping you understand residency patterns over the tax year.",
        layout: "featured",
        images: ["/placeholder.png", "/placeholder.png", "/placeholder.png", "/placeholder.png"],
      },
      {
        title: "Threshold alerts before they become issues",
        description:
          "Configurable rules and notifications that warn you as you approach important tax or visa thresholds, not after you have crossed them.",
        layout: "single",
        images: ["/placeholder.png"],
      },
    ],
  },
};

const RESULTS_CONTENT: Partial<
  Record<ProjectSlug, CaseStudyResultsContent>
> = {
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
  "project-2": {
    heading: "Results",
    subheading: "A proven engine for international banking scale.",
    metrics: [
      {
        value: "UK Tier 1",
        description: "Successfully deployed and live with a major UK commercial bank.",
      },
      {
        value: "100%",
        description: "Modular flexibility supporting customisable SaaS subscription models.",
      },
      {
        value: "12+",
        description: "Integrated support for major accounting software providers (Xero, QuickBooks, Sage).",
      },
      {
        value: "AA+",
        description: "Compliance achieved through a standardised, high-performance component library.",
      },
    ],
  },
  familypay: {
    heading: "A high-fidelity blueprint for global expansion.",
    subheading: "Project outcomes.",
    metrics: [
      { value: "4,700+", description: "Community members — designed to serve an existing pre-launch community of over 4,000 interested users" },
      { value: "End-to-End Prototype", description: "Delivered a fully interactive, developer-ready mobile prototype covering all core user flows" },
      { value: "Zero-Framework Architecture", description: "Every component was custom-designed from the ground up to create a unique, premium brand identity" },
      { value: "Brand Cohesion", description: "Successfully elevated the visual language of 'myFamilyWallet' into the modern, trustworthy 'FamilyPay' ecosystem" },
    ],
  },
  "an-post-money": {
    heading: "Results",
    subheading: "A calmer, more confident mobile experience.",
    metrics: [
      {
        value: "4.5★",
        description: "Target App Store rating through clearer journeys",
      },
      {
        value: "#11",
        description: "Finance app on the Irish iOS App Store",
      },
    ],
  },
  "project-4": {
    heading: "Aspirational outcomes",
    subheading: "What success looks like for Borderly.",
    metrics: [
      {
        value: "Zero surprises",
        description: "Users understand their tax and visa position before they travel",
      },
      {
        value: "One home",
        description: "Residency, thresholds, and documents in a single place",
      },
      {
        value: "Peace of mind",
        description: "Less anxiety about compliance, more focus on the work itself",
      },
    ],
  },
};

const TESTIMONIAL_CONTENT: Partial<
  Record<ProjectSlug, CaseStudyTestimonialContent>
> = {
  "lloyds-bank-mvp": {
    heading: "Testimonial",
    name: "Danny Hill",
    title: "Director, Lloyds Banking Group",
    quote: "Liam was core to the delivery. I highly recommend him for any senior design role.",
    text: "Liam brought clarity to a complex mix of detailed regulatory requirements and senior-leader ideas, and translated them into a simple, consistent, and scalable client experience. He worked as the solo designer at pace, demonstrated strong design judgement, and collaborated closely with the bank's internal teams to meet precise brand and compliance standards. The results were excellent. Both clients and internal teams consistently praised the platform's design, and it continues to develop on the foundations he set.",
    avatar: "/danny-hill.png",
    companyLogo: "lloyds",
  },
  "project-2": {
    heading: "Testimonial",
    name: "Carl Hasty",
    title: "CEO at CoBa Technology",
    quote:
      "Liam was core to getting the platform live, and I would hire him again without hesitation.",
    text:
      "I worked with Liam for over two years and hired him early to lead product design as we delivered a Tier 1 bank contract. He operated well beyond a typical design role, contributing across product, sales support, and senior client engagements. He has strong commercial instincts, requires very little direction, and delivers under pressure.",
    avatar: "/carl-hasty.png",
    companyLogo: "coba",
  },
  "project-4": {
    heading: "Testimonial",
    name: "Founder, Borderly",
    title: "Product & Strategy",
    quote:
      "He has a rare ability to take a fuzzy idea and quickly turn it into something tangible, credible, and exciting.",
    text:
      "Even at concept stage, Liam helped us make sense of a messy problem space and articulate how the product should feel to use day to day. The early flows and interface concepts have become the foundation for our next phase of validation and development.",
    avatar: "/danny-hill.png",
    companyLogo: "generic",
  },
};

export function getCaseStudyHero(
  slug: ProjectSlug,
  project: Project
): CaseStudyHeroContent {
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

export function getCaseStudyOverview(
  slug: ProjectSlug,
  project: Project
): CaseStudyOverviewContent {
  const custom = OVERVIEW_CONTENT[slug];
  if (custom) return custom;
  return {
    title: project.title,
    description: project.description,
  };
}

export function getCaseStudyChallenge(
  slug: ProjectSlug
): CaseStudyChallengeContent | null {
  const custom = CHALLENGE_CONTENT[slug];
  if (custom) return custom;
  return null;
}

export function getCaseStudySolution(
  slug: ProjectSlug
): CaseStudySolutionContent | null {
  const custom = SOLUTION_CONTENT[slug];
  if (custom) return custom;
  return null;
}

export function getCaseStudyResults(
  slug: ProjectSlug
): CaseStudyResultsContent | null {
  const custom = RESULTS_CONTENT[slug];
  if (custom) return custom;
  return null;
}

export function getCaseStudyTestimonial(
  slug: ProjectSlug
): CaseStudyTestimonialContent | null {
  const custom = TESTIMONIAL_CONTENT[slug];
  if (custom) return custom;
  return null;
}
