/**
 * Copy and structured content for the March 2026 home (Figma node 373:46693).
 * UK English. Text colours use the global hierarchy: `--text-primary` / `--text-secondary` /
 * `--text-tertiary` (Tailwind: `text-copy-*`).
 */

export const landingNav = {
  calendlyUrl: "https://calendly.com/liammorris/30min",
  email: "hello@liammorris.co.uk",
  /** Placeholder from Figma — replace with a real number if desired */
  phoneDisplay: "+44 789 012 3456",
} as const;

/** Strip above the main nav (grouped with nav scroll behaviour). */
export const siteAnnouncement = {
  message: "Currently accepting outside IR35 contracts for Q2 2026.",
  ctaLabel: "Enquire",
} as const;

export const landingHero = {
  /** Display headline segments; wraps within the hero copy max width (`--width-landing-hero-copy-max`). */
  titlePrefix: "Senior product designer for ",
  titleAccent: "fintech & B2B SaaS.",
  /** Hero intro split for a fixed line break after “complex” (see landing hero `<p>`). */
  leadLine1:
    "I help teams deliver market-leading financial tools and products, turning complex ",
  leadLine2: "requirements into clear, reliable user experiences.",
  profileImage: "/profile-pic-new.png",
  reelPoster: "/lloyds-bank-images/foreign-exchange.png",
  reelVideo: "/lloyds-bank-hero-video.mp4",
} as const;

export const landingAbout = {
  label: "TRUSTED IN FINTECH",
  /** Keep in sync with `headlinePrefix` + `headlineSuffix` (e.g. for metadata). */
  headline: "Proven results delivering financial products.",
  /** Display split so the intro column shrink-wraps to this line (ends after “financial”). */
  headlinePrefix: "Proven results delivering financial",
  headlineSuffix: " products.",
  body:
    "A decade in digital delivery, with a specialism in fintech UX/UI for the last five years. I combine deep craft in money movement with the strategic maturity required to help high-growth startups and mature SMEs launch and scale quickly.",
  metrics: [
    { value: "£1bn+", caption: "FX trade volume in 18 months" },
    { value: "+20%", caption: "UX-led revenue uplift" },
    { value: "#11", caption: "iOS Finance App Store" },
    { value: "15,000+", caption: "Staff hours automated" },
  ],
} as const;

export type LandingLogo = {
  srcLight: string;
  srcDark: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
};

export const landingClientLogos: readonly LandingLogo[] = [
  {
    srcLight: "/lloyds-black.svg",
    srcDark: "/lloyds-white.svg",
    alt: "Lloyds Banking Group",
    width: 124,
    height: 34,
  },
  {
    srcLight: "/coba-black.svg",
    srcDark: "/coba-white.svg",
    alt: "CoBa Technology",
    width: 148,
    height: 27,
  },
  {
    srcLight: "/familypage-logo-light-mode.png",
    srcDark: "/familypay-logo-dark-mode.png",
    alt: "FamilyPay",
    width: 99,
    height: 20,
  },
  {
    srcLight: "/an-post-logo2.png",
    srcDark: "/an-post-logo2.png",
    alt: "An Post",
    width: 67,
    height: 22,
    className: "dark:brightness-0 dark:invert",
  },
  {
    srcLight: "/lmd-logo-light.svg",
    srcDark: "/lmd-logo-dark.svg",
    alt: "Liam Morris Design",
    width: 68,
    height: 34,
  },
] as const;

export const landingWork = {
  label: "WORK",
  title: "Selected case studies",
} as const;

export const landingExpertise = {
  label: "EXPERTISE",
  headline: "Why teams bring me in",
  intro:
    "Senior product design support for fintech and B2B teams that need strong collaboration, faster delivery, and commercially grounded thinking.",
  rows: [
    {
      title: "A Decade in London’s Tech Ecosystem",
      body:
        "With a proven track record delivering for early-stage startups, SMEs, and Tier-1 banks over 10+ years, I bring a deep understanding of the nuance and regulatory complexity inherent in shipping financial products at both ends of the market.",
    },
    {
      title: "Agile Squad Delivery Champion",
      body:
        "I am a strong advocate for embedding directly into agile squads. I don't work in isolation; I partner closely with PMs and engineers to navigate trade-offs and ensure high-level thinking translates into clear, build-ready outputs.",
    },
    {
      title: "Fluent in Commercial Strategy",
      body:
        "I don’t design in a vacuum. With a prior career in sales and commercial strategy delivering for Fortune 500s (KPMG, ExxonMobil), I ensure my design decisions are rooted in commercial logic. I focus on the metrics that move the needle: adoption, friction, and measurable growth.",
    },
    {
      title: "Ex-Startup Co-Founder",
      body:
        "Having built and shipped my own edtech SaaS product from the ground up, I understand the stakes of early-stage delivery. I bring a founder’s mindset to every squad, balancing long-term vision with the pragmatic, high-velocity execution required to find product-market fit.",
    },
    {
      title: "Design-to-Code Workflow",
      body:
        "I use the latest AI tools (Cursor, Claude, etc) to deliver functional prototypes and front-end outputs. This reduces handover friction and gives engineering a far more robust starting point than static design alone, saving clients significant time and money in development resources.",
      isNew: true,
    },
  ],
} as const;

export const landingTestimonials = {
  label: "TESTIMONIALS",
  title: "What clients have said",
  cards: [
    {
      quote:
        "Liam was core to the delivery. He brought clarity to a complex mix of regulatory requirements and leader ideas, translating them into a simple, consistent, and scalable client experience. The results were excellent. I highly recommend him for any senior design role.",
      name: "Danny Hill",
      role: "Director, Lloyds Banking Group",
      avatar: "/danny-hill.png",
      logoLight: "/lloyds-black.svg",
      logoDark: "/lloyds-white.svg",
      ctaLabel: "Read case study",
      ctaHref: "/projects/lloyds-bank-mvp",
    },
    {
      quote:
        "I hired Liam for over two years to lead product design. He operated well beyond a typical design role, contributing across product and senior client engagements. He has strong commercial instincts, requires very little direction, and delivers under pressure — I would hire him again without hesitation.",
      name: "Carl Hasty",
      role: "CEO, CoBa Technology",
      avatar: "/carl-hasty.png",
      logoLight: "/coba-black.svg",
      logoDark: "/coba-white.svg",
      ctaLabel: "Read case study",
      ctaHref: "/#contact",
    },
  ],
} as const;

export const landingFaqs = {
  label: "FAQs",
  title: "Common questions and answers",
  items: [
    {
      question: "Are you available for Outside IR35 engagements?",
      answer:
        "Yes. I usually contract through my limited company on an outside-IR35 basis where the engagement reflects genuine self-employment. I am happy to align with your procurement and compliance process.",
    },
    {
      question: "What is your current availability?",
      answer:
        "I am taking new fully remote product design contracts from April 2026. If you have a fixed window or a hard launch date, mention it in your first note and we can line up a call.",
    },
    {
      question: "Do you offer fixed-price projects or day rates?",
      answer:
        "Most work runs on a weekly or monthly retainer so we can respond to discovery without renegotiating every shift. For a tightly scoped piece—such as an audit, a roadmap, or a small interface package—I can quote a fixed price. Day rates typically sit in the £450–£700 range depending on scope and duration.",
    },
    {
      question: "How do you work with teams remotely?",
      answer:
        "I work fully remote on UK business hours and collaborate with distributed teams across Europe and the US. I blend synchronous workshops with focused async delivery so stakeholders stay aligned without endless meetings.",
    },
    {
      question: "How do you handle developer handoff?",
      answer:
        "You get precise specs, component thinking, and annotated flows—not flat screens and assumptions. Where it helps, I support engineers with AI-assisted build notes and UI in code so the handover is concrete.",
    },
    {
      question: "Can you work across time zones?",
      answer:
        "Yes. I anchor on UK hours and schedule overlap with US East Coast and most of Europe. For other regions we agree a small set of shared hours and use async updates for the rest.",
    },
    {
      question: "What types of projects do you typically take on?",
      answer:
        "I focus on 3–12 month remote contracts: 0–1 products, enterprise platforms, and design systems—especially in fintech and complex B2B. I am not taking full-time employment at the moment.",
    },
    {
      question: "Can you handover designs in code?",
      answer:
        "Yes, where it adds value. I use an AI-assisted workflow to produce production-grade UI scaffolding and components alongside Figma, which shortens the gap between design sign-off and a working build.",
      isNew: true,
    },
  ],
} as const;

export const landingContact = {
  bannerTitle: "Secure a senior partner for your next build.",
  bannerBody:
    "Available for fully remote contract work from April 2026, supporting fintech and B2B teams on an outside IR35 basis.",
  bannerCta: "Book intro call",
  letsTalk: "Let’s talk",
  introCallLabel: "Book an intro call",
} as const;

export const siteSitemap = {
  colA: [
    { label: "Home", href: "/" },
    { label: "Work", href: "/#work" },
    { label: "Services", href: "/#services" },
  ],
  colB: [
    { label: "About", href: "/#about" },
    { label: "Blog", href: null as string | null },
    { label: "Contact", href: "/#contact" },
  ],
} as const;

export const siteCopyright = "© 2026 Liam Morris Design.";
