// src/app/page.tsx
import Link from "next/link";
import { Container } from "@/app/_components/ui";
import { HeroPost, MoreStories, calculateReadingTime } from "@/app/_components/posts";
import { Intro, AreasOfFocus, CtaBand } from "@/app/_components/site";
import { getAllPosts } from "@/lib/api";

export default function Index() {
  const allPosts = getAllPosts();
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1, 5);

  return (
    <main id="top">
      <Container>
        <Intro />
        <AreasOfFocus />

        <div id="latest">
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
              focusArea={heroPost.focusArea}
              status={heroPost.status}
              readingTime={heroPost.content ? calculateReadingTime(heroPost.content) : undefined}
            />
          )}

          {morePosts.length > 0 && <MoreStories posts={morePosts} />}

          <div className="-mt-10 mb-20 md:mb-24">
            <Link
              href="/blog"
              className="focus-ring inline-flex items-center gap-1.5 font-medium text-accent hover:text-fg transition-colors"
            >
              Browse all writing, by topic →
            </Link>
          </div>
        </div>

        <CtaBand />
      </Container>
    </main>
  );
}
