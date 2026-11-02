import { Fragment } from "react";
import type { JobText } from "#data/types";
import { ExternalLink } from "./ExternalLink";

export function JobTextContent({ text }: { text: JobText }) {
  if (typeof text === "string") return <>{text}</>;

  return text.map((part) => {
    if (typeof part === "string") return <Fragment key={part}>{part}</Fragment>;
    const content = part.bold ? <strong>{part.text}</strong> : part.text;
    return (
      <ExternalLink key={part.text} href={part.href}>
        {content}
      </ExternalLink>
    );
  });
}
