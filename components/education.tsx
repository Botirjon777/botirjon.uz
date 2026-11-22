"use client";

import PageHeader from "@/components/page-header";
import { useI18n } from "@/i18n/provider";

const EducationComponent = () => {
  const { t } = useI18n();
  const e = t.education;

  return (
    <main className="min-h-screen py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <PageHeader eyebrow={e.eyebrow} title={e.title} />

        <section className="animate-fade-in-up delay-200 grid gap-6 border-t border-line py-10 md:grid-cols-[14rem_1fr] md:gap-12">
          <div>
            <p className="eyebrow">{e.period}</p>
            <p className="mt-2 text-sm text-mute">{e.location}</p>
          </div>
          <div>
            <h2 className="font-display text-4xl text-paper sm:text-5xl">{e.university}</h2>
            <p className="mt-2 font-mono text-xs uppercase tracking-[0.14em] text-flame">{e.degree}</p>

            <p className="eyebrow mb-5 mt-12">{e.coursesTitle}</p>
            <ul className="grid border-t border-line sm:grid-cols-2">
              {e.courses.map((course, i) => (
                <li key={course} className="flex gap-4 border-b border-line py-3 text-paper/80">
                  <span className="font-mono text-[11px] leading-6 text-mute">{String(i + 1).padStart(2, "0")}</span>
                  {course}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
};

export default EducationComponent;
