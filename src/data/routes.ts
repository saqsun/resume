import type { VariantId } from "./variants";

export const resumeRoutes: Record<VariantId, string> = {
  game: "/senior-lead-html5-game-engineer",
  frontend: "/senior-frontend-platform-engineer",
  lead: "/technical-engineering-lead",
};

export function getRouteVariant(
  pathname: string,
  basePath = "/",
): VariantId | undefined {
  const base = basePath.replace(/\/$/, "");
  if (base && !pathname.startsWith(`${base}/`)) return undefined;
  const path = pathname.slice(base.length).replace(/\/$/, "");
  return (Object.keys(resumeRoutes) as VariantId[]).find(
    (id) => resumeRoutes[id] === path,
  );
}
