import { Fragment } from "react";
import type { Em } from "@/i18n/dictionaries/en";

/** Text with "\n" turned into line breaks. */
export function Lines({ text }: { text: string }) {
  const parts = text.split("\n");
  return (
    <>
      {parts.map((part, i) => (
        <Fragment key={i}>
          {i > 0 && <br />}
          {part}
        </Fragment>
      ))}
    </>
  );
}

/** A headline with one phrase in italic orange (styled by `.display em`). */
export function EmText({ value }: { value: Em }) {
  return (
    <>
      <Lines text={value.before} />
      <em>
        <Lines text={value.em} />
      </em>
      {value.after && <Lines text={value.after} />}
    </>
  );
}
