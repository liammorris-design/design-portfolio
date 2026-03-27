"use client";

import { useTheme } from "next-themes";
import { MoonStar, SunIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type ThemeToggleProps = {
  /** Omit touch hint label below the button (e.g. header next to menu). */
  compact?: boolean;
  /** Replaces default icon button sizing/hover when set (e.g. match mobile menu control). */
  buttonClassName?: string;
};

/**
 * Single control: toggles between light and dark only. Initial appearance still follows
 * the system preference via ThemeProvider defaultTheme="system" until the user clicks.
 */
export function ThemeToggle({
  compact = false,
  buttonClassName,
}: ThemeToggleProps = {}) {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const defaultIconBtnClass =
    "size-9 shrink-0 rounded-full border border-transparent bg-transparent shadow-none hover:border-border hover:!bg-transparent hover:text-copy-primary dark:hover:!bg-transparent dark:hover:text-copy-primary";

  const iconBtnClass = buttonClassName ?? defaultIconBtnClass;
  const iconSizeClass = buttonClassName ? "size-5" : "size-4";

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className={iconBtnClass}
        disabled
        aria-hidden
      >
        <span className={iconSizeClass} />
      </Button>
    );
  }

  const isDark = resolvedTheme === "dark";
  const toggleLabel = isDark ? "Switch to light mode" : "Switch to dark mode";

  const icon = isDark ? (
    <MoonStar className={iconSizeClass} aria-hidden />
  ) : (
    <SunIcon className={iconSizeClass} aria-hidden />
  );

  const toggleButton = (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      className={iconBtnClass}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={toggleLabel}
    >
      {icon}
    </Button>
  );

  /* Radix Tooltip ignores pointerType "touch" and closes on click, so it never works on phones. */
  const noHover =
    typeof window !== "undefined" &&
    window.matchMedia("(hover: none)").matches;

  if (noHover && !compact) {
    return (
      <div className="inline-flex flex-col items-center gap-1">
        {toggleButton}
        <span className="max-w-[11rem] text-center text-xs leading-tight text-copy-tertiary">
          {toggleLabel}
        </span>
      </div>
    );
  }

  if (noHover && compact) {
    return toggleButton;
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>{toggleButton}</TooltipTrigger>
      <TooltipContent side="bottom" sideOffset={6}>
        {toggleLabel}
      </TooltipContent>
    </Tooltip>
  );
}
