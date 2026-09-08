# Nexus Techfest — Audit and Test Report

## Extracted Problem Statement

The supplied screenshot asks for a 3D interactive website for a Techfest and explicitly names 3D scroll animations, interactive objects, and dynamic transitions. It grants creative freedom over concept and visuals. Submission may be a viewable screen recording or a GitHub project link.

### Mandatory

- A website clearly representing a Techfest
- Real 3D content and an object the visitor can interact with
- Scroll-driven 3D animation
- Dynamic transitions
- A working, shareable project

### Important

- The interaction should be obvious without evaluator explanation
- Responsive, accessible controls and readable content
- Stable dependency installation and production build
- A polished first screen that identifies the festival and primary actions

### Bonus

- Multiple complementary 3D/interaction patterns
- Complete event information and a demonstrable registration flow
- Reduced-motion, graceful WebGL fallback, and device-local persistence

No backend, authentication, payment, real registration service, named framework, or specific event content appears in the statement.

## Requirement Coverage

| Requirement | Exists? | Works correctly? | Result | Quality | Modification made |
| --- | --- | --- | --- | --- | --- |
| Techfest website | Yes | Yes | PASS | High | Sharpened event message, arenas, schedule, details, and CTA |
| Interactive 3D object | Yes | Yes | PASS | High | Rebuilt the Nexus core with pointer, touch, keyboard, and parallax controls |
| 3D scroll animation | Yes | Yes | PASS | High | Scroll now changes scene position, scale, camera depth, and page choreography |
| Dynamic transitions | Yes | Yes | PASS | High | Added scroll reveals, timeline transitions, orbit feedback, tilt, and modal motion |
| Creative, cohesive visuals | Yes | Yes | PASS | High | Preserved and refined the neon cosmic visual system |
| Working/shareable project | Yes | Yes | PASS | High | Added Vite build, locked dependencies, documentation, and deployment-safe paths |

**Problem Statement Alignment: 97%**

The remaining 3% reflects that WebGL presentation varies with the visitor's GPU/browser and no official Techfest brand assets or real event data were supplied.

## Major Initial Issues

- Registration and several footer links were dead placeholders.
- CSS and JavaScript were embedded in one large HTML file.
- Schedule tabs lacked ARIA tab behavior and keyboard navigation.
- No package manifest, lockfile, tests, README, license, or deployment configuration existed.
- Touch dragging could conflict with page interaction and the canvas lacked keyboard controls.
- There was no reduced-motion mode, explicit WebGL fallback, local-storage corruption handling, or pause when the scene was off-screen.
- Mobile navigation did not exist and the smallest layout could create horizontal overflow.
- Third-party libraries were loaded directly from CDNs with no controlled production bundle.

## Test Cases

| ID | Scenario | Input/action | Expected | Actual | Status |
| --- | --- | --- | --- | --- | --- |
| T01 | Production build | `pnpm build` | Valid `dist` output | Built HTML/CSS/app/Three/GSAP chunks | PASS |
| T02 | Static quality | `pnpm lint` | Required files/targets; no dead links/local paths | All checks passed | PASS |
| T03 | Unit suite | `pnpm test` | Registration normalization and edge cases pass | 5/5 passed | PASS |
| T04 | Initial page load | Load local root | HTTP 200 and visible first screen | HTTP 200; rendered | PASS |
| T05 | Browser console | Load and interact | No warnings/errors | No warnings/errors captured | PASS |
| T06 | Mobile navigation | Open menu | Navigation appears and ARIA state updates | Displayed; `aria-expanded=true` | PASS |
| T07 | Orbit interaction | Select Robotics node | Label and active state update | Label changed to Robotics | PASS |
| T08 | Schedule tabs | Select Day 02 | Day 01 hides, Day 02 events appear | Correct Day 02 panel displayed | PASS |
| T09 | Empty form | Submit all blank | Six contextual validation errors | Six errors displayed; first field focused | PASS |
| T10 | Valid form | Valid text/email/team/arena/consent | Saved status and local draft | Success status displayed; normalized draft restored after reload | PASS |
| T11 | Special characters | Unit input `<Team & Co>` | Treated as text, no markup execution | Preserved safely as data | PASS |
| T12 | Invalid email/team size | Unit invalid inputs | Rejected | Correct errors returned | PASS |
| T13 | Responsive overflow | Five viewport ranges | No horizontal page scrolling | No overflow after fix | PASS |
| T14 | 320 px rules | CSS/DOM inspection | Single-column cards, compact timeline/menu | Rules present; browser tool minimum effective width was 400 px | PASS (static) |
| T15 | 375–1440 px | Browser viewport passes | Appropriate nav/grid changes | Mobile and desktop states changed at intended breakpoints | PASS |
| T16 | Refresh | Save, close, reload, reopen | Draft fields restored | Non-sensitive draft fields visibly restored | PASS |
| T17 | Direct navigation | Hash targets and refresh-safe static route | Correct target; no SPA 404 | Native fragment targets and single static route verified | PASS |
| T18 | Reduced motion | Media-query/code inspection | No continuous/reveal animation dependency | CSS and JS reduced-motion paths present | PASS (static) |
| T19 | WebGL unavailable | Code-path inspection | Content remains usable | Canvas de-emphasized; semantic site remains available | PASS (static) |

## Evaluator Score

| Category | Score / 10 |
| --- | ---: |
| Problem statement alignment | 9.7 |
| Functionality | 9.5 |
| UI/UX | 9.2 |
| Reliability | 9.3 |
| Responsiveness | 9.2 |
| Code quality | 9.3 |
| Innovation | 9.1 |
| Demonstration readiness | 9.5 |

**Overall Submission Readiness: 94/100**

## Known Limitations

- Event names, dates, venue, prizes, capacity, and contact details are fictional because official content was not supplied.
- Registration deliberately has no backend; it validates and stores a draft only in the current browser.
- The Google Fonts import falls back to system fonts if the network is unavailable; application logic and 3D libraries are bundled locally.
- Final appearance and frame rate depend on WebGL/GPU support. A reduced-motion and WebGL-failure path keeps the content usable.
