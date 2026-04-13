import type { Metadata } from "next";
import AboutComponent from "@/components/about";

export const metadata: Metadata = {
  title: "About | Botirjon Shokirov",
  description:
    "Learn more about Botirjon Shokirov, a Software Engineer based in Uzbekistan.",
};

export default function AboutPage() {
  return <AboutComponent />;
}
