import type { ResolvedEmploymentEntry } from "#data/types";
import { CompanyGroup } from "./CompanyGroup";
import { JobEntry } from "./JobEntry";

export function EmploymentEntry({ entry }: { entry: ResolvedEmploymentEntry }) {
  if (entry.grouped) {
    return <CompanyGroup id={entry.id} jobs={entry.jobs} />;
  }

  return (
    <>
      {entry.jobs.map((job) => (
        <JobEntry key={job.id} job={job} />
      ))}
    </>
  );
}
