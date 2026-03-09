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

  if (logoDefaultSvg) {
    const isDark = mounted && resolvedTheme === "dark";
    const src = isDark && logoLightSvg ? logoLightSvg : logoDefaultSvg;
    const isAnPost = logoDefaultSvg.toLowerCase().includes("an-post");

    return (
      <Image
        src={src}
        alt={logoText}
        width={116}
        height={32}
        className={`cs-logo cs-logo-img${isAnPost ? " cs-logo-img--anpost" : ""}`}
        priority
        sizes="116px"
      />
    );
  }

  return <span className="cs-logo">{logoText}</span>;
}
