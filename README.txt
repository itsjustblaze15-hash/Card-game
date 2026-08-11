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

V8 BOSS PROGRESSION FIX
- If Ice Agents is already owned, Tier 1 is automatically marked CLEARED.
- Owning Ice Agents automatically advances the save to Tier 2 and starts I Need More Bullets at 0/20.
- If I Need More Bullets is already owned, Tier 2 is automatically marked CLEARED and Tier 3 starts at 0/30.
- Cleared bosses no longer offer duplicate reward cards.
- Duplicate boss rewards are blocked even if an old save reaches the fight again.

V8 SIX-STAR MATCHMAKING FIX
- If your selected team is 6 stars / all Exotic, the normal-match bot team is guaranteed to be all Exotic too.
- Other team ratings keep the existing balanced matchmaking.
- Boss difficulty and boss progression are unchanged.

V8 BOSS BALANCE FIX
- Boss HP reduced by about 18%.
- Boss damage against player cards reduced by about 16%.
- Boss progression order is unchanged: Ice Agents < I Need More Bullets < Artlander.
- Boss reward cards and normal matchmaking are unchanged.
- Six-star/all-Exotic normal matchmaking remains all Exotic vs all Exotic.

V8 SIX-STAR FAIRNESS FIX
- 6-star / all-Exotic player teams now face 3 distinct Exotic bot cards.
- No duplicate cards are allowed on the bot team.
- Exotic-vs-Exotic normal battles no longer receive a hidden bot difficulty damage bonus.
- Boss battles are unchanged.

V8 BOSS DIFFICULTY UPDATE
- Boss HP lowered substantially so top Exotic teams can realistically win.
- Boss attack damage lowered again.
- Ice Agents remains easiest, I Need More Bullets harder, Artlander hardest.
- Bosses remain challenging and are not guaranteed wins.
- Six-star Exotic normal matchmaking fairness and no-duplicate bot teams remain unchanged.

V8 BOSS TEAM-TURN UPDATE
- Boss fights now use team turns.
- On the player's turn, all surviving player cards attack the boss once.
- On the boss turn, the boss attacks every surviving player card once.
- Turns alternate until the boss or the whole player team reaches 0 HP.
- Every 2-win streak milestone now gives an extra 1,500 coins instead of the old tiny bonus.
- Existing boss HP/damage tuning remains in place.

GOLDEN PULLS V9
- Added 30 new cards from the newly submitted V9 photos.
- assets/ intentionally contains ONLY the 30 new V9 photos.
- Secret purple Random card unlocks automatically after every other card is owned.
- One-time What's New popup added for V9.
- Prize Wheel redesigned with full reward names.
- Matchmaking loosened while still favoring similar team strength.
- Bot teams cannot duplicate cards.
- Boss reward cards cannot be sold; Sell All skips them.
- Boss HP unchanged from the current V8 build.
- Boss damage increased moderately for team-turn boss fights.
- No submitted V9 photos were generated or edited.

V9 POPUP FIX
- Fixed the one-time What's New popup so it reliably appears on the first load of this V9 build.
- After pressing OK once, it stays dismissed.
- No gameplay, card, asset, matchmaking, wheel, or boss-balance logic changed.

V9 EXOTIC MAX-TIER FIX
- Exotic upgrade cards show MAX TIER only.
- Removed Exotic wins progress, evolution progress bar, and cooldown display.
- V9 popup fix preserved.

V9 FINAL SLOT FIX
- Tapping slot 1 replaces only slot 1.
- Tapping slot 2 replaces only slot 2.
- Tapping slot 3 replaces only slot 3.
- Cards no longer shift across the lineup when a slot is changed.
- If a selected card is already in another slot, the two slots swap instead of duplicating.
- All prior V9 fixes remain included.

V9 FORCED HOTFIX
- Visible game version remains V9.
- Internal update version is 9.01 so existing V9 installs actually detect and install this patch.
- Exotic cards show MAX TIER only: no 50/50 wins, no progress bar, no evolution cooldown.
- Team card selection replaces the exact tapped slot instead of inserting/shifting cards.

V9 SUBSTITUTE BATTLE UPDATE
- Pick 3 starters and 2 substitutes before a normal battle.
- Both player and bot benches are visible behind the active team in smaller cards.
- After every 2 complete attack exchanges, the battle pauses for substitutions.
- You may swap up to 2 subs during a substitution break.
- Knocked-out cards cannot be swapped.
- A card removed from the active lineup cannot return.
- A substitute that enters is locked in and cannot be taken back out.
- Bot has 2 substitutes and follows the same lock-in rule.
- Player swaps animate first, then bot swaps are shown.
- Internal build is 9.02 so existing V9 installs detect the update; visible version stays V9.

V9 PACK DUPLICATE + NEW CARD FIX
- A 5-card pack can no longer contain the same exact card twice.
- Each card ID can appear only once within a single pack opening.
- Cards the player did not own before opening the pack display a NEW badge during the reveal.
- Cards already owned do not display NEW.
- Visible version remains V9; internal build is 9.03 so existing V9.02 installs detect the update.

V9 MONEY REWARD UPDATE
- Normal battle wins now pay a clean amount between 2,000 and 5,000 coins.
- Possible payouts: 2,000 / 2,500 / 3,000 / 3,500 / 4,000 / 4,500 / 5,000.
- No weird random values such as 1,967.
- Every 2-win milestone favors the higher payout range: 3,500 to 5,000.
- Visible version remains V9; internal build is 9.04 so current V9.03 installs detect the update.

V9 RARITY REBALANCE
The current game database contains 149 cards.
New base rarity distribution:
- Gray / Common: 50
- Green / Uncommon: 40
- Blue / Rare: 28
- Purple / Epic: 18
- Legendary: 10
- Exotic: 3
Existing Exotic cards stay Exotic.
This increases Gray and Green, keeps Blue at 28, and cuts Purple and Legendary significantly.
Visible version stays V9; internal build is 9.05.

V9 BATTLE SIZE + MOTION UPDATE
- Active battle cards are smaller.
- The center attack card is smaller.
- Removed the old raised/highlighted active-card look.
- The attacking card now visually moves from its real slot into the center.
- Its original slot temporarily disappears while it is in the center, then it returns.
- Visible version remains V9; internal build is 9.06.

V9 BATTLE SPACING CLEANUP
- Enemy team sits slightly higher.
- Player team sits slightly lower.
- Battle cards are a little smaller.
- Center attacking card is smaller.
- Center attacking card shows only the image, no name, rarity, OVR, or damage text.
- Exact damage is still visible through the minus-number popup on the card that gets hit.
- Visible version remains V9; internal build is 9.07.

V9 TURN ORDER + UPGRADE LINEUP FIX
- Fixed the normal-battle double-turn bug.
- Turns now remain strictly alternating across exchange boundaries.
- The random side that starts the battle still starts first, but neither side can receive two full attack turns in a row.
- Upgrade screen now marks the 3 active starters with a SOLID BROWN outline.
- Upgrade screen marks the 2 substitutes with a DASHED BROWN outline.
- Highlights update from the current live team/sub selections.
- Visible version remains V9; internal build is 9.08.

V9 INSTANT SUBSTITUTION UPDATE
- Removed the old substitution animation.
- Player substitutions now happen instantly on the SWITCH SUBS screen.
- The substitute moves into ACTIVE immediately.
- The removed starter moves into the same BENCH slot immediately.
- Both swapped cards turn gray and are locked for the rest of the match.
- You can make the second legal swap or press DONE.
- Bot substitutions are also instant.
- Visible version remains V9; internal build is 9.09.

V9 SURVIVOR-BASED WIN REWARDS
- Battle reward now depends on the number of active cards still standing at victory.
- 3 standing = 100% of the rolled reward.
- 2 standing = 75%.
- 1 standing = 50%.
- Subs on the bench do not count. A sub only counts if it was swapped into an active slot and survives.
- Final payouts stay in clean 500-coin steps.
- Victory screen shows survivors and payout.
- Visible version remains V9; internal build is 9.10.

V9.11 UPDATE BUTTON + FINAL BOSS FIX
- Update button now installs the newest service worker and forces a cache-busted refresh.
- Added an iPhone/PWA fallback that clears stale runtime caches when controllerchange is delayed.
- Artlander now displays COMPLETED after it is defeated.
- Removed the FIGHT AGAIN option for Artlander.
- Golden Arena is not included in this build. Normal Battle stays on the confirmed-working V9 base.

V9.12 TESTED GOLDEN ARENA
- Built directly from the exact uploaded V9.11 files.
- Normal 3v3 startBattle() is unchanged.
- Golden Arena added as isolated ga* functions/state.
- Uses assets/beta_arena.png.
- Arena wins award coins only and do not affect normal battle records, win streak, or boss unlocks.
- Update URL now resolves from service worker scope/document base; failed version checks fall back to a refresh button instead of TRY AGAIN.

V9.13 RUNTIME INITIALIZATION FIX
- Fixed a stray standalone `async` token before openDanger() that caused the main script to stop during startup.
- That startup crash left Golden Arena state uninitialized, so tapping PLAY GOLDEN ARENA appeared to do nothing.
- The same crash could also prevent the Update button's internal version state from initializing correctly.
- Golden Arena code remains isolated from normal 3v3 Battle.
- Visible version remains V9.

V9.14 GOLDEN ARENA COMBAT UPDATE
- Arena card picker is sorted Exotic -> Legendary -> Epic -> Rare -> Uncommon -> Common.
- Destroying an outer tower opens only that lane for advanced enemy-side deployment.
- The bot follows the same rule on the player's side.
- Units prioritize nearby enemy units before continuing to towers.
- Card rarity now scales Arena HP, damage, and speed.
- Cards have varied movement speeds.
- Every Arena card gets one consistent ability: Guardian, Berserker, Sprinter, Drain, Splash, or Shield.
- Normal 3v3 Battle code remains unchanged.
