export const locales = ["en", "ru", "uz"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  ru: "RU",
  uz: "UZ",
};

/** BCP 47 tags for <html lang>, Open Graph and Intl formatting. */
export const localeTags: Record<Locale, string> = {
  en: "en-US",
  ru: "ru-RU",
  uz: "uz-Latn-UZ",
};

export function isLocale(value: string | undefined): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}

export const LOCALE_COOKIE = "NEXT_LOCALE";

/** Prefixes an app path with a locale: localizedPath("ru", "/about") → "/ru/about". */
export function localizedPath(locale: Locale, path: string): string {
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}
