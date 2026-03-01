"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

type CaseStudyLogoProps = {
  logoText: string;
  logoDefaultSvg?: string;
  logoLightSvg?: string;
};

export function CaseStudyLogo({
  logoText,
  logoDefaultSvg,
  logoLightSvg,
}: CaseStudyLogoProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (logoDefaultSvg && logoLightSvg && mounted) {
    const src = resolvedTheme === "dark" ? logoLightSvg : logoDefaultSvg;
    return (
      <Image
        src={src}
        alt={logoText}
        width={116}
        height={32}
        className="cs-logo cs-logo-img"
      />
    );
  }

  return <span className="cs-logo">{logoText}</span>;
}
