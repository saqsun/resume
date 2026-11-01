import type { Job } from "#data/types";
import { CompanyLogo } from "./CompanyLogo";
import { ThumbnailList } from "./Thumbnail";

export function JobEntry({
  job,
  title,
  showImages = true,
}: {
  job: Job;
  title?: string;
  showImages?: boolean;
}) {
  return (
    <article className="job-entry">
      <h3 className={title ? undefined : "employer-heading"}>
        {!title && <CompanyLogo company={job.company} />}
        {title ?? job.title}
      </h3>
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
