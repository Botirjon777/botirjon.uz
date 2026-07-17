import { getGithubRepo, getGithubReadme, getGithubRepos } from "@/lib/github";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { FiGithub, FiExternalLink, FiArrowLeft } from "react-icons/fi";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const project = await getGithubRepo(resolvedParams.id);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.name} | Botirjon Shokirov`,
    description: project.description || "GitHub Repository",
  };
}

export async function generateStaticParams() {
  const repos = await getGithubRepos();
  return repos.map((p) => ({ id: p.name }));
}

export default async function ProjectDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const project = await getGithubRepo(resolvedParams.id);
  if (!project) notFound();

  const readme = await getGithubReadme(resolvedParams.id);

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

        <div className="glass-card rounded-none p-8 md:p-10">
          {/* Header */}
          <div className="flex items-start justify-between gap-4 mb-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-indigo-500 mb-2">
                GitHub Repository
              </p>
              <h1 className="text-2xl md:text-3xl font-black text-white leading-tight">
                {project.name}
              </h1>
              <p className="text-slate-400 mt-2">{project.description || "No description provided."}</p>
            </div>
            <div className="flex gap-2 flex-shrink-0">
              {project.html_url && (
                <a
                  href={project.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass-card rounded-none flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:border-indigo-200 transition-all"
                  aria-label="GitHub"
                >
                  <FiGithub className="w-5 h-5" />
                </a>
              )}
              {project.homepage && (
                <a
                  href={project.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass-card rounded-none flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:border-indigo-200 transition-all"
                  aria-label="Live Demo"
                >
                  <FiExternalLink className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 my-6" />

          <div className="flex items-center gap-4 mb-6 text-sm text-slate-500">
            <span className="flex items-center gap-1">
              <span className="font-semibold text-slate-300">Stars:</span> {project.stargazers_count}
            </span>
            <span className="flex items-center gap-1">
              <span className="font-semibold text-slate-300">Language:</span> {project.language || "N/A"}
            </span>
            <span className="flex items-center gap-1">
              <span className="font-semibold text-slate-300">Updated:</span> {new Date(project.updated_at).toLocaleDateString()}
            </span>
          </div>

          {/* Technologies */}
          {project.topics && project.topics.length > 0 && (
            <section className="mb-8">
              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
                Topics
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.topics.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-indigo-50 text-indigo-700 rounded-none text-sm font-semibold border border-indigo-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Readme Section */}
          <section>
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 border-b border-white/10 pb-2">
              README
            </h2>
            {readme ? (
              <div className="prose prose-invert max-w-none text-slate-300 prose-a:text-indigo-400 hover:prose-a:text-indigo-300">
                <pre className="whitespace-pre-wrap font-sans text-sm">{readme}</pre>
              </div>
            ) : (
              <p className="text-slate-500 italic">No README.md found in this repository.</p>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
