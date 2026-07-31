import type { Metadata } from "next";
import ProjectsComponent from "@/components/projects";

export const metadata: Metadata = {
  title: "Projects | Botirjon Shokirov",
  description: "Software projects built by Botirjon Shokirov.",
  alternates: {
    canonical: "/projects",
  },
};

import { getGithubRepos } from "@/lib/github";

export default async function ProjectsPage() {
  const repos = await getGithubRepos();
  return <ProjectsComponent repos={repos} />;
}
