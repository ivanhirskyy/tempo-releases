// Generated from data/patch-notes.json by scripts/site-patch-notes.mjs. Do not edit.
window.PATCH_NOTES = [
  {
    "version": "0.9.6",
    "date": "2026-11-17",
    "notes": [
      "Behind the scenes: each of Tempo's pages now stands on its own, so fixes and new features can land faster. Nothing looks different."
    ]
  },
  {
    "version": "0.9.5",
    "date": "2026-11-17",
    "notes": [
      "Behind the scenes: Tempo now checks, before every release, that its screens and its League connection agree on every piece of data, so a missing number can't slip through unnoticed."
    ]
  },
  {
    "version": "0.9.4",
    "date": "2026-11-17",
    "notes": [
      "When you open a game that Tempo hadn't read yet, its MVP badge and your team rank show in Profile straight away, not only after the next sync."
    ]
  },
  {
    "version": "0.9.3",
    "date": "2026-11-17",
    "notes": [
      "The update prompt now also waits while you're in queue or at a ready check, not only during champ select and games, so an update can't interrupt a match being found.",
      "Tempo keeps one connection to the League client instead of opening a new one every second or two while you play.",
      "Clearer messages when League stops responding or turns down a request."
    ]
  },
  {
    "version": "0.9.2",
    "date": "2026-11-16",
    "notes": [
      "Current game and champion pages explain a missing build more precisely: in ARAM Mayhem, \"Not enough ARAM games on this champion for a build yet\" instead of saying the mode has no build source; in Ranked, which role is missing games when League assigned you one.",
      "Tier lists say so when their statistics could not be loaded, instead of waiting forever."
    ]
  },
  {
    "version": "0.9.1",
    "date": "2026-11-16",
    "notes": [
      "Opening a finished game's results while Tempo is still saving your match history no longer fails with \"Cannot save game details\".",
      "Your profile is saved safely, so closing Tempo or a crash while it saves can no longer leave it unreadable."
    ]
  },
  {
    "version": "0.9.0",
    "date": "2026-11-16",
    "notes": [
      "Ranked Solo/Duo statistics, from Tempo's own sample of Emerald+ games on this patch. Tier list has a Ranked mode with a role picker: tiers per role, and a table with win, pick and ban rates, the hardest lane matchups and your own record.",
      "Champion pages have a Ranked tab with a role picker: the build, summoner spells and skill order for that role, the rune page laid out like the client's, and the hardest and easiest lane matchups.",
      "In a Ranked game, Current game shows the build and runes for the role League assigned you, with your matchup against your lane opponent first.",
      "Roles show League's own position icons."
    ]
  },
  {
    "version": "0.8.4",
    "date": "2026-11-16",
    "notes": [
      "ARAM builds now always show a full inventory: boots and five items, or six items for the rare build that skips boots. Before, some showed seven items and others stopped at three or four."
    ]
  },
  {
    "version": "0.8.3",
    "date": "2026-11-16",
    "notes": [
      "Every page now credits Tempo's developer, Next3Gen, in its footer."
    ]
  },
  {
    "version": "0.8.2",
    "date": "2026-11-16",
    "notes": [
      "Champions is one list for every champion. Choose Normal or League Classic: League Classic shows the 88 champions in that mode, with their classic icons.",
      "Click a champion to open its own page, laid out like the in-game helper, with a pill for each mode. ARAM shows builds, summoner spells and skill order from normal ARAM games, now also outside a game. ARAM Mayhem adds augment tiers and combos. League Classic shows the champion's old kit and base stats.",
      "Tier list has a Table view next to Tiers: sort by win rate, pick rate or games, and see your own record on each champion. Augments get a table too, with tiers and pick rates.",
      "Page choices like the Items shop and the Tier list mode now share one look, without labels."
    ]
  },
  {
    "version": "0.8.1",
    "date": "2026-11-16",
    "notes": [
      "Champion pages have proper tabs, which you can also switch with the arrow keys. Overview previews each mode's statistics in a card that opens its tab.",
      "The ARAM Mayhem tab opens with the champion's win rate, games, pick rate and popularity, then your own Mayhem record in one line.",
      "A mode that's the only choice, like the Tier list's ARAM Mayhem, now reads as a label instead of looking like a button. Profile shows its filter only once you've played more than one queue."
    ]
  },
  {
    "version": "0.8.0",
    "date": "2026-11-16",
    "notes": [
      "Game mode is no longer one setting for the whole app. Each page has its own choice next to what it changes: Items picks a shop, Tier list shows its mode, and Profile filters your games, with a count for each queue you've played.",
      "Champion pages have mode tabs. Overview shows the champion and your record split by mode; the ARAM Mayhem tab holds win rates, augments, item outcomes and combos. More modes get a tab as Tempo gains statistics for them.",
      "Pages only offer modes Tempo has data for, so no choice leads to an empty page. Tempo starts on the mode you play most and remembers what you pick, and switching between League and TFT takes you back to where you were.",
      "Opening a champion from Current game, a match or the Tier list opens it in that mode. Finished games no longer change what you're browsing."
    ]
  },
  {
    "version": "0.7.3",
    "date": "2026-11-16",
    "notes": [
      "The game-mode picker moves from beside the page title into the top bar, next to League/TFT, so it sits in the same place on every page.",
      "The mode picker has a larger click target, gold accents, grouped choices, quick search, and arrow-key navigation.",
      "Page headers are smaller and no longer repeat League of Legends or Teamfight Tactics above every title. On narrow windows navigation wraps to its own row instead of squeezing controls.",
      "Softer keyboard focus indicators replace the bright double outlines, and controls, cards and menus now share consistent corner radii across the app."
    ]
  },
  {
    "version": "0.7.2",
    "date": "2026-11-16",
    "notes": [
      "A compact dropdown beside the page title replaces the repeated game-mode tabs. Champions and Tier list share your selected mode; Items shows the matching shop with four shop choices.",
      "Profile opens on All games and has its own match-history filter, independent of your browsing mode. Each match keeps its own queue label and Mayhem data stays scoped to Mayhem.",
      "Current game continues to follow the League client automatically, independently of the browsing filter."
    ]
  },
  {
    "version": "0.7.1",
    "date": "2026-11-16",
    "notes": [
      "ARAM Mayhem champ select once again shows the searchable augment tier board beside your build, with skill order inside the build card. Normal ARAM keeps its separate Build and Skill order layout.",
      "Mayhem's augment lookup stays available even when your champion has no sampled augment tiers yet."
    ]
  },
  {
    "version": "0.7.0",
    "date": "2026-11-16",
    "notes": [
      "Current game has one simpler Build panel: summoner spells with their win rate and games, then items (starting items, build order, boots and situational items), all from normal ARAM games. In game it sits beside the augments, in champ select beside the skill order.",
      "Up to four build paths per champion, like Bruiser or Lethality, each from games that built the same first item, with its own starting items and a full build of up to six items picked by win rate, boots placed where players buy them, and situational items. Pick one to switch.",
      "The champion picker on the in-game page only appears when League hasn't reported your champion yet. Click any player to see their champion instead."
    ]
  },
  {
    "version": "0.6.0",
    "date": "2026-11-14",
    "notes": [
      "Current game has a new layout for champ select and in game: your champion's win rate up top, spells, boots, build and skill order in the middle, and every player along the bottom.",
      "Champ select puts your bench and your teammates' champions in a strip at the top. Click any of them to compare.",
      "Players show their name (when League shows it), ranked tier and win–loss record. In game you see both teams; click a player to see their champion's build.",
      "New builds from normal ARAM games: starting items, build order, situational items and the most played skill order, each with its win rate. In ARAM Mayhem they carry an ARAM label until Mayhem builds are available.",
      "Champions without enough ARAM games follow Riot's own recommended skill order."
    ]
  },
  {
    "version": "0.5.0",
    "date": "2026-11-14",
    "notes": [
      "Mayhem builds now show augment tiers, effects and pick shares, with a lookup for full descriptions and known combos. Augment win-rate percentages are no longer shown.",
      "Champion select adds summoner spell pairs and boots from sampled Mayhem games, alongside more item options.",
      "The in-game page focuses on your champion, with ability descriptions and build references together.",
      "Patch notes have a new release timeline and version tree. Jump to a version or scroll through earlier updates, with the selected version highlighted as you go."
    ]
  },
  {
    "version": "0.4.0",
    "date": "2026-11-14",
    "notes": [
      "Current game now appears only when a match is found. Accept or decline it right in Tempo, on a new match-found screen.",
      "When the game ends, Tempo opens it in your Profile, and Current game steps aside until your next match.",
      "New Preferences page behind the gear icon: your League connection, automatic checking (on by default) and the lockfile path.",
      "Items now has four shops (Summoner's Rift, ARAM, ARAM Mayhem and Arena) with no duplicate items. ARAM Mayhem shows its own shop."
    ]
  },
  {
    "version": "0.3.3",
    "date": "2026-11-13",
    "notes": [
      "Champ select is cleaner: a slim status bar replaces the big card, so your choices and build appear right away.",
      "The build panel uses the full width, with your champion's splash art behind it.",
      "Your team's damage split is a slim bar under the champion strip."
    ]
  },
  {
    "version": "0.3.2",
    "date": "2026-11-13",
    "notes": [
      "Your ranks now sit in the profile header with the client's tier crests, always visible: Solo/Duo, Flex and TFT with LP, wins and win rate.",
      "Mode tabs on the profile only show that mode's games and stats."
    ]
  },
  {
    "version": "0.3.1",
    "date": "2026-11-13",
    "notes": [
      "My games is now your Profile: your Riot ID, profile icon and level at the top.",
      "See your ranked standing (Solo/Duo, Flex and TFT) with LP and wins, even while League is closed."
    ]
  },
  {
    "version": "0.3.0",
    "date": "2026-11-13",
    "notes": [
      "New look: navigation moves to a bar across the top, and game modes become tabs inside each page, so every page shares the same layout.",
      "New Tier list page: ARAM Mayhem champions ranked S to D, and augments ranked within each rarity, by win rate.",
      "See which augments arrived in the latest patch under New augments.",
      "Other modes show their tab with an honest note until there is real data to rank them."
    ]
  },
  {
    "version": "0.2.4",
    "date": "2026-11-13",
    "notes": [
      "New Patch notes page in the sidebar shows what changed in each version, with the one you have installed marked."
    ]
  },
  {
    "version": "0.2.3",
    "date": "2026-11-13",
    "notes": [
      "The Items page now looks like the in-game shop: compact tiles grouped by tier (Legendary, Epic, Basic, Boots, Starter, Consumables), cheapest first.",
      "Hover an item for its full details: stats, effects, what it builds from and into.",
      "Filter items by shop tier and by stat. Pick several stats to see items that have all of them.",
      "Item search also matches stats and effect text."
    ]
  },
  {
    "version": "0.2.2",
    "date": "2026-11-13",
    "notes": [
      "In-game item search matches item effects as well as names."
    ]
  },
  {
    "version": "0.2.1",
    "date": "2026-11-13",
    "notes": [
      "Champion, augment and item helpers stay available for your whole League game, not only in champ select.",
      "Opening Tempo mid-match still finds your champion, or lets you pick it."
    ]
  },
  {
    "version": "0.2.0",
    "date": "2026-11-13",
    "notes": [
      "First signed Windows release.",
      "Tempo checks for updates at launch and every four hours. An update installs only when you click it, and never during champ select or a game."
    ]
  }
];
