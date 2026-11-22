"use client";

import { FiArrowUpRight, FiCode, FiDatabase, FiLayout } from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";
import { EmText } from "@/components/em";
import { socials } from "@/data/socials";
import { useI18n } from "@/i18n/provider";
import { useReveal } from "@/hooks/use-reveal";

const ICONS = [FiLayout, FiCode, FiDatabase];

/** Services section, used on the home page and as the /services page. */
const ServicesComponent = ({ asPage = false }: { asPage?: boolean }) => {
  useReveal();
  const { t } = useI18n();
  const s = t.services;
  const Heading = asPage ? "h1" : "h2";

  return (
    <section id="services" className={asPage ? "" : "border-t border-line"}>
      <div className={`mx-auto max-w-6xl px-6 ${asPage ? "py-20 sm:py-28" : "py-24"}`}>
        <div className="reveal mb-14 grid gap-6 md:grid-cols-[1fr_1.4fr] md:items-end">
          <p className="eyebrow">{s.eyebrow}</p>
          <div>
            <Heading className={`display ${asPage ? "text-6xl sm:text-8xl" : "text-5xl sm:text-6xl"}`}>
              <EmText value={s.title} />
            </Heading>
            <p className="mt-6 max-w-xl leading-relaxed text-paper/70">{s.intro}</p>
          </div>
        </div>

        <div className="grid gap-px border border-line bg-line md:grid-cols-3">
          {s.items.map((item, i) => {
            const Icon = ICONS[i] ?? FiCode;
            return (
              <article
                key={item.title}
                className="reveal flex flex-col bg-black p-8 transition-colors duration-300 hover:bg-ink-2"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="flex items-center justify-between">
                  <Icon className="h-6 w-6 text-flame" />
                  <span className="font-mono text-[11px] text-mute">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-10 font-display text-4xl text-paper">{item.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-paper/70">{item.description}</p>
                <ul className="mt-8 border-t border-line">
                  {item.features.map((feature) => (
                    <li key={feature} className="border-b border-line py-2.5 text-sm text-paper/80">
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={socials.telegram.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="eyebrow group mt-8 inline-flex items-center gap-2 !text-flame transition-colors hover:!text-paper"
                >
                  {s.discuss}
                  <FiArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </article>
            );
          })}
        </div>

        <div className="reveal mt-6 flex flex-col items-start justify-between gap-6 border border-line p-8 md:flex-row md:items-center">
          <div>
            <h3 className="font-display text-3xl text-paper">{s.pricingTitle}</h3>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-paper/70">{s.pricingText}</p>
          </div>
          <a href={socials.telegram.href} target="_blank" rel="noopener noreferrer" className="btn-primary shrink-0">
            <FaTelegramPlane className="h-4 w-4" />
            {s.discussTelegram}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesComponent;
