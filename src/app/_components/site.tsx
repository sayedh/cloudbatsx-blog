// src/app/_components/site.tsx
"use client";

import Link from "next/link";
import cn from "classnames";
import { useState, useEffect } from "react";
import { Container } from "./ui";
import { SITE_NAME, GITHUB_URL, PORTFOLIO_URL } from "@/lib/constants";

// ============================================
// Header (for post pages)
// ============================================
export function Header() {
  return (
    <header className="relative py-8 mt-4">
      <Link
        href="/"
        className="group inline-flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-300"
      >
        {/* Back arrow */}
        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 group-hover:bg-cyan-500/10 dark:group-hover:bg-cyan-500/10 transition-colors duration-300">
          <svg
            className="w-5 h-5 transform group-hover:-translate-x-0.5 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </span>
        <span className="font-display font-bold text-xl md:text-2xl">
          {SITE_NAME}
        </span>
      </Link>
    </header>
  );
}

// ============================================
// Footer
// ============================================
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
      {/* Decorative top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <Container>
        <div className="py-16 md:py-20">
          {/* Main footer content */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Brand section */}
            <div className="text-center lg:text-left">
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">
                <span className="gradient-text">{SITE_NAME}</span>
              </h3>
              <p className="text-slate-600 dark:text-slate-400 max-w-md">
                Cloud infrastructure, DevOps automation, and full-stack
                development insights by{" "}
                <a
                  href={PORTFOLIO_URL}
                  className="text-cyan-600 dark:text-cyan-400 hover:underline"
                >
                  Cloud
                </a>
                .
              </p>
            </div>

            {/* Terminal-style message */}
            <div className="hidden md:flex items-center gap-2 font-mono text-sm">
              <span className="text-slate-500">$</span>
              <span className="text-cyan-600 dark:text-cyan-400">echo</span>
              <span className="text-slate-600 dark:text-slate-400">
                &quot;Thanks for visiting!&quot;
              </span>
            </div>
          </div>

          {/* Links section */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={PORTFOLIO_URL} className="btn-primary">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              Portfolio
            </a>
            <a href={GITHUB_URL} className="btn-ghost group">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              View Source
            </a>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500 dark:text-slate-500">
            <p>
              © {currentYear} {SITE_NAME}. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="/feed.xml"
                className="hover:text-cyan-500 transition-colors duration-200"
              >
                RSS Feed
              </a>
              <a
                href={GITHUB_URL}
                className="hover:text-cyan-500 transition-colors duration-200"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

// ============================================
// Intro (Hero section) - Terminal Style
// ============================================
export function Intro() {
  const [typedText, setTypedText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const fullText = "DevOps & Cloud Engineering";

  // Typing effect
  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 80);
      return () => clearTimeout(timeout);
    }
  }, [typedText]);

  // Cursor blink
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-20 pb-16 md:pt-28 md:pb-20 overflow-hidden">
      <div className="relative">
        {/* Terminal-style status badge */}
        <div className="flex justify-center md:justify-start mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700 rounded-full font-mono text-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-slate-500 dark:text-slate-400">$</span>
            <span className="text-emerald-600 dark:text-emerald-400">
              status:
            </span>
            <span className="text-slate-700 dark:text-slate-300">online</span>
          </span>
        </div>

        {/* Main heading */}
        <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between gap-8">
          <div className="text-center md:text-left">
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              <span className="text-slate-900 dark:text-white">cloudbats</span>
              <span className="gradient-text-animated">X</span>
            </h1>
          </div>

          <div className="max-w-md text-center md:text-left md:pt-4">
            {/* Typing effect tagline */}
            <div className="flex items-center justify-center md:justify-start gap-1 mb-4 font-mono text-lg md:text-xl">
              <span className="text-cyan-600 dark:text-cyan-500">&gt;</span>
              <span className="text-slate-700 dark:text-slate-300">
                {typedText}
              </span>
              <span
                className={`w-2.5 h-5 bg-cyan-500 dark:bg-cyan-400 ${cursorVisible ? "opacity-100" : "opacity-0"} transition-opacity`}
              />
            </div>

            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
              Practical tutorials on{" "}
              <span className="text-cyan-600 dark:text-cyan-400 font-medium">
                AWS
              </span>
              ,{" "}
              <span className="text-blue-600 dark:text-blue-400 font-medium">
                Terraform
              </span>
              ,{" "}
              <span className="text-indigo-600 dark:text-indigo-400 font-medium">
                networking
              </span>
              , and modern development.
            </p>

            {/* Quick stats */}
            <div className="mt-6 flex items-center justify-center md:justify-start gap-6 text-sm text-slate-500 dark:text-slate-500">
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-cyan-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  />
                </svg>
                <span>Blog Posts</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-cyan-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
                <span>Code Tutorials</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent" />
    </section>
  );
}

// ============================================
// Alert (for preview mode)
// ============================================
type AlertProps = {
  preview?: boolean;
};

export function Alert({ preview }: AlertProps) {
  return (
    <div
      className={cn(
        "relative border-b transition-colors duration-300",
        preview
          ? "bg-slate-900 border-slate-800 text-white"
          : "bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800"
      )}
    >
      <Container>
        <div className="py-3 text-center text-sm flex items-center justify-center gap-2">
          {preview ? (
            <>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-400 text-xs font-medium">
                <svg
                  className="w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                Preview Mode
              </span>
              <span className="text-slate-400">
                This page is a preview.{" "}
                <a
                  href="/api/exit-preview"
                  className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2 transition-colors duration-200"
                >
                  Exit preview
                </a>
              </span>
            </>
          ) : (
            <span className="text-slate-600 dark:text-slate-400">
              The source code for this blog is{" "}
              <a
                href={GITHUB_URL}
                className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-300 underline underline-offset-2 transition-colors duration-200"
              >
                available on GitHub
              </a>
              .
            </span>
          )}
        </div>
      </Container>
    </div>
  );
}