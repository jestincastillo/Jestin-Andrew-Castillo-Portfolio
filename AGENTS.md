# AGENTS.md

Guidance for AI coding agents (Codex, Claude, etc.) working in this repo.

## What this is
A personal engineering portfolio: React 18 + TypeScript + Vite, React Router v6, Framer Motion, plain CSS with custom properties. It deploys to GitHub Pages through `.github/workflows/deploy.yml` on every push to `main`.

## Commands
- `npm install`: install dependencies
- `npm run dev`: local dev server at http://localhost:5173
- `npm run build`: type-check (`tsc --noEmit`) and production build into `dist/`
- Run `npm run build` before finishing any change. It must pass with no TypeScript errors.

## Where things live
- `src/content/profile.ts`: name, bio, contact links, skills, resume path
- `src/content/projects/*.ts`: one file per project; each default-exports an object that `satisfies Project`
- `src/content/projects/index.ts`: ordered list of projects (controls order everywhere, including the navbar dropdowns), plus `designProjects`, `industryExperience`, and the `industryMoreNote` text
- A project with `category: 'industry'` appears in the Industry Experience menu and home section, with its page at `/experience/<id>`; all others appear under Projects at `/projects/<id>`. Build links with `projectPath()` from `src/lib/paths.ts`, never by hand.
- `src/types.ts`: `Project`, `ProjectSection`, `ProjectImage`, `ProjectLink` types
- `src/pages/`: route components (`Home`, `Projects`, `ProjectDetail`, `Contact`, `NotFound`)
- `src/components/`: shared UI (`Navbar`, `ProjectCard`, `Gallery`, `Lightbox`, `ImageFrame`, `Reveal`, `ThemeSwitcher`, `Icon`)
- `src/styles/theme.css`: all colors, as CSS variables per theme (`graphite`, `midnight`, `sky`)
- `src/styles/global.css`: shared layout and component styles; `Navbar.css` and `ProjectDetail.css` sit next to their components
- `public/images/<project>/`: project images

## Conventions
- **Content stays in `src/content/`.** Never hard-code project text in components. To change what a project says, edit its content file.
- **Every project page uses the `ProjectDetail.tsx` template.** Don't create per-project components. Add or remove sections in the project's content file.
- **Image paths** in content files are relative to `public/images/`: write `'baja/cad.png'` for `public/images/baja/cad.png`. Don't prefix with `/`, `public/`, or `images/`. `imageUrl()` in `src/lib/paths.ts` adds the GitHub Pages base path.
- Missing images render a placeholder automatically, so it's fine to list images before the files exist.
- Section options: `columns` (1–3 images per row), `centered: true` (center images and captions), `status: 'In Progress'` (badge next to the heading plus a dot in the sidebar).
- `profile.resume` (`public/resume.pdf`) and `profile.photo` (`public/images/profile.jpg`) drive the home page "Download resume" button and headshot. Both stay hidden in production until the file exists (see `useFileExists`).
- Use lowercase, dash-separated file names for images (GitHub Pages is case-sensitive).
- **Colors:** only use CSS variables from `theme.css` (`var(--text)`, `var(--accent)`, etc.). Never hard-code colors in components. If you add a new variable, define it in all three themes.
- Keep the design simple and clean: no glassmorphism, bento grids, or heavy effects. Use the `Reveal` component for scroll-in animation.
- Internal links use React Router `<Link>`/`<NavLink>`, never plain `<a href="/...">`, so the GitHub Pages base path keeps working.
- Don't change `base` in `vite.config.ts`. The deploy workflow sets `BASE_PATH` automatically.
- Text in `[square brackets]` in content files is a placeholder the owner still needs to fill in. Replace it only with real information the owner gives you. Don't invent results, numbers, or roles.
- Keep React 18 and React Router v6 unless the owner asks to upgrade.
