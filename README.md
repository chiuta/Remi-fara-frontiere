# Remi fără frontiere

**English** · [Română](README.ro.md) · [Français](README.fr.md) · [Italiano](README.it.md) · [Español](README.es.md) · [Português](README.pt.md) · [Deutsch](README.de.md) · [Magyar](README.hu.md)

**Version:** 1.1.0 · **Last updated:** 2026-10-14

An atlas of rummy with 19 variants playable against an AI, in a single HTML file.

**Live:** https://chiuta.github.io/Remi-fara-frontiere/

![Screenshot](screenshot.png)

## What it is

Remi fără frontiere (subtitle in the app: "Atlas · 19 playable variants · Atlantykron · Centrul StrING") is an atlas of games from the rummy family, in which every variant can be played against an AI opponent. The interface is in Romanian, with large tiles and cards.

## Features

- The **Atlas (19)** tab: a card for each variant, with origin, description, tags and a "▶ Play" button.
- The **Play** tab: a variant selector, grouped by type: *Shared table*, *Knock / Gin*, *Contract*, *Phases*, *Canasta*, *Tiles*.
- The 19 variants: Romanian Rummy, Scala 40, Kalooki, Rummy 500, Dummy Rummy, Carousel Rummy, Gin Rummy, Oklahoma Gin, Hollywood Gin, Conquian, Contract Rummy, Shanghai Rummy, Phase 10, Classic Canasta, American Canasta, Bolivian Canasta, Okey (simplified), Rummikub (simplified), Mahjong (simplified).
- Game board with stock, discard pile, melds on the table, the player's hand, scores (You / AI), status messages and a help text with the rules of the current variant.
- Variant-specific elements: the current contract (Contract/Shanghai), phases (Phase 10), the Okey indicator, knock / gin thresholds.
- Local statistics per variant (wins/losses), shown in the variant selector, with a "Clear statistics" button.
- Play against the AI; end screen with "▶ Play again" and "✕ Close".
- Contextual guidance on your turn: after each card selection, the help panel tells you what you can do (discard, extend, whether the selection forms a meld); the selection state is also exposed to screen readers (`aria-pressed`).
- The main interactive elements (stock, discards) are also keyboard-accessible (Enter / Space).

## User guide

1. Open the page; in the "📚 Atlas (19)" tab read the variant cards.
2. Press "▶ Play" on a card, or switch to the "🎮 Play" tab and choose the variant from "Choose a variant to play against the AI".
3. On your turn (status shown: "Draw"): draw a card from the stock or from the discard pile.
4. Then (status "Action"): use the action buttons shown below the board (e.g. laying down melds, knocking or discarding a card, depending on the variant) and read the guidance in the help area.
5. Follow the score in the "You" and "AI" panels; at the end choose "▶ Play again" or "✕ Close".
6. "← Select" takes you back to the variant selection.

## Privacy and network

- The only local storage: the per-variant win/loss counter in `localStorage` (key `remi-ff:stat:v1`), on your device; no IndexedDB or cookies. The app makes no network calls (CSP with `connect-src 'self'`, script allowed only by hash); the fonts are embedded in the file.
- The "Coffee" link opens only on click.
- No analytics.

## Running locally / offline

Download `index.html` and open it in a browser; it works fully without internet.

## License

MIT License — see the LICENSE file

## Audit

2026-10-10: verified that there are no network requests or storage (as of that date; since round 6 there is only the local statistics counter); the "AI" opponent is a heuristic algorithm in the file (no ML model). The names "Rummikub" and "Phase 10" are trademarks of third parties (used here as names of game variants); the Mahjong rules are simplified. Contrast and navigation semantics corrected.

## Trademarks and trade names

The names "Rummikub", "Phase 10", "Canasta", "Okey" etc. are trade names or trademarks of their holders; here they are used descriptively, as names of game variants, without their affiliation or endorsement. The app includes no graphic materials or official rules of commercial products (the rules are simplified approximations; see "Audit").

## History / Changelog

### 1.1.0 — 2026-10-14
- Data backup and labelling (fff-kit).

### 1.0.0 — 2026-10-12
- The version and the date of the last update are shown in the app (end of the Atlas).

### 11 October 2026 (round 7)
- Improved: the status message used to stay "Choose cards and meld…"; now the help area reacts to the selection (discard / extend / valid meld or what is missing). Card selection has `aria-pressed`, and the help area is `aria-live`.
- Fixed: the rank in the bottom corner of red/black cards had light text on a cream background (insufficient contrast, found by axe-core in play).

### 11 October 2026 (round 6)
- Added: local statistics (wins/losses per variant) with reset.
- Security: CSP with a hash-based `script-src` instead of `'unsafe-inline'`.

### 11 October 2026
- Fixed: Okey and Rummikub are now labelled "(simplified)" in the app, and the rules texts no longer promise unimplemented features (rearranging the table, 14+1 going out, the 4+1 Mahjong hand): the original rule and what is actually implemented are stated (the same list as the "Simplified implementation" note). The same for Carousel Rummy.
- Fixed: accessibility: `<main>`, h1 heading, correct heading order, player's hand focusable from the keyboard, end window with the dialog role; 0 axe-core violations at 1280 and 360 px, including in the game screen.
- Verified: all 19 variants start without JS errors.
- Not implemented (remains): a tile engine with a rearrangeable table for Rummikub/Okey and the real Mahjong winning condition.

## Author

Alexio — Alexandru-Ionuț Chiuță. Contact: alexio@trom.tf. The app mentions Atlantykron and Centrul StrING in its subtitle.

## Summary

A single-file Romanian-language atlas of 19 rummy-family games (Romanian Rummy, Gin Rummy, Canasta, Okey, Rummikub, Phase 10, Mahjong simplified and more), each playable against an AI opponent. No storage and no network requests. MIT License.
