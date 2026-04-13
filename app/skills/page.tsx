import type { Metadata } from "next";
import SkillsComponent from "@/components/skills";

export const metadata: Metadata = {
  title: "Skills | Botirjon Shokirov",
  description: "Technical skills and technologies used by Botirjon Shokirov.",
};

export default function SkillsPage() {
  return <SkillsComponent />;
}
