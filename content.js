// ✨ Everything visitors see lives in this file — edit freely!
//
// CONFIG  → name, dates
// DAYS    → one entry per door, in order, from startDate to releaseDate.
//           The last entry is release day.
//
// Each day has:
//   art:     { icon, palette, caption }   (see ICONS / PALETTES in app.js)
//   quote:   { text, source }
//   reminder: string
//   theory:  { title, text }
//
// Quotes marked "Velaris whisper" are little fan-made lines, not from the
// books — swap in favourite real quotes if you like!

window.ACOTAR = {
  CONFIG: {
    // Fallback name for the greeting ("Hello, ___ darling"). Visitors enter their
    // own name on first visit, or arrive with one via a ?name= gift link.
    name: "",
    startDate: "2026-10-06",
    releaseDate: "2026-10-27",
    bookTitle: "ACOTAR 6",
    subtitle: "A Court of Splintered Harmony",
  },

  DAYS: [
    // Tue 6 Oct — 21 days to go
    {
      art: { icon: "constellation", palette: "night", caption: "The night sky over Velaris" },
      quote: {
        text: "To the stars who listen — and the dreams that are answered.",
        source: "Rhysand, A Court of Mist and Fury",
      },
      reminder:
        "Day one of the countdown! Double-check your preorder is actually placed — and decide once and for all: special edition, standard… or both. No judgement.",
      theory: {
        title: "Whose book is it?",
        text:
          "It's officially called A Court of Splintered Harmony, and it's part one of a story so big Sarah J. Maas split it across books 6, 7 and 8. A leaked audiobook sample reportedly opens with Azriel — and with Elain still the last Archeron sister without her own story, readers are betting on both of them.",
      },
    },

    // Wed 7 Oct — 20 days to go
    {
      art: { icon: "rose", palette: "spring", caption: "Where it all began" },
      quote: {
        text: "The forest had become a labyrinth of snow and ice.",
        source: "A Court of Thorns and Roses — the very first line",
      },
      reminder:
        "Remember the bargain? Under the Mountain, Feyre agreed to spend one week of every month at the Night Court in exchange for Rhys healing her. That swirling tattoo started everything.",
      theory: {
        title: "Lucien is Helion's son",
        text:
          "Lucien looks nothing like his Autumn Court brothers, and in ACOWAR Feyre notices how much he resembles Helion, High Lord of Day. It's practically confirmed — but Lucien himself doesn't know. When he finds out, it could change who inherits what.",
      },
    },

    // Thu 8 Oct — 19 days to go
    {
      art: { icon: "book", palette: "dawn", caption: "Clear your schedule" },
      quote: {
        text: "I was a survivor, and I was strong.",
        source: "Feyre, A Court of Mist and Fury",
      },
      reminder:
        "Release day is Tuesday 27 October. Book the day off (or at least the evening), cancel plans and warn everyone: you will be unreachable. You'll be in Prythian.",
      theory: {
        title: "Azriel × Gwyn",
        text:
          "The Shadowsinger keeps turning up around the Library's bravest priestess. Gwyn is training as a Valkyrie, she's tougher than anyone expected, and some readers think she's the one who'll finally get Azriel to let someone in.",
      },
    },

    // Fri 9 Oct — 18 days to go
    {
      art: { icon: "moon", palette: "night", caption: "Night Triumphant" },
      quote: {
        text: "Night Triumphant — and the Stars Eternal.",
        source: "The Night Court",
      },
      reminder:
        "Spoiler-proof your phone now, before the leaks start: mute ACOTAR, Rhysand, Elain, Azriel, Lucien and Nesta on TikTok, Instagram and X. Future you will be grateful.",
      theory: {
        title: "The Bone Carver knows more",
        text:
          "When Feyre visited the Bone Carver in ACOWAR, he took the form of a little boy with Rhys's colouring and Feyre's mouth — her future son. Nyx was born in ACOSF. His sister is the Weaver, and some fans think Koschei is a third sibling. If the Bone Carver could see Nyx coming… what else has he seen?",
      },
    },

    // Sat 10 Oct — 17 days to go
    {
      art: { icon: "harp", palette: "velaris", caption: "The Dread Trove" },
      quote: {
        text: "Only you can decide what breaks you, Cursebreaker. Only you.",
        source: "The Suriel, A Court of Wings and Ruin",
      },
      reminder:
        "Remember the Dread Trove? The Harp, the Crown and the Mask — ancient objects of terrible power that Nesta hunted down in ACOSF. They were found… but they didn't stop existing.",
      theory: {
        title: "The Trove isn't done with us",
        text:
          "Objects that powerful don't get introduced just to sit in a vault. Fans are betting at least one piece of the Dread Trove — maybe the Harp, which can open any door (some say even between worlds) — plays a part again.",
      },
    },

    // Sun 11 Oct — 16 days to go
    {
      art: { icon: "teacup", palette: "dawn", caption: "Cosy reading nook" },
      quote: {
        text: "Every new chapter is just a door to Velaris you haven't opened yet.",
        source: "Velaris whisper",
      },
      reminder:
        "Sunday job: build your reading nook. Softest blanket, best pillow, candles, a good lamp and somewhere to put your tea. This is your House of Wind now.",
      theory: {
        title: "Elain's visions matter more than we think",
        text:
          "Elain came out of the Cauldron a Seer, and in ACOWAR she saw things no one else could. Readers think her gift is being saved for something huge — maybe finding something (or someone) that's been hidden for a very long time.",
      },
    },

    // Mon 12 Oct — 15 days to go
    {
      art: { icon: "flame", palette: "autumn", caption: "The firebird queen" },
      quote: {
        text: "Even the smallest flame can light up the whole Autumn Court.",
        source: "Velaris whisper",
      },
      reminder:
        "Remember Vassa? She's the human queen Koschei cursed to be a firebird by day and a woman only by night, bound to his lake. Lucien and Jurian have been living with her in the human lands.",
      theory: {
        title: "Koschei's mystery allies",
        text:
          "Not a theory any more: the official blurb says Koschei the Deathless is stirring after millennia bound to a mountain lake, with \"powerful allies hell-bent on reclaiming… the human lands.\" Who are they? Remember, back in ACOFAS Eris warned that Beron was eyeing the human lands…",
      },
    },

    // Tue 13 Oct — 14 days to go
    {
      art: { icon: "skyline", palette: "velaris", caption: "Velaris, City of Starlight" },
      quote: {
        text: "There are good days and hard days for me — even now. Don't let the hard days win.",
        source: "Mor, A Court of Mist and Fury",
      },
      reminder:
        "Two weeks today! Text your bookish friends and book a spoiler-chat date for after release — snacks, wine, and screaming optional but encouraged.",
      theory: {
        title: "Lucien × Vassa",
        text:
          "He's spent books being the friend, the emissary, the one left behind. Now he lives with a fierce, cursed queen who doesn't need saving. Some fans think the real love story for Lucien was never the mating bond at all.",
      },
    },

    // Wed 14 Oct — 13 days to go
    {
      art: { icon: "dagger", palette: "illyrian", caption: "Truth-Teller" },
      quote: {
        text: "Shadows remember everything. That's why they always come back to the light.",
        source: "Velaris whisper",
      },
      reminder:
        "Remember the crossover? In House of Flame and Shadow, Bryce Quinlan landed in Prythian and was questioned by Rhys, Azriel and Nesta. Her Starsword turned out to be the twin of Azriel's dagger, Truth-Teller.",
      theory: {
        title: "Truth-Teller's secret",
        text:
          "Why would Azriel carry the twin of a sword from another world? Readers think the story of how Truth-Teller came to Prythian ties Prythian's history to the Crescent City universe — and with Azriel reportedly front and centre in this book, we might finally find out.",
      },
    },

    // Thu 15 Oct — 12 days to go
    {
      art: { icon: "wings", palette: "illyrian", caption: "Illyrian wings" },
      quote: {
        text: "Somewhere in the Steppes an Illyrian is doing push-ups and thinking about you.",
        source: "Velaris whisper",
      },
      reminder:
        "Remember Nyx? Feyre and Rhys's son was born at the end of ACOSF — and a whole lot of drama came with him. Feyre is a mother now. High Lady and mum.",
      theory: {
        title: "More Night Court babies",
        text:
          "Nesta and Cassian are mated, Feyre and Rhys have Nyx… readers are betting the next book has at least one new pregnancy announcement. Bets are open on who.",
      },
    },

    // Fri 16 Oct — 11 days to go
    {
      art: { icon: "leaf", palette: "autumn", caption: "The Autumn Court" },
      quote: {
        text: "Some courts burn. The clever ones wait for their moment.",
        source: "Velaris whisper",
      },
      reminder:
        "Remember Eris? Lucien's eldest brother has been secretly passing the Night Court information about his father Beron — and he very clearly wants Beron's throne.",
      theory: {
        title: "Eris becomes High Lord",
        text:
          "Beron has been on borrowed time for several books. Fans are sure we'll see the Autumn Court change hands — and that Eris, the most morally grey man in Prythian, gets a lot more page time (and maybe a love interest).",
      },
    },

    // Sat 17 Oct — 10 days to go
    {
      art: { icon: "candle", palette: "dawn", caption: "Reading by candlelight" },
      quote: {
        text: "Read slowly. Some stories only get one first time.",
        source: "Velaris whisper",
      },
      reminder:
        "Ten days! Make a release-night playlist: something starlit for Velaris, something stormy for battles, something soft for the… you know. The chapters.",
      theory: {
        title: "Tamlin's redemption",
        text:
          "The Spring Court is in ruins and Tamlin has been left alone with his guilt. Some readers would rather he stay a villain, others want an apology arc. Either way, a High Lord with nothing left to lose is dangerous.",
      },
    },

    // Sun 18 Oct — 9 days to go
    {
      art: { icon: "mask", palette: "velaris", caption: "Masks and secrets" },
      quote: {
        text: "Everyone in Prythian wears a mask. The trick is knowing who has taken theirs off for you.",
        source: "Velaris whisper",
      },
      reminder:
        "Remember Amren? She was something ancient trapped in a High Fae body — and after the final battle of ACOWAR she came back as true High Fae, most of her old power gone. Varian is at her side.",
      theory: {
        title: "Amren isn't from Prythian",
        text:
          "She came from somewhere else, through a rift, long before the Wall. With the Crescent City crossover proving other worlds connect to Prythian, readers think Amren's origin story could finally get told.",
      },
    },

    // Mon 19 Oct — 8 days to go
    {
      art: { icon: "sun", palette: "day", caption: "The Day Court" },
      quote: {
        text: "Even the Day Court admits the stars are prettier.",
        source: "Velaris whisper",
      },
      reminder:
        "Charge the Kindle (or clear a space on the shelf), find a bookmark worthy of the occasion and, if you're an annotator, stock up on sticky tabs. Colour-code the swoons.",
      theory: {
        title: "Helion, Spell-Cleaver",
        text:
          "They call him Helion Spell-Cleaver. Vassa is cursed. Lucien is (secretly) his son. Readers think the High Lord of Day — or a son who inherited his gift — could be the key to setting the firebird queen free.",
      },
    },

    // Tue 20 Oct — 7 days to go
    {
      art: { icon: "mountain", palette: "illyrian", caption: "The House of Wind" },
      quote: {
        text: "Ten thousand steps up to the House of Wind, and still worth it for the view.",
        source: "Velaris whisper",
      },
      reminder:
        "One week today! Remember Nesta's ACOSF arc: the House of Wind, the 10,000 steps, the Valkyrie training with Gwyn and Emerie, and Cassian. Never forget Cassian.",
      theory: {
        title: "The Valkyries rise again",
        text:
          "Nesta, Gwyn and Emerie brought the ancient Valkyrie order back from the dead. Fans think they'll ride into the next big battle as a real fighting force — and that more females will join them.",
      },
    },

    // Wed 21 Oct — 6 days to go
    {
      art: { icon: "heart", palette: "spring", caption: "Mates" },
      quote: {
        text: "To the people who look at the stars and wish, Rhys.",
        source: "Feyre, A Court of Mist and Fury",
      },
      reminder:
        "Remember the bonds: Feyre & Rhys, Nesta & Cassian, Elain & Lucien — but Elain has never accepted hers, and Lucien has given her space ever since.",
      theory: {
        title: "Elain × Azriel (or not?)",
        text:
          "The most argued-about pairing in the fandom. The stolen glances, the near-kiss at Solstice… and then Rhys ordering Azriel to stay away from her, because crossing Lucien's mating bond could start a blood duel. Will the bond win or will the heart? Pick a side today.",
      },
    },

    // Thu 22 Oct — 5 days to go
    {
      art: { icon: "cauldron", palette: "night", caption: "The Cauldron" },
      quote: {
        text: "Whatever the Cauldron made, love made something stronger.",
        source: "Velaris whisper",
      },
      reminder:
        "Snack prep: chocolate cake, a bottle of something sparkling, something with a crunch for when you need to stress-eat during the battle scenes.",
      theory: {
        title: "The Cauldron's true origin",
        text:
          "The Cauldron made the world, made the Archeron sisters… but where did it come from? With multiple worlds now in play, fans think the Cauldron (and the Mother) might have a much bigger, older story than we've been told.",
      },
    },

    // Fri 23 Oct — 4 days to go
    {
      art: { icon: "feather", palette: "winter", caption: "A quiet moment" },
      quote: {
        text: "The best stories are the ones you can't stop thinking about at 3am.",
        source: "Velaris whisper",
      },
      reminder:
        "Remember Mor? Brave, bright Morrigan, who hid for centuries that she prefers females — until she finally told Feyre in ACOWAR. She deserves a love story of her own, and so far she hasn't got one.",
      theory: {
        title: "Mor's happy ending",
        text:
          "Readers have wanted Mor to get her own romance for years — maybe with someone from another court. If the next book widens the cast, she's top of the wish list.",
      },
    },

    // Sat 24 Oct — 3 days to go
    {
      art: { icon: "snowflake", palette: "winter", caption: "Winter Solstice in Velaris" },
      quote: {
        text: "Three more sleeps. Even the Winter Court is getting excited.",
        source: "Velaris whisper",
      },
      reminder:
        "Final reread weekend: pick your comfort chapters. Starfall, the Solstice gifts, the House of Wind dinners — whatever makes your heart go wild.",
      theory: {
        title: "Jurian and the hidden island",
        text:
          "Miryam and Drakon's people live on the hidden isle of Cretea, and Jurian — the human hero brought back from the dead — is still in the mix. Fans think the old war heroes (and some long-buried grudges) will matter again.",
      },
    },

    // Sun 25 Oct — 2 days to go
    {
      art: { icon: "crown", palette: "day", caption: "The High Lords" },
      quote: {
        text: "Bow to no one but the book you're about to read.",
        source: "Velaris whisper",
      },
      reminder:
        "Two days! Lay out your release-day outfit (comfiest pyjamas only), make sure your preorder has shipped or is downloading, and warn your phone it's going on Do Not Disturb.",
      theory: {
        title: "Who betrayed whom?",
        text:
          "The blurb says the Night Court is \"reeling from recent betrayals and revealed truths\" and the rifts between them \"seem insurmountable.\" The Inner Circle, splintered? Fans' top suspects: Rhys's order to Azriel, Elain's secrets, and Eris's bargains.",
      },
    },

    // Mon 26 Oct — 1 day to go
    {
      art: { icon: "hourglass", palette: "starfall", caption: "The night before" },
      quote: {
        text: "Tomorrow, darling. Tomorrow.",
        source: "Velaris whisper",
      },
      reminder:
        "TOMORROW. Check whether the ebook releases at midnight where you are and set an alarm if so. Charge everything. Snacks within arm's reach. Sleep if you can (you won't).",
      theory: {
        title: "Your turn",
        text:
          "Before you open the book, write down your three biggest predictions somewhere safe. Who ends up together? Who dies? Who betrays whom? You'll want the receipts in a week.",
      },
    },

    // Tue 27 Oct — RELEASE DAY
    {
      art: { icon: "starfall", palette: "starfall", caption: "Starfall" },
      quote: {
        text: "To the stars who listen — and the dreams that are answered.",
        source: "Today, the dream is answered.",
      },
      reminder:
        "IT'S HERE. Phone on silent. Blanket on. Tea poured. Go read it — Prythian has been waiting for you. (And when you finish that cliffhanger: book 7, A Court of Forgotten Melody, is out 12 January 2027.) Happy release day! 💜",
      theory: {
        title: "All will be revealed",
        text:
          "Every theory from the last three weeks is about to be confirmed or destroyed. Come back when you've finished and see which ones you called.",
      },
    },
  ],
};
