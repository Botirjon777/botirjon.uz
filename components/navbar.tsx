"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { HiMenu, HiX } from "react-icons/hi";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/education", label: "Education" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/skills", label: "Skills" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const NavbarComponent = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? "bg-black backdrop-blur-md shadow-sm border-b border-white/10"
          : "bg-black/90 backdrop-blur-sm border-b border-white/5"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image src="/logos/logo.png" alt="Botirjon Logo" width={140} height={40} className="h-8 w-auto object-contain" priority />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`px-4 py-1.5 rounded-none-none text-sm font-medium transition-all duration-200 border-b-2 ${
                    isActive
                      ? "border-indigo-500 text-indigo-400"
                      : "border-transparent text-slate-400 hover:text-white hover:border-white/20"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <a
          href="mailto:shokirovbotirjon2003@gmail.com"
          className="hidden md:inline-flex items-center px-5 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold rounded-none-none hover:from-indigo-500 hover:to-purple-500 transition-all duration-200 shadow-md shadow-indigo-500/20 hover:-translate-y-0.5"
        >
          Hire Me
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-none-none text-slate-400 hover:bg-white/10 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <HiX className="w-5 h-5" />
          ) : (
            <HiMenu className="w-5 h-5" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden animate-slide-down bg-slate-950/98 backdrop-blur-md border-b border-white/10 px-6 py-4">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`block px-4 py-2.5 rounded-none-none text-sm font-medium transition-all duration-200 border-b-2 ${
                      isActive
                        ? "border-indigo-500 text-indigo-400"
                        : "border-transparent text-slate-400 hover:text-white hover:border-white/20"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
            <li className="mt-2">
              <a
                href="mailto:shokirovbotirjon2003@gmail.com"
                className="block px-4 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-none-none text-sm font-semibold text-center"
              >
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavbarComponent;
