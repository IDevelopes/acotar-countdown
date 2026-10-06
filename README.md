# ✨ ACOTAR 6 Countdown

A starlit countdown to **A Court of Splintered Harmony** (ACOTAR 6), out **Tuesday 27 October 2026**,
with a Velaris-themed advent calendar. A new door unlocks every day from 6 October. Behind each one:

- **Artwork**: a hand-drawn SVG illustration for the day
- **Quote**: a line from the books, or a fan-made "Velaris whisper"
- **Reminder**: a recap to refresh your memory, or a release-day prep task
- **Theory**: a fan theory, with buttons to vote 🔥 / 🤔 / 🙅

Visitors are asked their name on the first visit and greeted by it after that ("Hello, ___ darling").
Tap the greeting to change it. Locked doors shake and tell you to be patient, opened doors are
remembered, and release day brings a starfall.

## Gift links

The footer has a **"Send them a link with their name"** button. It makes a link like
`…/acotar-countdown/?name=Trisha`, so whoever opens it is greeted by name straight away.

## Privacy

Nothing leaves the browser. Names, opened doors and votes are kept in the visitor's own
`localStorage`. There are no accounts, analytics or cookies. The only third-party request is for Google Fonts.

## Run it

It's plain HTML, CSS and JS with no build step. Open `index.html`, or serve the folder with any static host.

### Publish with GitHub Pages

1. **Settings → Pages → Build and deployment → Deploy from a branch**, then choose `main` and `/ (root)`.
2. It goes live at `https://idevelopes.github.io/acotar-countdown/`.

Pages on a private repository needs a paid GitHub plan. On a free plan, make the repository public first
(**Settings → General → Danger Zone → Change visibility**).

If you host it somewhere else, update the `og:url` and `og:image` links in `index.html`
so link previews still work.

On a phone, open the site and use **Share → Add to Home Screen** to use it like an app.

## Editing the content

All the text lives in **`content.js`**:

- `CONFIG`: the dates, the title, and a fallback name
- `DAYS`: one entry per day, in order. Change any quote, reminder or theory.
- `art.icon`: `moon`, `constellation`, `rose`, `sun`, `snowflake`, `leaf`, `wings`, `book`, `crown`,
  `harp`, `mask`, `dagger`, `mountain`, `skyline`, `teacup`, `candle`, `cauldron`, `heart`,
  `feather`, `flame`, `hourglass`, `starfall`
- `art.palette`: `night`, `velaris`, `starfall`, `spring`, `autumn`, `winter`, `day`, `dawn`, `illyrian`

## Previewing a future day

Add `?date=YYYY-MM-DD` to the URL, for example `?date=2026-10-27` for release day. Doors you open
while previewing are saved as opened in that browser, so test in a private window.

---

Fan-made with love. Not affiliated with Sarah J. Maas or Bloomsbury. Short quotes are from the
*A Court of Thorns and Roses* series and remain the property of their author.
