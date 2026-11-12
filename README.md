# Lonnis Johnson — Portfolio

Personal portfolio for Lonnis Johnson, software tester and full-stack developer. Built with React, Vite, and custom CSS. Ready to deploy on Vercel.

## Stack

- React
- Vite
- Framer Motion
- Lucide React

## Install

```bash
npm install
```

## Develop

```bash
npm run dev
```

Vite prints a local URL, usually `http://localhost:5173`.

## Production build

```bash
npm run build
npm run preview
```

The production files are written to `dist/`. Preview serves that folder locally so you can check the build before deploying.

## Project structure

```text
public/          favicon, Open Graph image, resume PDF
src/assets/      logo and profile photo
src/components/  page sections
src/data/        portfolio content
src/App.jsx
src/main.jsx
src/index.css
```

The resume download uses `public/Lonnis_Johnson_Resume.pdf`, which is served at `/Lonnis_Johnson_Resume.pdf`.

## Push to GitHub

From this folder, in PowerShell:

```powershell
git init
git add .
git commit -m "Add personal portfolio site"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

Replace the remote URL with the empty GitHub repository you created. Do not commit `node_modules` or `dist`. Both are already ignored.

## Deploy on Vercel

1. Push the project to GitHub.
2. In Vercel, choose **Add New Project** and import that repository.
3. Framework preset: **Vite**.
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Deploy.

`vercel.json` rewrites unknown paths to `index.html`, so a refresh on any route still loads the site. Assets use root-relative paths (`/favicon.png`, `/Lonnis_Johnson_Resume.pdf`) and work on the Vercel domain.

After the site has a public URL, set an absolute Open Graph image in `index.html` if you want link previews to resolve everywhere:

```html
<meta property="og:image" content="https://your-domain.vercel.app/og.jpg" />
```

Use the same absolute URL for `twitter:image`.
