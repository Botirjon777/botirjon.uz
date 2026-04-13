import type { Metadata } from "next";
import ExperienceComponent from "@/components/experience";

export const metadata: Metadata = {
  title: "Experience | Botirjon Shokirov",
  description:
    "Professional experience of Botirjon Shokirov, Software Engineer.",
};

export default function ExperiencePage() {
  return <ExperienceComponent />;
}
