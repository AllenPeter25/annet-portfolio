# Annet Jacklin Peter — Portfolio

This is a configurable portfolio with a small, dependency-free Node.js development server.

## Viewing the portfolio

From this folder, run:

```powershell
npm run dev
```

Then open `http://localhost:3000/`. The server redirects `/index.html` to `/`, so the visible route never contains `.html`. Press `Ctrl+C` in the terminal to stop the server.

## Updating content

All portfolio text, roles, skills, education, credentials, contact details, and résumé settings are in `config.js`. The page templates and JavaScript normally do not need to be edited.

Set `site.showResume` to `false` to hide the “View résumé” button, or `true` to display it.

To replace the résumé:

1. Put the new PDF in the `resume` folder.
2. Change `site.resumeUrl` in `config.js` to `resume/` followed by the new filename.

The portfolio button opens that configured PDF directly. When the main page is opened as `index.html` on a web server, the browser address is normalized to the directory URL.

## Files

- `config.js` — editable portfolio content and résumé settings
- `index.html` — main portfolio template
- `portfolio.js` — browser-side content rendering and interactions
- `styles.css` — visual styling and responsive layout
- `assets/logos` — locally stored company logo assets
- `local-server.cjs` — local-only server with clean URL handling
- `vercel.json` — static Vercel deployment and clean URL configuration

Company names and logos are the property of their respective owners and are used only to identify employment history.
