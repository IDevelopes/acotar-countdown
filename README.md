# ✨ ACOTAR 6 Countdown

A starlit countdown to **27 October 2026** with a Velaris-themed advent calendar.
A new door unlocks every day from 6 October. Each door has:

- **Artwork** – a hand-drawn SVG illustration for each day (moon, Illyrian wings, Truth-Teller, the Dread Trove harp, Velaris skyline and more)
- **Quote** – lines from the books, plus some fan-made "Velaris whispers"
- **Reminder** – a recap of something worth remembering, or a release-prep task
- **Theory** – a fan theory, with buttons to vote 🔥 / 🤔 / 🙅

Locked doors shake and tell you to be patient, opened doors remember themselves,
and release day comes with a starfall.

## Run it

It's plain HTML/CSS/JS with no build step. Open `index.html` in a browser, or
serve the folder with any static host.

### Put it online with GitHub Pages (free)

1. On GitHub, go to **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**, then pick the branch and `/ (root)`.
3. After a minute it's live at `https://<username>.github.io/acotar-countdown/`.

On her phone, open the link and use **Share → Add to Home Screen** so it works like an app.

## Make it hers

Everything she sees is in **`content.js`**:

- `CONFIG.name`: put her name in for a "Hello, ___ darling" greeting
- `DAYS`: one entry per day, in order. Change any quote, reminder or theory.
  Swapping the fan-made "Velaris whisper" lines for her favourite real quotes is a nice touch.
- `art.icon` can be any of: `moon`, `constellation`, `rose`, `sun`, `snowflake`, `leaf`, `wings`,
  `book`, `crown`, `harp`, `mask`, `dagger`, `mountain`, `skyline`, `teacup`, `candle`,
  `cauldron`, `heart`, `feather`, `flame`, `hourglass`, `starfall`
- `art.palette` can be: `night`, `velaris`, `starfall`, `spring`, `autumn`, `winter`, `day`, `dawn`, `illyrian`

## Preview a future day

Add `?date=YYYY-MM-DD` to the URL to pretend it's another day, for example
`index.html?date=2026-10-27` to see release day. This is only a preview. Opened
doors are saved in the browser, so if you open one early while testing, it will
show as opened for her too on that device. Test in a private window to avoid that.

---

Fan-made with love. Not affiliated with Sarah J. Maas or Bloomsbury.
