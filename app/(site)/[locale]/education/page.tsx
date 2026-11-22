import type { Metadata } from "next";
import EducationComponent from "@/components/education";
import { isLocale } from "@/i18n/config";
import { pageMetadata } from "@/i18n/metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return isLocale(locale) ? pageMetadata(locale, "education", "/education") : {};
}

export default function Page() {
  return <EducationComponent />;
}
