// src/app/page.tsx
import { Container } from "@/app/_components/ui";
import { HeroPost, MoreStories } from "@/app/_components/posts";
import { Intro } from "@/app/_components/site";
import { getAllPosts } from "@/lib/api";

export default function Index() {
  const allPosts = getAllPosts();
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <main className="relative">
      {/* Background ambient effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        {/* Top darkening for cave effect */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-slate-100 dark:from-slate-900 to-transparent opacity-80" />
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-indigo-500/5 dark:bg-indigo-500/5 rounded-full blur-3xl" />
      </div>

      <Container>
        {/* Hero intro section */}
        <div className="animate-fade-in">
          <Intro />
        </div>

        {/* Featured/Hero post */}
        {heroPost && (
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "150ms" }}
          >
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          </div>
        )}

        {/* More posts grid */}
        {morePosts.length > 0 && (
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "300ms" }}
          >
            <MoreStories posts={morePosts} />
          </div>
        )}
      </Container>
    </main>
  );
}