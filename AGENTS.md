# English Country Reading Atlas — Codex rules

This repository is the live GitHub Pages site for the user's English country-reading archive.

## Source of truth
- `articles.js` is the single source of truth for completed country readings.
- Homepage totals, latest articles, region counts, map highlights, library cards, search, and journey order are generated from `ARTICLES`.
- Never hard-code country totals elsewhere when adding a new reading.

## Adding a new country
1. Add exactly one new object to `ARTICLES` in `articles.js`.
2. Use the next sequential `readOrder`.
3. Keep reading text around CEFR A2: clear vocabulary and straightforward grammar.
4. Prefer 4 useful sections focused on culture, traditions, architecture, festivals, history, geography, and memorable facts.
5. Avoid unnecessary personal names and avoid vague filler.
6. Never describe a country as a "small country" in the article copy.
7. Set `flag` to the ISO two-letter code and `mapId` to the ISO 3166-1 numeric code used by world-atlas.
8. Add useful Wikipedia page titles to `imagePages`; the live site uses those to fetch contextual images automatically.
9. Set `SITE.latest` to the new slug.
10. Run `node --check app.js` and `node --check articles.js` before committing.
11. Commit and push to `main` only after the checks pass.

## Design rules
- Preserve the navy / warm cream / muted gold visual system.
- Keep the world map as a primary homepage element.
- Maintain responsive behavior for desktop and mobile.
- New content must remain connected to map, search, region filters, article library, and reading journey.
