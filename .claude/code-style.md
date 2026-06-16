# Code Style

## General conventions
- No comments unless the WHY is non-obvious (a hidden constraint, a workaround, a subtle invariant). What the code does is self-evident from well-named identifiers.
- Components must be small and readable. If a component grows long, split it.
- No feature flags, no backwards-compatibility shims, no `_unused` renames.
- No error handling or validation for scenarios that cannot happen. Trust framework guarantees. Only validate at real system boundaries (user form input).
- No half-finished implementations — if a feature is cut, remove the code entirely.

## Content & tone rules
All visible text must follow these rules:
- Language: English throughout (British/Irish spelling — "colour", "centre", "personalised")
- Tone: premium, professional, trustworthy, confident — never casual
- No Lorem Ipsum or placeholder text of any kind
- No fake awards, certifications, or unrealistic claims
- Never claim the company is "number one" or "the best" without evidence
- Never mention cheap, budget, or low-cost services
- Do not overpromise results

## Hard restrictions
Never add to this project:
- Backend code or server logic
- Database connections or queries
- Payment or e-commerce functionality
- Login, registration, or authentication
- Complex booking or calendar systems
- Auto-playing videos
- Pop-ups or intrusive overlays
- Excessive or aggressive animations
- Loud or clashing colours
- Cluttered layout with insufficient spacing
