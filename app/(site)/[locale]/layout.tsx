import type React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Analytics } from "@vercel/analytics/next";
import NavbarComponent from "@/components/navbar";
import FooterComponent from "@/components/footer";
import { isLocale, locales, localeTags } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { alternatesFor } from "@/i18n/metadata";
import { I18nProvider } from "@/i18n/provider";
import { fontClasses } from "@/lib/fonts";
import "../../globals.css";

type Params = Promise<{ locale: string }>;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const { meta } = getDictionary(locale);
  return {
    metadataBase: new URL("https://botirjon.uz"),
    title: meta.siteTitle,
    description: meta.siteDescription,
    keywords: [
      "Botirjon Shokirov",
      "Bronit",
      "Software Engineer",
      "Full Stack Developer",
      "Uzbekistan",
      "TypeScript",
      "React",
      "Next.js",
      "Python",
    ],
    authors: [{ name: "Botirjon Shokirov" }],
    creator: "Botirjon Shokirov",
    alternates: alternatesFor(locale, "/"),
    openGraph: {
      title: meta.siteTitle,
      description: meta.siteDescription,
      url: `https://botirjon.uz/${locale}`,
      siteName: "Botirjon Shokirov",
      images: [{ url: "/bronit/home.webp", width: 1440, height: 800, alt: "Bronit" }],
      locale: localeTags[locale].replace(/-/g, "_"),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: meta.siteTitle,
      description: meta.siteDescription,
      images: ["/bronit/home.webp"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params: Params }>) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html lang={localeTags[locale]} className="scroll-smooth">
      <body className={`${fontClasses(locale)} font-sans antialiased bg-ink text-paper`}>
        <I18nProvider locale={locale} dict={getDictionary(locale)}>
          <NavbarComponent />
          <div className="pt-16">{children}</div>
          <FooterComponent />
        </I18nProvider>
        <Analytics />
      </body>
    </html>
  );
}
