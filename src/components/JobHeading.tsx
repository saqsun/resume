import type { Company } from "#data/types";
import { CompanyLogo } from "./CompanyLogo";
import { CompanyName } from "./CompanyName";

interface JobHeadingProps {
  role: string;
  company?: Company;
}

export function JobHeading({ role, company }: JobHeadingProps) {
  if (!company) return <h3>{role}</h3>;

  return (
    <h3 className="employer-heading">
      <CompanyLogo company={company} />
      {role} at <CompanyName company={company} />
    </h3>
  );
}
