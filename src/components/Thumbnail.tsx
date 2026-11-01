import { withBasePath } from "#lib/paths";
import type { ThumbnailData } from "#data/types";
import { ExternalLink } from "./ExternalLink";

export function Thumbnail({
  src,
  alt,
  href,
  label,
  fit = "cover",
}: ThumbnailData) {
  const className =
    fit === "contain" ? "thumbnail thumbnail-contain" : "thumbnail";
  return (
    <figure className="project-thumbnail">
      <ExternalLink href={href} label={`${alt}: view project`}>
        <img
          className={className}
          src={withBasePath(`assets/${src}`)}
          alt={alt}
        />
      </ExternalLink>
      {label && (
        <figcaption>
          <ExternalLink href={href}>{label}</ExternalLink>
        </figcaption>
      )}
    </figure>
  );
}

export function ThumbnailList({ images }: { images?: ThumbnailData[] }) {
  if (!images?.length) return null;
  return (
    <div className="thumbnail-list">
      {images.map((image) => (
        <Thumbnail key={image.src} {...image} />
      ))}
    </div>
  );
}
