import { type Author } from "./author";

export type Post = {
  slug: string;
  title: string;
  date: string;
  coverImage?: string;
  author: Author;
  excerpt: string;
  focusArea?: string;
  status?: string;
  ogImage?: {
    url: string;
  };
  content: string;
  preview?: boolean;
};
