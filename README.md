# Nexus Techfest 2026

An immersive, responsive 3D website for a fictional three-day technology festival. Visitors can manipulate the Nexus core, explore event arenas, browse a keyboard-accessible schedule, read practical event details, and save a registration draft locally.

## Problem Statement

Design and develop a 3D interactive website for a Techfest using 3D scroll animations, interactive objects, and dynamic transitions, with creative freedom over the concept and visuals.

## Solution

Nexus turns the festival programme into an interactive journey. A real-time Three.js scene anchors the first screen and responds to dragging, keyboard controls, pointer movement, and scroll position. A second orbit interaction, dimensional cards, animated content reveals, and schedule transitions carry the 3D language through the full experience without obscuring the event information.

## Features

- Interactive WebGL Nexus core with pointer, touch, keyboard, parallax, and scroll responses
- Interactive arena constellation and 3D tilt track cards
- Accessible three-day tabbed schedule with arrow-key navigation
- Responsive mobile menu and layouts from 320 px upward
- Functional registration demo with validation, error feedback, and device-local draft storage
- FAQ/event details, reduced-motion support, focus states, and semantic HTML
- Safe static production build with relative asset paths for GitHub Pages

## Tech Stack

- HTML5 and CSS3
- JavaScript modules
- [Three.js](https://threejs.org/) for the WebGL scene
- [GSAP](https://gsap.com/) and ScrollTrigger for motion
- [Vite](https://vite.dev/) for local development and production builds
- Node's built-in test runner for validation tests

## Project Structure

```text
index/
├── src/
│   ├── main.js
│   ├── styles.css
│   └── validation.js
├── tests/
│   └── validation.test.js
├── scripts/
│   └── quality-check.mjs
├── .github/workflows/
│   └── deploy.yml
├── .openai/
│   └── hosting.json
├── index.html
├── package.json
├── pnpm-lock.yaml
├── vite.config.js
├── .gitignore
├── LICENSE
└── README.md
```

## Installation

Requires Node.js 20.19 or newer and pnpm.

```bash
pnpm install
```

## Running Locally

```bash
pnpm dev
```

Open the local URL printed by Vite. For production verification:

```bash
pnpm test
pnpm lint
pnpm build
pnpm preview
```

## Usage

1. Drag the central 3D core, or focus it and use the arrow keys.
2. Scroll to see the scene recede and content transition into view.
3. Select nodes in the arena constellation and hover track cards on a pointer device.
4. Change schedule days with clicks or the left/right arrow keys.
5. Open registration and test empty, invalid, and valid submissions. The demo stores valid data only in the current browser's local storage; it has no backend.

## Deployment

### GitHub Pages (recommended)

The repository must contain these items at its **top level**:

```text
index.html
package.json
src/
.github/
```

Do not upload a wrapper folder such as `final-submission-ready/final-submission-ready/...`. If GitHub shows one `final-submission-ready` folder at the top level, open that folder, select all of its contents, and move those contents to the repository root. The `.github/workflows/deploy.yml` file must be visible at `REPOSITORY_ROOT/.github/workflows/deploy.yml`.

1. Open the repository on GitHub and select **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Commit and push the project to the `main` branch:

   ```bash
   git add .
   git commit -m "Prepare Techfest submission"
   git push origin main
   ```

4. Open the repository's **Actions** tab and select **Deploy to GitHub Pages**. Wait for the workflow to finish with a green check.
5. The public submission URL will be:

   ```text
   https://YOUR-GITHUB-USERNAME.github.io/YOUR-REPOSITORY-NAME/
   ```

6. Copy that URL into the submission form and replace the placeholder below with the exact URL:

   ```markdown
   [Live site](https://YOUR-GITHUB-USERNAME.github.io/YOUR-REPOSITORY-NAME/)
   ```

The included workflow runs `pnpm install --frozen-lockfile`, tests, lint, builds the Vite app, and publishes `dist`. The Vite base path is relative, so assets work on GitHub repository subpaths.

### Current preview link

An owner-only preview is available at [Nexus Techfest preview](https://nexus-techfest-2026.shakeel-ahamed2025vi.chatgpt.site). Use the GitHub Pages URL above for external evaluators after the Actions deployment succeeds.

For Netlify or Vercel, run `pnpm build` and publish the generated `dist` directory.

## Screenshots

Add final desktop and mobile captures under `docs/screenshots/` if the submission portal requires screenshots. They are intentionally not included as placeholders.

## Future Improvements

- Connect registration to an authenticated event backend.
- Replace fictional event information with the organiser's confirmed venue, contacts, dates, and rules.
- Add compressed event photography only when official assets are available.

## Important Note

Nexus is a front-end demonstration. The event details and email domain are fictional, and registration is device-local rather than a real application submission.
