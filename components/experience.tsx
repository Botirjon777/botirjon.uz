"use client";

import PageHeader from "@/components/page-header";
import { useI18n } from "@/i18n/provider";

const ExperienceComponent = () => {
  const { t } = useI18n();
  const e = t.experience;

  return (
    <main className="min-h-screen py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <PageHeader eyebrow={e.eyebrow} title={e.title} />

        <ol className="border-t border-line">
          {e.items.map((item, i) => (
            <li
              key={`${item.company}-${i}`}
              className="animate-fade-in-up grid gap-6 border-b border-line py-10 md:grid-cols-[14rem_1fr] md:gap-12"
              style={{ animationDelay: `${0.15 + i * 0.08}s` }}
            >
              <div>
                <p className="eyebrow">{item.period}</p>
                <p className="mt-2 text-sm text-mute">{item.location}</p>
                {item.current && (
                  <span className="mt-4 inline-flex items-center gap-2 border border-flame px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-flame">
                    <span className="h-1.5 w-1.5 rounded-full bg-flame" />
                    {e.current}
                  </span>
                )}
              </div>

              <div>
                <h2 className="font-display text-4xl text-paper sm:text-5xl">{item.company}</h2>
                <p className="mt-2 font-mono text-xs uppercase tracking-[0.14em] text-flame">{item.role}</p>
                <ul className="mt-6 space-y-3">
                  {item.highlights.map((point, j) => (
                    <li key={j} className="flex gap-4 leading-relaxed text-paper/75">
                      <span className="mt-[0.7em] h-px w-4 shrink-0 bg-flame" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </main>
  );
};

export default ExperienceComponent;
