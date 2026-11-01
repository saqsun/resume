import type { Company } from "#data/types";
import { CompanyLogo } from "./CompanyLogo";
import { CompanyName } from "./CompanyName";

export function JobHeading({
  role,
  company,
}: {
  role: string;
  company?: Company;
}) {
  if (!company) return <h3>{role}</h3>;

  return (
    <h3 className="employer-heading">
      <CompanyLogo company={company} />
      {role} at <CompanyName company={company} />
    </h3>
  );
}
