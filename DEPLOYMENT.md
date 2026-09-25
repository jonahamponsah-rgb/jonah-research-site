# Public deployment

This project uses Node.js 24.x. `vercel.json` selects Next.js, installs the exact pnpm 11.25.0 version with a frozen lockfile, and runs `npm run build`. Leave Vercel's output directory at its framework default. No required environment variables or external services are needed. Canonical metadata is fixed to https://jonahamponsah.com in lib/seo.ts.

## Publish to GitHub (PowerShell)

Prerequisites: Git and GitHub CLI (`gh`), with a Git commit identity configured. The commands below create the public repository `jonahamponsah-rgb/jonah-research-site`; change the owner/name if desired.

```powershell
Set-Location 'C:\Users\jkamp\Documents\Codex\jonah-research-site'
git init -b main
git add .
git diff --cached --stat
git commit -m "Initial public release of research website"
gh auth login
gh repo create jonahamponsah-rgb/jonah-research-site --public --source=. --remote=origin
git push -u origin main
```

If the empty GitHub repository already exists, replace `gh repo create` with:

```powershell
git remote add origin https://github.com/jonahamponsah-rgb/jonah-research-site.git
```

Do not initialize the remote repository with a README or license before this first push. If Git asks for a commit identity, configure your name and your chosen GitHub verified or noreply commit email locally, then rerun the commit.

## Deploy using Vercel CLI

Using the available pnpm runner:

```powershell
pnpm dlx vercel login
pnpm dlx vercel link
pnpm dlx vercel git connect
pnpm dlx vercel --prod
```

Choose your Vercel account, create/link the project, and use this directory (`./`). Authorize the GitHub integration if prompted. The Git connection enables subsequent deployments from GitHub pushes.

Alternatively, import the repository at https://vercel.com/new and click Deploy. Use the Next.js preset, project root `./`, Node 24.x, and the committed build/install settings.

## Audit performed

- No Git repository/history existed at preparation time; nothing had been committed.
- Source/config scan found no credential patterns, private keys, or local filesystem URLs.
- DOCX archive scan found no credential/local-file-path patterns or comment files. The supplied resume remains the intentional public download, unchanged.
- Both portraits and the DOCX download exist under `public` and use root-relative URLs.
- Removed the leftover local `.pnpm-store` directory.
- Git and CLI deployment ignores exclude caches, local environment files, editor/tool configuration, and common private-key formats.
- Frozen-lockfile installation and production build passed locally. A remote Vercel build has not yet been run.

The public resume and portraits are intentionally included in Git and deployment uploads. Keep future secrets outside `public` and out of source control.


