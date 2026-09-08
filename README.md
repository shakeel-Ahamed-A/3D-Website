# 🚀 Nexus Techfest 2026

> An immersive 3D interactive website created for a technology festival experience using Three.js, GSAP, modern web animations, responsive design, and interactive user interfaces.

Nexus Techfest combines **real-time 3D visuals, scroll-based animations, interactive event arenas, dynamic transitions, event scheduling, and team registration** into a single responsive web experience.

---

## 🌐 Live Website

### 👉 [Launch Nexus Techfest 2026](https://shakeel-ahamed-a.github.io/3D-Website/)

```text
https://shakeel-ahamed-a.github.io/3D-Website/
```

---

## 🖥️ Website Preview

![Nexus Techfest 2026 Homepage](docs/screenshots/homepage.png)

The landing page features an interactive **3D Nexus Core**, animated typography, responsive navigation, event statistics, and direct access to the festival arenas and registration system.

---

## 🎯 Problem Statement

**Design and develop a 3D interactive website for Techfest using 3D scroll animations, interactive objects, dynamic transitions, and creative visual design.**

The objective is to move beyond a traditional static website and create an immersive digital experience where visitors can actively interact with the interface.

---

## 💡 Our Solution

**Nexus Techfest 2026** transforms a conventional event website into an interactive digital festival environment.

Users can:

- Interact with a real-time 3D Nexus Core
- Explore technology-focused event arenas
- Experience scroll-driven animations
- Navigate through the Techfest programme
- View a three-day event schedule
- Register a team
- Explore event information and FAQs
- Use the website comfortably across desktop, tablet, and mobile devices

The project combines visual design with functional interaction while maintaining accessibility and responsive behaviour.

---

# ✨ Key Features

### 🌌 Interactive 3D Nexus Core

The central Nexus Core is rendered using **Three.js** and reacts to user interaction.

Users can interact through:

- Mouse dragging
- Touch gestures
- Scrolling
- Keyboard controls

---

### 🎬 Scroll-Based Animations

**GSAP-powered animations** create smooth transitions between sections and enhance the visual experience while scrolling through the website.

---

### 🪐 Interactive Event Arenas

Visitors can explore different technology-oriented event arenas through an interactive constellation-style interface.

The website contains **six technology-focused tracks**.

---

### 📅 Three-Day Event Schedule

An interactive schedule allows users to switch between different festival days and explore the programme.

---

### 📝 Team Registration

The registration interface includes:

- Required-field validation
- Email validation
- Error messages
- Responsive form design
- Local browser draft storage

Registration information remains in the user's browser because the project currently operates as a frontend demonstration.

---

### 📱 Fully Responsive Interface

The website has been designed for:

- Desktop
- Laptop
- Tablet
- Mobile devices

Responsive navigation and adaptive layouts ensure usability across different screen sizes.

---

### ♿ Accessibility Support

Accessibility features include:

- Semantic HTML
- Keyboard-accessible interactions
- Visible focus indicators
- Accessible navigation labels
- Proper form labels
- Validation feedback
- Reduced-motion support

---

# 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Website structure |
| CSS3 | Styling and responsive design |
| JavaScript | Application logic |
| Three.js | Real-time 3D graphics |
| GSAP | Scroll and motion animations |
| Vite | Development and production bundling |
| Node.js | Development environment |
| pnpm | Package management |
| GitHub Actions | Automated deployment |
| GitHub Pages | Website hosting |

---

# 📂 Project Structure

```text
.
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── docs/
│   ├── AUDIT_REPORT.md
│   └── screenshots/
│       └── homepage.png
│
├── scripts/
│   └── quality-check.mjs
│
├── src/
│   ├── main.js
│   ├── styles.css
│   └── validation.js
│
├── tests/
│   └── validation.test.js
│
├── index.html
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── vite.config.js
├── LICENSE
└── README.md
```

---

# ⚙️ Installation

## Requirements

Make sure the following are installed:

- **Node.js 20.19+**
- **pnpm**

Check Node.js:

```bash
node --version
```

Check pnpm:

```bash
pnpm --version
```

---

## Clone the Repository

```bash
git clone https://github.com/shakeel-Ahamed-A/3D-Website.git
```

Enter the project directory:

```bash
cd 3D-Website
```

Install dependencies:

```bash
pnpm install
```

---

# ▶️ Run Locally

Start the Vite development server:

```bash
pnpm dev
```

Open the local URL displayed in the terminal.

Usually:

```text
http://localhost:5173
```

---

# 🧪 Testing & Production Verification

Run the automated tests:

```bash
pnpm test
```

Run code quality checks:

```bash
pnpm lint
```

Generate the production build:

```bash
pnpm build
```

Preview the production version:

```bash
pnpm preview
```

---

# ✅ Testing Performed

The application was checked for:

- Page loading
- Navigation links
- Interactive buttons
- Three.js rendering
- Nexus Core interaction
- Pointer interaction
- Touch interaction
- Keyboard interaction
- Scroll animations
- Event arena switching
- Schedule switching
- Registration form validation
- Invalid input handling
- Valid form submission behaviour
- Local storage functionality
- Desktop responsiveness
- Tablet responsiveness
- Mobile responsiveness
- Reduced-motion accessibility
- Production build compatibility
- GitHub Pages deployment compatibility

---

# 🧭 How to Demonstrate the Project

For a quick project demonstration:

### 1. Open the Website

👉 [Nexus Techfest 2026](https://shakeel-ahamed-a.github.io/3D-Website/)

### 2. Interact With the Nexus Core

Drag the central 3D structure using your mouse.

Show how the core responds dynamically to user movement.

### 3. Scroll Through the Website

Demonstrate the animated transitions between sections.

### 4. Explore the Arenas

Select different technology event tracks and show the interactive arena experience.

### 5. Open the Schedule

Navigate between the three event days and demonstrate the dynamic programme interface.

### 6. Test Registration

Open the registration interface.

First submit an incomplete form to demonstrate validation.

Then enter valid information to demonstrate successful frontend registration behaviour.

### 7. Resize the Browser

Demonstrate that the website adapts to different screen sizes.

---

# 🚀 Deployment

The project uses **GitHub Actions + GitHub Pages** for automatic deployment.

Deployment workflow:

```text
.github/workflows/deploy.yml
```

Whenever code is pushed to the:

```text
main
```

branch, GitHub Actions automatically:

1. Checks out the repository
2. Installs project dependencies
3. Runs automated tests
4. Runs quality checks
5. Builds the Vite application
6. Uploads the production build
7. Deploys the `dist` directory to GitHub Pages

---

## 🌍 Production Deployment

### [https://shakeel-ahamed-a.github.io/3D-Website/](https://shakeel-ahamed-a.github.io/3D-Website/)

---

# 🔄 Application Flow

```text
User Opens Website
        │
        ▼
3D Nexus Landing Experience
        │
        ▼
Scroll-Based Animations
        │
        ▼
Explore Event Arenas
        │
        ▼
Browse Technology Tracks
        │
        ▼
View Event Schedule
        │
        ▼
Explore Event Details
        │
        ▼
Team Registration
        │
        ▼
Frontend Validation
        │
        ▼
Local Browser Storage
```

---

# 🎨 Design Approach

The interface uses a futuristic visual language inspired by:

- Cyberpunk interfaces
- Digital constellations
- Space-inspired environments
- Neon technology aesthetics
- Interactive 3D experiences
- Modern technology festival branding

The visual experience is designed around a dark interface combined with bright cyan, purple, and magenta lighting elements.

---

# 📊 Website Highlights

| Feature | Implementation |
|---|---|
| Real-time 3D | ✅ |
| Three.js | ✅ |
| GSAP animations | ✅ |
| Scroll animations | ✅ |
| Mouse interaction | ✅ |
| Touch interaction | ✅ |
| Keyboard accessibility | ✅ |
| Responsive design | ✅ |
| Registration form | ✅ |
| Form validation | ✅ |
| Local storage | ✅ |
| Event schedule | ✅ |
| GitHub Pages deployment | ✅ |
| Automated testing | ✅ |

---

# ⚠️ Important Note

This project is currently a **frontend demonstration website**.

The Techfest information displayed on the website is fictional and is used to demonstrate the interactive experience.

Registration information is stored locally inside the visitor's browser.

No production registration backend or official event database is currently connected.

---

# 🔮 Future Improvements

Future versions could include:

- Real backend registration system
- User authentication
- Participant dashboards
- Team management
- Real-time event announcements
- Live event status
- QR-based participant verification
- Email confirmation
- Cloud database integration
- Official organiser information
- Event photography
- Admin dashboard
- Real-time leaderboard
- Advanced WebGL effects
- Additional 3D environments

---

# 📄 License

This project is distributed under the license provided in the repository.

See:

```text
LICENSE
```

for additional information.

---

# 👨‍💻 Developer

**Shakeel Ahamed A**

B.Tech Electronics and Communication Engineering  
VIT Chennai

### Connect

- GitHub: [shakeel-Ahamed-A](https://github.com/shakeel-Ahamed-A)
- LinkedIn: [Shakeel Ahamed](https://www.linkedin.com/in/shakeelahamedvit/)

---

## ⭐ Nexus Techfest 2026

**Build beyond the expected.**
