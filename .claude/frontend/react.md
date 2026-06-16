# React

## Source tree

```
src/
  main.jsx                  # Entry — BrowserRouter wraps App
  App.jsx                   # Routes: "/" → LandingPage, "/projects" → ProjectsGallery
  index.css                 # Global reset, CSS tokens, utility classes
  components/
    Navbar.jsx + .module.css    # Fixed header; route-aware scroll/navigate
    Hero.jsx + .module.css
    About.jsx + .module.css
    Services.jsx + .module.css
    Projects.jsx + .module.css  # Before/after drag slider; "View Full Gallery" → /projects
    Reviews.jsx + .module.css   # Show 3 initially; expand to all 8 via toggle
    Contact.jsx + .module.css
    Footer.jsx + .module.css
  pages/
    ProjectsGallery.jsx + .module.css   # CSS-columns masonry photo grid
```

## Key patterns

**Routing:** React Router v6. `BrowserRouter` is in `main.jsx`. `LandingPage` is an inline function component inside `App.jsx` — not a separate file.

**Navbar navigation:** Uses `useLocation` + `useNavigate`. When on `/projects`, clicking a nav link calls `navigate('/' + href)` (e.g. `navigate('/#about')`). When on `/`, it calls `document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })`.

**Smooth scroll:** Implemented in CSS (`scroll-behavior: smooth` on `html`). JS `scrollIntoView` is only used in `Navbar.jsx`.

**CSS Modules:** Every component owns a co-located `.module.css`. No component imports another component's module. Global utility classes (`.btn-primary`, `.section-title`, etc.) live in `src/index.css` and are applied as plain strings in JSX (`className="btn-primary"`).

**BeforeAfterSlider:** Internal sub-component inside `Projects.jsx`. Uses two stacked `<img>` elements; the "after" image uses an inline `clip-path: inset(0 X% 0 0)` style driven by a position state. Drag events are attached to `window` inside a `useEffect` to avoid missing fast moves.

**Reviews expand:** `VISIBLE_INITIAL = 3`. First 3 cards render in the main grid. Cards 4–8 render in a second grid wrapped in `.extraWrap`, which uses `max-height` + `opacity` CSS transition toggled by an `expanded` state boolean.

## Page sections (landing page order)
Hero → About → Services → Projects → Reviews → Contact

## Required interaction behaviour
- Service cards: hover triggers `translateY(-4px)` + border colour change to `--sand` + box-shadow increase + animated accent line across the bottom.
- Buttons: all have `:hover` and `:focus-visible` states; never remove focus outlines.
- Slider handle: wiggle animation once on mount (hint); turns `--sand` on hover.
- Reviews toggle: smooth `max-height` transition, `aria-expanded` kept in sync.
