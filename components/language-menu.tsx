"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FiCheck, FiChevronDown, FiGlobe } from "react-icons/fi";
import { LOCALE_COOKIE, locales, type Locale } from "@/i18n/config";
import { localizedPath, useI18n } from "@/i18n/provider";

/** Each language named in itself, so a visitor can find theirs. */
const NATIVE_NAMES: Record<Locale, string> = {
  en: "English",
  ru: "Русский",
  uz: "O'zbekcha",
};

function rememberLocale(locale: Locale) {
  // A year; the middleware reads it when someone opens a URL without a locale.
  document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=31536000; samesite=lax`;
}

/** Globe button that opens a list of languages. `path` is the page without its locale. */
export default function LanguageMenu({ path }: { path: string }) {
  const { locale, t } = useI18n();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close on outside click and on Escape (returning focus to the button).
  useEffect(() => {
    if (!open) return;
    const onPointer = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={`${t.common.language}: ${NATIVE_NAMES[locale]}`}
        className={`flex h-10 items-center gap-2 border px-3 font-mono text-[11px] uppercase tracking-[0.18em] transition-colors ${
          open ? "border-paper text-paper" : "border-line text-mute hover:border-paper hover:text-paper"
        }`}
      >
        <FiGlobe className="h-4 w-4" />
        {locale}
        <FiChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <ul
          role="menu"
          aria-label={t.common.language}
          className="animate-slide-down absolute right-0 top-full z-50 mt-2 min-w-[11rem] border border-line bg-ink-2 py-1 shadow-[0_16px_40px_rgba(0,0,0,0.6)]"
        >
          {locales.map((l) => {
            const current = l === locale;
            return (
              <li key={l} role="none">
                <Link
                  role="menuitem"
                  href={localizedPath(l, path)}
                  hrefLang={l}
                  lang={l}
                  aria-current={current ? "true" : undefined}
                  onClick={() => {
                    rememberLocale(l);
                    setOpen(false);
                  }}
                  className={`flex items-center justify-between gap-6 px-4 py-2.5 text-sm transition-colors ${
                    current ? "text-flame" : "text-paper/80 hover:bg-ink-3 hover:text-paper"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className="w-6 font-mono text-[11px] uppercase tracking-[0.12em] text-mute">{l}</span>
                    {NATIVE_NAMES[l]}
                  </span>
                  {current && <FiCheck className="h-4 w-4" />}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
