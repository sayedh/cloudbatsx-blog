// src/app/_components/site.tsx
import Link from "next/link";
import { Container } from "./ui";
import { CaveMark } from "./cave-mark";
import { SITE_NAME, GITHUB_URL, CLOUDBATS_URL } from "@/lib/constants";
import { FOCUS_AREAS, topicHref } from "@/lib/topics";

const CONTACT_URL = `${CLOUDBATS_URL}/#contact`;

// ============================================
// Wordmark — "cloudbats" + teal "x"
// ============================================
function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-display font-semibold tracking-tight ${className}`}>
      <span className="text-fg">cloudbats</span>
      <span className="text-accent">X</span>
    </span>
  );
}

// ============================================
// Header (back link on post pages)
// ============================================
export function Header() {
  return (
    <header className="py-8 mt-4">
      <Link
        href="/"
        className="focus-ring group inline-flex items-center gap-3 text-fg-muted hover:text-fg transition-colors"
      >
        <span className="flex items-center justify-center w-9 h-9 rounded-full border border-border group-hover:border-accent/40 transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </span>
        <Wordmark className="text-xl" />
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
    <footer className="border-t border-border">
      <Container>
        <div className="py-14">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
            <div className="max-w-sm">
              <Link href="/" className="focus-ring mb-3 inline-flex items-center gap-2.5 text-fg">
                <CaveMark className="h-6 w-6 text-fg" />
                <Wordmark className="text-lg" />
              </Link>
              <p className="text-sm leading-relaxed text-fg-subtle">
                The cloudbats engineering blog — cloud, networks, and practical AI, written down. Part
                of{" "}
                <a href={CLOUDBATS_URL} className="focus-ring text-accent hover:text-fg">
                  cloudbats
                </a>
                .
              </p>
            </div>

            <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
              <a href={CONTACT_URL} className="focus-ring text-fg-subtle hover:text-fg">
                Work with cloudbats&nbsp;↗
              </a>
              <a
                href="https://cloudbats.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring text-fg-subtle hover:text-fg"
              >
                cloudbats.ai&nbsp;↗
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring text-fg-subtle hover:text-fg"
              >
                GitHub&nbsp;↗
              </a>
            </nav>
          </div>

          <div className="mt-10 pt-8 border-t border-border text-sm text-fg-subtle">
            <p>
              © {currentYear} {SITE_NAME} · cloudbats LLC
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

// ============================================
// Intro (Hero) — calm, human-first
// ============================================
export function Intro() {
  return (
    <section className="pt-20 pb-12 md:pt-28 md:pb-16">
      <p className="font-mono text-xs tracking-[0.16em] text-accent">
        the cloudbats engineering blog
      </p>
      <h1 className="mt-4 max-w-3xl font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] text-fg">
        Real work that helped real teams — written down, step by step.
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-fg-muted">
        Cloud, networks, and practical AI from a senior engineer. The problem someone had, what I
        built, and what it let them do — with the code to back it up.
      </p>
      <div className="mt-8">
        <a href={CONTACT_URL} className="focus-ring inline-flex items-center gap-1.5 font-medium text-accent hover:text-fg transition-colors">
          Have a problem this could help with? Work with cloudbats
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}

// ============================================
// Alert (preview banner only; nothing in normal mode)
// ============================================
type AlertProps = {
  preview?: boolean;
};

export function Alert({ preview }: AlertProps) {
  if (!preview) return null;

  return (
    <div className="border-b border-border bg-navy text-white">
      <Container>
        <div className="py-3 text-center text-sm">
          This page is a preview.{" "}
          <a href="/api/exit-preview" className="text-accent underline underline-offset-2">
            Exit preview
          </a>
        </div>
      </Container>
    </div>
  );
}

// ============================================
// Trust strip — what Sayed helps people do (human-first)
// ============================================
export function TrustStrip() {
  return (
    <section className="border-y border-border py-10">
      <p className="max-w-3xl text-lg leading-relaxed text-fg">
        Sayed helps small teams run cloud and networks they can rely on, and is now putting practical
        AI to work for them.
      </p>
      <div className="mt-4 grid gap-4 md:grid-cols-2 max-w-4xl">
        <p className="text-sm leading-relaxed text-fg-muted">
          He maintains a UniFi Terraform provider that teams use to manage their network as code
          instead of clicking through a controller —{" "}
          <span className="text-fg-subtle">cloudbatsX/unifi, 5,000+ downloads, every line open to read.</span>
        </p>
        <p className="text-sm leading-relaxed text-fg-muted">
          Around seven years keeping real systems running for people who depend on them — fundamentals
          tested in production, not just on paper.
        </p>
      </div>
    </section>
  );
}

// ============================================
// Areas of focus — what you'll find here (calm labels, not buttons yet)
// ============================================
export function AreasOfFocus() {
  return (
    <section className="py-14 md:py-16">
      <p className="font-mono text-xs tracking-[0.16em] text-accent">what you&apos;ll find here</p>
      <p className="mt-3 max-w-2xl text-lg leading-relaxed text-fg-muted">
        Walkthroughs grouped by the kind of problem they help you solve. Pick a topic to filter the
        writing — each piece starts from what someone needed and ends with what it let them do.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {FOCUS_AREAS.map((f) => (
          <Link
            key={f.area}
            href={topicHref(f.area)}
            className="focus-ring block rounded-xl border border-border p-5 transition-colors hover:border-accent/50"
          >
            <p className="text-fg leading-snug">{f.problem}</p>
            <p className="mt-3 font-mono text-xs text-fg-subtle">
              {f.area}
              {f.isNew ? " · new" : ""}
              <span className="text-accent"> →</span>
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}

// ============================================
// Closing CTA band — asks about the reader's problem first
// ============================================
export function CtaBand() {
  return (
    <section className="my-16 md:my-24 rounded-2xl border border-border bg-surface p-8 md:p-10">
      <h2 className="font-display text-2xl md:text-3xl font-semibold text-fg">
        Have a problem this might help with?
      </h2>
      <p className="mt-3 max-w-2xl text-lg leading-relaxed text-fg-muted">
        This is the writing side of cloudbats, where the work gets shown step by step. If something
        here sounds like what your team is facing, the people behind it can help you sort it out.
      </p>
      <a
        href={CONTACT_URL}
        className="focus-ring mt-6 inline-flex items-center rounded-lg bg-brand px-6 py-3 font-medium text-navy transition-colors hover:bg-brand-dark"
      >
        Work with cloudbats
      </a>
    </section>
  );
}
