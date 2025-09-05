# Repository Guidelines

## Purpose & Audience
This repo helps two young developers (ages 7 and 9) build simple software with a parent’s guidance. Keep everything clear, small, and fun.

## Project Structure
- Each project lives in `projects/<project-name>/`.
- Inside a project: `index.html`, optional `style.css`, `script.js`, and an `assets/` folder for images/sounds.
- Root `index.html` lists links to all projects (the “global index”).

Examples: `projects/piano/`, `projects/maze-game/` (use kebab-case, no spaces).

## Start a New Project
1) Create a folder: `projects/my-new-idea/`
2) Add `index.html` (starter page) and optionally `style.css`, `script.js`.
3) Test locally (see below).
4) Edit root `index.html` and add a link to the new project.

## Run Locally (Auto‑Reload)
- Live server with npx: `npm run dev` (uses `npx live-server` on port 5173).
- Open `http://localhost:5173/` and click a project link.
- Piano direct link: `npm run dev:piano` (opens `projects/piano/`).
- Changes to HTML/CSS/JS reload the browser automatically.

## Coding Style
- Indent 2 spaces. Short functions. Add friendly comments.
- HTML: keep it simple; one page per project starts at `index.html`.
- CSS: class names in kebab-case (e.g., `.big-button`).
- JS: camelCase for variables/functions; keep files small and readable.

## Testing (Keep It Simple)
- Play with it in the browser: “Does it do what we expect?”
- Check the console (Inspect → Console) for errors.
- Fix one thing at a time, then retry.

## Commits & Pull Requests
- Short messages kids can read: `add piano keys`, `fix button color`.
- One idea per commit. Include screenshots/GIFs for visual changes.

## Safety & Tips
- No secrets in the repo. Only public assets.
- Store project files in `projects/<name>/assets/`.
- Finish small projects; then start the next.
