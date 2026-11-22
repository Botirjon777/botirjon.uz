"use client";

import PageHeader from "@/components/page-header";
import { useI18n } from "@/i18n/provider";

const CATEGORIES = [
  { key: "frontend", skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML & CSS", "Tailwind CSS", "Three.js"] },
  { key: "backend", skills: ["Node.js", "Express.js", "Python", "FastAPI", "Django", "REST APIs"] },
  { key: "database", skills: ["PostgreSQL", "MongoDB", "SQLite", "OpenSearch", "Drizzle ORM", "Prisma ORM", "TypeORM"] },
  { key: "ai", skills: ["PyTorch", "TensorFlow", "OpenAI API", "face-api.js", "DeepFace", "ONNX", "LLMs"] },
  { key: "devops", skills: ["Git", "GitHub Actions", "Docker", "AWS", "Linux"] },
  { key: "other", skills: ["Telegram Bot API", "Facebook Graph API", "MobileNetV2", "Figma"] },
] as const;

const SkillsComponent = () => {
  const { t } = useI18n();
  const s = t.skills;

  return (
    <main className="min-h-screen py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <PageHeader eyebrow={s.eyebrow} title={s.title} />

        <div className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map(({ key, skills }, i) => (
            <section
              key={key}
              className="animate-fade-in-up bg-black p-8"
              style={{ animationDelay: `${0.15 + i * 0.06}s` }}
            >
              <div className="flex items-baseline justify-between">
                <h2 className="font-display text-3xl text-paper">{s.categories[key]}</h2>
                <span className="font-mono text-[11px] text-flame">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <ul className="mt-8 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <li key={skill} className="tag">
                    {skill}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
};

export default SkillsComponent;
