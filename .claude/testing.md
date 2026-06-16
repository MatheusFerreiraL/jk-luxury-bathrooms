# Testing

No automated test suite exists. All verification is manual.

## After every change
1. `npm run build` — a failed build is a failed test. Fix it before considering the task done.
2. `npm run dev`, open the browser, and confirm the affected area looks and behaves correctly.
3. Check responsive breakpoints: mobile (≤ 560px), tablet (≤ 820px), desktop.

## Feature-specific checks
- **Before/after slider** — test drag on desktop mouse and touch (Chrome DevTools mobile emulation).
- **Reviews expand/collapse** — click "Show more reviews", verify animation, click again to collapse.
- **SPA routing** — navigate to `/projects` directly in the address bar (not just via the link) to confirm the Vite `historyApiFallback` is working.
- **Navbar on `/projects`** — clicking nav links must return to the correct section on the homepage, not produce a 404.

## SEO — check after every content or structural change
- One `<h1>` per page; `<h2>` per section; `<h3>` for sub-items — hierarchy must never be skipped.
- `<title>` and `<meta name="description">` in `index.html` must remain accurate if page copy changes.
- Every `<img>` must have a meaningful `alt` attribute — update it when images change.
- Open Graph tags (`og:title`, `og:description`, `og:image`) must stay in sync with actual content.
- `LocalBusiness` JSON-LD in `index.html`: verify `name`, `description`, `telephone`, `email`, and `areaServed` are still correct after any business-detail edits.
- If a new route is added, give it its own `<title>` and `<meta name="description">` — currently only `/` has full SEO; `/projects` inherits the root `index.html`.
- Canonical URL (`<link rel="canonical">`) must point to the correct page; update if the domain changes.
