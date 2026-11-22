import type { Metadata } from "next";
import { notFound } from "next/navigation";
import HomeComponent, { type PostSummary } from "@/components/home";
import { isLocale } from "@/i18n/config";
import { alternatesFor } from "@/i18n/metadata";
import { posts } from "@/content/blog";

type Params = Promise<{ locale: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale } = await params;
  return isLocale(locale) ? { alternates: alternatesFor(locale, "/") } : {};
}

export default async function HomePage({ params }: { params: Params }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  // Only what the "From the blog" strip shows, so full posts stay on the server.
  const latest: PostSummary[] = posts.slice(0, 3).map((p) => ({
    slug: p.slug,
    date: p.date,
    readingMinutes: p.readingMinutes,
    title: p.content[locale].title,
    excerpt: p.content[locale].excerpt,
  }));

  return <HomeComponent latest={latest} />;
}
