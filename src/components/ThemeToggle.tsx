"use client";

import { useEffect, useState } from "react";
import { Moon, Sun, Loader2 } from "lucide-react";
import { Dialog } from "@radix-ui/react-dialog";
import { DialogContent, DialogOverlay, DialogTitle } from "./ui/dialog";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [isLoading, setIsLoading] = useState(false);
  const [pendingTheme, setPendingTheme] = useState<"light" | "dark" | null>(
    null
  );

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    const initialTheme = savedTheme || systemTheme;

    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setPendingTheme(newTheme);
    setIsLoading(true);

    localStorage.setItem("theme", newTheme);

    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  return (
    <>
      <button
        onClick={toggleTheme}
        className="z-[10] fixed bottom-3 right-4 w-10 h-10 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-yellow-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all duration-200 shadow-sm flex items-center justify-center"
        aria-label={`Alternar para tema ${
          theme === "light" ? "escuro" : "claro"
        }`}
        disabled={isLoading}
      >
        {isLoading ? (
          <Loader2 size={18} className="animate-spin text-current" />
        ) : theme === "light" ? (
          <Moon fill="" size={18} className="text-current" />
        ) : (
          <Sun size={18} className="text-current" />
        )}
      </button>

      <Dialog open={isLoading}>
        <DialogOverlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        <DialogContent className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-neutral-900 p-6 rounded-lg shadow-lg border border-neutral-200 dark:border-neutral-700 w-full max-w-sm">
          <DialogTitle className="text-lg font-semibold mb-4 text-neutral-800 dark:text-neutral-100">
            Alterando tema
          </DialogTitle>
          <div className="flex items-center gap-3">
            <Loader2 className="animate-spin text-neutral-600 dark:text-yellow-300" />
            <span className="text-neutral-800 dark:text-neutral-100">
              Aplicando tema {pendingTheme === "light" ? "claro" : "escuro"}...
            </span>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
