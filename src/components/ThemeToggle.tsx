"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function getSystemPrefersDark(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";
  const stored = window.localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;
  return getSystemPrefersDark() ? "dark" : "light";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    setTheme(getInitialTheme());
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    try {
      window.localStorage.setItem("theme", theme);
    } catch {}
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <button
      aria-label="Toggle dark mode"
      onClick={toggle}
      className="size-11 border border-stone-400 rounded-full inline-flex items-center justify-center bg-stone-200 text-stone-900 dark:bg-stone-800 dark:text-cream-100 hover:bg-stone-300 dark:hover:bg-stone-700 transition-colors"
    >
      {theme === "dark" ? (
        // Sun icon - sharper rays
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
          <circle cx="12" cy="12" r="3.5" />
          <path d="M12 2.5v3M12 18.5v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2.5 12h3M18.5 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
        </svg>
      ) : (
        // Crescent moon icon - cleaner shape
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
          <path d="M20.5 14.5A8.5 8.5 0 1110 3.5 7 7 0 0020.5 14.5z" />
        </svg>
      )}
    </button>
  );
}


