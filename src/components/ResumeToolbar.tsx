import { withBasePath } from "#lib/paths";
import type { ChangeEventHandler } from "react";
import { resumeRoutes } from "#data/routes";
import { ExternalLink } from "./ExternalLink";
import { pdfFiles, variants, type VariantId } from "#data/variants";

interface ResumeToolbarProps {
  variantId: VariantId;
  showControls: boolean;
  onVariantChange: ChangeEventHandler<HTMLSelectElement>;
}

export function ResumeToolbar({
  variantId,
  showControls,
  onVariantChange,
}: ResumeToolbarProps) {
  const title = variants[variantId].title;
  const pdfFile = pdfFiles[variantId];

  return (
    <div className="toolbar">
      <span className="toolbar-title">
        <strong>
          {showControls ? (
            <ExternalLink
              href={withBasePath(resumeRoutes[variantId])}
              label={`Open ${title} in a new tab`}
            >
              {title} <span aria-hidden="true">↗</span>
            </ExternalLink>
          ) : (
            title
          )}
        </strong>
        <small>Two-page A4 preview</small>
      </span>
      <div className="toolbar-actions">
        {showControls && (
          <select
            aria-label="Resume version"
            value={variantId}
            onChange={onVariantChange}
          >
            {Object.entries(variants).map(([id, variant]) => (
              <option key={id} value={id}>
                {variant.title}
              </option>
            ))}
          </select>
        )}
        <a href={withBasePath(`pdf/${pdfFile}`)} download={pdfFile}>
          Download PDF
        </a>
      </div>
    </div>
  );
}
