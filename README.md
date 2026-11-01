# Resume

A two-page A4 resume built with React, TypeScript, JSX, and Vite. Playwright exports the same DOM and CSS to a selectable, linked PDF.

## Requirements and setup

Node 24 (`nvm use`) and npm, matching the portfolio conventions.

```sh
npm ci
npx playwright install chromium
npm run dev
```

Preview: http://127.0.0.1:5174. The page keeps its physical A4 geometry; narrow screens scroll horizontally instead of changing the exported layout.

## Version links

- `/senior-lead-html5-game-engineer` — HTML5 game version.
- `/senior-frontend-platform-engineer` — frontend/platform version.
- `/technical-engineering-lead` — technical/engineering lead version.

These pages show the selected resume title and matching PDF download without a dropdown or Print button. The root URL `/` retains the original editing toolbar, including the selector and linked Resume title. Its `?variant=` query preserves the editing selection and remains compatible with the PDF exporter. A version path takes precedence over query parameters. The build writes an HTML entry for each version, so direct links and refreshes work on static hosting without an SPA fallback.

## Commands

| Command               | Purpose                                                   |
| --------------------- | --------------------------------------------------------- |
| `npm run dev`         | Local React preview with hot reload                       |
| `npm run check`       | Strict typecheck, Oxlint, and Oxfmt verification          |
| `npm run format`      | Format source                                             |
| `npm run build`       | Typecheck and production Vite build                       |
| `npm run verify:site` | Verify static routes, assets, downloads, and two-page fit |
| `npm run preview`     | Preview production build                                  |
| `npm run export:pdf`  | Build, validate, export PDF and browser screenshots       |

The export command clears `output/pdf/`, then starts and closes its own isolated preview server without touching the live development server. It exports all three versions as two-page PDFs into `output/pdf/` and copies the downloads to `public/pdf/` and `dist/pdf/`. The dropdown selects the matching download. Re-run export after content edits to refresh PDFs. Print the downloaded PDF at A4, 100% scale.

## GitHub Pages and CI

The GitHub Actions workflow checks pull requests. Pushes to `main` also deploy the validated build to GitHub Pages. It installs Chromium, runs code checks, exports all three PDFs, verifies two A4 pages per PDF, and tests direct routes, assets, and downloads on a plain static server.

After pushing this project to a public repository, select **Settings → Pages → Build and deployment → Source → GitHub Actions**. The workflow uses the repository name as the deployment base path. Generated PDFs and build output remain ignored by Git; CI includes them in the deployed artifact.

To reproduce the deployment checks locally for a repository named `resume`:

```sh
npm ci
npx playwright install chromium
npm run check
PAGES_BASE_PATH=/resume/ npm run export:pdf
PAGES_BASE_PATH=/resume/ npm run verify:site
```

Local development defaults to `/`. Validation and export use temporary servers and leave the development server running.

## Structure

- `src/data/shared.ts` — shared profile, contact details, companies, jobs, projects, languages, and education.
- `src/data/layout.ts` — page composition, employment grouping, and sidebar section order.
- `src/data/variants.ts` — role-specific wording, skills, and PDF filenames.
- `src/data/resume.ts` — typed composition of shared and variant data.
- `src/components/Resume.tsx` — two-page composition using focused page, toolbar, sidebar, experience, and thumbnail components.
- `src/hooks/useResumeVariant.ts` — selected variant state and URL persistence.
- `src/styles/resume.css` — ordered style entry point; component styles live in separate files alongside shared fonts, base styles, typography, and print overrides.
- `public/assets/` — active images grouped into `profile/`, `companies/`, `games/`, and `open-source/`.
- `public/pdf/` — the three current downloadable PDFs.
- Fonts are self-hosted through `@fontsource`: Source Sans 3 for body text and role titles, Barlow Condensed for the name and section headings.
- `scripts/export-pdf.ts` — Chromium export and checks for page count in the DOM, content overflow, equal screen/print geometry, loaded assets, and uniform thumbnail dimensions.

Conventions follow the portfolio: npm lockfile, Node 24 pin, React 19, strict project-reference TypeScript configs, `#components` / `#data` / `#styles` aliases, Oxfmt and Oxlint. Portfolio-only routing, animation, Tailwind, and deployment dependencies are omitted because the resume uses fixed print CSS and lightweight version routes.

Game images are stored as 480 × 240 px WebP files in `public/assets/games/<company>/<project>.webp`. All thumbnails share an 80 × 40 pt frame, centered cover crop, rounded corners, and a subtle border. Project links come from LinkedIn attachments, the portfolio, and verified game catalogue pages. Screenshots and PDFs are generated artifacts, not editable source.
