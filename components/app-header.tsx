"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "@/components/navbar";

export function AppHeader() {
  const pathname = usePathname();
  const isProjectPage = pathname?.startsWith("/projects/");

  if (isProjectPage) return null;
  return <Navbar />;
}
