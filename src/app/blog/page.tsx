// src/app/blog/page.tsx
import { Suspense } from "react";
import type { Metadata } from "next";
import { Container } from "@/app/_components/ui";
import { BlogBrowser, type BrowsePost } from "@/app/_components/blog-browser";
import { calculateReadingTime } from "@/app/_components/posts";
import { getAllPosts } from "@/lib/api";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Walkthroughs on cloud, networks, and practical AI — browse by topic. Each one starts from what someone needed and ends with what it let them do.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const posts: BrowsePost[] = getAllPosts().map((p) => ({
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    date: p.date,
    coverImage: p.coverImage,
    author: p.author,
    focusArea: p.focusArea,
    status: p.status,
    readingTime: p.content ? calculateReadingTime(p.content) : undefined,
  }));

  return (
    <main id="top">
      <Container>
        <div className="pt-16 pb-8 md:pt-20">
          <p className="font-mono text-xs tracking-[0.16em] text-accent">the cloudbats engineering blog</p>
          <h1 className="mt-3 font-display text-4xl md:text-5xl font-semibold text-fg">All writing</h1>
          <p className="mt-3 max-w-2xl text-lg leading-relaxed text-fg-muted">
            Browse by topic, or read the lot — newest first. Each piece starts from what someone needed
            and ends with what it let them do.
          </p>
        </div>
        <Suspense fallback={null}>
          <BlogBrowser posts={posts} />
        </Suspense>
      </Container>
    </main>
  );
}
