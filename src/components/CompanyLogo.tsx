import { withBasePath } from "#lib/paths";
import type { Company } from "#data/types";

export function CompanyLogo({ company }: { company: Company }) {
  return (
    <img
      className="company-logo"
      src={withBasePath(`assets/${company.logo}`)}
      alt={`${company.name} logo`}
    />
  );
}
