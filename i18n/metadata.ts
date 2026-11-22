import type { Metadata } from "next";
import { locales, localeTags, type Locale } from "./config";
import { getDictionary } from "./get-dictionary";

type PageKey = Exclude<keyof ReturnType<typeof getDictionary>["meta"], "siteTitle" | "siteDescription">;

/** canonical + hreflang links for one path in every locale. */
export function alternatesFor(locale: Locale, path: string): Metadata["alternates"] {
  const suffix = path === "/" ? "" : path;
  return {
    canonical: `/${locale}${suffix}`,
    languages: {
      ...Object.fromEntries(locales.map((l) => [localeTags[l], `/${l}${suffix}`])),
      "x-default": `/en${suffix}`,
    },
  };
}

export function pageMetadata(locale: Locale, key: PageKey, path: string): Metadata {
  const { title, description } = getDictionary(locale).meta[key];
  return {
    title,
    description,
    alternates: alternatesFor(locale, path),
    openGraph: { title, description, locale: localeTags[locale].replace(/-/g, "_") },
  };
}
