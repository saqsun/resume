import { useCallback, useState, type ChangeEvent } from "react";
import { getRouteVariant } from "#data/routes";
import { isVariantId, type VariantId } from "#data/variants";

// Dedicated resume routes take precedence over the preview's query parameter.
function readInitialVariant() {
  const url = new URL(window.location.href);
  const routeVariant = getRouteVariant(url.pathname, import.meta.env.BASE_URL);
  if (routeVariant) return { variantId: routeVariant, isSharedView: true };

  const queryVariant = url.searchParams.get("variant");
  const variantId: VariantId = isVariantId(queryVariant)
    ? queryVariant
    : "html5GameEngineer";
  return { variantId, isSharedView: false };
}

export function useResumeVariant() {
  const [initial] = useState(readInitialVariant);
  const [variantId, setVariantId] = useState(initial.variantId);

  const selectVariant = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
    const selectedVariant = event.target.value;
    if (!isVariantId(selectedVariant)) return;

    setVariantId(selectedVariant);
    const url = new URL(window.location.href);
    url.searchParams.set("variant", selectedVariant);
    window.history.replaceState(null, "", url);
  }, []);

  return { variantId, selectVariant, isSharedView: initial.isSharedView };
}
