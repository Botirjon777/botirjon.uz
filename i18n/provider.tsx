"use client";

import { createContext, useContext, useMemo, type ReactNode } from "react";
import { localizedPath, type Locale } from "./config";

export { localizedPath };
import type { Dictionary } from "./dictionaries/en";

interface I18nValue {
  locale: Locale;
  t: Dictionary;
  /** Prefixes an app path with the current locale: href("/about") → "/ru/about". */
  href: (path: string) => string;
}

const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({
  locale,
  dict,
  children,
}: {
  locale: Locale;
  dict: Dictionary;
  children: ReactNode;
}) {
  const value = useMemo<I18nValue>(
    () => ({ locale, t: dict, href: (path) => localizedPath(locale, path) }),
    [locale, dict],
  );
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nValue {
  const value = useContext(I18nContext);
  if (!value) throw new Error("useI18n must be used inside <I18nProvider>");
  return value;
}
