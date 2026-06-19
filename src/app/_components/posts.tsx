// src/app/_components/posts.tsx
import { ReactNode } from "react";
import Link from "next/link";
import { type Author } from "@/interfaces/author";
import { type Post } from "@/interfaces/post";
import { Avatar, CoverImage, DateFormatter } from "./ui";
import { topicHref } from "@/lib/topics";
import markdownStyles from "./markdown-styles.module.css";

// ============================================
// Reading Time Utility
// ============================================
export function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

// Focus-area chip + an honest status note (building/exploring) for placeholders.
export function PostTags({ focusArea, status }: { focusArea?: string; status?: string }) {
  const showStatus = status && status.toLowerCase() !== "shipped";
  if (!focusArea && !showStatus) return null;
  return (
    <div className="flex flex-wrap items-center gap-2 mb-3">
      {focusArea && (
        <Link href={topicHref(focusArea)} className="tag focus-ring transition-colors hover:border-accent/50">
          {focusArea}
        </Link>
      )}
      {showStatus && (
        <span className="text-xs font-medium text-fg-subtle">· {status}</span>
      )}
    </div>
  );
}

// ============================================
// PostTitle
// ============================================
type PostTitleProps = {
  children?: ReactNode;
};

export function PostTitle({ children }: PostTitleProps) {
  return (
    <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight md:leading-none mb-8 text-slate-900 dark:text-white">
      {children}
    </h1>
  );
}

// ============================================
// PostBody
// ============================================
type PostBodyProps = {
  content: string;
};

export function PostBody({ content }: PostBodyProps) {
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}

// ============================================
// PostHeader
// ============================================
type PostHeaderProps = {
  title: string;
  coverImage?: string;
  date: string;
  author: Author;
  readingTime?: string;
  focusArea?: string;
  status?: string;
};

export function PostHeader({
  title,
  coverImage,
  date,
  author,
  readingTime,
  focusArea,
  status,
}: PostHeaderProps) {
  return (
    <header className="mb-16 md:mb-20">
      <PostTags focusArea={focusArea} status={status} />
      <PostTitle>{title}</PostTitle>

      {/* Meta info */}
      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 mb-8 md:mb-12">
        <Avatar name={author.name} picture={author.picture} />
        <div className="flex items-center gap-3 text-sm text-fg-subtle">
          <span className="hidden md:block w-px h-5 bg-border" />
          <DateFormatter dateString={date} />
          {readingTime && (
            <>
              <span aria-hidden="true">·</span>
              <span>{readingTime}</span>
            </>
          )}
        </div>
      </div>

      {/* Cover image - no slug since this is the post page itself */}
      <div className="relative rounded-2xl overflow-hidden shadow-2xl">
        <CoverImage title={title} src={coverImage} />
        {/* Gradient overlay at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent pointer-events-none" />
      </div>
    </header>
  );
}

// ============================================
// PostPreview (Card)
// ============================================
type PostPreviewProps = {
  title: string;
  coverImage?: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
  readingTime?: string;
  focusArea?: string;
  status?: string;
};

export function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  readingTime,
  focusArea,
  status,
}: PostPreviewProps) {
  return (
    <article className="group glass-card glow overflow-hidden hover-lift">
      {/* Image container - Link wraps the image area */}
      <Link href={`/posts/${slug}`} className="block img-zoom">
        <div className="relative aspect-[16/9] overflow-hidden">
          {/* Don't pass slug to CoverImage since we're already inside a Link */}
          <CoverImage
            title={title}
            src={coverImage}
            priority={false}
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          {/* Read more indicator */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            <span className="text-white text-sm font-medium">Read article</span>
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </div>
        </div>
      </Link>

      {/* Content */}
      <div className="p-6">
        <PostTags focusArea={focusArea} status={status} />
        <div className="flex items-center gap-2 mb-3 text-xs text-fg-subtle">
          <DateFormatter dateString={date} />
          {readingTime && (
            <>
              <span aria-hidden="true">·</span>
              <span>{readingTime}</span>
            </>
          )}
        </div>

        {/* Title */}
        <h3 className="font-display text-xl md:text-2xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
          <Link href={`/posts/${slug}`} className="animated-underline">
            {title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4 line-clamp-3">
          {excerpt}
        </p>

        {/* Author */}
        <div className="pt-4 border-t border-slate-200 dark:border-slate-700/50">
          <Avatar name={author.name} picture={author.picture} size="sm" />
        </div>
      </div>
    </article>
  );
}

// ============================================
// HeroPost
// ============================================
type HeroPostProps = {
  title: string;
  coverImage?: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
  readingTime?: string;
  focusArea?: string;
  status?: string;
};

export function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  readingTime,
  focusArea,
  status,
}: HeroPostProps) {
  return (
    <section className="relative mb-20 md:mb-28">
      {/* Latest badge + focus area + honest status */}
      <div className="mb-6 flex flex-wrap items-center gap-2">
        <span className="tag">Latest</span>
        {focusArea && (
          <Link href={topicHref(focusArea)} className="tag focus-ring transition-colors hover:border-accent/50">
            {focusArea}
          </Link>
        )}
        {status && status.toLowerCase() !== "shipped" && (
          <span className="text-xs font-medium text-fg-subtle">· {status}</span>
        )}
      </div>

      <article className="group glass-card glow overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Image - Link wraps this section */}
          <Link href={`/posts/${slug}`} className="block img-zoom">
            <div className="relative aspect-[16/10] lg:aspect-auto lg:h-full overflow-hidden">
              {/* Don't pass slug to CoverImage since we're already inside a Link */}
              <CoverImage title={title} src={coverImage} priority />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-900/10 dark:to-slate-900/30 lg:bg-gradient-to-l" />
            </div>
          </Link>

          {/* Content */}
          <div className="p-8 lg:p-10 xl:p-12 flex flex-col justify-center">
            <div className="flex flex-wrap items-center gap-2 mb-4 text-sm text-fg-subtle">
              <DateFormatter dateString={date} />
              {readingTime && (
                <>
                  <span aria-hidden="true">·</span>
                  <span>{readingTime}</span>
                </>
              )}
            </div>

            {/* Title */}
            <h2 className="font-display text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold mb-4 text-slate-900 dark:text-white leading-tight">
              <Link
                href={`/posts/${slug}`}
                className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300"
              >
                {title}
              </Link>
            </h2>

            {/* Excerpt */}
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6 line-clamp-3">
              {excerpt}
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between pt-6 border-t border-slate-200 dark:border-slate-700/50">
              <Avatar name={author.name} picture={author.picture} />
              <Link
                href={`/posts/${slug}`}
                className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-medium hover:gap-3 transition-all duration-300"
              >
                Read more
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
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

// ============================================
// MoreStories
// ============================================
type MoreStoriesProps = {
  posts: Post[];
};

export function MoreStories({ posts }: MoreStoriesProps) {
  return (
    <section className="mb-20 md:mb-32">
      {/* Section header */}
      <div className="mb-10">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-fg">More posts</h2>
        <p className="text-fg-muted mt-2">More writing on cloud, networks, and practical AI.</p>
      </div>

      {/* Posts grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post, index) => (
          <div
            key={post.slug}
            className="opacity-0 animate-fade-in-up"
            style={{
              animationDelay: `${index * 100}ms`,
              animationFillMode: "forwards",
            }}
          >
            <PostPreview
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
              slug={post.slug}
              excerpt={post.excerpt}
              focusArea={post.focusArea}
              status={post.status}
              readingTime={
                post.content ? calculateReadingTime(post.content) : undefined
              }
            />
          </div>
        ))}
      </div>
    </section>
  );
}