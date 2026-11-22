"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { HiMenu, HiX } from "react-icons/hi";
import LanguageMenu from "@/components/language-menu";
import { useI18n } from "@/i18n/provider";

const NAV = ["/projects", "/about", "/experience", "/blog", "/services"] as const;
const NAV_KEY = {
  "/projects": "work",
  "/about": "about",
  "/experience": "experience",
  "/blog": "blog",
  "/services": "services",
} as const;

/** The current path without its locale prefix ("/ru/about" → "/about"). */
function stripLocale(pathname: string): string {
  const rest = pathname.replace(/^\/(en|ru|uz)(?=\/|$)/, "");
  return rest === "" ? "/" : rest;
}

const NavbarComponent = () => {
  const { t, href } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  // /privacy has no locale version, so the switcher sends it to the home page.
  const path = pathname === "/privacy" ? "/" : stripLocale(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (p: string) => path === p || path.startsWith(`${p}/`);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b bg-black/85 backdrop-blur-md transition-colors duration-300 ${
        scrolled || mobileOpen ? "border-line" : "border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-6">
        <Link href={href("/")} className="flex shrink-0 items-center gap-3" aria-label={t.common.nav.home}>
          <Image
            src="/logos/logo.png"
            alt={t.common.name}
            width={140}
            height={40}
            className="h-8 w-auto object-contain"
            priority
          />
          <span className="hidden font-mono text-[11px] uppercase tracking-[0.22em] text-mute xl:inline">
            {t.common.name}
          </span>
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {NAV.map((p) => (
            <li key={p}>
              <Link
                href={href(p)}
                className={`font-mono text-[11px] uppercase tracking-[0.18em] transition-colors duration-200 ${
                  isActive(p) ? "text-flame" : "text-mute hover:text-paper"
                }`}
              >
                {t.common.nav[NAV_KEY[p]]}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-6 lg:flex">
          <LanguageMenu path={path} />
          <Link href={href("/contact")} className="btn-primary !px-4 !py-2.5">
            {t.common.letsTalk}
          </Link>
        </div>

        <div className="flex items-center gap-4 lg:hidden">
          <LanguageMenu path={path} />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center text-paper"
            aria-label={t.common.toggleMenu}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <HiX className="h-5 w-5" /> : <HiMenu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="animate-slide-down border-t border-line bg-black px-6 pb-8 pt-4 lg:hidden">
          <ul className="flex flex-col">
            {[...NAV, "/skills", "/contact"].map((p) => {
              const key = p === "/skills" ? "skills" : p === "/contact" ? "contact" : NAV_KEY[p as keyof typeof NAV_KEY];
              return (
                <li key={p} className="border-b border-line">
                  <Link
                    href={href(p)}
                    className={`block py-4 font-display text-3xl ${isActive(p) ? "italic text-flame" : "text-paper"}`}
                  >
                    {t.common.nav[key]}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavbarComponent;
