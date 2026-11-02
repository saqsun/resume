import type { JobText } from "#data/types";

export function getPlainJobText(text: JobText): string {
  if (typeof text === "string") return text;
  return text
    .map((part) => (typeof part === "string" ? part : part.text))
    .join("");
}
