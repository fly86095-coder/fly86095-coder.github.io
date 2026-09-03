# English Country Reading Atlas — maintenance rules

## Data model
- Only add a country when the user explicitly says they have read it.
- Append a new `readOrder`; never renumber prior countries.
- Every country MUST have exactly two versions: `A1` and `B1`.
- A1: short, concrete sentences, essential geography + culture + one distinctive festival/tradition + one craft/food/social feature.
- B1: a fuller encyclopedia profile with geography/history/architecture/living traditions/festival/craft/social context.
- Each section MUST include English, simplified Chinese, and topic-specific image page candidates. Pinyin is generated in the browser from simplified Chinese.

## Content quality
- Avoid empty statements such as “food is important” unless followed by a concrete practice.
- Prefer memorable specifics: named rivers, festivals, architectural forms, crafts, seasonal customs, and distinctive social rituals.
- Avoid unnecessary personal names.
- Do not describe any country as a “small country.”
- Keep political language neutral and geographic descriptions factual.
- Before adding new cultural claims, verify with official tourism/culture institutions, UNESCO, museums, or another reputable reference.

## Images
- One modest image per reading section.
- Use exact topic page titles (festival, building, craft, river), not only the country name.
- Images support the text; they must never dominate the page.

## Deployment
- Test `node --check app.js` and `node --check data.js` before commit.
- Push to `main` only after the current site loads locally and the requested country page works.
