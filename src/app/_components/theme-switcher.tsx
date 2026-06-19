"use client";

import { memo, useEffect, useState } from "react";

declare global {
  var updateDOM: () => void;
}

type Theme = "light" | "dark";

const STORAGE_KEY = "cloudbatsx-theme";

/** Injected before paint to avoid a flash of the wrong theme (FOUC). Light is the default. */
export const NoFOUCScript = (storageKey: string) => {
  const modifyTransition = () => {
    const css = document.createElement("style");
    css.textContent = "*,*:after,*:before{transition:none !important;}";
    document.head.appendChild(css);
    return () => {
      getComputedStyle(document.body);
      setTimeout(() => document.head.removeChild(css), 1);
    };
  };

  window.updateDOM = () => {
    const restore = modifyTransition();
    const mode = localStorage.getItem(storageKey) === "dark" ? "dark" : "light";
    const classList = document.documentElement.classList;
    if (mode === "dark") classList.add("dark");
    else classList.remove("dark");
    document.documentElement.setAttribute("data-mode", mode);
    restore();
  };
  window.updateDOM();
};

let updateDOM: () => void;

const Icon = ({ d }: { d: string }) => (
  <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={d} />
  </svg>
);
const SUN = "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z";
const MOON = "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z";

/** A single light/dark toggle button. Lives in the nav. */
export const ThemeSwitch = () => {
  const [mode, setMode] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    updateDOM = window.updateDOM;
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "dark" || stored === "light") setMode(stored);
    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY && (e.newValue === "dark" || e.newValue === "light")) {
        setMode(e.newValue);
      }
    };
    addEventListener("storage", onStorage);
    return () => removeEventListener("storage", onStorage);
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem(STORAGE_KEY, mode);
      updateDOM();
    }
  }, [mode, mounted]);

  if (!mounted) {
    return <div className="h-9 w-9 rounded-lg border border-border" aria-hidden="true" />;
  }

  const next: Theme = mode === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      onClick={() => setMode(next)}
      className="focus-ring flex items-center justify-center h-9 w-9 rounded-lg border border-border text-fg-muted hover:text-fg transition-colors"
      aria-label={`Switch to ${next} mode`}
      title={`Switch to ${next} mode`}
    >
      <Icon d={mode === "dark" ? SUN : MOON} />
    </button>
  );
};

/** The FOUC-avoidance script — mount once in the layout. */
export const ThemeScript = memo(() => (
  <script dangerouslySetInnerHTML={{ __html: `(${NoFOUCScript.toString()})('${STORAGE_KEY}')` }} />
));
ThemeScript.displayName = "ThemeScript";
