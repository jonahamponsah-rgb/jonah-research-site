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

1. Set `SITE_URL` to your final domain.
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

Set optional `SITE_URL` to your real public origin before publishing; no domain or institutional URL is assumed. Local development needs no environment variables.

With a standard Node.js installation that includes npm, `npm run dev` and `npm run build` execute the same scripts as pnpm. Use pnpm for dependency installation to preserve the committed lockfile.


## Version 3 refinement notes

The Version 2 palette, hero portraits, navigation, and section order are retained. Version 3 adjusts type sizes, reading measure, card rhythm, and publication-link spacing. Current Work now uses a separate `currentWork` array in `app/data.ts` for methodological questions, rather than repeating project titles and statuses.

Publication records were checked against these sources:
- https://pubmed.ncbi.nlm.nih.gov/40528446/ — corrected the first article title and type to match its existing DOI; added authors and PubMed link.
- https://pubmed.ncbi.nlm.nih.gov/41390713/ — expanded the obesity article title, added authors and its actual DOI, and retained the PMC full-text link. The displayed year follows the 2025 publication date in PubMed.

Project stage labels are editorial refinements of the existing content, not newly verified progress updates. No submission, acceptance, or completion claims have been added.


