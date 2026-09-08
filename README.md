# Nexus Techfest 2026

An immersive 3D interactive website designed for a technology festival. Nexus Techfest combines real-time 3D visuals, scroll-based motion, interactive event arenas, schedule navigation, and a responsive registration experience.

## Live Website

[Visit the live Nexus Techfest website](https://shakeel-ahamed-a.github.io/3D-Website/)

```text
https://shakeel-ahamed-a.github.io/3D-Website/
```

## Preview

![Nexus Techfest homepage](docs/screenshots/homepage.png)

The screenshot must exist in the repository at:

```text
docs/screenshots/homepage.png
```

## Problem Statement

Design and develop a 3D interactive website for Techfest using 3D scroll animations, interactive objects, dynamic transitions, and creative visual design.

## Solution

Nexus Techfest presents a digital festival experience where users can explore event arenas, interact with a 3D Nexus core, browse the event programme, and register their team through a responsive interface.

## Features

- Interactive 3D Nexus core
- Pointer, touch, keyboard, and scroll interactions
- Interactive event arena constellation
- Six technology-focused event tracks
- Three-day interactive schedule
- Responsive navigation menu
- Functional registration form
- Form validation and error messages
- Local browser storage for registration drafts
- FAQ and event details section
- Responsive desktop, tablet, and mobile layouts
- Reduced-motion accessibility support
- Keyboard-accessible interactions
- GitHub Pages deployment through GitHub Actions

## Tech Stack

- HTML5
- CSS3
- JavaScript ES Modules
- Three.js
- GSAP
- Vite
- Node.js
- pnpm
- GitHub Actions
- GitHub Pages

## Project Structure

```text
.
├── .github/
│   └── workflows/
│       └── deploy.yml
├── docs/
│   ├── AUDIT_REPORT.md
│   └── screenshots/
│       └── homepage.png
├── scripts/
│   └── quality-check.mjs
├── src/
│   ├── main.js
│   ├── styles.css
│   └── validation.js
├── tests/
│   └── validation.test.js
├── index.html
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── vite.config.js
├── LICENSE
└── README.md
```

## Installation

Requirements:

- Node.js 20.19 or newer
- pnpm

Install dependencies:

```bash
pnpm install
```

## Run Locally

```bash
pnpm dev
```

Open the local URL shown in the terminal.

## Production Verification

```bash
pnpm test
pnpm lint
pnpm build
pnpm preview
```

## How to Use

1. Drag the central 3D Nexus core to change its orbit.
2. Scroll through the page to view animated transitions.
3. Select different event arenas.
4. Browse the three-day event schedule.
5. Open the registration form.
6. Test empty, invalid, and valid form submissions.
7. Explore the FAQ and event details sections.

## Deployment

The website is deployed using GitHub Actions and GitHub Pages.

The workflow file is located at:

```text
.github/workflows/deploy.yml
```

Every push to the `main` branch:

1. Installs dependencies.
2. Runs tests.
3. Runs quality checks.
4. Builds the Vite application.
5. Publishes the `dist` folder to GitHub Pages.

Live deployment:

[https://shakeel-ahamed-a.github.io/3D-Website/](https://shakeel-ahamed-a.github.io/3D-Website/)

## Accessibility

The project includes:

- Semantic HTML
- Keyboard-accessible controls
- Visible focus states
- Accessible navigation labels
- Form labels and validation messages
- Reduced-motion support
- Responsive layouts

## Testing

The project was checked for:

- Page loading
- Navigation links
- Interactive buttons
- 3D interactions
- Schedule switching
- Form validation
- Local storage behavior
- Responsive layouts
- Production build compatibility
- GitHub Pages deployment compatibility

## Future Improvements

- Connect registration to a real backend
- Add organiser-provided event information
- Add official event photography and branding
- Add participant authentication
- Add live event announcements

## Important Note

This is a front-end demonstration project. Event details are fictional, and registration data is stored locally in the visitor’s browser. No real registration backend is connected.
