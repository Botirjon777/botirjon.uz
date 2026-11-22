"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import PageHeader from "@/components/page-header";
import { format } from "@/i18n/get-dictionary";
import { useI18n } from "@/i18n/provider";

const TECH = [
  "TypeScript",
  "JavaScript",
  "Python",
  "React",
  "Next.js",
  "Node.js",
  "FastAPI",
  "PostgreSQL",
  "MongoDB",
  "Drizzle",
  "Prisma",
  "Docker",
  "Three.js",
  "LLM",
];

const AboutComponent = () => {
  const { t } = useI18n();
  const a = t.about;

  const [years, setYears] = useState("3.9");
  useEffect(() => {
    const diff = Date.now() - new Date(2023, 0, 1).getTime();
    setYears((diff / (1000 * 60 * 60 * 24 * 365.25)).toFixed(1));
  }, []);

  return (
    <main className="min-h-screen py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <PageHeader eyebrow={a.eyebrow} title={a.title} />

        <div className="grid gap-16 md:grid-cols-[1fr_1.5fr]">
          <aside className="animate-fade-in-up delay-200">
            {/* Logo mark until there is a photo to put here. */}
            <div className="relative aspect-square w-full max-w-xs border border-line bg-ink-2 p-10">
              <Image src="/logos/logo.png" alt={t.common.name} fill className="object-contain p-12" />
              <span className="absolute -bottom-3 left-6 flex items-center gap-2 bg-flame px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-black">
                <span className="h-1.5 w-1.5 rounded-full bg-black" />
                {a.available}
              </span>
            </div>

            <dl className="mt-12 max-w-xs border-t border-line">
              {[a.facts.location, format(a.facts.experience, { years }), a.facts.role].map((fact) => (
                <div key={fact} className="border-b border-line py-4 text-paper/80">
                  {fact}
                </div>
              ))}
            </dl>
          </aside>

          <div className="animate-fade-in-up delay-300">
            <div className="space-y-6 text-lg leading-relaxed text-paper/75">
              {a.paragraphs.map((p, i) => (
                <p key={i} className={i === 0 ? "font-display text-3xl leading-snug text-paper" : ""}>
                  {p}
                </p>
              ))}
            </div>

            <p className="eyebrow mb-5 mt-14">{a.techTitle}</p>
            <ul className="flex flex-wrap gap-2">
              {TECH.map((tech) => (
                <li key={tech} className="tag">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutComponent;
