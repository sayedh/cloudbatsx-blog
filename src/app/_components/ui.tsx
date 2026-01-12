// src/app/_components/ui.tsx
import { ReactNode } from "react";
import { parseISO, format } from "date-fns";
import cn from "classnames";
import Link from "next/link";
import Image from "next/image";

// ============================================
// Container
// ============================================
type ContainerProps = {
  children?: ReactNode;
};

export function Container({ children }: ContainerProps) {
  return <div className="container mx-auto px-5">{children}</div>;
}

// ============================================
// Avatar
// ============================================
type AvatarProps = {
  name: string;
  picture: string;
};

export function Avatar({ name, picture }: AvatarProps) {
  return (
    <div className="flex items-center">
      <img src={picture} className="w-12 h-12 rounded-full mr-4" alt={name} />
      <div className="text-xl font-bold">{name}</div>
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
};

export function CoverImage({ title, src, slug }: CoverImageProps) {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn("shadow-sm w-full", {
        "hover:shadow-lg transition-shadow duration-200": slug,
      })}
      width={1300}
      height={630}
    />
  );
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
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
  return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
}

// ============================================
// SectionSeparator
// ============================================
export function SectionSeparator() {
  return <hr className="border-neutral-200 mt-28 mb-24" />;
}
