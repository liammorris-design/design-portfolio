"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

const PARAGRAPH_1 =
  "I'm a Senior Product Designer with 12 years' experience in the London tech ecosystem, specialising in fintech, treasury infrastructure, and complex B2B platforms. I design production-ready financial systems, translating product strategy into clear, scalable interfaces for transaction workflows, money movement, and operational tooling.";

const PARAGRAPH_2_FULL =
  "My work spans Tier-1 banks and early-stage fintech startups, where I've delivered products ranging from FX trading platforms to mobile banking experiences. I'm comfortable operating in high-ambiguity environments, working closely with product managers and engineers to take complex financial products from early discovery through to shipped software.";

const PARAGRAPH_2_TEASER =
  "My work spans Tier-1 banks and early-stage fintech startups, where I've delivered products ranging from FX trading platforms to mobile banking experiences…";

/** On mobile: first para + teaser + "Show more"; on desktop: full copy. */
export function AboutCopy() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex flex-col">
      <p className="mb-4 text-copy-secondary leading-relaxed">
        {PARAGRAPH_1}
      </p>
      {/* Desktop: full second paragraph */}
      <div className="hidden md:block">
        <p className="text-copy-secondary leading-relaxed">{PARAGRAPH_2_FULL}</p>
      </div>
      {/* Mobile: teaser + Show more or full */}
      <div className="md:hidden">
        {!expanded ? (
          <>
            <p className="mb-4 text-copy-secondary leading-relaxed">
              {PARAGRAPH_2_TEASER}
            </p>
            <div className="flex justify-start md:justify-center">
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="w-fit justify-start text-left"
                onClick={() => setExpanded(true)}
              >
                Show more
              </Button>
            </div>
          </>
        ) : (
          <p className="text-copy-secondary leading-relaxed">{PARAGRAPH_2_FULL}</p>
        )}
      </div>
    </div>
  );
}
