import type { Job } from "#data/types";
import { CompanyLogo } from "./CompanyLogo";
import { CompanyName } from "./CompanyName";
import { ThumbnailList } from "./Thumbnail";
import { JobEntry } from "./JobEntry";

export function CompanyGroup({ jobs, id }: { jobs: Job[]; id: string }) {
  const company = jobs[0].company;
  const headingId = `${id}-heading`;
  const images = jobs.flatMap((job) => job.images ?? []);
  return (
    <section className="company-group" aria-labelledby={headingId}>
      <h3 id={headingId} className="company-heading employer-heading">
        <CompanyLogo company={company} />
        <CompanyName company={company} />
      </h3>
      <div className="company-roles">
        {jobs.map((job) => (
          <JobEntry
            key={job.id}
            job={job}
            showCompany={false}
            showImages={false}
          />
        ))}
      </div>
      <ThumbnailList images={images} />
    </section>
  );
}
