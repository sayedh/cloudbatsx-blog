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
      {/* Background decoration - visible on larger screens */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -left-20 w-60 h-60 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <Container>
        {/* Hero intro section */}
        <div className="animate-fade-in">
          <Intro />
        </div>

        {/* Featured/Hero post */}
        {heroPost && (
          <div className="animate-fade-in-up" style={{ animationDelay: "150ms" }}>
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
          <div className="animate-fade-in-up" style={{ animationDelay: "300ms" }}>
            <MoreStories posts={morePosts} />
          </div>
        )}
      </Container>
    </main>
  );
}
