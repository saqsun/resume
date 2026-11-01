import { getResume } from "#data/resume";
import { useResumeVariant } from "#src/hooks/useResumeVariant";
import { ResumeDocument } from "./ResumeDocument";
import { ResumeToolbar } from "./ResumeToolbar";

export function Resume() {
  const { variantId, selectVariant, isSharedView } = useResumeVariant();
  const resume = getResume(variantId);

  return (
    <>
      <ResumeToolbar
        variantId={variantId}
        onVariantChange={selectVariant}
        showControls={!isSharedView}
      />
      <ResumeDocument resume={resume} />
    </>
  );
}
