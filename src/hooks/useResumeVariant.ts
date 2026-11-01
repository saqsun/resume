import { useCallback, useState, type ChangeEvent } from "react";
import { getRouteVariant } from "#data/routes";
import { isVariantId, type VariantId } from "#data/variants";

export function useResumeVariant() {
  const [isSharedView] = useState(
    () =>
      getRouteVariant(window.location.pathname, import.meta.env.BASE_URL) !==
      undefined,
  );
  const [variantId, setVariantId] = useState<VariantId>(() => {
    const routeVariant = getRouteVariant(
      window.location.pathname,
      import.meta.env.BASE_URL,
    );
    if (routeVariant) return routeVariant;
    const value = new URLSearchParams(window.location.search).get("variant");
    return isVariantId(value) ? value : "game";
  });
  const selectVariant = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    if (!isVariantId(value)) return;
    setVariantId(value);
    const url = new URL(window.location.href);
    url.searchParams.set("variant", value);
    window.history.replaceState(null, "", url);
  }, []);

  return { variantId, selectVariant, isSharedView };
}
