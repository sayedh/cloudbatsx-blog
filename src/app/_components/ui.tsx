// src/app/_components/ui.tsx
"use client";

import { ReactNode, useState } from "react";
import { parseISO, format } from "date-fns";
import cn from "classnames";
import Link from "next/link";
import Image from "next/image";

// ============================================
// Container
// ============================================
type ContainerProps = {
  children?: ReactNode;
  className?: string;
};

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("container mx-auto px-5 md:px-8 max-w-6xl", className)}>
      {children}
    </div>
  );
}

// ============================================
// Avatar
// ============================================
type AvatarProps = {
  name: string;
  picture: string;
  size?: "sm" | "md" | "lg";
};

export function Avatar({ name, picture, size = "md" }: AvatarProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-14 h-14",
  };

  const textClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };

  return (
    <div className="flex items-center gap-3">
      <div
        className={cn(
          "relative rounded-full overflow-hidden ring-2 ring-white dark:ring-slate-800 shadow-md",
          sizeClasses[size]
        )}
      >
        <Image src={picture} alt={name} fill className="object-cover" />
      </div>
      <span
        className={cn(
          "font-medium text-slate-700 dark:text-slate-300",
          textClasses[size]
        )}
      >
        {name}
      </span>
    </div>
  );
}

// ============================================
// CoverImage
// ============================================
type CoverImageProps = {
  title: string;
  src: string;
  slug?: string;
  priority?: boolean;
};

export function CoverImage({
  title,
  src,
  slug,
  priority = false,
}: CoverImageProps) {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn(
        "w-full h-full object-cover transition-transform duration-500 ease-out",
        slug && "group-hover:scale-105"
      )}
      fill
      priority={priority}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
    />
  );

  return (
    <div className="relative w-full h-full bg-slate-100 dark:bg-slate-800">
      {slug ? (
        <Link
          href={`/posts/${slug}`}
          aria-label={title}
          className="block w-full h-full"
        >
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
}

// ============================================
// DateFormatter
// ============================================
type DateFormatterProps = {
  dateString: string;
};

export function DateFormatter({ dateString }: DateFormatterProps) {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString} className="text-slate-500 dark:text-slate-500">
      {format(date, "MMMM d, yyyy")}
    </time>
  );
}

// ============================================
// SectionSeparator
// ============================================
export function SectionSeparator() {
  return (
    <hr className="border-0 h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent my-16 md:my-24" />
  );
}

// ============================================
// Card (Generic reusable card)
// ============================================
type CardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
};

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn("glass-card p-6", hover && "hover-lift glow", className)}
    >
      {children}
    </div>
  );
}

// ============================================
// Badge
// ============================================
type BadgeProps = {
  children: ReactNode;
  variant?: "default" | "success" | "warning" | "info";
};

export function Badge({ children, variant = "default" }: BadgeProps) {
  const variants = {
    default:
      "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400",
    success:
      "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400",
    warning:
      "bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400",
    info: "bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
        variants[variant]
      )}
    >
      {children}
    </span>
  );
}

// ============================================
// Skeleton (Loading placeholder)
// ============================================
type SkeletonProps = {
  className?: string;
};

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse bg-slate-200 dark:bg-slate-800 rounded",
        className
      )}
    />
  );
}

// ============================================
// Empty State
// ============================================
type EmptyStateProps = {
  title: string;
  description?: string;
  icon?: ReactNode;
};

export function EmptyState({ title, description, icon }: EmptyStateProps) {
  return (
    <div className="text-center py-16">
      {icon && (
        <div className="flex justify-center mb-4 text-slate-400 dark:text-slate-600">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">
        {title}
      </h3>
      {description && (
        <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}

// ============================================
// CopyButton (for code blocks)
// ============================================
type CopyButtonProps = {
  text: string;
  className?: string;
};

export function CopyButton({ text, className }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={cn(
        "flex items-center gap-1.5 px-2 py-1 rounded",
        "bg-slate-700/50 hover:bg-slate-700",
        "text-slate-400 hover:text-white",
        "text-xs font-mono transition-colors",
        className
      )}
      aria-label={copied ? "Copied!" : "Copy code"}
    >
      {copied ? (
        <>
          <svg
            className="w-3.5 h-3.5 text-emerald-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span className="text-emerald-400">copied!</span>
        </>
      ) : (
        <>
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
          <span>copy</span>
        </>
      )}
    </button>
  );
}

// ============================================
// CodeBlock (Terminal-styled code block)
// ============================================
type CodeBlockProps = {
  children: ReactNode;
  filename?: string;
  language?: string;
};

export function CodeBlock({
  children,
  filename = "code",
  language,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const codeElement = document.querySelector(`[data-code="${filename}"]`);
    if (codeElement) {
      try {
        await navigator.clipboard.writeText(codeElement.textContent || "");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error("Failed to copy:", err);
      }
    }
  };

  return (
    <div className="relative group my-6">
      {/* Window controls header */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-800 border border-slate-700 border-b-0 rounded-t-xl">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-slate-500">
            {filename}
            {language && `.${language}`}
          </span>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-2 py-1 rounded bg-slate-700/50 hover:bg-slate-700 text-slate-400 hover:text-white text-xs font-mono transition-colors"
          >
            {copied ? (
              <>
                <svg
                  className="w-3.5 h-3.5 text-emerald-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-emerald-400">copied!</span>
              </>
            ) : (
              <>
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                <span>copy</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Code content */}
      <div
        className="relative bg-slate-950 border border-slate-700 border-t-0 rounded-b-xl overflow-hidden"
        data-code={filename}
      >
        <pre className="p-4 overflow-x-auto font-mono text-sm leading-relaxed">
          {children}
        </pre>
      </div>
    </div>
  );
}

// ============================================
// Tag (for post categories)
// ============================================
type TagProps = {
  children: ReactNode;
  href?: string;
};

export function Tag({ children, href }: TagProps) {
  const tagClasses = cn(
    "px-2 py-1 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700",
    "rounded text-xs font-mono text-slate-600 dark:text-slate-400",
    "hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/30",
    "cursor-pointer transition-colors"
  );

  if (href) {
    return (
      <Link href={href} className={tagClasses}>
        {children}
      </Link>
    );
  }

  return <span className={tagClasses}>{children}</span>;
}