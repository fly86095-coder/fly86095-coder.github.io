# AGENTS.md — English Country Reading Atlas

## Project purpose
This repository is a personal English country-reading archive published through GitHub Pages.
The user reads countries in chronological order from west of China toward Europe and adds new countries regularly.

## Single source of truth
All content lives in `articles.js` inside `window.COUNTRIES`.
Do not hard-code country counts, map status, latest country, article counts, region counts, or journey order elsewhere.

## When adding a new country
1. Append one new country object to `window.COUNTRIES`.
2. Use the next `readOrder` number.
3. Put it in one of the existing regions unless the user explicitly introduces a new region.
4. Add at least one real article with substantive English text.
5. Every section MUST have:
   - an English paragraph around the requested CEFR level,
   - a faithful Simplified Chinese translation,
   - exact `imagePages` related to that section's subject.
6. Pinyin is automatically generated from the Simplified Chinese text by pinyin-pro. Do not write fake pinyin or omit the Chinese translation.
7. If the user asks for multiple articles for one country, add multiple items to that country's `articles` array. Do not merge them into one generic summary.
8. Update `SITE.latest` to the new country's slug.

## Content rules from the user
- Default English reading level is around A2; vocabulary and grammar should both stay near A2 unless the user explicitly requests a different level.
- Prefer distinctive culture, traditions, architecture, festivals, historical development, geography, and memorable facts.
- Avoid empty filler such as “food is important” without a concrete point.
- Avoid unnecessary personal names and excessive proper nouns.
- Do not call countries “small countries” as a general description.
- When a major river is relevant, name the river clearly.
- Do not rewrite an accepted earlier article topic into a generic replacement.
- Germany, Switzerland, and France currently use four-article sets: Articles 1–3 A2–B1 and Article 4 A1, four sections each.

## Image rules
- Images are supporting material, not the main content.
- Keep section images compact; do not create giant body images.
- `imagePages` must name the exact thing described in the paragraph. Examples: `Rhine`, `Berlin Wall`, `Pirot carpet`, `Dnipro`, not only `Germany`, `Serbia`, or `Ukraine`.
- Add 2–3 candidate Wikipedia page titles when a topic may have an ambiguous page title.
- Never use a visually unrelated image merely because it is from the correct country.

## UX rules
- Preserve responsive desktop/mobile layouts.
- Default article display must show English + Simplified Chinese + pinyin.
- Preserve the language-view controls.
- Preserve map interactivity and highlighted read countries.
- Preserve legacy links such as `#article=germany`.
- Article library pagination must be based on article units, not country count.

## Before deployment
Run:
- `node --check app.js`
- `node --check articles.js`
Then inspect at least:
- `#home`
- `#articles`
- `#map`
- `#article=germany`
- `#article=france&part=4`
- a mobile viewport
Commit and push to `origin/main` only after checks pass.
