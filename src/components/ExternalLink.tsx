import type { ReactNode } from "react";

interface ExternalLinkProps {
  href?: string;
  label?: string;
  children: ReactNode;
}

export function ExternalLink({ href, label, children }: ExternalLinkProps) {
  if (!href) return <>{children}</>;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
      {children}
    </a>
  );
}
