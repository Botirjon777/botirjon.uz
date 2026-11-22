import type { Metadata } from "next";
import ProjectsComponent from "@/components/projects";
import { isLocale } from "@/i18n/config";
import { pageMetadata } from "@/i18n/metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return isLocale(locale) ? pageMetadata(locale, "projects", "/projects") : {};
}

export default function Page() {
  return <ProjectsComponent />;
}
