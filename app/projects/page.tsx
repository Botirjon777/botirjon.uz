import type { Metadata } from "next";
import ProjectsComponent from "@/components/projects";

export const metadata: Metadata = {
  title: "Projects | Botirjon Shokirov",
  description: "Software projects built by Botirjon Shokirov.",
};

export default function ProjectsPage() {
  return <ProjectsComponent />;
}
