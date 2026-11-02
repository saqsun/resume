import { getPlainJobText } from "#lib/job-text";
import type { Job } from "#data/types";
import { JobTextContent } from "./JobTextContent";
import { JobHeading } from "./JobHeading";
import { ThumbnailList } from "./Thumbnail";

interface JobEntryProps {
  job: Job;
  showCompany?: boolean;
  showImages?: boolean;
}

export function JobEntry({
  job,
  showCompany = true,
  showImages = true,
}: JobEntryProps) {
  return (
    <article className="job-entry">
      <JobHeading
        role={job.role}
        company={showCompany ? job.company : undefined}
      />
      <p className="date">{job.date}</p>
      <p className="intro">
        <JobTextContent text={job.intro} />
      </p>
      {job.bullets.length > 0 && (
        <ul>
          {job.bullets.map((bullet) => (
            <li key={getPlainJobText(bullet)}>
              <JobTextContent text={bullet} />
            </li>
          ))}
        </ul>
      )}
      {showImages && <ThumbnailList images={job.images} />}
    </article>
  );
}
