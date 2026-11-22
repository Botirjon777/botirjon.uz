import { Inter, Instrument_Serif, JetBrains_Mono, Playfair_Display } from "next/font/google";
import type { Locale } from "@/i18n/config";

const sans = Inter({ subsets: ["latin", "latin-ext", "cyrillic"], variable: "--font-sans" });
const mono = JetBrains_Mono({ subsets: ["latin", "latin-ext", "cyrillic"], variable: "--font-mono" });

// Instrument Serif has no Cyrillic, so Russian pages get a serif that does.
const displayLatin = Instrument_Serif({
  subsets: ["latin", "latin-ext"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display",
});
const displayCyrillic = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display",
});

export function fontClasses(locale: Locale): string {
  const display = locale === "ru" ? displayCyrillic : displayLatin;
  return `${sans.variable} ${display.variable} ${mono.variable}`;
}
