import type { Locale } from "@/i18n/config";

// Spelled out here instead of Intl.DateTimeFormat: Node and browsers ship
// different Uzbek locale data, so Intl output differs between server and
// client and React reports a hydration mismatch.
const MONTHS: Record<Locale, string[]> = {
  en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  ru: ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"],
  uz: ["yanvar", "fevral", "mart", "aprel", "may", "iyun", "iyul", "avgust", "sentyabr", "oktyabr", "noyabr", "dekabr"],
};

/** "2026-11-17" → "17 November 2026" / "17 ноября 2026" / "17-noyabr, 2026". */
export function formatDate(iso: string, locale: Locale): string {
  const [y, m, d] = iso.split("-").map(Number);
  const month = MONTHS[locale][m - 1];
  return locale === "uz" ? `${d}-${month}, ${y}` : `${d} ${month} ${y}`;
}
