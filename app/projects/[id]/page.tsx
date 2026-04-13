import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { FiGithub, FiExternalLink, FiArrowLeft } from "react-icons/fi";

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find((p) => p.id === params.id);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.name} | Botirjon Shokirov`,
    description: project.shortDescription,
  };
}

export async function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export default function ProjectDetailPage({ params }: Props) {
  const project = projects.find((p) => p.id === params.id);
  if (!project) notFound();

  return (
    <main className="min-h-screen py-16">
      <div className="max-w-3xl mx-auto px-6">
        {/* Back */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-indigo-600 mb-8 transition-colors group"
        >
          <FiArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>

        <div className="glass-card rounded-3xl p-8 md:p-10">
          {/* Header */}
          <div className="flex items-start justify-between gap-4 mb-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-indigo-500 mb-2">
                Project #{project.id}
              </p>
              <h1 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">
                {project.name}
              </h1>
              <p className="text-slate-500 mt-2">{project.shortDescription}</p>
            </div>
            <div className="flex gap-2 flex-shrink-0">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass-card rounded-xl flex items-center justify-center text-slate-500 hover:text-indigo-600 hover:border-indigo-200 transition-all"
                  aria-label="GitHub"
                >
                  <FiGithub className="w-5 h-5" />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass-card rounded-xl flex items-center justify-center text-slate-500 hover:text-indigo-600 hover:border-indigo-200 transition-all"
                  aria-label="Live Demo"
                >
                  <FiExternalLink className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-100 my-6" />

          {/* Description */}
          <section className="mb-8">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
              Overview
            </h2>
            <p className="text-slate-700 leading-relaxed">
              {project.description}
            </p>
          </section>

          {/* Features */}
          <section className="mb-8">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
              Key Features
            </h2>
            <ul className="space-y-2">
              {project.features.map((f, i) => (
                <li key={i} className="flex gap-3 text-slate-700">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </section>

          {/* Challenges */}
          {project.challenges && (
            <section className="mb-8">
              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
                Challenges & Solutions
              </h2>
              <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-5">
                <p className="text-slate-700 leading-relaxed">
                  {project.challenges}
                </p>
              </div>
            </section>
          )}

          {/* Technologies */}
          <section>
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
              Technologies
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-indigo-50 text-indigo-700 rounded-xl text-sm font-semibold border border-indigo-100"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
