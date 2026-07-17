"use client";

import Link from "next/link";
import Image from "next/image";
import { FiGithub, FiLinkedin, FiInstagram, FiMail } from "react-icons/fi";
import { BsHeart } from "react-icons/bs";

const FooterComponent = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10 py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logos/logo.png" alt="Botirjon Logo" width={140} height={40} className="h-8 w-auto object-contain hover:opacity-80 transition-all duration-300" />
          </Link>

          {/* Copyright */}
          <p className="text-xs text-slate-400 flex items-center gap-1">
            © {year} Botirjon Shokirov · Made with{" "}
            <BsHeart className="w-3 h-3 text-red-400 fill-red-400" />
          </p>

          {/* Social */}
          <div className="flex items-center gap-3">
            {[
              { href: "https://github.com/botirjonshokirov03", icon: FiGithub },
              {
                href: "https://www.linkedin.com/in/botirjon-shokirov/",
                icon: FiLinkedin,
              },
              {
                href: "https://www.instagram.com/_botirjonshokirov_/",
                icon: FiInstagram,
              },
              { href: "mailto:shokirovbotirjon2003@gmail.com", icon: FiMail },
            ].map(({ href, icon: Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-none bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:border-indigo-200 hover:bg-indigo-50 transition-all duration-200"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
