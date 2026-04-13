import type { Metadata } from "next";
import HeroComponent from "@/components/hero";

export const metadata: Metadata = {
  title: "Botirjon Shokirov | Software Engineer",
  description:
    "Software Engineer based in Uzbekistan — JavaScript, TypeScript, Python.",
};

export default function HomePage() {
  return <HeroComponent />;
}
