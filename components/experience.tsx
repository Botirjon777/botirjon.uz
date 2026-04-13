"use client";

import { FiBriefcase } from "react-icons/fi";

const experiences = [
  {
    role: "Software Engineer",
    company: "AVADirect Custom Computers",
    period: "June 2025 – Present",
    location: "On Site",
    current: true,
    color: "from-indigo-600 to-purple-600",
    highlights: [
      "Working as a Software Engineer building custom computer configuration and e-commerce systems.",
      "Contributing to full-stack development with modern web technologies.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Freelance",
    period: "Jan 2023 – Present",
    location: "Remote",
    current: true,
    color: "from-violet-600 to-purple-600",
    highlights: [
      "Collaborated with 50+ university students on JavaScript, Python, Machine Learning, and Virtual Machines projects with a 100% success rate.",
      "Managing a portfolio of 15+ active clients with tailored software solutions.",
      "Strong client communication, team collaboration, and efficient requirement translation.",
      "Extensive problem-solving across debugging, optimization, and end-to-end implementation.",
    ],
  },
  {
    role: "Software Engineer | Backend Developer",
    company: "Premium Soft",
    period: "March 2025 – May 2025",
    location: "Remote",
    current: false,
    color: "from-sky-500 to-indigo-600",
    highlights: [
      "Developed and maintained backend services and REST APIs.",
      "Collaborated with cross-functional teams to deliver robust backend solutions.",
    ],
  },
  {
    role: "Software Engineer",
    company: "RadCode",
    period: "Sep 2022 – Dec 2023",
    location: "Warsaw, Poland",
    current: false,
    color: "from-purple-600 to-pink-500",
    highlights: [
      "Wrote reusable and clean code for enhanced maintainability and efficiency.",
      "Migrated legacy styles to MUI5, improving app speed and appearance by 55%.",
      "Worked extensively with Prisma ORM and migrated parts of the codebase from TypeORM to Prisma.",
      "Optimized code performance under senior guidance, achieving a 30% improvement.",
    ],
  },
];

const ExperienceComponent = () => {
  return (
    <main className="min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <h1 className="section-title">Experience</h1>
          <p className="section-subtitle">My professional journey so far</p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-300 via-purple-200 to-transparent hidden md:block" />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, i) => (
              <div
                key={`${exp.company}-${i}`}
                className="relative flex flex-col md:flex-row gap-6 animate-fade-in-up"
                style={{ animationDelay: `${i * 0.12}s` }}
              >
                {/* Timeline dot */}
                <div
                  className={`hidden md:flex flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br ${exp.color} items-center justify-center shadow-lg z-10`}
                >
                  <FiBriefcase className="w-4 h-4 text-white" />
                </div>

                {/* Card */}
                <div className="flex-1 glass-card rounded-2xl p-6 hover:shadow-xl hover:shadow-indigo-100 transition-all duration-300 hover:-translate-y-0.5">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        {exp.current && (
                          <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-bold rounded-full border border-green-200">
                            ● Current
                          </span>
                        )}
                        <span className="text-xs font-semibold text-indigo-500 uppercase tracking-wider">
                          {exp.period}
                        </span>
                      </div>
                      <h2 className="text-lg font-bold text-slate-900">
                        {exp.role}
                      </h2>
                      <p
                        className={`font-bold text-transparent bg-clip-text bg-gradient-to-r ${exp.color}`}
                      >
                        {exp.company}
                      </p>
                    </div>
                    <span className="inline-block px-3 py-1 bg-slate-50 text-slate-500 text-xs font-medium rounded-full border border-slate-100 self-start whitespace-nowrap">
                      {exp.location}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex gap-3 text-sm text-slate-600">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ExperienceComponent;
