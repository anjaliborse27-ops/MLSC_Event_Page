# MLSC PCCOE — Event Journey

Plain HTML/CSS/JS pages for the MLSC PCCOE event roadmap — no build step, no framework.

## Structure

```
index.html            Landing page
events.html           Event roadmap
events/*.html         One page per event
css/style.css         All styles
js/main.js            Typewriter, marquee, sparkles, roadmap scroll animation
assets/images/        Mascots and event photos
server.js             Minimal Express server for local preview only
```

Every page is a self-contained static HTML file. Your team can copy this
folder straight into the main site and serve it however the other pages are
served (nginx, Apache, IIS, Netlify, GitHub Pages, etc.) — no Node.js is
required in production.

## Local preview

```sh
npm install
npm start
```

Then open http://localhost:3000.
