"use client";

import { memo, useEffect, useState } from "react";
import cn from "classnames";

declare global {
  var updateDOM: () => void;
}

type ColorSchemePreference = "system" | "dark" | "light";

const STORAGE_KEY = "nextjs-blog-starter-theme";

/** function to be injected in script tag for avoiding FOUC (Flash of Unstyled Content) */
export const NoFOUCScript = (storageKey: string) => {
  const [SYSTEM, DARK, LIGHT] = ["system", "dark", "light"];

  const modifyTransition = () => {
    const css = document.createElement("style");
    css.textContent = "*,*:after,*:before{transition:none !important;}";
    document.head.appendChild(css);

    return () => {
      getComputedStyle(document.body);
      setTimeout(() => document.head.removeChild(css), 1);
    };
  };

  const media = matchMedia(`(prefers-color-scheme: ${DARK})`);

  window.updateDOM = () => {
    const restoreTransitions = modifyTransition();
    const mode = localStorage.getItem(storageKey) ?? SYSTEM;
    const systemMode = media.matches ? DARK : LIGHT;
    const resolvedMode = mode === SYSTEM ? systemMode : mode;
    const classList = document.documentElement.classList;
    if (resolvedMode === DARK) classList.add(DARK);
    else classList.remove(DARK);
    document.documentElement.setAttribute("data-mode", mode);
    restoreTransitions();
  };
  window.updateDOM();
  media.addEventListener("change", window.updateDOM);
};

let updateDOM: () => void;

// Icons
const SunIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
);

const MoonIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
    />
  </svg>
);

const SystemIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const Switch = () => {
  const [mode, setMode] = useState<ColorSchemePreference>("system");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    updateDOM = window.updateDOM;
    const stored = localStorage.getItem(
      STORAGE_KEY
    ) as ColorSchemePreference | null;
    if (stored) setMode(stored);

    const handleStorage = (e: StorageEvent): void => {
      if (e.key === STORAGE_KEY) {
        setMode(e.newValue as ColorSchemePreference);
      }
    };
    addEventListener("storage", handleStorage);
    return () => removeEventListener("storage", handleStorage);
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem(STORAGE_KEY, mode);
      updateDOM();
    }
  }, [mode, mounted]);

  const handleModeSwitch = (newMode: ColorSchemePreference) => {
    setMode(newMode);
  };

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="fixed top-4 right-4 z-50">
        <div className="h-10 w-28 bg-slate-100 dark:bg-slate-800 rounded-full animate-pulse" />
      </div>
    );
  }

  return (
    <div className="fixed top-4 right-4 z-50">
      {/* Terminal-style theme switcher */}
      <div className="flex items-center gap-1 px-2 py-1.5 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg font-mono text-xs">
        <span className="text-slate-400 dark:text-slate-500 mr-1">theme:</span>

        {/* Light mode button */}
        <button
          onClick={() => handleModeSwitch("light")}
          className={cn(
            "flex items-center justify-center px-2 py-1 rounded transition-all duration-200",
            mode === "light"
              ? "bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800"
              : "text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
          )}
          aria-label="Light mode"
          title="Light mode"
        >
          <SunIcon />
        </button>

        {/* Dark mode button */}
        <button
          onClick={() => handleModeSwitch("dark")}
          className={cn(
            "flex items-center justify-center px-2 py-1 rounded transition-all duration-200",
            mode === "dark"
              ? "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800"
              : "text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
          )}
          aria-label="Dark mode"
          title="Dark mode"
        >
          <MoonIcon />
        </button>

        {/* System mode button */}
        <button
          onClick={() => handleModeSwitch("system")}
          className={cn(
            "flex items-center justify-center px-2 py-1 rounded transition-all duration-200",
            mode === "system"
              ? "bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800"
              : "text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
          )}
          aria-label="System preference"
          title="System preference"
        >
          <SystemIcon />
        </button>
      </div>
    </div>
  );
};

const Script = memo(() => (
  <script
    dangerouslySetInnerHTML={{
      __html: `(${NoFOUCScript.toString()})('${STORAGE_KEY}')`,
    }}
  />
));

Script.displayName = "ThemeScript";

export const ThemeSwitcher = () => {
  return (
    <>
      <Script />
      <Switch />
    </>
  );
};