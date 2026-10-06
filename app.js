(() => {
  "use strict";

  const { CONFIG, DAYS } = window.ACOTAR;
  const DAY_MS = 86400000;
  const $ = (id) => document.getElementById(id);

  // ---------- time (supports ?date=2026-10-20 for previewing) ----------
  const parseLocal = (str) => {
    const [y, m, d] = str.split("-").map(Number);
    return new Date(y, m - 1, d);
  };
  const startOfDay = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
  const addDays = (d, n) => new Date(d.getFullYear(), d.getMonth(), d.getDate() + n);
  // Math.round absorbs the 23h/25h days around daylight-saving changes.
  const daysBetween = (a, b) => Math.round((startOfDay(b) - startOfDay(a)) / DAY_MS);

  const override = new URLSearchParams(location.search).get("date");
  let offset = 0;
  if (override && /^\d{4}-\d{2}-\d{2}$/.test(override)) {
    const fake = parseLocal(override);
    const real = new Date();
    fake.setHours(real.getHours(), real.getMinutes(), real.getSeconds());
    offset = fake - real;
  }
  const now = () => new Date(Date.now() + offset);

  const START = parseLocal(CONFIG.startDate);
  const RELEASE = parseLocal(CONFIG.releaseDate);
  const TOTAL_DAYS = daysBetween(START, RELEASE);

  const todayIndex = () => daysBetween(START, now());
  const dateFor = (i) => addDays(START, i);
  const fmt = (d, opts) => d.toLocaleDateString(undefined, opts);

  // ---------- storage (best effort; the page works without it) ----------
  const store = {
    get(key, fallback) {
      try {
        const v = localStorage.getItem(key);
        return v ? JSON.parse(v) : fallback;
      } catch { return fallback; }
    },
    set(key, value) {
      try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* ignore */ }
    },
  };
  const KEY_OPENED = "acotar6:opened";
  const KEY_VOTES = "acotar6:votes";
  const opened = new Set(store.get(KEY_OPENED, []));
  const votes = store.get(KEY_VOTES, {});

  // ---------- art ----------
  const PALETTES = {
    night:    ["#0b0f2e", "#2b1a5a", "#f3d58a"],
    velaris:  ["#120c35", "#3d2a80", "#f3d58a"],
    starfall: ["#040622", "#1d2c78", "#fff3c4"],
    spring:   ["#2e0f26", "#8a3a62", "#ffd9e4"],
    autumn:   ["#240b06", "#8a3412", "#ffcf8a"],
    winter:   ["#0a1a2e", "#3f6f96", "#e6f4ff"],
    day:      ["#2a1b05", "#9c6a14", "#fff3c4"],
    dawn:     ["#24122f", "#b0606b", "#ffe2c4"],
    illyrian: ["#120e18", "#4a3a58", "#e8d2a6"],
  };

  const sparkle = (x, y, s) =>
    `M${x} ${y - s}Q${x} ${y} ${x + s} ${y}Q${x} ${y} ${x} ${y + s}Q${x} ${y} ${x - s} ${y}Q${x} ${y} ${x} ${y - s}Z`;

  const rays = (cx, cy, r1, r2, n, rot = 0) =>
    Array.from({ length: n }, (_, k) => {
      const a = (k / n) * Math.PI * 2 + rot;
      const p = (r) => `${(cx + Math.cos(a) * r).toFixed(1)} ${(cy + Math.sin(a) * r).toFixed(1)}`;
      return `M${p(r1)}L${p(r2)}`;
    }).join("");

  // Icons are drawn in a 100×100 box, stroked in the palette's ink colour.
  const ICONS = {
    moon: `<path d="M64 24.3A32 32 0 1 0 64 79.7A30 30 0 0 1 64 24.3Z" fill="currentColor" stroke="none"/>
           <path d="${sparkle(80, 30, 7)}" fill="currentColor" stroke="none"/>
           <path d="${sparkle(86, 58, 4)}" fill="currentColor" stroke="none"/>`,
    constellation: `<g fill="currentColor" stroke="none">
             <circle cx="14" cy="64" r="2.6"/><circle cx="32" cy="44" r="3.4"/><circle cx="52" cy="52" r="2.6"/>
             <circle cx="66" cy="30" r="4"/><circle cx="86" cy="40" r="2.6"/><circle cx="74" cy="72" r="3"/></g>
           <path d="M14 64L32 44L52 52L66 30L86 40M52 52L74 72" stroke-width="1.2" opacity=".7"/>
           <path d="${sparkle(66, 30, 12)}" fill="currentColor" stroke="none" opacity=".9"/>`,
    rose: `<path d="M50 24c-12 0-20 8-20 18s8 18 20 18 20-8 20-18-8-18-20-18z"/>
           <path d="M50 32c-6 0-10 4-10 9s5 8 10 8 9-3 9-8-4-6-8-6"/>
           <path d="M45 41c0-3 2-4 5-4"/>
           <path d="M50 60v30"/>
           <path d="M50 76c-6-6-14-6-18-2 6 4 12 4 18 2z" fill="currentColor" fill-opacity=".25"/>
           <path d="M50 68c6-6 14-6 18-2-6 4-12 4-18 2z" fill="currentColor" fill-opacity=".25"/>
           <path d="M50 84l-4 3M50 62l4-3"/>`,
    sun: `<circle cx="50" cy="50" r="15" fill="currentColor" fill-opacity=".25"/>
          <path d="${rays(50, 50, 22, 34, 12)}"/><path d="${rays(50, 50, 22, 28, 12, Math.PI / 12)}" opacity=".6"/>`,
    snowflake: `<path d="${rays(50, 50, 0, 38, 6)}"/>
                ${[0, 1, 2, 3, 4, 5].map((k) => `<g transform="rotate(${k * 60} 50 50)"><path d="M50 26l-7-7M50 26l7-7M50 38l-5-5M50 38l5-5"/></g>`).join("")}`,
    leaf: `<path d="M50 12C72 28 78 56 50 86C22 56 28 28 50 12Z" fill="currentColor" fill-opacity=".2"/>
           <path d="M50 20V94M50 40l-12-8M50 40l12-8M50 56l-16-10M50 56l16-10M50 72l-12-8M50 72l12-8"/>`,
    wings: `<path d="M47 52C38 32 20 22 4 26C10 34 10 40 8 46C14 44 19 48 19 54C25 50 30 54 31 60C37 56 43 57 47 52Z" fill="currentColor" fill-opacity=".2"/>
            <path d="M47 52C38 32 20 22 4 26C10 34 10 40 8 46C14 44 19 48 19 54C25 50 30 54 31 60C37 56 43 57 47 52Z" transform="translate(100 0) scale(-1 1)" fill="currentColor" fill-opacity=".2"/>
            <path d="M47 52L22 32M47 52L18 44M47 52L30 52M53 52L78 32M53 52L82 44M53 52L70 52" opacity=".5"/>
            <path d="${sparkle(50, 54, 6)}" fill="currentColor" stroke="none"/>`,
    book: `<path d="M50 30C40 24 24 24 14 28V76C24 72 40 72 50 78C60 72 76 72 86 76V28C76 24 60 24 50 30Z" fill="currentColor" fill-opacity=".12"/>
           <path d="M50 30V78M22 38c8-2 15-2 22 1M22 46c8-2 15-2 22 1M22 54c8-2 15-2 22 1M56 39c7-3 14-3 22-1M56 47c7-3 14-3 22-1M56 55c7-3 14-3 22-1" opacity=".7"/>
           <path d="${sparkle(50, 16, 6)}" fill="currentColor" stroke="none"/>`,
    crown: `<path d="M18 72L22 34L38 52L50 24L62 52L78 34L82 72Z" fill="currentColor" fill-opacity=".2"/>
            <path d="M18 80H82"/>
            <g fill="currentColor" stroke="none"><circle cx="22" cy="32" r="3"/><circle cx="50" cy="22" r="3.5"/><circle cx="78" cy="32" r="3"/><circle cx="50" cy="62" r="4"/></g>`,
    harp: `<path d="M30 90V20"/><path d="M30 22C50 18 62 34 78 40"/><path d="M78 40L30 88"/>
           <path d="M40 21V78M48 23V70M56 27V62M64 32V54M72 37V46" stroke-width="1.2" opacity=".75"/>
           <circle cx="30" cy="18" r="3" fill="currentColor" stroke="none"/>`,
    mask: `<path d="M12 40C12 30 30 28 50 36C70 28 88 30 88 40C88 56 70 64 58 58C54 56 52 52 50 52C48 52 46 56 42 58C30 64 12 56 12 40Z" fill="currentColor" fill-opacity=".18"/>
           <ellipse cx="32" cy="44" rx="9" ry="5"/><ellipse cx="68" cy="44" rx="9" ry="5"/>
           <path d="M12 40C6 38 4 32 8 28M88 40C94 38 96 32 92 28" opacity=".6"/>`,
    dagger: `<path d="M50 8L57 60H43Z" fill="currentColor" fill-opacity=".2"/><path d="M50 14V56" opacity=".6"/>
             <path d="M32 62H68"/><path d="M50 64V84"/><circle cx="50" cy="88" r="4"/>
             <path d="M30 76C18 66 24 50 36 54M70 70C82 60 76 44 64 48M28 40C20 34 24 24 32 26" opacity=".45"/>`,
    mountain: `<path d="M4 88L34 42L48 60L68 22L96 88Z" fill="currentColor" fill-opacity=".15"/>
               <path d="M60 36L68 22L76 36" opacity=".8"/>
               <rect x="64" y="28" width="8" height="7" rx="1" fill="currentColor" stroke="none"/>
               <path d="${sparkle(20, 22, 5)}${sparkle(88, 14, 4)}" fill="currentColor" stroke="none"/>`,
    skyline: `<path d="M64 14A14 14 0 1 0 64 42A12 12 0 0 1 64 14Z" fill="currentColor" stroke="none"/>
              <path d="M4 66V52H12V44H18V38H22V44H28V56H36V46L42 40L48 46V60H56V50H64V36L68 32L72 36V58H80V48H88V66Z" fill="currentColor" fill-opacity=".2"/>
              <path d="M2 74Q14 70 26 74T50 74T74 74T98 74M10 82Q22 78 34 82T58 82T82 82" opacity=".6"/>
              <path d="M24 66Q50 52 76 66" opacity=".7"/>
              <g fill="currentColor" stroke="none"><rect x="14" y="50" width="2" height="3"/><rect x="40" y="48" width="2" height="3"/><rect x="66" y="40" width="2" height="3"/><rect x="82" y="54" width="2" height="3"/></g>`,
    teacup: `<path d="M26 46H70V56C70 70 60 80 48 80C36 80 26 70 26 56Z" fill="currentColor" fill-opacity=".18"/>
             <path d="M70 50C84 50 84 66 68 66"/><path d="M16 84Q48 92 80 84"/>
             <path d="M40 38C36 32 44 28 40 20M52 38C48 32 56 28 52 20" opacity=".7"/>
             <path d="M48 58c-3-3-8 0-4 4l4 4 4-4c4-4-1-7-4-4z" fill="currentColor" stroke="none"/>`,
    candle: `<circle cx="50" cy="34" r="16" fill="currentColor" fill-opacity=".1" stroke="none"/>
             <path d="M50 18C58 28 56 38 50 42C44 38 42 28 50 18Z" fill="currentColor" fill-opacity=".6"/>
             <path d="M41 48H59V88H41Z" fill="currentColor" fill-opacity=".15"/>
             <path d="M41 54C46 54 46 62 49 62"/><path d="M30 88H70"/>`,
    cauldron: `<ellipse cx="50" cy="46" rx="30" ry="5"/>
               <path d="M22 46C22 70 34 82 50 82C66 82 78 70 78 46" fill="currentColor" fill-opacity=".18"/>
               <path d="M34 80L28 92M66 80L72 92"/>
               <g fill="currentColor" stroke="none"><circle cx="42" cy="34" r="3"/><circle cx="56" cy="26" r="4"/><circle cx="48" cy="16" r="2"/></g>`,
    heart: `<path d="M50 84C20 64 12 44 22 32C30 22 46 24 50 36C54 24 70 22 78 32C88 44 80 64 50 84Z" fill="currentColor" fill-opacity=".2"/>
            <path d="${sparkle(50, 52, 9)}${sparkle(20, 18, 4)}${sparkle(84, 20, 5)}" fill="currentColor" stroke="none"/>`,
    feather: `<path d="M74 12C44 22 28 48 28 88"/><path d="M74 12C70 42 54 66 30 80" fill="currentColor" fill-opacity=".15"/>
              <path d="M66 22L52 26M60 34L44 38M54 46L38 50M46 58L34 62M68 26L64 40M62 38L56 52M54 52L46 64" opacity=".55"/>`,
    flame: `<path d="M50 10C64 28 74 44 68 62C64 74 56 82 50 86C44 82 36 74 32 62C26 44 36 28 50 10Z" fill="currentColor" fill-opacity=".2"/>
            <path d="M50 40C58 50 60 62 50 74C40 62 42 50 50 40Z" fill="currentColor" fill-opacity=".5"/>
            <path d="M32 46C22 40 18 30 22 22M68 46C78 40 82 30 78 22" opacity=".5"/>`,
    hourglass: `<path d="M28 12H72M28 88H72"/>
                <path d="M33 12C33 36 48 42 48 50C48 58 33 64 33 88M67 12C67 36 52 42 52 50C52 58 67 64 67 88" fill="none"/>
                <path d="M38 84Q50 70 62 84Z M42 28H58Q54 38 50 44Q46 38 42 28Z" fill="currentColor" stroke="none" opacity=".7"/>
                <path d="M50 46V76" stroke-dasharray="2 4" opacity=".7"/>`,
    starfall: `<path d="M50 34C40 28 24 28 14 32V78C24 74 40 74 50 80C60 74 76 74 86 78V32C76 28 60 28 50 34Z" fill="currentColor" fill-opacity=".15"/>
               <path d="M50 34V80"/>
               <path d="${[200, 235, 270, 305, 340].map((deg) => rays(50, 30, 14, 24, 1, (deg * Math.PI) / 180)).join("")}" opacity=".6"/>
               <path d="${sparkle(50, 4, 5)}${sparkle(20, 14, 4)}${sparkle(80, 12, 5)}" fill="currentColor" stroke="none"/>`,
  };

  // Deterministic randomness so each day's art is always the same.
  const rng = (seed) => () => {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    return seed / 4294967296;
  };

  const renderArt = (day, i, { thumb = false, wide = false } = {}) => {
    const [c1, c2, ink] = PALETTES[day.art.palette] || PALETTES.night;
    const icon = ICONS[day.art.icon] || ICONS.moon;
    const rand = rng(i * 7919 + 17);
    const id = `g${i}${thumb ? "t" : ""}`;
    const w = wide ? 300 : thumb ? 120 : 300;
    const h = wide ? 150 : thumb ? 160 : 190;
    const stars = Array.from({ length: wide ? 50 : thumb ? 18 : 46 }, () => {
      const x = (rand() * w).toFixed(1);
      const y = (rand() * h).toFixed(1);
      const r = (rand() * 1.1 + 0.3).toFixed(2);
      const o = (rand() * 0.6 + 0.3).toFixed(2);
      return `<circle cx="${x}" cy="${y}" r="${r}" fill="#fff" opacity="${o}"/>`;
    }).join("");
    const size = thumb ? 84 : 128;
    const ix = (w - size) / 2;
    const iy = wide ? 8 : thumb ? 18 : (h - size) / 2;
    const svg = (aspect, body) =>
      `<svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="${aspect}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${day.art.caption}">${body}</svg>`;
    const defs = `<defs>
        <linearGradient id="${id}" x1="0" y1="0" x2="0.4" y2="1"><stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient>
        <radialGradient id="${id}h" cx="0.5" cy="${thumb ? (iy + size / 2) / h : 0.5}" r="0.5"><stop offset="0" stop-color="${ink}" stop-opacity=".22"/><stop offset="1" stop-color="${ink}" stop-opacity="0"/></radialGradient>
        <filter id="${id}f" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="${thumb ? 1.2 : 2}" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>`;
    const backdrop = `<rect width="${w}" height="${h}" fill="url(#${id})"/>${stars}`;
    const glyph = `<ellipse cx="${w / 2}" cy="${iy + size / 2}" rx="${size * 0.85}" ry="${size * 0.75}" fill="url(#${id}h)"/>
      <g transform="translate(${ix} ${iy}) scale(${size / 100})" color="${ink}" stroke="${ink}" fill="none"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round" filter="url(#${id}f)">${icon}</g>`;
    // A wide door stretches the backdrop to fill but keeps the icon uncropped.
    if (wide) return svg("xMidYMid slice", defs + backdrop) + svg("xMidYMin meet", defs.replaceAll(`id="${id}`, `id="${id}i`).replaceAll(`#${id}`, `#${id}i`) + glyph.replaceAll(`#${id}`, `#${id}i`));
    return svg("xMidYMid slice", defs + backdrop + glyph);
  };

  // ---------- sky ----------
  const sky = document.querySelector(".sky");
  const skyRand = rng(42);
  const frag = document.createDocumentFragment();
  for (let k = 0; k < 110; k++) {
    const s = document.createElement("span");
    s.className = "star" + (skyRand() > 0.88 ? " big" : "");
    s.style.left = `${skyRand() * 100}%`;
    s.style.top = `${skyRand() * 100}%`;
    s.style.setProperty("--d", `${3 + skyRand() * 4}s`);
    s.style.setProperty("--delay", `${-skyRand() * 6}s`);
    frag.appendChild(s);
  }
  sky.appendChild(frag);

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const shootingStar = () => {
    if (reduceMotion || document.hidden) return;
    const s = document.createElement("span");
    s.className = "shooting";
    s.style.left = `${30 + Math.random() * 70}%`;
    s.style.top = `${Math.random() * 45}%`;
    s.style.setProperty("--d", `${1 + Math.random() * 0.8}s`);
    sky.appendChild(s);
    s.addEventListener("animationend", () => s.remove());
  };
  const starfall = (n) => { for (let k = 0; k < n; k++) setTimeout(shootingStar, k * 140); };

  // ---------- header ----------
  $("greeting").textContent = CONFIG.name ? `Hello, ${CONFIG.name} darling` : "Hello, darling";
  $("title").textContent = CONFIG.bookTitle;
  $("subtitle").textContent = CONFIG.subtitle || "";
  $("release-date").textContent = fmt(RELEASE, { weekday: "long", day: "numeric", month: "long", year: "numeric" });

  const pad = (n) => String(n).padStart(2, "0");
  let released = false;
  const tick = () => {
    const diff = RELEASE - now();
    if (diff <= 0) {
      if (!released) {
        released = true;
        $("countdown").hidden = true;
        $("countdown-done").hidden = false;
        $("progress-fill").style.width = "100%";
        renderCalendar();
        starfall(14);
      }
      return;
    }
    const s = Math.floor(diff / 1000);
    $("cd-days").textContent = Math.floor(s / 86400);
    $("cd-hours").textContent = pad(Math.floor((s % 86400) / 3600));
    $("cd-mins").textContent = pad(Math.floor((s % 3600) / 60));
    $("cd-secs").textContent = pad(s % 60);
    const pct = Math.min(100, Math.max(0, ((now() - START) / (RELEASE - START)) * 100));
    $("progress-fill").style.width = `${pct}%`;
  };

  // ---------- calendar ----------
  const daysLeftLabel = (i) => {
    const left = TOTAL_DAYS - i;
    if (left === 0) return "Release day";
    if (left === 1) return "1 day to go";
    return `${left} days to go`;
  };

  let lastToday = null;
  function renderCalendar() {
    const today = todayIndex();
    lastToday = today;
    const list = $("calendar");
    list.innerHTML = "";
    DAYS.forEach((day, i) => {
      const unlocked = i <= today;
      const isOpened = unlocked && opened.has(i);
      const isRelease = i === DAYS.length - 1;
      const li = document.createElement("li");
      const btn = document.createElement("button");
      btn.className = "door";
      btn.classList.toggle("locked", !unlocked);
      btn.classList.toggle("opened", isOpened);
      btn.classList.toggle("today", i === today);
      btn.classList.toggle("release", isRelease);
      const d = dateFor(i);
      const left = TOTAL_DAYS - i;
      btn.setAttribute("aria-label", `${fmt(d, { day: "numeric", month: "long" })}, ${daysLeftLabel(i)}${unlocked ? "" : ", locked"}`);
      btn.innerHTML = `
        ${isOpened ? `<span class="thumb">${renderArt(day, i, { thumb: true, wide: isRelease })}</span>` : ""}
        ${i === today && !isOpened ? `<span class="badge">TODAY</span>` : ""}
        <span class="face">
          <span class="num">${isRelease ? "✦ Release Day ✦" : left}</span>
          ${isRelease ? "" : `<span class="num-label">${left === 1 ? "day left" : "days left"}</span>`}
          <span class="date">${fmt(d, { day: "numeric", month: "short" })}</span>
        </span>`;
      btn.addEventListener("click", () => {
        if (i <= todayIndex()) openDoor(i);
        else lockedDoor(btn, d);
      });
      li.appendChild(btn);
      list.appendChild(li);
    });

    const hint = $("hint");
    if (today < 0) hint.textContent = `The first door opens on ${fmt(START, { day: "numeric", month: "long" })}. Patience, darling.`;
    else if (today >= DAYS.length - 1) hint.textContent = "Every door is open. The dream is answered. ✨";
    else if (!opened.has(today)) hint.textContent = "Today's door is glowing. Tap it to see what the stars have for you.";
    else hint.textContent = "You've opened today's door. Come back tomorrow for the next one.";
  }

  const toast = (msg) => {
    const t = $("toast");
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(toast.timer);
    toast.timer = setTimeout(() => t.classList.remove("show"), 2600);
  };

  const LOCKED_LINES = [
    "Patience, Feyre darling.",
    "Not yet — even Rhys has to wait.",
    "The stars aren't ready for this one.",
    "Nice try. The Suriel says no.",
    "Locked tighter than the Hewn City.",
  ];
  const lockedDoor = (btn, d) => {
    btn.classList.remove("shake");
    void btn.offsetWidth;
    btn.classList.add("shake");
    const line = LOCKED_LINES[Math.floor(Math.random() * LOCKED_LINES.length)];
    toast(`${line} Opens ${fmt(d, { weekday: "short", day: "numeric", month: "short" })}.`);
  };

  // ---------- dialog ----------
  const dialog = $("dialog");
  let current = null;

  const syncVotes = () => {
    dialog.querySelectorAll("[data-vote]").forEach((b) => {
      b.setAttribute("aria-pressed", String(votes[current] === b.dataset.vote));
    });
  };

  function openDoor(i) {
    const day = DAYS[i];
    current = i;
    $("dlg-art").innerHTML = renderArt(day, i);
    $("dlg-caption").textContent = day.art.caption;
    $("dlg-title").textContent = fmt(dateFor(i), { weekday: "long", day: "numeric", month: "long" });
    $("dlg-days").textContent = daysLeftLabel(i);
    $("dlg-quote").textContent = `“${day.quote.text}”`;
    $("dlg-source").textContent = day.quote.source;
    $("dlg-reminder").textContent = day.reminder;
    $("dlg-theory-title").textContent = day.theory.title;
    $("dlg-theory").textContent = day.theory.text;
    syncVotes();

    if (typeof dialog.showModal === "function") dialog.showModal();
    else dialog.setAttribute("open", "");
    dialog.scrollTop = 0;

    const firstTime = !opened.has(i);
    if (firstTime) {
      opened.add(i);
      store.set(KEY_OPENED, [...opened]);
      starfall(i === DAYS.length - 1 ? 24 : 5);
    }
  }

  const closeDialog = () => {
    if (typeof dialog.close === "function") dialog.close();
    else dialog.removeAttribute("open");
  };
  dialog.addEventListener("close", renderCalendar);
  $("dlg-close").addEventListener("click", closeDialog);
  dialog.addEventListener("click", (e) => { if (e.target === dialog) closeDialog(); });
  dialog.querySelectorAll("[data-vote]").forEach((b) => {
    b.addEventListener("click", () => {
      votes[current] = votes[current] === b.dataset.vote ? undefined : b.dataset.vote;
      store.set(KEY_VOTES, votes);
      syncVotes();
    });
  });

  // ---------- go ----------
  if (DAYS.length !== TOTAL_DAYS + 1) {
    console.warn(`content.js has ${DAYS.length} days but ${TOTAL_DAYS + 1} are needed from startDate to releaseDate.`);
  }
  renderCalendar();
  tick();
  setInterval(() => {
    tick();
    if (todayIndex() !== lastToday) renderCalendar(); // rolled past midnight
  }, 1000);
  setInterval(shootingStar, 7000);
  setTimeout(shootingStar, 1200);
})();
