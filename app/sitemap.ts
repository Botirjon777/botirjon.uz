import type { MetadataRoute } from "next";
import { posts } from "@/content/blog";
import { locales, localeTags } from "@/i18n/config";

const BASE = "https://botirjon.uz";

const PAGES = ["", "/projects", "/about", "/experience", "/education", "/services", "/skills", "/blog", "/contact"];

/** One entry per page per language, each listing its translations. */
export default function sitemap(): MetadataRoute.Sitemap {
  const entry = (path: string, lastModified: Date, priority: number) =>
    locales.map((locale) => ({
      url: `${BASE}/${locale}${path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority,
      alternates: {
        languages: Object.fromEntries(locales.map((l) => [localeTags[l], `${BASE}/${l}${path}`])),
      },
    }));

  const now = new Date();
  return [
    ...PAGES.flatMap((p) => entry(p, now, p === "" ? 1 : p === "/projects" ? 0.9 : 0.7)),
    ...posts.flatMap((post) => entry(`/blog/${post.slug}`, new Date(post.date), 0.6)),
    { url: `${BASE}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];
}
