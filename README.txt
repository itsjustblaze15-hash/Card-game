GOLDEN PULLS V6 - MOBILE NAVIGATION FIX

Visible version remains V6.

BOTTOM MENU FIX
- The bottom categories are no longer squeezed into tiny equal-width boxes.
- Tabs are now larger pill-style buttons.
- The bottom menu scrolls horizontally on mobile.
- Labels stay readable instead of getting crushed together.
- Active tab remains highlighted.
- Added safe spacing so the menu does not cover page content.

All other V6 features remain unchanged.


GOLDEN PULLS V7
Built directly from the exact working V6 Mobile Navigation Fix.

V7 additions:
- Preserved all 81 original V6 cards and their IDs.
- Added all requested new card photos and characters.
- Ice Agents uses the exact uploaded Ice Agents photo.
- Added I Need More Bullets as a 20-win Exotic boss fight.
- Prize wheel costs 5,000 coins.
- Removed the 5,000-coin wheel prize outcome.
- Kept all V6 systems: saving, packs, rewards, battles, upgrades, OVR, abilities, win streaks, boss battles, account value, animations, PWA, icons, and mobile navigation.
- No uploaded photos were generated or edited.

V7 GAMEPLAY UPDATE
- Replaced best-of-three battle scoring with 3v3 HP combat.
- Attack, Defense, Speed and OVR now affect combat.
- Bot difficulty remains random 1-5 stars.
- Difficulty stars: gray, green, blue, purple, gold.
- Battle cards now use stronger rarity coloring.
- I Need More Bullets has its own fresh 0/20 progress counter.
- Upgraded rarity changes card sell value and account value.
- Added Sell All Cards with 3-second hold confirmation.
- Added Reset Everything with 3-second hold confirmation.
- Added search bars to Collection and Card Index.
- Card picker Cancel is now sticky at the top.

V7 BATTLE FIX
- Fixed the battle getting stuck with no attacks happening.
- Enemy team stays at the top; player team stays at the bottom.
- Cards step into the center one at a time, attack all surviving opponents, then return.
- Enemy cards do the same back to the player team.
- Full turn cycle repeats until one whole team is eliminated.
- Added damage number popups and HP bar animation.
- Removed extra 'enemy team / your team / one star battle' clutter; only colored stars remain.
- Collection Sell All / Reset buttons moved to small controls beside COLLECTION.
- Boss cards are now compact instead of huge.

V7 BATTLE RUNTIME FIX
- Fixed missing wait() helper that caused battle animation to freeze after opening.
- Fixed missing upgrade-win helper used when a battle ends.
- Removed the idle '2-star bot' style message from the center.
- One card now steps into the middle, attacks one opposing card, then returns.
- The other team then sends one card forward.
- Turns alternate continuously and rotate through all surviving cards.
- Battle ends only when every card on one team reaches 0 HP.

V7 SWEEP BATTLE UPDATE
- Restored the full green Victory and red Defeat screens after battles.
- One active card now attacks every surviving opposing card before returning.
- Then one card from the other team steps in and attacks every surviving card.
- Active cards rotate one by one on each side.
- The fight continues until one entire team reaches 0 HP.

V7 BOSS BATTLE FIX
- Ice Agents and I Need More Bullets no longer use the old round-based battle code.
- Boss fights now use the animated HP battle arena.
- Boss appears as the enemy at the top with one large boss HP bar.
- Player cards rotate into the middle one at a time and attack the boss.
- Boss steps into the middle and attacks every surviving player card before returning.
- Fight continues until the boss reaches 0 HP or all three player cards reach 0 HP.
- Victory/Defeat result screens are shown at the end.

V7 RESULT SCREEN FIX
- Restored the missing showResult() and closeResult() functions.
- Victory now always opens the green VICTORY screen.
- Loss now always opens the red DEFEAT screen.
- Result screen is forced above normal and boss battle overlays.
- Fix applies to normal battles, Ice Agents, and I Need More Bullets.

GOLDEN PULLS V8
- Boss difficulty unchanged; boss card centered top.
- Records page added.
- Live rarity-colored player team rating added; all Exotic = cyan 6-star.
- Selected Play cards use rarity colors.
- Regular matchmaking scales around player team strength and star labels match actual bot rarity composition.
- Ultra-rare 6-star Exotic bot chance: about 1 in 5,000 normal games.

V8 ARTLANDER + BOSS PROGRESSION UPDATE
- Added Artlander as Tier 3 Exotic Boss.
- Boss progression is sequential:
  Tier 1 Ice Agents: 10 wins -> defeat boss.
  Tier 2 I Need More Bullets: starts fresh at 0/20 wins after Tier 1 is defeated.
  Tier 3 Artlander: starts fresh at 0/30 wins after Tier 2 is defeated.
- Later bosses stay locked until the previous boss has been cleared.
- Tier 2 is harder than Tier 1; Tier 3 is harder than Tier 2.
- Boss reward cards are NORMAL Exotic power in the player's collection.
- All Exotic cards, including upgraded-to-Exotic cards, are normalized to the same regular Exotic stat/HP band.
- Regular matchmaking now leans equal-or-harder more often to reduce near-automatic win streaks.
- This update package intentionally includes ONLY the new Artlander photo inside assets/.

GOLDEN PULLS V8.1
- Fixed Records page: games played, wins, losses, win rate, streaks, boss wins/losses.
- Index now always displays each card's ORIGINAL rarity and original OVR.
- Collection still displays your upgraded rarity/version.
- Fixed Victory and Defeat result overlays for normal battles and bosses.
- Battle overlay is hidden before the result screen appears.

GOLDEN PULLS V8 BALANCE FIX
- Version label is V8.
- Coin wallet pill is smaller on mobile.
- Regular matchmaking is easier than the previous build, but still competitive.
- Exotic owned cards are stronger than Legendary, but only by a modest amount.
- Exotic HP is now above Legendary HP.
- Boss difficulty unchanged.
