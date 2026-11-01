import { withBasePath } from "#lib/paths";
import type { ReactNode } from "react";
import type { Profile } from "#data/types";

export function ResumePage({
  profile,
  number,
  totalPages,
  showHeader,
  children,
  sidebar,
}: {
  profile: Profile;
  number: number;
  totalPages: number;
  showHeader?: boolean;
  children: ReactNode;
  sidebar: ReactNode;
}) {
  return (
    <section
      className={`page page-${number}`}
      aria-label={`Resume page ${number}`}
    >
      {showHeader && (
        <header className="page-header">
          <img
            className="profile-portrait"
            src={withBasePath(`assets/${profile.portrait}`)}
            alt={profile.name}
          />
          <div>
            <h1>{profile.name}</h1>
            <p>{profile.title}</p>
          </div>
        </header>
      )}
      <div className="resume-columns">
        <div className="main-column">{children}</div>
        <aside>{sidebar}</aside>
      </div>
      <footer>
        <span>
          {profile.name} · {profile.title}
        </span>
        <span>
          {number} / {totalPages}
        </span>
      </footer>
    </section>
  );
}
