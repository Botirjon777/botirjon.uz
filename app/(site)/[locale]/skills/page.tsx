import type { Metadata } from "next";
import SkillsComponent from "@/components/skills";
import { isLocale } from "@/i18n/config";
import { pageMetadata } from "@/i18n/metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return isLocale(locale) ? pageMetadata(locale, "skills", "/skills") : {};
}

export default function Page() {
  return <SkillsComponent />;
}
