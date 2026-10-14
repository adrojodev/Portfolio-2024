# Rojo’s portfolio

Personal portfolio for David Hernández (Rojo), built with the existing Astro 4, Tailwind CSS, React integration, and Work Sans stack, with Caveat and JetBrains Mono accents in the hero headline. Static pages are generated at build time. The active navigation is plain HTML; React remains available for future interactive components.

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

`build` runs Astro’s TypeScript diagnostics before the production build. `check:site` uses Python 3’s standard library to inspect the generated HTML for document structure, unique IDs, internal links and anchors, image dimensions, asset files, external-link attributes, sharing metadata, and absence of emoji or Unicode icon glyphs in interface source and generated HTML. There is no separate ESLint or unit-test configuration in this repository.

## Content and architecture

- `src/pages/`: one homepage with Work, About, and Connect; a printable CV; five project detail routes; and redirects for the former Work/About pages.
- `src/data/projects.json`: project summaries, roles, periods, original product URLs, and curation.
- `src/data/case-studies.ts`: project-specific narratives, attribution, and public references.
- `src/data/jobs.json`: verified employment dates and titles. Startup roles deliberately remain distinct despite overlapping dates.
- `src/data/socials.json`: existing contact methods.
- `src/data/project-media.ts`: original portfolio imagery and official app screenshots, imported for Astro image optimization.
- `src/assets/products/`: source screenshots from Rojo’s own published apps.
- `src/styles/global.css`: refinements using the existing palette, responsive layouts, focus states, reduced-motion support, and print styling.

Existing public images, icons, project URLs, and personal bookmarks are retained. Work shows five projects initially; “See all work” reveals five more. “More about me” reveals background, experience, and bookmarks. Both controls use native HTML disclosures. The menu scrolls to homepage sections, including when returning from the CV or a project page. Original employment, bookmarks, and archive anchors reveal their containing disclosure when followed. The former `/about/` and `/projects/` URLs redirect to the homepage sections. Earlier React menu and small Astro components remain in the repository, but are not shipped as hydrated islands by the active pages.

The HTML CV shares employment data with About. Its “Download CV” button serves the owner-selected PDF at `public/cv/David-Hernandez-CV.pdf`, copied unchanged from `Downloads/DavidHernandezDesignEngineerCV.pdf`. Replace that asset when the supplied PDF changes; it is independent of the HTML timeline.

## Editorial maintenance

See [content sources and outstanding material](docs/content-notes.md) for provenance, permissions, and areas that can be expanded with additional evidence. Browser review screenshots are in `docs/screenshots/`.

Production is hosted on Vercel under the `portfolio-2024` project for `www.adrojo.com`. The production Git branch is `main`. Run the validation commands above before releasing changes. No hosting configuration or secrets were changed by the redesign.

Interface icons must use inline SVG or existing SVG assets. Do not use emoji, Unicode arrows, or platform-dependent glyphs as controls or link icons.

The owner-requested Mexican flag confetti is a decorative canvas effect, excluded from layout, interaction, and assistive technology. It uses flag emoji only as particles, supports tapping or keyboard activation on the Mexico City button, and is disabled for reduced motion.
