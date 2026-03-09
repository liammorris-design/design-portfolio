 "use client";

import { useTheme } from "next-themes";
import { MoonIcon, SunIcon, MonitorIcon, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

type Mode = "system" | "light" | "dark";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  const currentMode: Mode =
    theme === "system" || !theme ? "system" : (theme as Mode);

  const activeIcon =
    resolvedTheme === "dark" ? (
      <MoonIcon className="size-4" aria-hidden />
    ) : (
      <SunIcon className="size-4" aria-hidden />
    );

  if (!mounted) {
    return (
      <div
        className="inline-flex h-10 shrink-0 items-center justify-center rounded-full border border-border bg-transparent px-3"
        aria-hidden
      />
    );
  }

  const handleSelect = (mode: Mode) => {
    setTheme(mode);
    setOpen(false);
  };

  return (
    <div className="relative">
      <button
        type="button"
        aria-label="Theme mode"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={
          "inline-flex h-10 shrink-0 items-center gap-1.5 rounded-full border border-border px-3 text-xs font-medium text-foreground transition-colors hover:border-muted-foreground/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring" +
          (resolvedTheme === "light"
            ? " bg-white hover:bg-accent hover:text-accent-foreground"
            : " bg-transparent")
        }
      >
        <span className="flex items-center justify-center">
          {currentMode === "system" ? (
            <MonitorIcon className="size-4" aria-hidden />
          ) : (
            activeIcon
          )}
        </span>
        <ChevronDown className="size-3 text-muted-foreground" aria-hidden />
      </button>

      {open && (
        <div
          role="menu"
          aria-label="Theme"
          className="absolute left-0 bottom-full z-50 mb-2 w-40 rounded-md border bg-popover text-popover-foreground shadow-md"
        >
          <button
            type="button"
            role="menuitemradio"
            aria-checked={currentMode === "system"}
            onClick={() => handleSelect("system")}
            className={`flex w-full items-center gap-2 px-3 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground${
              currentMode === "system" ? " bg-accent text-accent-foreground" : ""
            }`}
          >
            <MonitorIcon className="size-4" aria-hidden />
            <span>System</span>
          </button>
          <button
            type="button"
            role="menuitemradio"
            aria-checked={currentMode === "light"}
            onClick={() => handleSelect("light")}
            className={`flex w-full items-center gap-2 px-3 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground${
              currentMode === "light" ? " bg-accent text-accent-foreground" : ""
            }`}
          >
            <SunIcon className="size-4" aria-hidden />
            <span>Light</span>
          </button>
          <button
            type="button"
            role="menuitemradio"
            aria-checked={currentMode === "dark"}
            onClick={() => handleSelect("dark")}
            className={`flex w-full items-center gap-2 px-3 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground${
              currentMode === "dark" ? " bg-accent text-accent-foreground" : ""
            }`}
          >
            <MoonIcon className="size-4" aria-hidden />
            <span>Dark</span>
          </button>
        </div>
      )}
    </div>
  );
}
