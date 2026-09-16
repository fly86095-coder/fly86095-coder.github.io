# English Country Reading Atlas — 0916_1

## Summary
This package upgrades navigation and map usability without changing your reading articles.

## Main changes
1. Replaced the old top-left mark with a responsive atlas navigation menu.
   - Desktop: mega-menu style panel
   - Mobile: bottom-sheet style navigation panel
   - Direct jumps to Home, World Map, Library, Journey, regions, and countries
2. Added a small custom site logo in the header.
3. Rewrote the home-page positioning text so the site clearly presents itself as graded English reading practice material.
4. Improved map usability.
   - Better label collision handling
   - Fallback markers for tiny countries
   - Kosovo name-based matching fallback
   - Better UK subregion marker behavior
5. Preserved night mode, word-help tools, and prior reading experience.
6. Added rollback snapshot for version 0915_1.

## Current data check
- Version: 0916_1
- Countries: 43
- Reading versions: 99
- Regions: 3

## Updated files
- site/app.js
- site/styles.css
- site/data.js
- rollback/0915_1/*
