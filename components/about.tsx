"use client";

import { useEffect, useState } from "react";
import { FiMapPin, FiCode, FiCalendar } from "react-icons/fi";

const AboutComponent = () => {
  const [experience, setExperience] = useState("3.2");

  useEffect(() => {
    const startDate = new Date(2023, 0, 1);
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - startDate.getTime());
    const diffYears = (diffTime / (1000 * 60 * 60 * 24 * 365.25)).toFixed(1);
    setExperience(diffYears);
  }, []);

  const techStack = [
    "JavaScript",
    "TypeScript",
    "Python",
    "React",
    "Next.js",
    "Node.js",
    "FastAPI",
    "Prisma ORM",
    "OpenSearch",
    "Docker",
    "Three.js",
    "LLM",
  ];

  return (
    <main className="min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <h1 className="section-title">About Me</h1>
          <p className="section-subtitle">Who I am and what I do</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: avatar + quick facts */}
          <div className="flex flex-col items-center md:items-start gap-8 animate-fade-in-up">
            {/* Avatar */}
            <div className="relative">
              <div className="w-48 h-48 rounded-none bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center shadow-xl shadow-indigo-500/20">
                <span className="text-8xl font-black gradient-text select-none">
                  B
                </span>
              </div>
              <div className="absolute -bottom-2 -right-2 flex items-center gap-1.5 bg-slate-950 rounded-none px-3 py-1.5 shadow-md border border-white/10 text-xs font-semibold text-green-600">
                <span className="w-2 h-2 rounded-none bg-green-500 inline-block animate-pulse" />
                Available for work
              </div>
            </div>

            {/* Quick info */}
            <div className="flex flex-col gap-3 w-full max-w-xs">
              <div className="flex items-center gap-3 glass-card rounded-none px-4 py-3">
                <FiMapPin className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                <span className="text-sm text-slate-300 font-medium">
                  Uzbekistan
                </span>
              </div>
              <div className="flex items-center gap-3 glass-card rounded-none px-4 py-3">
                <FiCalendar className="w-4 h-4 text-purple-500 flex-shrink-0" />
                <span className="text-sm text-slate-300 font-medium">
                  {experience} years of experience
                </span>
              </div>
              <div className="flex items-center gap-3 glass-card rounded-none px-4 py-3">
                <FiCode className="w-4 h-4 text-violet-500 flex-shrink-0" />
                <span className="text-sm text-slate-300 font-medium">
                  Full-Stack Developer
                </span>
              </div>
            </div>
          </div>

          {/* Right: bio */}
          <div className="animate-fade-in-up delay-200">
            <h2 className="text-2xl font-bold text-white mb-4">
              Building software that{" "}
              <span className="gradient-text">matters</span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              I&apos;m a Software Engineer based in{" "}
              <span className="text-indigo-600 font-medium">Uzbekistan</span>,
              passionate about turning ideas into real-world solutions. I
              started my journey in January 2023 helping university students and
              working as a freelancer — delivering clean, performant software
              across the full stack.
            </p>
            <p className="text-slate-400 leading-relaxed mb-4">
              I specialize in{" "}
              <span className="text-indigo-600 font-medium">
                full-stack development
              </span>
              , REST API design, and database management with{" "}
              <span className="text-purple-600 font-medium">Prisma ORM</span>.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              I have a strong academic background in Computer Science covering
              Machine Learning, Cloud Web Applications, and Artificial
              Intelligence. Outside of work, I enjoy chess, ping pong, and
              continuously exploring new technologies.
            </p>

            {/* Tech badges */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3">
                Tech I use
              </p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-none text-xs font-semibold border border-indigo-100 hover:bg-indigo-100 transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutComponent;
