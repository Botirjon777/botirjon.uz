"use client";

import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import BrowserFrame from "@/components/browser-frame";
import { EmText } from "@/components/em";
import { bronit } from "@/data/bronit";
import { useI18n } from "@/i18n/provider";
import { useReveal } from "@/hooks/use-reveal";

/** The Bronit showcase: the one project this site presents. */
const ProjectsComponent = () => {
  useReveal();
  const { t, locale } = useI18n();
  const p = t.projects;
  const b = t.bronit;

  const visit = (
    <a href={bronit.url} target="_blank" rel="noopener noreferrer" className="btn-primary group">
      {p.openSite} {bronit.domain}
      <FiArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  );

  return (
    <main>
      {/* ═══ TITLE ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-40 -top-52 h-[620px] w-[620px] rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, #ff5b2e 0%, transparent 65%)" }}
        />
        <div className="relative mx-auto max-w-6xl px-6 pb-14 pt-16 sm:pt-24">
          <p className="eyebrow animate-fade-in-up mb-6 flex items-center gap-2.5">
            <span className="h-1.5 w-1.5 rounded-full bg-flame" />
            {p.eyebrow}
          </p>
          <h1 className="display animate-fade-in-up delay-100 text-[26vw] leading-[0.8] sm:text-[20vw] lg:text-[17rem]">
            Bronit<em>.</em>
          </h1>

          <div className="animate-fade-in-up delay-200 mt-12 grid gap-10 md:grid-cols-[1.3fr_1fr] md:items-end">
            <p className="font-display text-3xl leading-tight text-paper sm:text-5xl">{b.tagline}</p>
            <div className="md:text-right">{visit}</div>
          </div>

          <dl className="animate-fade-in-up delay-300 mt-14 grid grid-cols-2 border-t border-line md:grid-cols-4">
            {b.facts.map(({ label, value }) => (
              <div key={label} className="border-b border-line py-5 md:border-b-0 md:pr-6">
                <dt className="eyebrow">{label}</dt>
                <dd className="mt-2 text-paper">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ═══ THE SITE ═══════════════════════════════════════ */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <a
          href={bronit.url}
          target="_blank"
          rel="noopener noreferrer"
          className="reveal group block"
          aria-label={`${p.openSite} ${bronit.domain}`}
        >
          <BrowserFrame
            src={bronit.images.home}
            alt={p.altHome}
            address={bronit.domain}
            width={1440}
            height={800}
            priority
          />
        </a>
      </section>

      {/* ═══ OVERVIEW ═══════════════════════════════════════ */}
      <section className="border-t border-line bg-ink-2">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[1fr_1.4fr]">
          <p className="eyebrow reveal">{p.ideaEyebrow}</p>
          <div className="reveal">
            <p className="font-display text-3xl leading-snug text-paper sm:text-4xl">
              {p.idea.before}
              <em className="italic text-flame">{p.idea.em}</em>
              {p.idea.after}
            </p>
            <p className="mt-8 max-w-2xl leading-relaxed text-paper/70">{b.summary}</p>
          </div>
        </div>
      </section>

      {/* ═══ PRODUCTS ═══════════════════════════════════════ */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="reveal mb-14 grid gap-6 md:grid-cols-[1fr_1.4fr] md:items-end">
            <p className="eyebrow">{p.insideEyebrow}</p>
            <h2 className="display text-5xl sm:text-7xl">
              <EmText value={p.insideTitle} />
            </h2>
          </div>

          <div className="reveal group mb-px grid gap-px border border-line bg-line md:grid-cols-2">
            <div className="flex flex-col justify-between bg-black p-8 sm:p-10">
              <p className="font-mono text-[11px] text-flame">erp.bronit.uz</p>
              <div className="mt-16">
                <h3 className="font-display text-5xl text-paper">{p.ordersTitle}</h3>
                <p className="mt-4 max-w-md leading-relaxed text-paper/70">{p.ordersText}</p>
              </div>
            </div>
            <div className="overflow-hidden bg-ink-3">
              <Image
                src={bronit.images.erp}
                alt={p.altErp}
                width={720}
                height={600}
                className="h-full w-full object-cover object-left-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </div>
          </div>

          <div className="grid gap-px border border-t-0 border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {b.products.map(({ name, kind, text }, i) => (
              <article
                key={name}
                className="reveal flex min-h-[260px] flex-col justify-between bg-black p-8 transition-colors duration-300 hover:bg-ink-2"
                style={{ transitionDelay: `${(i % 3) * 0.08}s` }}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-[11px] text-flame">{String(i + 1).padStart(2, "0")}</span>
                  <span className="eyebrow text-right">{kind}</span>
                </div>
                <div className="mt-10">
                  <h3 className="font-display text-4xl text-paper">{name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-paper/70">{text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="reveal group mt-16 grid gap-6 md:grid-cols-2">
            <BrowserFrame
              src={bronit.images.products}
              alt={p.altProducts}
              address={`${bronit.domain}/${locale}`}
              width={1140}
              height={440}
            />
            <BrowserFrame
              src={bronit.images.platform}
              alt={p.altPlatform}
              address={`${bronit.domain}/${locale}`}
              width={1200}
              height={400}
            />
          </div>
        </div>
      </section>

      {/* ═══ RESULTS ════════════════════════════════════════ */}
      <section className="border-t border-line bg-ink-2">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="eyebrow reveal mb-12">{p.resultsEyebrow}</p>
          <dl className="grid border-t border-line md:grid-cols-3">
            {b.results.map(({ value, label }, i) => (
              <div
                key={label}
                className="reveal border-b border-line py-10 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <dt className="font-display text-7xl text-flame sm:text-8xl">{value}</dt>
                <dd className="mt-4 max-w-[16rem] leading-relaxed text-paper/70">{label}</dd>
              </div>
            ))}
          </dl>
          <p className="eyebrow reveal mt-8">
            {p.resultsSource} {bronit.domain}
          </p>
        </div>
      </section>

      {/* ═══ STACK + CTA ════════════════════════════════════ */}
      <section className="border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[1fr_1.4fr]">
          <div className="reveal">
            <p className="eyebrow mb-6">{p.builtWith}</p>
            <ul className="flex flex-wrap gap-2">
              {bronit.stack.map((tech) => (
                <li key={tech} className="tag">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal">
            <h2 className="display text-5xl sm:text-7xl">
              <EmText value={p.ctaTitle} />
            </h2>
            <p className="mt-6 max-w-lg leading-relaxed text-paper/70">{p.ctaText}</p>
            <div className="mt-8">{visit}</div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectsComponent;
