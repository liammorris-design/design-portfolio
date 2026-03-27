import type { Config } from "tailwindcss";

/**
 * Tailwind v4 reads design tokens from `app/globals.css` (`@theme inline`).
 * This file mirrors typography fontSize tokens for tooling and documentation parity.
 */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      /**
       * Typography hierarchy — mirrors `app/globals.css` `--text-*`.
       * Utilities: `text-copy-primary`, `text-copy-secondary`, `text-copy-tertiary`.
       * Nested under `copy` so `primary` / `secondary` do not override shadcn button colours.
       */
      colors: {
        /** Page canvas — mirrors `--background` */
        page: "var(--background)",
        /** Top announcement strip */
        "sticky-bar": "var(--sticky-bar-bg)",
        "sticky-bar-fg": "var(--sticky-bar-fg)",
        /** Filled CTA / `--primary` source in globals */
        button: {
          DEFAULT: "var(--button-bg)",
        },
        copy: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          tertiary: "var(--text-tertiary)",
        },
      },
      fontSize: {
        "body-base": [
          "1rem",
          {
            lineHeight: "1.625",
            letterSpacing: "-0.011em",
          },
        ],
        "body-lead": [
          "1.125rem",
          {
            lineHeight: "1.6",
            letterSpacing: "-0.015em",
          },
        ],
        "body-lead-relaxed": [
          "1.125rem",
          {
            lineHeight: "2rem",
            letterSpacing: "-0.015em",
          },
        ],
        /** Expertise (#services) row body — 16px / 28px / -0.32px (tokens in globals `@theme`) */
        "services-row": [
          "var(--text-services-row)",
          {
            lineHeight: "var(--text-services-row--line-height)",
            letterSpacing: "var(--text-services-row--letter-spacing)",
          },
        ],
        /** Hero intro blurb under display title — 18px */
        "hero-lead": [
          "1.125rem",
          {
            lineHeight: "1.636",
            letterSpacing: "-0.017em",
          },
        ],
        /** Section eyebrows — 14px / 20px / 0.75px tracking; pair with `font-semibold uppercase` on landing. */
        eyebrow: [
          "0.875rem",
          {
            lineHeight: "1.25rem",
            letterSpacing: "0.75px",
          },
        ],
        /** Site header “liam morris” wordmark — 20px / 24px line-height */
        "nav-logo": [
          "1.25rem",
          {
            lineHeight: "1.5rem",
          },
        ],
      },
    },
  },
} satisfies Config;
