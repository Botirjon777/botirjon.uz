"use client";

import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { EmText } from "@/components/em";
import { socialRow } from "@/data/socials";
import { useI18n } from "@/i18n/provider";

const PAGES = [
  ["/projects", "work"],
  ["/about", "about"],
  ["/experience", "experience"],
  ["/education", "education"],
  ["/services", "services"],
  ["/skills", "skills"],
  ["/blog", "blog"],
  ["/contact", "contact"],
] as const;

const FooterComponent = () => {
  const { t, href } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-black">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="display text-4xl sm:text-5xl">
              <EmText value={t.footer.title} />
            </p>
            <Link href={href("/contact")} className="btn-primary mt-8">
              {t.footer.cta}
              <FiArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div>
            <p className="eyebrow mb-5">{t.footer.pages}</p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
              {PAGES.map(([path, key]) => (
                <li key={path}>
                  <Link href={href(path)} className="text-paper/80 transition-colors hover:text-flame">
                    {t.common.nav[key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-5">{t.footer.elsewhere}</p>
            <ul className="flex flex-col gap-3 text-sm">
              {socialRow.map(({ key, href: url, icon: Icon }) => (
                <li key={key}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 text-paper/80 transition-colors hover:text-flame"
                  >
                    <Icon className="h-4 w-4" />
                    {t.contact.labels[key]}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-3 border-t border-line pt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-mute sm:flex-row">
          <p>
            © {year} {t.common.name}
          </p>
          <Link href="/privacy" className="transition-colors hover:text-paper">
            {t.common.nav.privacy}
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
