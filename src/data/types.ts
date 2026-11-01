import type { shared } from "./shared";
import type { VariantData } from "./variants";
import type { EmploymentEntry, PageLayout } from "./layout";

export interface ThumbnailData {
  src: string;
  alt: string;
  href?: string;
  label?: string;
  fit?: "cover" | "contain";
}

export interface Company {
  name: string;
  logo: string;
}

export interface Job {
  id: string;
  company: Company;
  roleTitle?: string;
  title: string;
  date: string;
  intro: string;
  bullets: string[];
  images?: ThumbnailData[];
}

export type Language = (typeof shared.languages)[number] & {
  barStyle: { width: string };
};

export type Profile = Pick<
  typeof shared,
  "name" | "portrait" | "contact" | "links" | "openSourceProjects" | "education"
> &
  Pick<VariantData, "title" | "summary" | "skills"> & {
    languages: Language[];
  };

export interface ResolvedEmploymentEntry extends EmploymentEntry {
  jobs: Job[];
}

export interface ResolvedPage extends Omit<PageLayout, "employment"> {
  employment: ResolvedEmploymentEntry[];
}

export interface ResumeData {
  profile: Profile;
  pages: ResolvedPage[];
}
