"use client";

const skillCategories = [
  {
    label: "Frontend",
    color: "indigo",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML & CSS",
      "Tailwind CSS",
      "Three.js",
    ],
  },
  {
    label: "Backend",
    color: "purple",
    skills: [
      "Node.js",
      "Express.js",
      "Python",
      "FastAPI",
      "Django",
      "REST APIs",
    ],
  },
  {
    label: "Database",
    color: "violet",
    skills: ["PostgreSQL", "MongoDB", "SQLite", "OpenSearch", "Prisma ORM", "TypeORM"],
  },
  {
    label: "AI & ML",
    color: "fuchsia",
    skills: [
      "PyTorch",
      "TensorFlow",
      "OpenAI API",
      "face-api.js",
      "DeepFace",
      "ONNX",
      "LLMs (Large Language Models)",
    ],
  },
  {
    label: "DevOps & Tools",
    color: "sky",
    skills: ["Git", "GitHub Actions", "Docker", "AWS", "Linux"],
  },
  {
    label: "Other",
    color: "emerald",
    skills: ["Telegram Bot API", "Facebook Graph API", "MobileNetV2", "Figma"],
  },
];

const colorMap: Record<string, string> = {
  indigo: "bg-indigo-50 text-indigo-700 border-indigo-100 hover:bg-indigo-100",
  purple: "bg-purple-50 text-purple-700 border-purple-100 hover:bg-purple-100",
  violet: "bg-violet-50 text-violet-700 border-violet-100 hover:bg-violet-100",
  fuchsia:
    "bg-fuchsia-50 text-fuchsia-700 border-fuchsia-100 hover:bg-fuchsia-100",
  sky: "bg-sky-50 text-sky-700 border-sky-100 hover:bg-sky-100",
  emerald:
    "bg-emerald-50 text-emerald-700 border-emerald-100 hover:bg-emerald-100",
};

const headerColorMap: Record<string, string> = {
  indigo: "from-indigo-500 to-indigo-700",
  purple: "from-purple-500 to-purple-700",
  violet: "from-violet-500 to-violet-700",
  fuchsia: "from-fuchsia-500 to-fuchsia-700",
  sky: "from-sky-500 to-sky-700",
  emerald: "from-emerald-500 to-emerald-700",
};

const SkillsComponent = () => {
  return (
    <main className="min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <h1 className="section-title">Skills</h1>
          <p className="section-subtitle">Technologies and tools I work with</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <div
              key={cat.label}
              className="glass-card rounded-2xl p-6 animate-fade-in-up hover:shadow-lg hover:shadow-indigo-50 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div
                className={`inline-flex items-center px-3 py-1 rounded-lg bg-gradient-to-r ${headerColorMap[cat.color]} mb-4`}
              >
                <span className="text-white text-xs font-bold uppercase tracking-wider">
                  {cat.label}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold border transition-colors cursor-default ${colorMap[cat.color]}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default SkillsComponent;
