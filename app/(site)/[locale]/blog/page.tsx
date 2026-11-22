import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowUpRight } from "react-icons/fi";
import PageHeader from "@/components/page-header";
import { posts } from "@/content/blog";
import { isLocale, localizedPath } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { formatDate } from "@/lib/date";
import { pageMetadata } from "@/i18n/metadata";

type Params = Promise<{ locale: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale } = await params;
  return isLocale(locale) ? pageMetadata(locale, "blog", "/blog") : {};
}

export default async function BlogPage({ params }: { params: Params }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = getDictionary(locale).blog;

  return (
    <main className="min-h-screen py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <PageHeader eyebrow={t.eyebrow} title={t.title}>
          <p className="max-w-xl text-lg leading-relaxed text-paper/70">{t.intro}</p>
        </PageHeader>

        {posts.length === 0 ? (
          <p className="text-mute">{t.empty}</p>
        ) : (
          <ol className="border-t border-line">
            {posts.map((post, i) => {
              const c = post.content[locale];
              return (
                <li
                  key={post.slug}
                  className="animate-fade-in-up border-b border-line"
                  style={{ animationDelay: `${0.2 + i * 0.06}s` }}
                >
                  <Link
                    href={localizedPath(locale, `/blog/${post.slug}`)}
                    className="group grid gap-4 py-10 md:grid-cols-[12rem_1fr_auto] md:items-baseline md:gap-12"
                  >
                    <div className="space-y-1">
                      <time dateTime={post.date} className="eyebrow block">
                        {formatDate(post.date, locale)}
                      </time>
                      <span className="eyebrow block">
                        {post.readingMinutes} {t.minRead}
                      </span>
                    </div>
                    <div>
                      <h2 className="font-display text-4xl leading-tight text-paper transition-colors group-hover:text-flame sm:text-5xl">
                        {c.title}
                      </h2>
                      <p className="mt-4 max-w-2xl leading-relaxed text-paper/65">{c.excerpt}</p>
                      <ul className="mt-5 flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <li key={tag} className="tag">
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <FiArrowUpRight className="hidden h-7 w-7 text-mute transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-flame md:block" />
                  </Link>
                </li>
              );
            })}
          </ol>
        )}
      </div>
    </main>
  );
}
