import { variants, type VariantId } from "./variants";
import { createProfile, resolveJobs, resolvePages } from "./resolve";
import type { ResumeData } from "./types";

export function getResume(variantId: VariantId): ResumeData {
  const variant = variants[variantId];
  const profile = createProfile(variant);
  const jobs = resolveJobs(variant, variantId);
  const pages = resolvePages(jobs);

  return { profile, pages };
}
