"use client";

import { useState } from "react";
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
import { setUnlocked } from "@/components/project-gate";

type PasswordDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  projectSlug: string;
};

export function PasswordDialog({
  open,
  onOpenChange,
  projectSlug,
}: PasswordDialogProps) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (password === PROJECT_PASSWORD) {
      setUnlocked(projectSlug);
      setPassword("");
      onOpenChange(false);
      router.push(`/projects/${projectSlug}`);
    } else {
      setError("Incorrect password. Please try again.");
    }
  };

  const handleClose = (isOpen: boolean) => {
    if (!isOpen) {
      setPassword("");
      setError("");
    }
    onOpenChange(isOpen);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>This case study is under NDA</DialogTitle>
          <DialogDescription>
            Please enter the password to view this project. Contact me if you
            need access.
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
            <Button type="button" variant="outline" onClick={() => handleClose(false)}>
              Cancel
            </Button>
            <Button type="submit">View project</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
