import type { VariantId } from "./variants";

export const resumeRoutes: Record<VariantId, string> = {
  html5GameEngineer: "/senior-lead-html5-game-engineer",
  frontendPlatformEngineer: "/senior-frontend-platform-engineer",
  technicalEngineeringLead: "/technical-engineering-lead",
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
