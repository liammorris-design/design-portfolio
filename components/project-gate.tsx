"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { PROJECT_PASSWORD } from "@/lib/projects";

const STORAGE_KEY = "project-gate";

function getUnlockedProjects(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

export function setUnlocked(slug: string) {
  const current = getUnlockedProjects();
  if (!current.includes(slug)) {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify([...current, slug]));
  }
}

export function isProjectUnlocked(slug: string): boolean {
  return getUnlockedProjects().includes(slug);
}

type ProjectGateProps = {
  slug: string;
  children: React.ReactNode;
};

export function ProjectGate({ slug, children }: ProjectGateProps) {
  const [unlocked, setUnlockedState] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(true);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && isProjectUnlocked(slug)) {
      setUnlockedState(true);
      setDialogOpen(false);
    }
  }, [slug, mounted]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (password === PROJECT_PASSWORD) {
      setUnlocked(slug);
      setUnlockedState(true);
      setDialogOpen(false);
    } else {
      setError("Incorrect password. Please try again.");
    }
  };

  const handleClose = (open: boolean) => {
    if (!open) router.push("/#work");
    setDialogOpen(open);
  };

  if (!mounted) return null;

  if (!unlocked) {
    return (
      <>
        <Dialog open={dialogOpen} onOpenChange={handleClose}>
          <DialogContent className="sm:max-w-md" onPointerDownOutside={(e) => e.preventDefault()}>
            <DialogHeader>
              <DialogTitle>This case study is under NDA</DialogTitle>
              <DialogDescription>
                Please enter the password to view this project. Contact me if
                you need access.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="flex h-11 w-full rounded-lg border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  autoFocus
                  aria-label="Password"
                />
                {error && (
                  <p className="mt-2 text-sm text-destructive">{error}</p>
                )}
              </div>
              <DialogFooter>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => handleClose(false)}
                >
                  Cancel
                </Button>
                <Button type="submit">View project</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
        <div className="min-h-[50vh] flex items-center justify-center">
          <p className="text-copy-secondary">Enter password to continue.</p>
        </div>
      </>
    );
  }

  return <>{children}</>;
}
