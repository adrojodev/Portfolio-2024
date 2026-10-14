# Rojo’s portfolio

Personal portfolio for David Hernández (Rojo), built with the existing Astro 4, Tailwind CSS, React integration, and Work Sans stack. Static pages are generated at build time. The active navigation is plain HTML; React remains available for future interactive components.

## Local development

```sh
npm ci
npm run dev
```

Use the local URL printed by Astro. No environment variables are needed for the portfolio.

## Validation and preview

```sh
npm run build
npm run check:site
npm run preview
```

`build` runs Astro’s TypeScript diagnostics before the production build. `check:site` uses Python 3’s standard library to inspect the generated HTML for document structure, unique IDs, internal links and anchors, image dimensions, asset files, external-link attributes, and sharing metadata. There is no separate ESLint or unit-test configuration in this repository.

## Content and architecture

- `src/pages/`: Home, Projects, About, printable CV, and five generated project detail routes.
- `src/data/projects.json`: project summaries, roles, periods, original product URLs, and curation.
- `src/data/case-studies.ts`: project-specific narratives, attribution, and public references.
- `src/data/jobs.json`: verified employment dates and titles. Startup roles deliberately remain distinct despite overlapping dates.
- `src/data/socials.json`: existing contact methods.
- `src/data/project-media.ts`: original portfolio imagery and official app screenshots, imported for Astro image optimization.
- `src/assets/products/`: source screenshots from Rojo’s own published apps.
- `src/styles/global.css`: refinements using the existing palette, responsive layouts, focus states, reduced-motion support, and print styling.

Existing public images, icons, project URLs, and personal bookmarks are retained. The original home anchors remain available, with employment and bookmarks linking to their expanded About sections. Earlier React menu and small Astro components remain in the repository, but are not shipped as hydrated islands by the active pages.

The CV is an HTML page with browser printing / Save as PDF. It is maintained from the same employment data as About.

## Editorial maintenance

See [content sources and outstanding material](docs/content-notes.md) for provenance, permissions, and areas that can be expanded with additional evidence. Browser review screenshots are in `docs/screenshots/`.

Production is hosted on Vercel under the `portfolio-2024` project for `www.adrojo.com`. The production Git branch is `main`. Run the validation commands above before releasing changes. No hosting configuration or secrets were changed by the redesign.
