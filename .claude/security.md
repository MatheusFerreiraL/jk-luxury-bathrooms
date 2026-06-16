# Security & Accessibility

## Accessibility (WCAG AA minimum)
- Use semantic HTML throughout: `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>`, `<address>`, `<figure>`, `<figcaption>`.
- Correct heading hierarchy per page: exactly one `<h1>`, then `<h2>` per section, `<h3>` for sub-items — never skip a level.
- Every `<img>` must have a descriptive `alt` attribute. Decorative images use `alt=""`.
- Every form field must have an associated `<label>` (via `htmlFor` / `id`).
- All interactive elements (buttons, links) must be reachable and operable via keyboard. Provide visible `:focus-visible` styles.
- Respect `prefers-reduced-motion`: the global rule in `src/index.css` collapses all animations/transitions to 0.01ms — do not override this per-component.
- Colour contrast: text on background must meet 4.5:1; UI components (borders, icons) must meet 3:1. Use the current pastel palette tokens — do not introduce low-contrast combinations.
- Use `aria-label` on icon-only buttons and on landmark regions where the label isn't obvious from a visible heading.
- Use `aria-expanded` on toggles (burger menu, reviews expand button).
- Use `aria-hidden="true"` on purely decorative elements (icons, unicode glyphs used as decoration).

## Frontend security
- Never use `dangerouslySetInnerHTML` with any user-supplied or externally-fetched content.
- No API keys, tokens, passwords, or credentials anywhere in source files or committed `.env` files.
- All external links should include `rel="noopener noreferrer"` when opening in a new tab.
- Form submission is currently client-side only (no real endpoint). Do not add a real endpoint without reviewing input sanitisation.
