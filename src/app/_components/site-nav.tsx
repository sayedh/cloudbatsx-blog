"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import cn from "classnames";
import { CaveMark } from "./cave-mark";
import { ThemeSwitch } from "./theme-switcher";
import { CLOUDBATS_URL } from "@/lib/constants";

const CONTACT_URL = `${CLOUDBATS_URL}/#contact`;

const links = [
  { label: "Blog", href: "/blog", external: false },
  { label: "cloudbats.com", href: CLOUDBATS_URL, external: true },
  { label: "cloudbats.ai", href: "https://cloudbats.ai", external: true },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-colors",
        scrolled ? "border-b border-border bg-bg/80 backdrop-blur-md" : "bg-transparent"
      )}
    >
      <a
        href="#top"
        className="focus-ring sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-navy"
      >
        Skip to content
      </a>
      <nav className="mx-auto max-w-6xl px-5 md:px-8" aria-label="Primary">
        <div className="flex h-16 items-center justify-between gap-3">
          <Link href="/" className="focus-ring flex items-center gap-2.5 text-fg" aria-label="cloudbatsX home">
            <CaveMark className="h-7 w-7 text-fg" />
            <span className="font-display text-lg font-semibold tracking-tight">
              cloudbats<span className="text-accent">X</span>
            </span>
          </Link>

          <div className="flex items-center gap-2 sm:gap-4">
            <div className="hidden items-center gap-6 md:flex">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="focus-ring text-sm text-fg-muted hover:text-fg transition-colors"
                >
                  {l.label}
                  {l.external ? <span aria-hidden="true">&nbsp;↗</span> : null}
                </a>
              ))}
            </div>
            <ThemeSwitch />
            <a
              href={CONTACT_URL}
              className="focus-ring hidden sm:inline-flex items-center rounded-lg bg-brand px-4 py-2 text-sm font-medium text-navy transition-colors hover:bg-brand-dark"
            >
              Work with cloudbats
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
