# Content sources and outstanding material

Reviewed October 13, 2026 (America/Mexico_City).

## Contributions and dates

The owner’s supplied brief is the source for employment dates, titles, personal contributions, and education. Public sources substantiate product features and launch awards; they do not independently prove every individual contribution.

Musho, Lummi, Bueno, and Humankind retain separate identities with their supplied overlapping dates. No revenue, adoption, retention, or conversion figures have been added.

Mini Briefs’ web period begins in 2025 based on the existing repository entry. Its iOS release is dated May 19, 2026 by Apple’s public lookup API. Dine’s first published release is dated August 16, 2026. No app release date is presented as an employment date.

## Public references

- [Original portfolio](https://www.adrojo.com/): palette, Work Sans, avatar, icons, historical imagery and links.
- [Musho launch — Product Hunt](https://www.producthunt.com/products/musho?launch=musho): public product features and #1 Product of the Day, April 11, 2024.
- [Lummi launch — Product Hunt](https://www.producthunt.com/products/lummi?launch=lummi): public features and #4 Product of the Day, March 6, 2024.
- [Mini Briefs website](https://www.minibriefs.news/): dated editions, language controls, archive.
- [Mini Briefs App Store](https://apps.apple.com/es/app/mini-briefs/id6769941337): reading/audio, topic categories, bilingual experience, personalization and release history.
- [Dine App Store](https://apps.apple.com/us/app/dine/id6799501885): shared budgets, expense entry and device intelligence.
- [Dine privacy policy](https://adrojodev.github.io/dine-site/privacidad.html): iCloud storage and sharing, on-device classification and summaries.
- [Lyft Business](https://www.lyft.com/business): public context only. No internal artifacts or inferred system diagrams are included.

## Asset provenance

Existing `public/images/`, the Memoji, and the icons are reused from the original repository. Original public paths remain available. Astro generates responsive WebP variants without replacing the originals.

New source JPGs come from the published App Store listings owned by Alan David Hernandez Trujillo, identified by the supplied app IDs. They are real published screenshots, not generated substitutes. Retrieval used Apple’s public lookup API (`itunes.apple.com/lookup`) and the screenshot URLs returned by it:

- `briefs-1.jpg`: Mini Briefs `Uno.png`, daily reading and listening.
- `briefs-2.jpg`: Mini Briefs `Cuatro.png`, personalized briefs.
- `dine-1.jpg`: Dine `01-home.png`, overview.
- `dine-2.jpg`: Dine `02-add.png`, expense entry.
- `dine-3.jpg`: Dine `03-budget.png`, budget details.

The Mini Briefs material contains its original promotional artwork. Dine’s screens are displayed unaltered. Third-party portfolio media was not downloaded or reused: public availability alone does not establish permission.

Following the owner’s explicit request to use Lyft Business imagery, `lyft-business.png` replaces the text-only project preview in both cards and the case-study header. It is the public hero photography from [Lyft Business](https://www.lyft.com/business), credited to Lyft in the case-study caption. Source: [official image asset](https://images.ctfassets.net/7qj0pq66qmy0/7B5oV0b4PI8LXUjYuGfQ5C/20104c43d8350a410aaaba684fc6a510/business-homepage-hero.png). The source remains unaltered; Astro generates responsive WebP versions for delivery.

## Material that could expand the case studies

- Musho: an approved high-resolution screenshot or short demo clip showing the conversational interface. The site currently uses its original brand image and links to the original public demo.
- Employer work: written disclosure clearance under the relevant agreements and policies before expanding beyond public product context and broad role descriptions. Evidence that a contribution happened does not establish authorization to disclose it.
- Bueno Drops: no asset, implementation, or contribution record was present in this checkout. A named role, period, and approved screenshot would support an accurate archive entry; no speculative entry was created.
- Lummi: an approved screenshot of work specifically implemented by Rojo, if a more detailed engineering walkthrough is wanted.
- Earlier Apple / Salón University experience: verified titles and dates would allow expansion beyond the owner-supplied background.

There are no invented product screenshots or unresolved placeholders preventing the portfolio from being used. These are opportunities for a richer future narrative, not hidden claims.

## Verification record

- `npm run build`: Astro check, 0 errors / 0 warnings / 0 hints; 9 static pages generated.
- `npm run check:site`: passed structural, local-link, anchor, asset and metadata checks.
- `git diff --check`: passed.
- Production browser review: all 9 pages at 320, 390, 768 and 1280 CSS pixels, with no horizontal overflow or observed failed images.
- Production console review: no errors or warnings captured in the clean QA tab.
- Keyboard flow: skip link visibly focused and moved focus to main; Work → Musho → reference disclosure → Mini Briefs navigation succeeded. Reference disclosure opened with Enter. The CV print control’s page-load binding was verified.
- Reduced motion and print styling are present in CSS. OS-level print output and browser emulation of reduced motion were not exercised.
- A gallery width issue found during desktop review was corrected before final validation.
- The earlier Astro development toolbar logged a dynamic-import error during concurrent builds. The clean production tab did not reproduce it.
- Primary and archive project URLs returned HTTP 200 in the local fetch check. The original Musho YouTube demo returned a rate-limit response during automated fetching; its playback could not be independently verified. Its original URL is preserved.
- Browserslist reports a pre-existing stale compatibility dataset. Dependency versions and the lockfile were not changed.

Design-review screenshots are saved in `docs/screenshots/`. Earlier Musho, Lyft Business, and About captures were removed after the confidentiality review because they contained superseded employer copy. Other captures record prior design iterations and are not content approval evidence.

## Button contrast refinement

The first button contrast refinement used the paper foreground (`#FBF8F4`) on a deeper orange (`#BD4314`), including their arrows. Measured from the rendered CSS, the normal-state text contrast is 4.99:1; hover uses `#AB3B10` for 5.90:1. Keyboard focus retains a visible 3px outline with a 5px offset. The shared legacy Button component reuses the global button styles. Build, static-site checks, and desktop/mobile inspection passed. `primary-button.jpg` reflects this refinement; other screenshots record earlier design reviews.

## App cover refinement

Mini Briefs cards again use the owner’s original `public/images/projects/mini-briefs.jpg` artwork. Dine cards pair the published iOS icon with one larger, cropped view of the real dashboard, composed in HTML/CSS. `src/assets/products/dine-icon.jpg` comes from the same owner-verified Dine App Store listing via Apple’s public lookup API. The icon from the sibling Dine web repository was not used because it belongs to a different experience. Original screenshots remain unaltered and available in both case-study galleries. Build and static-site checks pass; the home, archive, and both details were reviewed at 320, 390, 768 and 1280 CSS pixels without overflow or production console errors. Updated card captures are `app-covers-desktop.jpg` and `dine-card-mobile.jpg`.


## Avatar-inspired palette

The owner requested more expressive colors based on the original profile artwork. The hero now uses violet (`#7540B5`) for “design” and pink (`#C42B72`) for “code” and “Rojo”. Primary buttons use the same violet with a deeper violet hover, replacing the earlier orange button treatment. Against the cream background, rendered contrast is 6.28:1 for violet and 5.04:1 for pink; light button text also measures 6.28:1. Updated desktop/mobile home captures show this palette. Build and static-site checks passed, with no mobile overflow or production console errors observed.

## Uniform thumbnail frames

All project-card thumbnails now share a 4:3 frame. App-specific fixed heights and the homepage’s wider Musho treatment were removed so every card uses the same dimensions at each breakpoint. The detail-page galleries retain their separate layouts. Browser measurements confirmed one thumbnail size across all five home cards and all ten Projects cards at each of 320, 390, 768 and 1280 CSS pixels. At 1280px the frames measure 526 × 394.5px. Build and static-site checks passed. `uniform-thumbnails.jpg` shows the aligned first row.

## Conservative employer-content review

Employer case studies now describe public products and broad roles. Internal implementation approaches, operational details, measurements, named internal activities, and employer-specific technology inventories were removed from the site source and these notes. The same broad wording is used in the About and CV timelines. Obsolete review captures containing those details were removed.

The owner's accounts establish provenance, not disclosure permission. No NDA, employment agreement, portfolio policy, or written employer approval was available for this review. This edit reduces detail; it does not certify compliance. Check confidentiality definitions, public-information exceptions, publication approval requirements, and applicable intellectual-property terms before publication. Public product references and another contributor's case study do not establish permission for this portfolio.

Lyft imagery is from a public company page, not an internal screenshot. Attribution does not establish an image-reuse license or employer approval. Verify the applicable permission before publication. Nothing was deployed as part of this review. Git history and prior external disclosures were not audited.

## Original orange restored

At the owner’s request, the active accent palette again uses the original Tailwind accent, `#FE6E31`. Hero keywords, the Rojo introduction, primary buttons, and accent links use this vivid orange. Buttons use dark text and arrows; hover retains the same orange. Keyboard outlines are dark on light backgrounds. The Lyft introduction link retains its separate `#FF00BF` hover/focus color. Earlier palette notes and screenshots document previous iterations. Build passed after this change.

## Musho image restoration

The original `public/images/projects/musho.jpg` is 560 × 280 pixels. It remains unchanged as the reference. The active media source is now `src/assets/products/musho-restored.png`, a 1774 × 887 AI-assisted restoration produced with the built-in imagegen tool. This is a reconstructed branding image, not a newly recovered official master or a product screenshot. The robot, lowercase wordmark, subtitle, and yellow composition were retained, with some reconstructed contours. Musho gets higher-quality WebP variants through its full source width, and detail-page image sizing now reflects the wider layout. Build and static-site checks passed.

Restoration prompt:

> Edit the supplied low-resolution Musho brand image solely to improve its image quality. Produce a crisp high-resolution 2240x1120 landscape version, exactly the same 2:1 composition. Preserve the original uniform vivid yellow background (#ffd414), exact centered robot mascot, black lowercase 'musho' wordmark and the exact small black subtitle 'website, app & plugin'. Preserve the distinctive letterforms and all shapes, scale relationships, placement, spacing, colors and margins. Reconstruct clean sharply defined edges and smooth anti-aliasing, removing JPEG blur and compression artifacts. The robot stays identical: simple orange domed head, thick black outline, small circular antenna, white rounded face, two vertical black eyes and tiny smiling black mouth. No glasses, no different mascot. Do not redesign, change the typography, add detail, add texture, change any text, add shadows, add borders or introduce new elements. This is fidelity-preserving resolution restoration of the provided artwork, not a new design.

Final cleanup prompt:

> Make this exact Musho brand artwork completely flat and clean: remove all grain, mottling, gradients, lighting, texture, shadows and dimensional effects from every fill. The entire yellow background must be one perfectly uniform flat solid color #FFD414 edge to edge. Robot orange must be uniform #FFAD00, face pure white, black parts uniform #171717. Preserve every contour, exact letterform, robot shape, composition, scale and position unchanged. Exact existing text 'musho' and 'website, app & plugin' must remain unchanged with crisp antialiased edges. 2:1 landscape, high-resolution output. This is only a flat-fill cleanup, not a redesign.

## Lyft role wording clarified — October 14, 2026

The owner clarified that the portfolio should describe his overall SWE role, leadership on frontend initiatives, and full-stack work. The Lyft card, case study, and shared About/CV timeline now reflect those broad responsibilities. Implementation details and internal metrics remain excluded. The owner reports no approval requirement for the other agreements but is unsure of Lyft’s disclosure scope. No contracts were reviewed; this clarification is content direction, not employer disclosure clearance.

## White button text — October 14, 2026

At the owner’s explicit request, all orange buttons now use pure white (`#FFFFFF`) text, including their inherited arrow color. The original vivid orange (`#FE6E31`) background is retained in normal and hover states. This supersedes the earlier dark button text choice.

## Mini Briefs gallery composition — October 14, 2026

The detail-page gallery now uses larger staggered panels, light framing, soft shadows, and a warm peach background. The published App Store screenshots remain unaltered; composition is implemented in HTML/CSS. Responsive image variants extend to the original 739px width at quality 95. Mini Briefs project cards keep the original artwork and shared thumbnail dimensions. Browser checks at 320, 390, 768, and 1280 CSS pixels found no horizontal overflow; images loaded, the tablet gallery expanded to fit its panels, and no production console errors or warnings were captured. Build, static-site checks, and diff whitespace checks passed. Updated desktop/mobile captures are `mini-briefs-gallery-desktop.jpg` and `mini-briefs-gallery-mobile.jpg`.

## Team references simplified — October 14, 2026

At the owner’s request, Musho and Lummi now describe collaboration without naming individual teammates or linking to their personal portfolios. Repetitive authorship callouts were removed. The wording still describes these as team projects and retains broad personal contribution accounts. The outdated Lummi review capture was removed.

## Production release — October 14, 2026

The owner authorized pushing the completed redesign to production. The verified target is Vercel project `portfolio-2024`, connected to `adrojodev/Portfolio-2024`, with `www.adrojo.com` as the production domain and `main` as the production branch. Final local Astro build, nine-page static checks, and whitespace validation passed before the release. Earlier statements about not publishing refer to the earlier design and content review stages.
