import type { Company } from "#data/types";

export function CompanyName({ company }: { company: Company }) {
  if (!company.href) return company.name;

  return (
    <a href={company.href} target="_blank" rel="noreferrer">
      {company.name}
    </a>
  );
}
