"use client";

import { FiArrowUpRight } from "react-icons/fi";
import { EmText } from "@/components/em";
import { socials } from "@/data/socials";
import { useI18n } from "@/i18n/provider";

const channels = [
  socials.telegram,
  socials.instagram,
  socials.email,
  socials.channel,
  socials.youtube,
  socials.linkedin,
];

const ContactComponent = () => {
  const { t } = useI18n();

  return (
    <main className="min-h-screen py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <p className="eyebrow animate-fade-in-up mb-6">{t.contact.eyebrow}</p>
        <h1 className="display animate-fade-in-up delay-100 text-6xl sm:text-8xl">
          <EmText value={t.contact.title} />
        </h1>
        <p className="animate-fade-in-up delay-200 mt-8 max-w-lg text-lg leading-relaxed text-paper/70">
          {t.contact.intro}
        </p>

        <ul className="animate-fade-in-up delay-300 mt-16 border-t border-line">
          {channels.map(({ key, handle, href, icon: Icon }) => (
            <li key={key} className="border-b border-line">
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-6 py-6"
              >
                <span className="flex items-center gap-4">
                  <Icon className="h-5 w-5 text-mute transition-colors group-hover:text-flame" />
                  <span className="eyebrow hidden w-40 shrink-0 sm:block">{t.contact.labels[key]}</span>
                </span>
                <span className="flex min-w-0 items-center gap-3">
                  <span className="truncate font-display text-2xl text-paper transition-colors group-hover:text-flame sm:text-4xl">
                    {handle}
                  </span>
                  <FiArrowUpRight className="h-5 w-5 shrink-0 text-mute transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-flame" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default ContactComponent;
