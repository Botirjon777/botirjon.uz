import type { Metadata } from "next";
import AboutComponent from "@/components/about";
import { isLocale } from "@/i18n/config";
import { pageMetadata } from "@/i18n/metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return isLocale(locale) ? pageMetadata(locale, "about", "/about") : {};
}

export default function Page() {
  return <AboutComponent />;
}
