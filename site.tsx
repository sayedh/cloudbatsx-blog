// src/app/_components/site.tsx
import Link from "next/link";
import cn from "classnames";
import { Container } from "./ui";
import { SITE_NAME, GITHUB_URL, PORTFOLIO_URL } from "@/lib/constants";

// ============================================
// Header
// ============================================
export function Header() {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/" className="hover:underline">
        {SITE_NAME}
      </Link>
    </h2>
  );
}

// ============================================
// Footer
// ============================================
export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 dark:bg-slate-800">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Built by{" "}
            <a href={PORTFOLIO_URL} className="hover:underline">
              Cloud
            </a>{" "}
            @ {SITE_NAME}
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href={PORTFOLIO_URL}
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Portfolio
            </a>
            <a href={GITHUB_URL} className="mx-3 font-bold hover:underline">
              View Source
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

// ============================================
// Intro
// ============================================
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

// ============================================
// Alert (for preview mode)
// ============================================
type AlertProps = {
  preview?: boolean;
};

export function Alert({ preview }: AlertProps) {
  return (
    <div
      className={cn("border-b dark:bg-slate-800", {
        "bg-neutral-800 border-neutral-800 text-white": preview,
        "bg-neutral-50 border-neutral-200": !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          {preview ? (
            <>
              This page is a preview.{" "}
              <a
                href="/api/exit-preview"
                className="underline hover:text-teal-300 duration-200 transition-colors"
              >
                Click here
              </a>{" "}
              to exit preview mode.
            </>
          ) : (
            <>
              The source code for this blog is{" "}
              <a
                href={GITHUB_URL}
                className="underline hover:text-blue-600 duration-200 transition-colors"
              >
                available on GitHub
              </a>
              .
            </>
          )}
        </div>
      </Container>
    </div>
  );
}
