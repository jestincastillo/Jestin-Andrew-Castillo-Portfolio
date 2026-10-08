# Jestin Andrew Castillo · Engineering Portfolio

**Live site:** https://jestincastillo.github.io/Jestin-Andrew-Castillo-Portfolio/

A personal engineering portfolio built with **React 18 + TypeScript + Vite**, deployed free on **GitHub Pages** through GitHub Actions.

- `/`: home (intro, industry experience, featured projects, skills)
- `/experience/<id>`: one page per job or internship (Industry Experience menu)
- `/projects`: all design-team projects
- `/projects/<id>`: one page per project (sketches, CAD, FEA, results)
- `/contact`: email, LinkedIn, GitHub

---

## Part 1: Run it on your computer

You need [Node.js](https://nodejs.org) (LTS version). In a terminal opened in this folder:

```bash
npm install
```

```bash
npm run dev
```

Open http://localhost:5173. The page reloads by itself every time you save a file. Press `Ctrl + C` in the terminal to stop it.

---

## Part 2: Put it on GitHub Pages (one-time setup, about 10 minutes)

### Step 1: Create the repository
1. Go to [github.com](https://github.com), sign in, click **+** (top right) → **New repository**.
2. **Repository name**, pick one:
   - `portfolio` → your site will be at `https://YOUR-USERNAME.github.io/portfolio/`
   - `YOUR-USERNAME.github.io` → your site will be at `https://YOUR-USERNAME.github.io/` (cleaner URL)
3. Set it to **Public** (free GitHub Pages requires a public repo).
4. **Do not** check "Add a README", ".gitignore", or "license". This project already has them.
5. Click **Create repository**.

### Step 2: Upload the code
In a terminal in this folder, run these one at a time (replace `YOUR-USERNAME` and `REPO-NAME`):

```bash
git init
```

```bash
git add .
```

```bash
git commit -m "Initial portfolio"
```

```bash
git branch -M main
```

```bash
git remote add origin https://github.com/YOUR-USERNAME/REPO-NAME.git
```

```bash
git push -u origin main
```

The first push opens a browser window asking you to sign in to GitHub. That's normal.

> Prefer clicking to typing? [GitHub Desktop](https://desktop.github.com) does the same thing: **File → Add local repository** → pick this folder → **Publish repository**.

### Step 3: Turn on GitHub Pages
1. In your repo on github.com: **Settings** → **Pages** (left sidebar).
2. Under **Build and deployment → Source**, choose **GitHub Actions**.

### Step 4: Watch it deploy
1. Click the **Actions** tab in your repo.
2. If the first **Deploy to GitHub Pages** run has a red ✗ (it ran before Pages was turned on), click it → **Re-run all jobs**.
3. When it shows a green ✓ (about 1–2 minutes), click the run. The site link is shown under **deploy**.

**From now on, every push to `main` updates the live site automatically.** You never have to edit `vite.config.ts`. The workflow detects your repo name and sets the correct URL path.

---

## Part 3: Connect Codex

1. Go to [chatgpt.com/codex](https://chatgpt.com/codex) and sign in.
2. Click **Connect to GitHub** and authorize the Codex GitHub app. When asked, choose **Only select repositories** and pick your portfolio repo.
3. Create an environment for the repo. The defaults work; if it asks for a setup script, use `npm install`.
4. Give Codex a task, for example:
   - *"Fill in the Longhorn Baja Racing project using this description: …"*
   - *"Add a section called Testing to the e-NABLE project with images enable/test-1.jpg and enable/test-2.jpg"*
   - *"Add a new project for my internship at ___"*
5. Codex opens a **pull request**. Review the changes on GitHub → **Merge**. The site redeploys automatically.

Codex reads [`AGENTS.md`](AGENTS.md) in this repo to learn how the site is organized, so its changes follow the same structure.

> **Important:** after merging a Codex pull request, run `git pull` in this folder before you edit anything locally. That keeps your computer in sync and avoids merge conflicts.

---

## Editing your site

Almost everything you'll want to change lives in **`src/content/`**. You shouldn't need to touch the layout code.

| What | Where |
| --- | --- |
| Name, bio, email, LinkedIn, GitHub, skills, resume | `src/content/profile.ts` |
| A project's text, sections, and pictures | `src/content/projects/<project>.ts` |
| Which projects appear, and in what order | `src/content/projects/index.ts` |
| Pictures | `public/images/<project>/` |
| Colors for each theme | `src/styles/theme.css` |
| Which theme loads first | `DEFAULT_THEME` in `src/lib/theme.ts` |

Anything in **[square brackets]** in the content files is a placeholder for you to replace.

### Add a picture
1. Put the file in the project's folder, e.g. `public/images/baja/frame-fea.png`.
2. In `src/content/projects/baja.ts`, add a line to a section's `images` list:
   ```ts
   images: [
     { src: 'baja/frame-fea.png', caption: 'Von Mises stress under front impact' },
   ],
   ```
3. Save. That's it.

**Remove a picture:** delete its `{ src: ... }` line.

Until a picture file exists, the site shows a placeholder box. When you run `npm run dev` locally, the box shows the exact file path it's looking for. Clicking any real picture on the site opens it full-screen.

**Image tips:** use lowercase file names with no spaces (`cad-assembly.png`, not `CAD Assembly.PNG`). PNG works best for CAD and FEA screenshots, JPG for photos and scanned sketches. Resize huge photos to about 1600 px wide so the site loads fast.

### Add or remove a section
Each section is one `{ ... }` block in a project's `sections` list:

```ts
{
  title: 'Design Sketches',
  paragraphs: ['First paragraph.', 'Second paragraph.'],
  bullets: ['Optional bullet', 'Another bullet'],
  images: [{ src: 'baja/sketch-1.jpg', caption: 'Early concept' }],
  columns: 3, // optional: images per row (1, 2, or 3)
  centered: true, // optional: center the images and captions
  status: 'In Progress', // optional: label next to the heading; delete when finished
},
```

- **Add:** copy a block, paste it where you want it, and edit it. Every part except `title` is optional.
- **Remove:** delete the whole block, from `{` to `},`.
- **Reorder:** move blocks up or down. The "On this page" sidebar updates by itself.

### Add or remove a project
- **Add:** copy a file in `src/content/projects/` (e.g. `agentic.ts` → `my-project.ts`), change its `id` and content, then import it and add it to the list in `src/content/projects/index.ts`. Make a folder for its images in `public/images/my-project/`.
- **Remove:** take it out of the list in `src/content/projects/index.ts`.
- **Industry Experience vs Projects:** add `category: 'industry',` near the top of a project file (like in `agentic.ts`) to list it under **Industry Experience** instead of **Projects**. Delete that line to move it back.
- **"More to come…" note:** change or blank out `industryMoreNote` in `src/content/projects/index.ts`.

The navbar dropdowns, home page, and projects page all update automatically.

### Add your resume and photo
- **Resume:** save your PDF as `public/resume.pdf`. A **Download resume** button appears on the home page (and a Resume card on the Contact page). Visitors get the file as `Jestin-Andrew-Castillo-Resume.pdf`. To update it later, just replace the file.
- **Photo:** save your headshot as `public/images/profile.jpg`. It appears to the right of your name on the home page. A portrait (taller than wide) photo works best.

Until each file exists, the live site simply leaves it out, and `npm run dev` shows where to put it. The file names are set by `resume` and `photo` in `src/content/profile.ts`.

---

## Commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Run the site locally with live reload |
| `npm run build` | Type-check and build the production site into `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run typecheck` | Check for TypeScript errors only |

## Troubleshooting

- **The deploy failed with a red ✗:** open the run in the **Actions** tab and read the step that failed. If it's the build step, run `npm run build` locally; it shows the same error with a file and line number.
- **The live site is blank or missing styles:** make sure **Settings → Pages → Source** is set to **GitHub Actions**, not "Deploy from a branch".
- **An image isn't showing:** check that the file name in the `.ts` file matches the real file exactly, including upper/lower case and extension (`.jpg` vs `.jpeg` vs `.png`). GitHub Pages is case-sensitive even though Windows isn't.
