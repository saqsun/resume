import { shared } from "./shared";
import { pages, type EmploymentEntry, type PageLayout } from "./layout";
import type { VariantData, VariantId } from "./variants";
import type {
  Job,
  Language,
  Profile,
  ResolvedEmploymentEntry,
  ResolvedPage,
} from "./types";

type JobLookup = Map<string, Job>;

export function createProfile(variant: VariantData): Profile {
  return {
    name: shared.name,
    portrait: shared.portrait,
    contact: shared.contact,
    links: shared.links,
    openSourceProjects: shared.openSourceProjects,
    education: shared.education,
    title: variant.title,
    summary: variant.summary,
    skills: variant.skills,
    languages: shared.languages.map(createLanguage),
  };
}

function createLanguage(language: (typeof shared.languages)[number]): Language {
  const width = `${language.proficiency}%`;
  return { ...language, barStyle: { width } };
}

export function resolveJobs(
  variant: VariantData,
  variantId: VariantId,
): JobLookup {
  const jobs: JobLookup = new Map();

  for (const job of shared.jobs) {
    const content = variant.jobContent[job.id];
    if (!content) throw new Error(`Missing ${variantId} content for ${job.id}`);
    jobs.set(job.id, { ...job, ...content });
  }

  return jobs;
}

function requireJob(jobId: string, jobs: JobLookup): Job {
  const job = jobs.get(jobId);
  if (!job) throw new Error(`Unknown job in page layout: ${jobId}`);
  return job;
}

function resolveEntry(
  entry: EmploymentEntry,
  jobs: JobLookup,
): ResolvedEmploymentEntry {
  const roles = entry.jobIds.map((jobId) => requireJob(jobId, jobs));
  return { ...entry, jobs: roles };
}

function resolvePage(page: PageLayout, jobs: JobLookup): ResolvedPage {
  const employment = page.employment.map((entry) => resolveEntry(entry, jobs));
  return { ...page, employment };
}

export function resolvePages(jobs: JobLookup): ResolvedPage[] {
  return pages.map((page) => resolvePage(page, jobs));
}
