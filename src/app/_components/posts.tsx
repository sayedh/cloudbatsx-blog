// src/app/_components/posts.tsx
import { ReactNode } from "react";
import Link from "next/link";
import { type Author } from "@/interfaces/author";
import { type Post } from "@/interfaces/post";
import { Avatar, CoverImage, DateFormatter } from "./ui";
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
  coverImage: string;
  date: string;
  author: Author;
  readingTime?: string;
};

export function PostHeader({
  title,
  coverImage,
  date,
  author,
  readingTime,
}: PostHeaderProps) {
  return (
    <header className="mb-16 md:mb-20">
      {/* Title */}
      <PostTitle>{title}</PostTitle>

      {/* Meta info - Terminal style */}
      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 mb-8 md:mb-12">
        <Avatar name={author.name} picture={author.picture} />
        
        {/* Terminal-style date and reading time */}
        <div className="flex items-center gap-3 font-mono text-sm">
          <span className="hidden md:block w-px h-6 bg-slate-300 dark:bg-slate-700" />
          <span className="text-slate-500 dark:text-slate-500">$</span>
          <span className="text-cyan-600 dark:text-cyan-400">date</span>
          <span className="text-slate-400 dark:text-slate-600">--</span>
          <DateFormatter dateString={date} />
          {readingTime && (
            <>
              <span className="text-slate-300 dark:text-slate-700">|</span>
              <span className="text-emerald-600 dark:text-emerald-400">{readingTime}</span>
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
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
  readingTime?: string;
};

export function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  readingTime,
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
        {/* Terminal-style date and reading time */}
        <div className="flex items-center gap-2 mb-3 font-mono text-xs text-slate-500 dark:text-slate-500">
          <span className="text-cyan-600 dark:text-cyan-500">$</span>
          <DateFormatter dateString={date} />
          {readingTime && (
            <>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <span className="text-emerald-600 dark:text-emerald-500">{readingTime}</span>
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
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
  readingTime?: string;
};

export function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  readingTime = "5 min read",
}: HeroPostProps) {
  return (
    <section className="relative mb-20 md:mb-28">
      {/* Featured badge */}
      <div className="mb-6">
        <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-full">
          <svg
            className="w-4 h-4 text-amber-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="text-amber-600 dark:text-amber-400 text-sm font-medium">
            Featured Post
          </span>
        </span>
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
            {/* Terminal-style meta */}
            <div className="flex flex-wrap items-center gap-3 mb-4 font-mono text-sm">
              <span className="text-slate-500 dark:text-slate-500">$</span>
              <span className="text-cyan-600 dark:text-cyan-400">date</span>
              <span className="text-slate-400 dark:text-slate-600">--</span>
              <DateFormatter dateString={date} />
              <span className="text-slate-300 dark:text-slate-700">|</span>
              <span className="text-emerald-600 dark:text-emerald-400">
                {readingTime}
              </span>
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
      <div className="flex items-center justify-between mb-10">
        <div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            More Posts
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-2">
            Explore more articles and tutorials
          </p>
        </div>
        {/* Terminal-style decoration */}
        <div className="hidden md:flex items-center gap-2 font-mono text-sm text-slate-400 dark:text-slate-500">
          <span>$</span>
          <span className="text-cyan-600 dark:text-cyan-400">ls</span>
          <span>-la posts/</span>
        </div>
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