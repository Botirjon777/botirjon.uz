import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft, FiArrowUpRight } from "react-icons/fi";
import { PostBody } from "@/components/blog/rich-text";
import { getPost, posts } from "@/content/blog";
import { isLocale, locales, localeTags, localizedPath } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { formatDate } from "@/lib/date";
import { alternatesFor } from "@/i18n/metadata";

type Params = Promise<{ locale: string; slug: string }>;

export function generateStaticParams() {
  return locales.flatMap((locale) => posts.map((p) => ({ locale, slug: p.slug })));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getPost(slug);
  if (!isLocale(locale) || !post) return {};
  const c = post.content[locale];
  const title = `${c.title} | ${getDictionary(locale).common.name}`;
  return {
    title,
    description: c.excerpt,
    alternates: alternatesFor(locale, `/blog/${slug}`),
    openGraph: {
      type: "article",
      title: c.title,
      description: c.excerpt,
      publishedTime: post.date,
      locale: localeTags[locale].replace(/-/g, "_"),
      tags: post.tags,
    },
  };
}

export default async function PostPage({ params }: { params: Params }) {
  const { locale, slug } = await params;
  const post = getPost(slug);
  if (!isLocale(locale) || !post) notFound();

  const t = getDictionary(locale).blog;
  const c = post.content[locale];
  const others = posts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <main className="min-h-screen py-16 sm:py-24">
      <article className="mx-auto max-w-3xl px-6">
        <Link
          href={localizedPath(locale, "/blog")}
          className="eyebrow group inline-flex items-center gap-2 transition-colors hover:text-flame"
        >
          <FiArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          {t.backToBlog}
        </Link>

        <header className="mt-12 border-b border-line pb-10">
          <div className="eyebrow animate-fade-in-up flex flex-wrap items-center gap-x-4 gap-y-2">
            <time dateTime={post.date}>{formatDate(post.date, locale)}</time>
            <span className="text-flame">·</span>
            <span>
              {post.readingMinutes} {t.minRead}
            </span>
          </div>
          <h1 className="display animate-fade-in-up delay-100 mt-6 text-5xl sm:text-7xl">{c.title}</h1>
          <p className="animate-fade-in-up delay-200 mt-6 text-xl leading-relaxed text-paper/70">{c.excerpt}</p>
          <ul className="animate-fade-in-up delay-300 mt-6 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <li key={tag} className="tag">
                {tag}
              </li>
            ))}
          </ul>
        </header>

        <div className="animate-fade-in-up delay-300 mt-12">
          <PostBody blocks={c.body} simplifiedLabel={t.simplified} />
        </div>
      </article>

      {others.length > 0 && (
        <aside className="mx-auto mt-24 max-w-6xl px-6">
          <p className="eyebrow mb-8">{t.morePosts}</p>
          <ul className="grid gap-px border border-line bg-line md:grid-cols-3">
            {others.map((p) => (
              <li key={p.slug} className="bg-black">
                <Link
                  href={localizedPath(locale, `/blog/${p.slug}`)}
                  className="group flex h-full flex-col justify-between gap-10 p-8 transition-colors hover:bg-ink-2"
                >
                  <span className="font-display text-2xl leading-snug text-paper transition-colors group-hover:text-flame">
                    {p.content[locale].title}
                  </span>
                  <span className="eyebrow flex items-center justify-between">
                    {formatDate(p.date, locale)}
                    <FiArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      )}
    </main>
  );
}
