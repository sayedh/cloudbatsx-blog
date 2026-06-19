"use client";

import cn from "classnames";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { PostPreview } from "./posts";
import { type Author } from "@/interfaces/author";

export type BrowsePost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  coverImage?: string;
  author: Author;
  focusArea?: string;
  status?: string;
  readingTime?: string;
};

const yearOf = (date: string) => date.slice(0, 4);
const uniq = (xs: string[]) => Array.from(new Set(xs));

export function BlogBrowser({ posts }: { posts: BrowsePost[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  const areas = ["All", ...uniq(posts.map((p) => p.focusArea).filter(Boolean) as string[])];
  const years = ["All", ...uniq(posts.map((p) => yearOf(p.date))).sort((a, b) => b.localeCompare(a))];

  const topicParam = params.get("topic") || "All";
  const yearParam = params.get("year") || "All";
  const activeTopic = areas.includes(topicParam) ? topicParam : "All";
  const activeYear = years.includes(yearParam) ? yearParam : "All";

  const filtered = posts.filter(
    (p) =>
      (activeTopic === "All" || p.focusArea === activeTopic) &&
      (activeYear === "All" || yearOf(p.date) === activeYear)
  );

  // Group by year, preserving the newest-first order of `posts`.
  const byYear = new Map<string, BrowsePost[]>();
  for (const p of filtered) {
    const y = yearOf(p.date);
    if (!byYear.has(y)) byYear.set(y, []);
    byYear.get(y)!.push(p);
  }

  const go = (topic: string, year: string) => {
    const q = new URLSearchParams();
    if (topic !== "All") q.set("topic", topic);
    if (year !== "All") q.set("year", year);
    const qs = q.toString();
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  };

  const chip = (label: string, active: boolean, onClick: () => void) => (
    <button
      key={label}
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "focus-ring rounded-full px-3.5 py-1.5 text-sm transition-colors",
        active ? "bg-brand text-navy font-medium" : "border border-border text-fg-muted hover:text-fg"
      )}
    >
      {label}
    </button>
  );

  const countLabel = [
    activeTopic !== "All" ? `in ${activeTopic}` : "",
    activeYear !== "All" ? `from ${activeYear}` : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className="pb-24">
      <div className="space-y-3 border-b border-border pb-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="mr-1 w-12 shrink-0 font-mono text-xs text-fg-subtle">topic</span>
          {areas.map((a) => chip(a, activeTopic === a, () => go(a, activeYear)))}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="mr-1 w-12 shrink-0 font-mono text-xs text-fg-subtle">year</span>
          {years.map((y) => chip(y === "All" ? "All years" : y, activeYear === y, () => go(activeTopic, y)))}
        </div>
      </div>

      <p className="mt-6 text-sm text-fg-subtle" aria-live="polite">
        {filtered.length} {filtered.length === 1 ? "post" : "posts"}
        {countLabel ? ` ${countLabel}` : ""}
      </p>

      {filtered.length > 0 ? (
        <div className="mt-6 space-y-12">
          {Array.from(byYear.entries()).map(([year, group]) => (
            <div key={year}>
              <h2 className="mb-6 font-display text-xl font-semibold text-fg-subtle">{year}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {group.map((p) => (
                  <PostPreview
                    key={p.slug}
                    title={p.title}
                    coverImage={p.coverImage}
                    date={p.date}
                    excerpt={p.excerpt}
                    author={p.author}
                    slug={p.slug}
                    readingTime={p.readingTime}
                    focusArea={p.focusArea}
                    status={p.status}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="mt-10 text-fg-muted">
          Nothing here yet{countLabel ? ` ${countLabel}` : ""} — there&apos;s writing planned. Check back soon.
        </p>
      )}
    </section>
  );
}
