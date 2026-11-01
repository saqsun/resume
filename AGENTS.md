# Resume project

- Maintain one shared layout and three data-driven variants: html5GameEngineer, frontendPlatformEngineer, and technicalEngineeringLead.
- Keep shared employment facts, images, links, and projects in `src/data/shared.ts`; role-specific content and PDF filenames belong in `src/data/variants.ts`. Compose them in `src/data/resume.ts`.
- Preserve two A4 pages and reverse-chronological work experience in the main column. Keep both Playrix roles grouped and RubyPlay together on page one.
- Preserve the full-height navy sidebars. Page one: Details (including profile links), Skills, Open Source. Page two: Languages, Education.
- Use the shared Thumbnail component for all project images; preserve uniform dimensions and clickable links.
- Do not fabricate game links or employment details.
- Follow npm, Node 24, strict TypeScript, Oxfmt, and Oxlint conventions. Run `npm run check` after changes and verify page fit for all variants when content or layout changes.
- During editing, update only the live preview. Export PDFs only when the user requests it. `npm run export:pdf` clears generated output and exports all three versions; verify each is two A4 pages.
- Keep generated `output/`, `public/pdf/`, and `dist/` out of Git. Active images belong in categorized `public/assets/` directories.
- Leave the user's live-preview server running. Do not open previews or side panels unless requested.
