import { Fragment, type ReactNode } from "react";
import Image from "next/image";
import type { Block } from "@/content/blog/types";

// **bold**, `code` and [label](url) — the only inline syntax posts use.
const INLINE = /(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)\s]+\))/g;

export function Inline({ text }: { text: string }) {
  const parts = text.split(INLINE);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={i} className="font-semibold text-paper">
              {part.slice(2, -2)}
            </strong>
          );
        }
        if (part.startsWith("`") && part.endsWith("`")) {
          return (
            <code key={i} className="bg-ink-3 px-1.5 py-0.5 font-mono text-[0.85em] text-flame-soft">
              {part.slice(1, -1)}
            </code>
          );
        }
        const link = part.match(/^\[([^\]]+)\]\(([^)\s]+)\)$/);
        if (link) {
          const external = /^https?:/.test(link[2]);
          return (
            <a
              key={i}
              href={link[2]}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="link-underline"
            >
              {link[1]}
            </a>
          );
        }
        return <Fragment key={i}>{part}</Fragment>;
      })}
    </>
  );
}

function renderBlock(block: Block, i: number, simplifiedLabel: string): ReactNode {
  switch (block.type) {
    case "p":
      return (
        <p key={i}>
          <Inline text={block.text} />
        </p>
      );
    case "h2":
      return (
        <h2 key={i} className="!mt-16 font-display text-4xl leading-tight text-paper sm:text-5xl">
          <Inline text={block.text} />
        </h2>
      );
    case "quote":
      return (
        <blockquote key={i} className="!my-12 border-l-2 border-flame pl-6 font-display text-3xl italic leading-snug text-paper">
          <Inline text={block.text} />
        </blockquote>
      );
    case "list":
      return (
        <ul key={i} className="space-y-3">
          {block.items.map((item, j) => (
            <li key={j} className="flex gap-4">
              <span className="mt-[0.8em] h-px w-4 shrink-0 bg-flame" />
              <span>
                <Inline text={item} />
              </span>
            </li>
          ))}
        </ul>
      );
    case "code":
      return (
        <figure key={i} className="!my-10 border border-line bg-ink-2">
          <figcaption className="flex items-center justify-between border-b border-line px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.16em] text-mute">
            <span>{block.lang}</span>
            <span>{simplifiedLabel}</span>
          </figcaption>
          <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed text-paper/85">
            <code>{block.code}</code>
          </pre>
        </figure>
      );
    case "image":
      return (
        <figure key={i} className="!my-12">
          <Image src={block.src} alt={block.alt} width={1440} height={800} className="h-auto w-full border border-line" />
          {block.caption && <figcaption className="eyebrow mt-3">{block.caption}</figcaption>}
        </figure>
      );
  }
}

/** A post body. Code blocks are labelled as simplified, as every snippet in a post is. */
export function PostBody({ blocks, simplifiedLabel }: { blocks: Block[]; simplifiedLabel: string }) {
  return (
    <div className="space-y-6 text-lg leading-[1.75] text-paper/80">
      {blocks.map((block, i) => renderBlock(block, i, simplifiedLabel))}
    </div>
  );
}
