# Bhuvaneswari M — Portfolio

A modern, responsive personal portfolio built with **React + Vite**, **Tailwind CSS**, and **Framer Motion**, in a maroon / white / black theme.

## Project structure

```
portfolio/
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── package.json
├── public/
│   ├── favicon.svg
│   └── resume.pdf        ← replace with your real resume
└── src/
    ├── main.jsx
    ├── App.jsx            ← assembles all sections
    ├── index.css          ← theme tokens & shared utility classes
    ├── data/
    │   └── portfolioData.js   ← ALL editable content lives here
    ├── hooks/
    │   ├── useTheme.js         (dark/light mode)
    │   ├── useTypedText.js     (hero typing animation)
    │   └── useCounter.js       (animated stat counters)
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Skills.jsx
        ├── Projects.jsx
        ├── ProjectModal.jsx
        ├── Certifications.jsx
        ├── EducationTimeline.jsx
        ├── Experience.jsx
        ├── Achievements.jsx
        ├── Resume.jsx
        ├── Contact.jsx
        ├── Footer.jsx
        ├── Loader.jsx
        ├── ScrollProgressBar.jsx
        ├── ScrollToTop.jsx
        └── CursorGlow.jsx
```

Each section of the site is its own component, imported and ordered inside `src/App.jsx`.

## Getting started

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

## Customizing content

Almost everything — name, roles, bio, skills, projects, certifications, education, experience, achievements, and social links — is defined in **`src/data/portfolioData.js`**. Edit that one file to personalize the whole site without touching component code.

To swap the profile photo or project images, replace the Unsplash URLs in `Hero.jsx`, `About.jsx`, and `portfolioData.js` with your own image paths (e.g. files placed in `src/assets/`).

Add your real resume PDF to `public/resume.pdf` (the download buttons already point to this path).

Wire the contact form (`src/components/Contact.jsx`) up to a backend or a service like Formspree / EmailJS — currently it simulates a successful submission.

## Build

```bash
npm run build
```

Outputs a production build to `dist/`.

## Deployment

**Vercel / Netlify:** import the repo, build command `npm run build`, output directory `dist`. No extra config needed.

**GitHub Pages:**
1. `npm install --save-dev gh-pages`
2. Add to `package.json`: `"homepage": "https://<username>.github.io/<repo>"` and a script `"deploy": "gh-pages -d dist"`.
3. `npm run build && npm run deploy`

`vite.config.js` already uses relative asset paths (`base: './'`) so the build works from any subpath.

## Tech

- React 18 + Vite
- Tailwind CSS (dark mode via `class` strategy)
- Framer Motion (scroll reveals, hover/tap micro-interactions, page transitions)
- Lucide React icons
