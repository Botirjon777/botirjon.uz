import type { Metadata } from "next";
import ServicesPage from "@/components/services-page";
import { isLocale } from "@/i18n/config";
import { pageMetadata } from "@/i18n/metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return isLocale(locale) ? pageMetadata(locale, "services", "/services") : {};
}

export default function Page() {
  return <ServicesPage />;
}
