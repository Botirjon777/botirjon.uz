"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FiGithub, FiExternalLink, FiArrowRight } from "react-icons/fi";
import { projects } from "@/data/projects";

const ProjectsComponent = () => {
  return (
    <main className="min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-12">
          <h1 className="section-title">Projects</h1>
          <p className="section-subtitle">Things I&apos;ve built</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl p-6 flex flex-col animate-fade-in-up hover:shadow-xl hover:shadow-indigo-100 hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Number badge + links */}
              <div className="flex items-start justify-between mb-4">
                <span className="text-4xl font-black text-indigo-100 select-none leading-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 glass-card rounded-xl flex items-center justify-center text-slate-500 hover:text-indigo-600 hover:border-indigo-200 transition-all duration-200"
                      aria-label="GitHub"
                    >
                      <FiGithub className="w-4 h-4" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 glass-card rounded-xl flex items-center justify-center text-slate-500 hover:text-indigo-600 hover:border-indigo-200 transition-all duration-200"
                      aria-label="Live Demo"
                    >
                      <FiExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              <h2 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                {project.name}
              </h2>
              <p className="text-sm text-slate-500 mb-4 leading-relaxed flex-1">
                {project.shortDescription}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 bg-indigo-50 text-indigo-600 rounded-lg text-xs font-semibold border border-indigo-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* View details */}
              <div className="border-t border-slate-100 pt-4">
                <Link
                  href={`/projects/${project.id}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-800 group"
                >
                  View Details
                  <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProjectsComponent;
