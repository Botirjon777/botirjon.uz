import type { ReactNode } from "react";
import { EmText } from "@/components/em";
import type { Em } from "@/i18n/dictionaries/en";

/** Shared top of the inner pages: mono eyebrow + large serif title. */
export default function PageHeader({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: Em;
  children?: ReactNode;
}) {
  return (
    <header className="mb-16">
      <p className="eyebrow animate-fade-in-up mb-6">{eyebrow}</p>
      <h1 className="display animate-fade-in-up delay-100 text-6xl sm:text-8xl">
        <EmText value={title} />
      </h1>
      {children && <div className="animate-fade-in-up delay-200 mt-8">{children}</div>}
    </header>
  );
}
