import type { Job } from "#data/types";
import { JobHeading } from "./JobHeading";
import { ThumbnailList } from "./Thumbnail";

export function JobEntry({
  job,
  showCompany = true,
  showImages = true,
}: {
  job: Job;
  showCompany?: boolean;
  showImages?: boolean;
}) {
  return (
    <article className="job-entry">
      <JobHeading
        role={job.role}
        company={showCompany ? job.company : undefined}
      />
      <p className="date">{job.date}</p>
      <p className="intro">{job.intro}</p>
      {job.bullets.length > 0 && (
        <ul>
          {job.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      )}
      {showImages && <ThumbnailList images={job.images} />}
    </article>
  );
}
