import type { ReactNode } from "react";
import type { Profile } from "#data/types";
import { sidebarTitles, type SidebarSectionId } from "#data/layout";
import { Thumbnail } from "./Thumbnail";
import { ExternalLink } from "./ExternalLink";

type SidebarContentProps = { profile: Profile };

function SidebarSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="sidebar-section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

function DetailsSection({ profile }: SidebarContentProps) {
  const { contact, links } = profile;
  return (
    <SidebarSection title={sidebarTitles.details}>
      <div className="contact-details">
        <p>{contact.location}</p>
        <a href={contact.phone.href}>{contact.phone.label}</a>
        <a className="contact-email" href={`mailto:${contact.email}`}>
          {contact.email}
        </a>
        <nav className="contact-links" aria-label="Profile links">
          {links.map((link) => (
            <ExternalLink key={link.label} href={link.href}>
              {link.label}
            </ExternalLink>
          ))}
        </nav>
      </div>
    </SidebarSection>
  );
}

function SkillsSection({ profile }: SidebarContentProps) {
  return (
    <SidebarSection title={sidebarTitles.skills}>
      <ul className="skills-list">
        {profile.skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </SidebarSection>
  );
}

function LanguagesSection({ profile }: SidebarContentProps) {
  return (
    <SidebarSection title={sidebarTitles.languages}>
      <ul className="language-list">
        {profile.languages.map((language) => (
          <li key={language.name}>
            {language.name}
            <span className="language-bar" aria-hidden="true">
              <span style={language.barStyle} />
            </span>
          </li>
        ))}
      </ul>
    </SidebarSection>
  );
}

function OpenSourceProjectsSection({ profile }: SidebarContentProps) {
  return (
    <SidebarSection title={sidebarTitles.openSourceProjects}>
      {profile.openSourceProjects.map((project) => (
        <OpenSourceProject key={project.name} project={project} />
      ))}
    </SidebarSection>
  );
}

function EducationSection({ profile }: SidebarContentProps) {
  return (
    <SidebarSection title={sidebarTitles.education}>
      {profile.education.map((education) => (
        <EducationItem
          key={`${education.university}-${education.degree}`}
          education={education}
        />
      ))}
    </SidebarSection>
  );
}

const sectionComponents = {
  details: DetailsSection,
  skills: SkillsSection,
  openSourceProjects: OpenSourceProjectsSection,
  languages: LanguagesSection,
  education: EducationSection,
};

export function Sidebar({
  sections,
  profile,
}: {
  sections: SidebarSectionId[];
  profile: Profile;
}) {
  return (
    <>
      {sections.map((section) => {
        const Component = sectionComponents[section];
        return <Component key={section} profile={profile} />;
      })}
    </>
  );
}

function OpenSourceProject({
  project,
}: {
  project: Profile["openSourceProjects"][number];
}) {
  return (
    <article className="open-source-project">
      <Thumbnail
        src={project.image}
        alt={project.name}
        href={project.docs}
        fit={project.imageFit}
      />
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <nav aria-label={`${project.name} links`}>
        <ExternalLink href={project.source}>{project.sourceLabel}</ExternalLink>
      </nav>
    </article>
  );
}

function EducationItem({
  education,
}: {
  education: Profile["education"][number];
}) {
  return (
    <div className="sidebar-education">
      <div className="education-degree">
        <h3>{education.degree}</h3>
        <p>{education.subject}</p>
      </div>
      <p className="education-university">{education.university}</p>
      <p className="education-years">{education.date}</p>
    </div>
  );
}
