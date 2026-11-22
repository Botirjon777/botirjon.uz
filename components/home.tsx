"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import BrowserFrame from "@/components/browser-frame";
import { EmText, Lines } from "@/components/em";
import ServicesComponent from "@/components/services";
import { bronit } from "@/data/bronit";
import { contentChannels, socialRow } from "@/data/socials";
import { format } from "@/i18n/get-dictionary";
import { useI18n } from "@/i18n/provider";
import { formatDate } from "@/lib/date";
import { useReveal } from "@/hooks/use-reveal";

const CAREER_START = new Date(2023, 0, 1);

export interface PostSummary {
  slug: string;
  date: string;
  readingMinutes: number;
  title: string;
  excerpt: string;
}

const DISCIPLINE_TOOLS = [
  ["React", "Next.js", "TypeScript", "Tailwind"],
  ["Node.js", "FastAPI", "PostgreSQL", "Docker"],
  ["OpenAI", "PyTorch", "ONNX", "Telegram"],
];

const TECH = [
  "TypeScript",
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
  "Flutter",
  "Three.js",
  "OpenAI API",
  "PyTorch",
  "Telegram Bot API",
  "OpenSearch",
];

/** Current time in Uzbekistan, ticking every 30 s. Empty until mounted. */
function useTashkentTime() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Tashkent",
      hour: "2-digit",
      minute: "2-digit",
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);
  return time;
}

const HomeComponent = ({ latest }: { latest: PostSummary[] }) => {
  useReveal();
  const { t, href, locale } = useI18n();
  const h = t.home;
  const time = useTashkentTime();

  const [years, setYears] = useState("3");
  useEffect(() => {
    const diff = Date.now() - CAREER_START.getTime();
    setYears(String(Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25))));
  }, []);

  return (
    <>
      {/* ═══ HERO ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 -top-40 h-[640px] w-[640px] rounded-full opacity-25 blur-3xl"
          style={{ background: "radial-gradient(circle, #ff5b2e 0%, transparent 65%)" }}
        />

        <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-16 sm:pt-24">
          <div className="animate-fade-in-up flex flex-wrap items-center justify-between gap-4 border-b border-line pb-5">
            <p className="eyebrow flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-flame" />
              {h.eyebrow}
            </p>
            <p className="eyebrow">{time ? `${time} ${h.timeIn}` : " "}</p>
          </div>

          <h1 className="display hero-title animate-fade-in-up delay-100 mt-10 text-[12vw] sm:text-[10vw] lg:text-[8.5rem]">
            <Lines text={h.headline.before} />
            <em>{h.headline.em}</em>
            <Lines text={h.headline.after} />
          </h1>

          <div className="animate-fade-in-up delay-200 mt-12 grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-end">
            <p className="max-w-xl text-lg leading-relaxed text-paper/70">
              {format(h.intro.before, { years })}
              <Link href={href("/projects")} className="link-underline">
                {h.intro.link}
              </Link>
              {h.intro.after}
            </p>

            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link href={href("/projects")} className="btn-primary group">
                {h.seeWork}
                <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href={href("/contact")} className="btn-ghost">
                {h.getInTouch}
              </Link>
            </div>
          </div>

          <div className="animate-fade-in-up delay-300 mt-14 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-line pt-6">
            {socialRow.map(({ key, href: url, icon: Icon }) => (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-mute transition-colors hover:text-flame"
              >
                <Icon className="h-4 w-4" />
                {t.contact.labels[key]}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ MAIN PROJECT ═══════════════════════════════════ */}
      <section className="border-t border-line bg-ink-2">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="reveal mb-12 flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow mb-4">{h.companyEyebrow}</p>
              <h2 className="display text-6xl sm:text-8xl">
                Bronit<em>.</em>
              </h2>
            </div>
            <p className="eyebrow hidden sm:block">01 / 01</p>
          </div>

          <Link href={href("/projects")} className="reveal group block" aria-label={h.openShowcase}>
            <BrowserFrame
              src={bronit.images.home}
              alt={t.projects.altHome}
              address={bronit.domain}
              width={1440}
              height={800}
            />
          </Link>

          <div className="reveal mt-10 grid gap-10 md:grid-cols-[1.3fr_1fr]">
            <div>
              <p className="font-display text-3xl leading-tight text-paper sm:text-4xl">{t.bronit.tagline}</p>
              <p className="mt-5 max-w-xl leading-relaxed text-paper/70">{t.bronit.summary}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href={href("/projects")} className="btn-primary group">
                  {h.openShowcase}
                  <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <a href={bronit.url} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                  {h.visit} {bronit.domain}
                  <FiArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <ul className="self-start border-t border-line">
              {t.bronit.products.map((p, i) => (
                <li key={p.name} className="flex items-baseline justify-between gap-4 border-b border-line py-3.5">
                  <span className="flex items-baseline gap-4">
                    <span className="font-mono text-[11px] text-flame">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-paper">{p.name}</span>
                  </span>
                  <span className="eyebrow text-right">{p.kind}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ═══ WHAT I DO ══════════════════════════════════════ */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="reveal mb-14 grid gap-6 md:grid-cols-[1fr_1.4fr] md:items-end">
            <p className="eyebrow">{h.whatIDo}</p>
            <h2 className="display text-5xl sm:text-6xl">
              <EmText value={h.whatIDoTitle} />
            </h2>
          </div>

          <div className="grid border-t border-line md:grid-cols-3">
            {h.disciplines.map(({ title, text }, i) => (
              <article
                key={title}
                className="reveal border-b border-line py-10 transition-colors hover:bg-ink-2 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <p className="font-mono text-[11px] text-flame">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-6 font-display text-4xl text-paper">{title}</h3>
                <p className="mt-4 leading-relaxed text-paper/70">{text}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {DISCIPLINE_TOOLS[i].map((tool) => (
                    <li key={tool} className="tag">
                      {tool}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <dl className="reveal mt-16 grid grid-cols-2 gap-y-10 md:grid-cols-4">
            {[
              { n: `${years}+`, label: h.stats.years },
              { n: "15+", label: h.stats.projects },
              { n: "30+", label: h.stats.clients },
              { n: "6", label: h.stats.products },
            ].map(({ n, label }) => (
              <div key={label}>
                <dt className="font-display text-6xl text-paper sm:text-7xl">{n}</dt>
                <dd className="eyebrow mt-2">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ═══ TECH MARQUEE ═══════════════════════════════════ */}
      <section className="overflow-hidden border-y border-line py-7" aria-label={h.technologies}>
        <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
          {[...TECH, ...TECH].map((tech, i) => (
            <span
              key={i}
              aria-hidden={i >= TECH.length}
              className="flex items-center gap-10 font-display text-3xl italic text-paper/60"
            >
              {tech}
              <span className="text-flame">✳</span>
            </span>
          ))}
        </div>
      </section>

      {/* ═══ FROM THE BLOG ══════════════════════════════════ */}
      {latest.length > 0 && (
        <section className="border-b border-line">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <div className="reveal mb-12 flex items-end justify-between gap-6">
              <h2 className="display text-5xl sm:text-6xl">{h.latestPosts}</h2>
              <Link href={href("/blog")} className="eyebrow inline-flex items-center gap-2 transition-colors hover:text-flame">
                {h.allPosts}
                <FiArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <ul className="border-t border-line">
              {latest.map((post) => (
                <li key={post.slug} className="reveal border-b border-line">
                  <Link
                    href={href(`/blog/${post.slug}`)}
                    className="group grid gap-3 py-8 md:grid-cols-[10rem_1fr_auto] md:items-baseline md:gap-10"
                  >
                    <span className="eyebrow">{formatDate(post.date, locale)}</span>
                    <span>
                      <span className="block font-display text-3xl text-paper transition-colors group-hover:text-flame sm:text-4xl">
                        {post.title}
                      </span>
                      <span className="mt-2 block max-w-2xl text-sm leading-relaxed text-paper/60">{post.excerpt}</span>
                    </span>
                    <FiArrowUpRight className="hidden h-6 w-6 text-mute transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-flame md:block" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <ServicesComponent />

      {/* ═══ CONTENT ════════════════════════════════════════ */}
      <section className="border-t border-line bg-ink-2">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="reveal mb-14 grid gap-6 md:grid-cols-[1fr_1.4fr] md:items-end">
            <p className="eyebrow">{h.followEyebrow}</p>
            <h2 className="display text-5xl sm:text-6xl">
              <EmText value={h.followTitle} />
            </h2>
          </div>

          <div className="grid gap-px border border-line bg-line md:grid-cols-3">
            {contentChannels.map(({ key, handle, href: url, icon: Icon }, i) => (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="reveal group flex min-h-[280px] flex-col justify-between bg-ink-2 p-8 transition-colors duration-300 hover:bg-flame"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="flex items-center justify-between">
                  <Icon className="h-6 w-6 text-flame transition-colors group-hover:text-black" />
                  <FiArrowUpRight className="h-6 w-6 text-mute transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-black" />
                </div>
                <div>
                  <p className="eyebrow transition-colors group-hover:text-black/70">{t.contact.labels[key]}</p>
                  <p className="mt-2 font-display text-4xl text-paper transition-colors group-hover:text-black">{handle}</p>
                  <p className="mt-3 text-sm leading-relaxed text-paper/70 transition-colors group-hover:text-black/80">
                    {h.channels[key as keyof typeof h.channels]}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeComponent;
