# Jonah Research Site

A custom Next.js research website built with the App Router and plain CSS.

## Run locally

Use Node.js 24.x and pnpm 11.25.0. In the Codex environment, Node.js and pnpm are bundled; npm may not be available.

```bash
pnpm install --frozen-lockfile
pnpm dev
```

Open `http://localhost:3000`.

To check and run a production build (stop the development server first):

```bash
pnpm build
pnpm start
```

No environment variables or external services are required for local development.

## Before publishing

1. The canonical origin is `https://jonahamponsah.com`, defined in `lib/seo.ts`.
2. Keep the public profile links in `app/data.ts` current.
3. Confirm manuscript and presentation statuses before publishing.
4. Replace the DOCX in `public/downloads/` when the resume changes.
5. Review project descriptions to decide what should be public.
6. Keep education in `app/data.ts` free of graduation years.

## Suggested deployment

Push the folder to GitHub and import the repository into Vercel. Next.js is supported directly.

## Content model

Most homepage content is centralized in `app/data.ts`, so publications, projects, talks, and research areas can be updated without editing the page layouts.

## Version 2 assets and content

The original portraits are already included, with their backgrounds intact:

- Homepage: `public/portraits/jonah-amponsah-black-suit.png`
- About: `public/portraits/jonah-amponsah-white-shirt.png`

Portrait cropping is presentation-only CSS; the source files are unchanged. Both use `next/image`.

The supplied resume is stored at `public/downloads/Jonah_Kwesi_Amponsah_Resume_Final.docx`. Homepage and CV page buttons download this DOCX directly; no conversion is needed.

About and CV share all five degrees and the dissertation title, without graduation years. Contact and footer use only the supplied public email, ORCID, and GitHub links.

Production metadata always uses `https://jonahamponsah.com`; no environment variable is required.

With a standard Node.js installation that includes npm, `npm run dev` and `npm run build` execute the same scripts as pnpm. Use pnpm for dependency installation to preserve the committed lockfile.


## Version 3 refinement notes

The Version 2 palette, hero portraits, navigation, and section order are retained. Version 3 adjusts type sizes, reading measure, card rhythm, and publication-link spacing. Current Work now uses a separate `currentWork` array in `app/data.ts` for methodological questions, rather than repeating project titles and statuses.

Publication records were checked against these sources:
- https://pubmed.ncbi.nlm.nih.gov/40528446/ — corrected the first article title and type to match its existing DOI; added authors and PubMed link.
- https://pubmed.ncbi.nlm.nih.gov/41390713/ — expanded the obesity article title, added authors and its actual DOI, and retained the PMC full-text link. The displayed year follows the 2025 publication date in PubMed.

Project stage labels are editorial refinements of the existing content, not newly verified progress updates. No submission, acceptance, or completion claims have been added.




## Search and sharing launch configuration

- `lib/seo.ts` centralizes the canonical custom domain and page-specific metadata.
- `app/sitemap.ts` includes the 11 public pages, including all project detail pages; the resume is accessible but not listed as a page.
- `app/robots.ts` permits public-page crawling and points to the sitemap.
- `app/page.tsx` includes Person JSON-LD, retaining the previously corrected GitHub account `jonahamponsah-rgb` from shared profile data.
- `app/favicon.ico`, `app/icon.svg`, and `app/apple-icon.png` provide brand icons.
- `public/social/jonah-amponsah.png` is the 1200 × 630 social card used by Open Graph and Twitter/X metadata.
- Rebuild assets with `node scripts/generate-brand-assets.cjs` (uses sharp already provided by Next.js; no added dependency).
- After building, run `pnpm start --port 3001`, then `node scripts/check-launch.cjs`. Set `CHECK_BASE` to a public origin to run the same checks against deployment.

The official `@vercel/analytics` package is integrated using its Next.js App Router component in the root layout. Enable Web Analytics for the project in the Vercel dashboard to collect and view production visits. See https://vercel.com/docs/analytics/quickstart .

For discovery, submit https://jonahamponsah.com/sitemap.xml in Google Search Console after verifying ownership. A sitemap enables discovery but does not guarantee indexing or ranking.

