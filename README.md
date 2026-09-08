# Nexus Techfest 2026

An immersive 3D interactive website created for the Techfest problem statement.

## Live Website

[Open the live Nexus Techfest website](https://shakeel-ahamed-a.github.io/3D-Website/)

## Preview

![Nexus Techfest homepage]![Uploading image.png…]()

## Problem Statement

Design and develop a 3D interactive website for Techfest using:

- 3D scroll animations
- Interactive objects
- Dynamic transitions
- Creative visual design
- A working website that can be submitted through a GitHub link or screen recording

## Solution

Nexus Techfest transforms a technology festival into an interactive digital experience. The website combines a real-time Three.js scene, responsive layouts, interactive event sections, schedule navigation, motion effects, and a functional registration demonstration.

## Features

- Interactive 3D Nexus core
- Drag, pointer, touch, keyboard, and scroll interactions
- Interactive Techfest arena constellation
- Six event tracks with team and prize information
- Three-day interactive event schedule
- Responsive navigation menu
- Functional registration form
- Form validation and error messages
- Local browser storage for registration drafts
- FAQ and event details section
- Responsive design for mobile, tablet, and desktop
- Reduced-motion accessibility support
- Keyboard-friendly interactions
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
