// src/app/_components/intro.tsx
import { SITE_NAME } from "@/lib/constants";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        {SITE_NAME}
      </h1>
      <p className="text-center md:text-left text-lg mt-5 md:pl-8 max-w-md">
        Cloud infrastructure, DevOps automation, and full-stack development
        insights.
      </p>
    </section>
  );
}