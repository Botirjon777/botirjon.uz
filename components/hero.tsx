"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  FiArrowRight,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiInstagram,
  FiCode,
  FiServer,
  FiCpu,
  FiCheckCircle,
  FiExternalLink,
} from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";
import { type GithubRepo } from "@/lib/github";
import ServicesComponent from "@/components/services";
import { useReveal } from "@/hooks/use-reveal";


/* ─── Animated counter ───────────────────────────────── */
function AnimatedCounter({
  end,
  suffix = "",
}: {
  end: number;
  suffix?: string;
}) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.round(eased * end));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [end]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

/* ─── Typewriter ─────────────────────────────────────── */
const ROLES = [
  "Software Engineer",
  "Full-Stack Developer",
  "Backend Developer",
  "Python Developer",
  "TypeScript Engineer",
];
function Typewriter() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIdx];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && text.length < current.length) {
      timeout = setTimeout(
        () => setText(current.slice(0, text.length + 1)),
        80,
      );
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(
        () => setText(current.slice(0, text.length - 1)),
        45,
      );
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % ROLES.length);
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, roleIdx]);

  return (
    <span className="text-indigo-600 font-bold">
      {text}
      <span className="animate-blink text-purple-500 font-light">|</span>
    </span>
  );
}

/* ─── Main landing component ─────────────────────────── */
const HeroComponent = ({ featuredRepos }: { featuredRepos: GithubRepo[] }) => {
  useReveal();

  const [experience, setExperience] = useState("3.2");
  useEffect(() => {
    const diff = Date.now() - new Date(2023, 0, 1).getTime();
    setExperience((diff / (1000 * 60 * 60 * 24 * 365.25)).toFixed(1));
  }, []);

  return (
    <>
      {/* ═══ 1. HERO ════════════════════════════════════════ */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden bg-slate-950">
        {/* Developer Grid pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.15]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #6366f1 1px, transparent 1px), linear-gradient(to bottom, #6366f1 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="max-w-6xl mx-auto px-6 py-20 relative z-10 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Text */}
            <div className="flex-1 text-center lg:text-left">
              <div className="animate-fade-in-up delay-100 inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-none-none mb-6 backdrop-blur-md">
                <span className="w-2 h-2 rounded-none-none bg-green-400 animate-pulse" />
                Available for new opportunities
              </div>

              <h1 className="animate-fade-in-up delay-200 text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] text-white mb-4">
                Hi, I&apos;m <span className="gradient-text">Botirjon</span>
                <span className="text-slate-400">.</span>
              </h1>

              <div className="animate-fade-in-up delay-300 text-xl sm:text-2xl text-slate-300 font-medium mb-6 min-h-[2rem]">
                <Typewriter />
              </div>

              <p className="animate-fade-in-up delay-400 text-slate-400 text-base sm:text-lg max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed">
                Based in{" "}
                <span className="text-indigo-400 font-semibold">
                  Uzbekistan
                </span>{" "}
                with{" "}
                <span className="text-indigo-400 font-semibold">
                  {experience}+ years
                </span>{" "}
                of experience building real-world web applications, APIs, and
                AI-powered systems.
              </p>

              <div className="animate-fade-in-up delay-500 flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
                <Link
                  href="/projects"
                  className="group flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-none-none shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all duration-300"
                >
                  See My Work
                  <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="px-7 py-3.5 bg-slate-900 text-slate-300 font-semibold rounded-none-none border border-white/10 hover:bg-slate-800 hover:text-white hover:-translate-y-0.5 transition-all duration-300 backdrop-blur-sm"
                >
                  Contact Me
                </Link>
              </div>

              {/* Socials */}
              <div className="animate-fade-in-up delay-600 flex gap-3 justify-center lg:justify-start">
                {[
                  {
                    href: "https://github.com/botirjonshokirov03",
                    icon: FiGithub,
                  },
                  {
                    href: "https://www.linkedin.com/in/botirjon-shokirov/",
                    icon: FiLinkedin,
                  },
                  {
                    href: "mailto:shokirovbotirjon2003@gmail.com",
                    icon: FiMail,
                  },
                  {
                    href: "https://t.me/botirjon_sh",
                    icon: FaTelegramPlane,
                  },
                  {
                    href: "https://www.instagram.com/_botirjonshokirov_/",
                    icon: FiInstagram,
                  },
                ].map(({ href, icon: Icon }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-none-none flex items-center justify-center text-slate-400 bg-slate-900 border border-white/10 hover:text-indigo-400 hover:border-indigo-500/50 hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Stats grid */}
            <div className="animate-fade-in-up delay-400 flex-shrink-0 grid grid-cols-2 gap-4 w-full max-w-[280px]">
              {[
                {
                  end: parseFloat(experience),
                  suffix: "+",
                  label: "Years Exp.",
                },
                { end: 15, suffix: "+", label: "Projects" },
                { end: 30, suffix: "+", label: "Happy Clients" },
                { end: 30, suffix: "+", label: "Active Clients" },
              ].map(({ end, suffix, label }) => (
                <div
                  key={label}
                  className="bg-slate-900 border border-white/10 backdrop-blur-md rounded-none-none p-5 text-center hover:-translate-y-1 transition-all duration-300 hover:border-indigo-500/50 hover:bg-slate-800"
                >
                  <p className="text-2xl font-black gradient-text">
                    <AnimatedCounter end={end} suffix={suffix} />
                  </p>
                  <p className="text-xs text-slate-400 mt-1 font-medium leading-tight">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in delay-800">
          <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-[0.2em]">
            Scroll
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-indigo-400/70 to-transparent" />
        </div>
      </section>

      {/* ═══ 2. "WHAT I DO" STRIP ═══════════════════════════ */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <p className="text-indigo-500 text-xs font-bold uppercase tracking-widest mb-3">
              What I Do
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Full-stack &amp; beyond
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: FiCode,
                title: "Frontend",
                color: "indigo",
                desc: "Pixel-perfect UIs built with React & Next.js. Fast, accessible, and visually sharp.",
                tags: ["React", "Next.js", "TypeScript", "Tailwind"],
              },
              {
                icon: FiServer,
                title: "Backend",
                color: "purple",
                desc: "Scalable REST APIs, microservices, and database architecture with Node.js and Python.",
                tags: ["Node.js", "FastAPI", "PostgreSQL", "Prisma"],
              },
              {
                icon: FiCpu,
                title: "AI & Automation",
                color: "violet",
                desc: "Face recognition, chatbots, and ML-powered services trained and deployed to production.",
                tags: ["PyTorch", "OpenAI", "DeepFace", "ONNX"],
              },
            ].map(({ icon: Icon, title, color, desc, tags }, i) => {
              const gradMap: Record<string, string> = {
                indigo: "from-indigo-500 to-indigo-700",
                purple: "from-purple-500 to-purple-700",
                violet: "from-violet-500 to-violet-700",
              };
              const bgMap: Record<string, string> = {
                indigo: "hover:border-indigo-200 hover:shadow-indigo-500/20",
                purple: "hover:border-purple-200 hover:shadow-purple-100",
                violet: "hover:border-violet-200 hover:shadow-violet-100",
              };
              const tagMap: Record<string, string> = {
                indigo: "bg-indigo-50 text-indigo-700 border-indigo-100",
                purple: "bg-purple-50 text-purple-700 border-purple-100",
                violet: "bg-violet-50 text-violet-700 border-violet-100",
              };
              return (
                <div
                  key={title}
                  className={`reveal glass-card rounded-none p-7 hover:-translate-y-1 transition-all duration-300 hover:shadow-xl ${bgMap[color]}`}
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div
                    className={`w-12 h-12 rounded-none bg-gradient-to-br ${gradMap[color]} flex items-center justify-center mb-5 shadow-md`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {tags.map((t) => (
                      <span
                        key={t}
                        className={`px-2 py-0.5 rounded-none text-[11px] font-semibold border ${tagMap[color]}`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ 3. EXPERIENCE BANNER ════════════════════════════ */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 animate-gradient relative overflow-hidden">
        {/* Background noise rings */}
        <div className="absolute -top-20 -left-20 w-72 h-72 rounded-none bg-slate-950/5 pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-none bg-slate-950/5 pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { n: 15, suf: "+", label: "Projects Done" },
              { n: 30, suf: "+", label: "Happy Clients" },
              { n: 30, suf: "+", label: "Active Clients" },
              { n: 30, suf: "%", label: "Perf. Improvement" },
            ].map(({ n, suf, label }) => (
              <div key={label} className="reveal">
                <p className="text-4xl sm:text-5xl font-black mb-1">
                  <AnimatedCounter end={n} suffix={suf} />
                </p>
                <p className="text-indigo-200 text-sm font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 4. WHY HIRE ME ══════════════════════════════════ */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="reveal-left">
              <p className="text-indigo-500 text-xs font-bold uppercase tracking-widest mb-3">
                Why choose me
              </p>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 leading-tight">
                I deliver results,
                <br />
                <span className="gradient-text">not just code</span>
              </h2>
              <p className="text-slate-400 leading-relaxed mb-8">
                From backend APIs to ML systems and polished UIs, I own every
                layer of the stack. I&apos;ve worked independently and in teams
                — shipping on time, communicating proactively, and always
                keeping quality high.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  "3+ years of real-world, production experience",
                  "15+ projects and 35+ happy clients served",
                  "Active clients constantly across various regions",
                  "Full-stack: React, Node.js, Python, FastAPI, PostgreSQL",
                  "Currently working at AVADirect Custom Computers",
                  "Deep focus on clean code, performance & scalability",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <FiCheckCircle className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm">{point}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-800 group"
                >
                  Full bio
                  <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right: skill bars */}
            <div className="reveal-right flex flex-col gap-5">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
                Proficiency
              </p>
              {[
                {
                  label: "JavaScript / TypeScript",
                  level: 90,
                  color: "from-indigo-500 to-indigo-700",
                },
                {
                  label: "Python / FastAPI / Django",
                  level: 85,
                  color: "from-purple-500 to-purple-700",
                },
                {
                  label: "React / Next.js",
                  level: 88,
                  color: "from-violet-500 to-violet-700",
                },
                {
                  label: "Node.js / Express",
                  level: 82,
                  color: "from-sky-500 to-indigo-600",
                },
                {
                  label: "PostgreSQL / MongoDB",
                  level: 78,
                  color: "from-emerald-500 to-teal-600",
                },
                {
                  label: "AI / ML / LLM (PyTorch, OpenAI)",
                  level: 72,
                  color: "from-fuchsia-500 to-purple-600",
                },
              ].map(({ label, level, color }) => (
                <SkillBar
                  key={label}
                  label={label}
                  level={level}
                  color={color}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 5. FEATURED PROJECTS ════════════════════════════ */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12 reveal">
            <div>
              <p className="text-indigo-500 text-xs font-bold uppercase tracking-widest mb-2">
                Recent Work
              </p>
              <h2 className="text-3xl sm:text-4xl font-black text-white">
                Featured Projects
              </h2>
            </div>
            <Link
              href="/projects"
              className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-800 group"
            >
              All projects
              <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredRepos.map((p, i) => (
              <div
                key={p.id}
                className="reveal glass-card rounded-none p-7 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/20 transition-all duration-300 flex flex-col"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-5xl font-black text-indigo-100 leading-none select-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex gap-2">
                    {p.html_url && (
                      <a
                        href={p.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 glass-card rounded-none flex items-center justify-center text-slate-400 hover:text-indigo-600 transition-colors"
                      >
                        <FiGithub className="w-4 h-4" />
                      </a>
                    )}
                    {p.homepage && (
                      <a
                        href={p.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 glass-card rounded-none flex items-center justify-center text-slate-400 hover:text-indigo-600 transition-colors"
                      >
                        <FiExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {p.name}
                </h3>
                <p className="text-sm text-slate-400 mb-4 flex-1 leading-relaxed">
                  {p.description || "No description provided."}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.topics?.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 bg-indigo-50 text-indigo-600 rounded-none text-xs font-semibold border border-indigo-100"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between border-t border-white/10 pt-4">
                  <Link
                    href={`/projects/${p.name}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-800 group"
                  >
                    View Details
                    <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <span className="text-xs text-slate-500">Updated: {new Date(p.updated_at).toLocaleDateString()}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden reveal">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-800 group"
            >
              All projects
              <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ 6. SERVICES ═════════════════════════════════════ */}
      <ServicesComponent />

      {/* ═══ 6. TECH MARQUEE ══════════════════════════════════ */}
      <section className="py-14 bg-slate-900 overflow-hidden border-y border-white/10">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-8 reveal">
          Technologies I work with
        </p>
        <div
          className="flex gap-3 whitespace-nowrap"
          style={{ animation: "marquee 22s linear infinite" }}
        >
          {[
            "JavaScript",
            "TypeScript",
            "Python",
            "React",
            "Next.js",
            "Node.js",
            "FastAPI",
            "Django",
            "PostgreSQL",
            "MongoDB",
            "Prisma ORM",
            "Docker",
            "AWS",
            "PyTorch",
            "OpenAI API",
            "Telegram Bot API",
            "Git",
            "REST APIs",
            "face-api.js",
            "ONNX",
            "OpenSearch",
            "LLM",
            "Three.js",
            // duplicate for seamless loop
            "JavaScript",
            "TypeScript",
            "Python",
            "React",
            "Next.js",
            "Node.js",
            "FastAPI",
            "Django",
            "PostgreSQL",
            "MongoDB",
          ].map((t, i) => (
            <span
              key={i}
              className="inline-block px-4 py-2 glass-card rounded-none text-sm font-semibold text-slate-400 border border-white/10 flex-shrink-0"
            >
              {t}
            </span>
          ))}
        </div>
        <style>{`
          @keyframes marquee {
            from { transform: translateX(0); }
            to   { transform: translateX(-50%); }
          }
        `}</style>
      </section>

      {/* ═══ 7. FINAL CTA ════════════════════════════════════ */}
      <section className="py-28 bg-slate-950">
        <div className="max-w-3xl mx-auto px-6 text-center reveal">
          <div className="w-16 h-16 mx-auto rounded-none bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center mb-8 shadow-xl shadow-indigo-500/20 animate-float">
            <span className="text-white text-2xl font-black">B</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4 leading-tight">
            Let&apos;s build something
            <br />
            <span className="gradient-text">great together</span>
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            I&apos;m open to new roles, freelance projects, and collaborations.
            Drop me a line and let&apos;s make it happen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-none shadow-lg shadow-indigo-500/20 hover:shadow-indigo-300 hover:-translate-y-0.5 transition-all duration-300 text-base"
            >
              Get In Touch
              <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/projects"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-slate-950 text-slate-300 font-bold rounded-none border-2 border-white/20 hover:border-indigo-300 hover:text-indigo-600 hover:-translate-y-0.5 transition-all duration-300 text-base"
            >
              View My Work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

/* ─── Skill bar sub-component ────────────────────────── */
function SkillBar({
  label,
  level,
  color,
}: {
  label: string;
  level: number;
  color: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(level), 200);
          obs.unobserve(el);
        }
      },
      { threshold: 0.5 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [level]);

  return (
    <div ref={ref}>
      <div className="flex justify-between mb-1.5">
        <span className="text-sm font-semibold text-slate-300">{label}</span>
        <span className="text-sm font-bold text-indigo-600">{level}%</span>
      </div>
      <div className="h-2.5 bg-white/10 rounded-none overflow-hidden">
        <div
          className={`h-full rounded-none bg-gradient-to-r ${color} transition-all duration-1000 ease-out`}
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

export default HeroComponent;
