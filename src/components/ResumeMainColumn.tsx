import type { ResolvedPage } from "#data/types";
import { EmploymentEntry } from "./EmploymentEntry";

interface ResumeMainColumnProps {
  page: ResolvedPage;
  summary: string;
}

export function ResumeMainColumn({ page, summary }: ResumeMainColumnProps) {
  return (
    <>
      {page.summaryTitle && (
        <section className="summary">
          <h2>{page.summaryTitle}</h2>
          <p>{summary}</p>
        </section>
      )}
      <section className="employment-list" aria-label={page.employmentLabel}>
        {page.employmentTitle && <h2>{page.employmentTitle}</h2>}
        {page.employment.map((entry) => (
          <EmploymentEntry key={entry.id} entry={entry} />
        ))}
      </section>
    </>
  );
}
