"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="z-[10] fixed bottom-3 right-4 w-10 h-10 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-yellow-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all duration-200 shadow-sm flex items-center justify-center"
      aria-label={`Alternar para tema ${
        theme === "light" ? "escuro" : "claro"
      }`}
    >
      {theme === "light" ? (
        <Moon fill="" size={18} className="text-current" />
      ) : (
        <Sun size={18} className="text-current" />
      )}
    </button>
  );
}
