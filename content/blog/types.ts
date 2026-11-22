import type { Locale } from "@/i18n/config";

/** One piece of a post body. Kept small on purpose: prose first. */
export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; items: string[] }
  | { type: "code"; lang: string; code: string }
  | { type: "image"; src: string; alt: string; caption?: string };

export interface PostTranslation {
  title: string;
  /** One or two sentences for the blog index and meta description. */
  excerpt: string;
  body: Block[];
}

export interface Post {
  slug: string;
  /** ISO date, YYYY-MM-DD. */
  date: string;
  readingMinutes: number;
  tags: string[];
  /** Optional cover from /public. */
  cover?: { src: string; alt: Record<Locale, string> };
  content: Record<Locale, PostTranslation>;
}

/*
 * Inline formatting inside `text` and list items:
 *   **bold**   `code`   [label](https://link)
 * Nothing else is parsed.
 */
