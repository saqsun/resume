export type SidebarSectionId =
  | "details"
  | "skills"
  | "openSourceProjects"
  | "languages"
  | "education";

export interface EmploymentEntry {
  id: string;
  jobIds: string[];
  grouped?: boolean;
}

export interface PageLayout {
  id: string;
  showHeader?: boolean;
  summaryTitle?: string;
  employmentTitle?: string;
  employmentLabel?: string;
  employment: EmploymentEntry[];
  sidebar: SidebarSectionId[];
}

export const pages: PageLayout[] = [
  {
    id: "recent",
    showHeader: true,
    summaryTitle: "Professional Summary",
    employmentTitle: "Employment History",
    employment: [
      { id: "ixilix", jobIds: ["ixilix"] },
      {
        id: "playrix",
        jobIds: ["playrix-lead", "playrix-framework"],
        grouped: true,
      },
      { id: "rubyplay", jobIds: ["rubyplay"] },
    ],
    sidebar: ["details", "skills", "openSourceProjects"],
  },
  {
    id: "earlier",
    employmentLabel: "Employment history continued",
    employment: [
      { id: "voodoo", jobIds: ["voodoo"] },
      { id: "armath", jobIds: ["armath"] },
      { id: "rockbite", jobIds: ["rockbite"] },
      { id: "plexonic", jobIds: ["plexonic"] },
    ],
    sidebar: ["languages", "education"],
  },
];

export const sidebarTitles: Record<SidebarSectionId, string> = {
  details: "Details",
  skills: "Skills",
  openSourceProjects: "Open Source",
  languages: "Languages",
  education: "Education",
};
