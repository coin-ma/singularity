# Kids Projects (AI-Assisted)

Build simple, fun web projects together with kids (ages 7 and 9). Each project lives in its own folder and is linked from a global index page.

## Quick Start
- Install Node.js (LTS).
- Start dev server with auto‑reload:
  - `npm run dev` → open `http://localhost:5173/`
  - Or open the piano project directly: `npm run dev:piano`

## Project Structure
- `projects/<name>/` — a single project
  - `index.html` (start page)
  - `style.css`, `script.js` (optional)
  - `assets/` for images/sounds
- `index.html` (root) — lists and links to all projects
- `AGENTS.md` — contributor guide (kid‑friendly conventions)

## Add a New Project
1) Create a folder: `projects/my-idea/`
2) Add `index.html` (and optional `style.css`, `script.js`)
3) Refresh the root index page — the project appears automatically

## Piano Project Tips
- Click “Play”, then guess by clicking keys or pressing 1–7
- Difficulty: Easy/Medium/Hard (3/5/7 keys)
- Buttons: Hear Again, Show Answer, Reset Score

See `AGENTS.md` for more details and conventions.
