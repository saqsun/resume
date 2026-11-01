import type { Profile, ResumeData, ResolvedPage } from "#data/types";
import { ResumePage } from "./ResumePage";
import { ResumeMainColumn } from "./ResumeMainColumn";
import { Sidebar } from "./Sidebar";

export function ResumeDocument({ resume }: { resume: ResumeData }) {
  return (
    <main className="resume">
      {resume.pages.map((page, index) => (
        <DocumentPage
          key={page.id}
          page={page}
          profile={resume.profile}
          number={index + 1}
          totalPages={resume.pages.length}
        />
      ))}
    </main>
  );
}

interface DocumentPageProps {
  page: ResolvedPage;
  profile: Profile;
  number: number;
  totalPages: number;
}

function DocumentPage({
  page,
  profile,
  number,
  totalPages,
}: DocumentPageProps) {
  return (
    <ResumePage
      profile={profile}
      number={number}
      totalPages={totalPages}
      showHeader={page.showHeader}
      sidebar={<Sidebar sections={page.sidebar} profile={profile} />}
    >
      <ResumeMainColumn page={page} summary={profile.summary} />
    </ResumePage>
  );
}
