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

V9.15
- PLAY is now a two-mode chooser: BATTLE or GOLDEN ARENA.
- Golden Arena always uses each card's original printed rarity (card.rarity), even if that card evolved in 3v3.
- Bot stays strictly on its own black half until it destroys an outer tower; only that destroyed lane opens.
- Player follows the mirrored rule on the enemy side.
- Player Arena units have yellow inner treatment; bot units black.
- Every Arena tower HP bar is green and above its tower.
- Leaving/closing the app during an active normal Battle removes up to 20,000 coins; balances under 20,000 go to 0.
- A warning is shown before normal Battle starts and on the Battle setup panel.

V9.16 GOLDEN ARENA AI + DECK UPDATE
- Saved 8-card Golden Arena decks.
- Randomized starting cycle each match: 4-card hand + Next card.
- Played card returns to back of cycle.
- Common cost 3; Exotic cost 9. Middle costs: Uncommon 4, Rare 5, Epic 6, Legendary 8.
- Bot has its own 8-card deck matched to the player's rarity/strength profile, following the 3v3 matchmaking philosophy.
- Bot has its own hand/cycle and cannot spam a card that is not currently in hand.
- Bot evaluates defense, lane pressure, energy, rarity and card powers before playing.
- Placement limit overlay appears when a card is selected.
- Destroyed outer tower opens only that lane deeper into enemy territory.
- Existing original-rarity Arena rules remain.

V9.17 GOLDEN ARENA
- Arena deck editor removed from the main Play screen.
- Selecting Golden Arena opens its own lobby with saved deck, Edit Deck, and Play.
- Normal red deployment line moved to the river/bridge edge.
- Destroying one outer tower advances only that half's deployment boundary.
- Units cannot cross the river through open water.
- Units cross through one of the two bridges.
- Bridge choice is dynamic: whichever bridge gives the shorter route to the current target.

V9.18
- 20K leaving penalty removed from normal 3v3 and moved to Golden Arena only.
- Arena warns before start and before exit; under 20K drops to zero.
- Player units have a visible yellow inner frame; bot units a black inner frame.
- Final regulation minute begins after 2:00 elapsed: pulsing urgency UI and 2x energy.
- At 3:00, non-ties end. Ties enter Sudden Death with 3x energy.
- In Sudden Death, the first NEW tower destroyed immediately wins.

V9.19 GOLDEN ARENA TIMER CORRECTION
- Regulation is now exactly 2:00 at normal 1x energy.
- At 2:00, if one side is ahead in destroyed towers, that side wins.
- If the tower score is tied at 2:00, including 0-0, Sudden Death starts immediately.
- Sudden Death uses 2x energy and the intense red/pulsing overtime UI.
- The first NEW tower destroyed in Sudden Death instantly wins.
- Removed the old 3-minute/final-minute structure.

V9.20 GOLDEN ARENA RESULTS
- Added animated Victory and Defeat result sequences.
- Victory gets gold burst, crown pop, glow, vibration, and rising victory sound sting.
- Defeat gets red impact, skull, drop/shake animation, vibration, and falling defeat sound sting.
- Sounds are generated in-browser, so no new audio assets are required.

V9.21 BATTLE BUTTON + GOLDEN ARENA ATTACK UPDATE
- Fixed BATTLE mode button: openBattleMode() now exists and opens/renders normal 3v3 setup.
- Golden Arena wins now award at least 40,000 coins, plus 2,500 per tower destroyed.
- Golden Arena player and bot use short deployment cooldowns in addition to energy.
- AI is less defense-obsessed and more willing to create lane pressure.
- Some Epic, Legendary and Exotic cards are Tower Hunters and ignore units to attack towers.
- High-HP Guardian cards at Epic+ also become tower-focused objective pushers.
- Normal fighters use a shorter aggro leash so battles do not become permanent midfield defense.
- Tower Hunters gain modest tower damage/speed pressure.
- Tapping a card in Arena deck editing opens a card details panel first.
- Card details show rarity, energy, HP, damage, speed, power and combat role before adding/removing it.

V9.22 GOLDEN ARENA COMBAT FLOW
- Fixed Add To Deck from the card detail popup.
- Reduced tower range and tower collision so units can get visibly closer.
- Outer towers fire visible arrow projectiles; main towers fire slower, stronger cannonballs.
- Damage lands when the projectile reaches the unit.
- Commons remain fragile, while rarer units survive more tower shots.
- Tower HP bars are positioned above the towers.
- Normal unit aggro is shorter to reduce endless defensive fighting.
- More Epic+ cards prioritize towers.
- Bot deployment delay increased to reduce defensive spam.
- Existing 40K+ win reward, 2-minute regulation, Sudden Death, bridge pathing, and cinematic endings retained.

V9.23 GAMEPLAY FLOW REBALANCE
- Tap a saved Arena deck card to remove it; selected picker cards are highlighted.
- Removed bulky rarity-colored battlefield unit outlines.
- Added quick unit death/fade impact animation.
- Tower range, damage, and fire rate reduced; first shot now has a windup.
- Units can attack towers from the angle they arrive instead of pathing around to one exact point.
- Outer towers reduced to 650 HP; king towers to 1050 HP.
- Unit aggro reduced so attackers are less easily distracted.
- More Epic+ units prioritize towers; AI values offensive pressure more.
- Two-minute regulation still ends immediately when one side leads; Sudden Death is tie-only.

V9.24 GOLDEN ARENA DECK EDITOR FIX
- Tapping a filled Arena deck slot no longer deletes it instantly.
- Tapping a slot opens the card picker specifically to replace that slot.
- The card-details button says USE IN SLOT X during replacement.
- Choosing a card already in another slot swaps the two slots instead of duplicating.
- ADD TO DECK now actually saves cards when the deck has open slots.
- A full 8-card deck tells the player to select a slot to replace.

V9.25 GOLDEN ARENA HUB + MATCH FLOW
- Golden Arena now opens into its own full-screen menu with bottom PLAY / DECK / SHOP tabs.
- Deck uses the existing 8-card editor and replacement system.
- Shop intentionally says COMING SOON.
- Golden Arena tag on the main Play chooser changed from BETA to NEW.
- PLAY runs a 2.2–3.9 second Finding Match animation, Match Found, then 3-2-1-BATTLE before gameplay.
- Regulation remains exactly 2:00.
- First 1:30 uses 1x energy: exactly +1 energy every 4 seconds.
- Final 0:30 uses 2x energy: exactly +1 energy every 2 seconds, with a small 30 SECONDS / 2x ENERGY banner.
- Final five seconds display a large 5-4-3-2-1 countdown.
- If tower score is tied at 0:00 (0-0, 1-1, or 2-2), Overtime begins at 3x energy.
- Overtime is sudden death: the first new tower destroyed wins.
- Victory/Defeat screen remains cinematic and now clearly shows the coin reward.
- Victory coins are credited when CONTINUE is pressed.

V9.26 UPDATE VERSION DISPLAY FIX
- The version badge now represents the version that is actually installed.
- The update button separately shows the version that is available, e.g. V10 READY.
- Pressing the update button changes it to INSTALL V10, then INSTALLING V10...
- The installed badge does not change early.
- Only after the new build installs and reloads does the installed version badge change with that build.
- This keeps 'current version' and 'available version' visually separate.

VERSION 10 RELEASE
- Promoted the completed Golden Pulls build to Version 10.
- Installed/current version badge now displays V10.
- Internal version is now 10.
- version.json now reports Version 10.
- Future updates should advertise the next available version separately from the installed V10 badge.

V10.01 NEW CARDS
- Added Random using the exact uploaded image at assets/Random.jpg. No image editing or generation.
- Random is Rare / blue. Card ID 150.
- Added HarOUT using the exact uploaded image at assets/HarOUT.jpg. No image editing or generation.
- HarOUT is Epic / purple. Card ID 151.
- Both cards are included in the main CARDS database and use the game's existing pack, collection, 3v3, and Golden Arena systems.
- Visible version remains V10.

V10.02 NEW CARD HOTFIX
- Random (ID 150, Rare/blue) and HarOUT (ID 151, Epic/purple) remain in the main card database.
- Both exact uploaded images remain included at assets/Random.jpg and assets/HarOUT.jpg.
- Added explicit image preloads and service-worker cache entries for both new assets.
- Added NEW badges to Random and HarOUT in the Card Index (and Collection once owned).
- The two cards are not automatically granted; they are normal pack-obtainable cards.
- Visible version remains V10.

V10.03 OVERTIME TOWER FINISH
- In Golden Arena overtime, destroying the winning tower no longer cuts instantly to Victory/Defeat.
- The destroyed tower now gets a bright explosion, expanding blast rings, debris, arena shake, and vibration.
- The full explosion plays first.
- After the explosion finishes, there is a deliberate ~0.65 second relief beat.
- Only then does the normal cinematic Victory/Defeat screen appear.
- This specifically makes sudden-death wins readable and satisfying instead of instant.

V10.04 GOLDEN ARENA DECK CANCEL FIX
- Cancel while browsing/editing Golden Arena cards now returns to Golden Arena -> Deck.
- It no longer sends the player back to the main Battle / Golden Arena mode-selection screen.
- Replacing a slot and adding a card also return to the Golden Arena Deck tab.
- Visible version remains V10.

V10.05 GOLDEN ARENA OVERTIME + SPEED UPDATE
- Regulation remains 2:00 with the existing final 5-4-3-2-1 countdown.
- Tied matches still enter Overtime at 3x energy.
- Overtime now has a hidden 90-second timer.
- If nobody wins during those 90 seconds, energy automatically increases from 3x to 5x.
- A small 5x ENERGY message appears when the escalation happens.
- Sudden-death rule remains unchanged: the next tower destroyed wins.
- All Golden Arena units now move about 15% faster to reduce sluggish gameplay while preserving individual speed differences.
- Visible version remains V10.

V10.06: Added Blackjack BETA with shared coins, real 52-card deck, dealer stands on all 17s, Hit/Stand/Double, 3:2 natural blackjack, card-back shop, collection foundation for special card faces, stats and ranked rewards.


V10.07 BLACKJACK DEAL HOTFIX
- Fixed Blackjack DEAL so a valid bet reliably opens the table and deals two player/two dealer cards.
- Blackjack coin persistence no longer depends on the full app render path before the hand opens.
- Coin wallet updates immediately when a hand starts, doubles, resolves, or is left.
- Not-enough-coins feedback is now visible above the Blackjack overlay.
- Visible major version remains V10.

V10.08 MODE UI + SHOP/SALE UPDATE
- Normal 3v3 Battle now opens as its own full-screen mode screen, like Golden Arena and Blackjack, instead of expanding underneath the mode chooser.
- Added a dedicated BACK button to the 3v3 Battle screen.
- Golden Arena's 3-2-1 pre-match countdown now uses a solid Golden Pulls yellow background so the game-mode selection screen is not visible underneath.
- Blackjack card-back shop prices reduced substantially:
  Midnight: 15,000 -> 5,000 coins.
  Gold: 40,000 -> 12,000 coins.
- All paid card packs from Common through Legendary are 25% off:
  Common: 4,000 -> 3,000.
  Uncommon: 12,000 -> 9,000.
  Rare: 30,000 -> 22,500.
  Epic: 56,000 -> 42,000.
  Legendary: 96,000 -> 72,000.
- Packs page now has a large 25% OFF ALL PACKS sale banner and each paid pack displays its old crossed-out price plus the sale price.
- Visible game version remains V10.

V10.09 GOLDEN ARENA TOWER EXPLOSIONS
- EVERY destroyed Golden Arena tower now explodes, whether it happens during regulation or overtime.
- Outer left/right tower destruction plays the normal explosion, debris, shake, and vibration without ending regulation by itself.
- Main/king tower destruction uses a much larger explosion with more debris, stronger screen shake, and stronger vibration.
- Destroying a main/king tower immediately decides the match, but the explosion fully plays first.
- After the king-tower explosion there is a short relief pause, then the cinematic Victory/Defeat screen appears.
- Overtime sudden death still ends on the first newly destroyed tower, with its explosion playing before the result.
- Visible version remains V10.

V10.10 BLACKJACK FACE CARDS
- Added the exact 12 uploaded King, Queen, and Jack images to assets/ without editing or regenerating them.
- Mapped each exact image to its matching Spades, Hearts, Diamonds, or Clubs card.
- Blackjack now displays these uploaded images whenever J, Q, or K is dealt.
- Number cards and Aces keep the existing standard face design.
- Visible version remains V10.

V10.11 BLACKJACK: larger cards, animated initial deal, animated Hit, dealer hole-card flip and one-by-one dealer hits, suspense pauses, persistent Victory/Defeat/Push screen with Continue, normal win returns 2x total, loss keeps wager lost, push returns wager, natural blackjack remains 3:2.

V10.12 GAMEPLAY HOTFIX
- Fixed normal 3v3 Battle starting behind its mode/setup screen. Pressing PLAY now closes the setup screen before showing the live battle.
- Raised the live 3v3 battle layer above mode screens as an additional safeguard.
- Fixed Golden Arena regulation timeout resolution. When 5-4-3-2-1 reaches zero and one side is ahead on destroyed towers, the match now stops cleanly and enters the normal Victory/Defeat reward flow.
- A tied Golden Arena match still enters overtime normally.
- Removed the final-count overlay when regulation resolves to prevent a frozen-looking end state.
- Golden Arena deployed character visuals are about 14% larger, with matching wider HP bars. Gameplay stats and hit logic are unchanged.
- Visible version remains V10.

V10.13 3V3 SUBSTITUTION HOTFIX
- Fixed the substitution screen not appearing during 3v3.
- V10.12 raised the live 3v3 battle layer above the mode menu, but the substitution overlay was still underneath it.
- The substitution overlay now renders above the live battle again.
- Existing substitution timing and rules are unchanged.
- Visible version remains V10.

V10.14 3V3 BOT CARD UPGRADES
- Normal 3v3 bots can now use upgraded versions of cards instead of being limited to printed rarity.
- Bot upgrades only move UP the rarity ladder. Downgrades are impossible.
- Examples now possible: Common/gray -> Uncommon/green, Rare/blue, Epic/purple, Legendary/orange, or Exotic/cyan; Rare/blue -> Legendary/orange; etc.
- A card can never appear below its original printed rarity.
- Bot upgraded tiers affect that bot card's rarity color, HP, damage, speed, OVR, and abilities exactly like a card at that tier.
- Bot cards use isolated botTier data and do not change or overwrite the player's owned card upgrades.
- Bot clones do not inherit the player's XP bonus just because they share the same card ID.
- Upgraded enemy cards show an upward marker in 3v3 so the upgrade is readable.
- Existing matchmaking, substitutes, and all other V10 systems remain intact.

V10.15 3V3 CARD PICKER / BACK FIX
- Fixed tapping a 3v3 starter or substitute appearing to do nothing.
- The card chooser was actually opening behind the full-screen 3v3 Battle panel because its old z-index was too low.
- The chooser now opens above the Battle setup immediately.
- CANCEL now closes the chooser and returns directly to the same 3v3 Battle deck/setup screen.
- The Battle BACK button no longer dumps the player into a hidden chooser state. If the chooser is open, it closes the chooser first.
- Card replacement/swap behavior is otherwise unchanged.
- V10.14 upgraded bot cards remain intact.

V10.16 GOLDEN ARENA REGULATION HARD FIX
- Reworked the actual 0:00 resolution path based on the recorded failure.
- At regulation end, destroyed-tower count is checked first.
- If destroyed-tower count is tied, remaining tower HP is now used as the regulation tiebreaker.
- Only a perfect tie in both tower count and remaining tower HP enters overtime.
- The simulation and input are stopped BEFORE the result transition, preventing the arena from sitting interactable at 0:00.
- Card input also forces the timeout check if it lands between clock ticks.
- Victory/Defeat still uses the existing Golden Arena result and reward flow.
- All V10.15 navigation fixes and V10.14 bot upgrades remain intact.

V10.17 GOLDEN ARENA 0:00 WATCHDOG FIX
- Replaced the fragile delayed 0:00 transition with one idempotent regulation resolver.
- Regulation now has a separate 120.05-second watchdog in addition to the normal game clock.
- gaClock, gaTick, card input, and the watchdog all trigger the same resolver.
- A regulation win calls gaFinish immediately with no dead-zone setTimeout.
- A true tie goes directly into overtime without stopping/restarting the live match loops.
- The watchdog clears on finish and manual exit.

V10.18 GOLDEN ARENA 0:00 ROOT-CAUSE FIX
- Found the actual freeze: gaResultFX() called gaResultSound(win), but gaResultSound did not exist.
- That ReferenceError happened after Golden Arena stopped its loops, so the screen stayed frozen at 0:00 before Victory/Defeat could appear.
- Added a safe generated result-sound function and guarded optional sound/vibration FX.
- Reordered gaFinish so the result screen is shown BEFORE optional FX, meaning sound can never block Victory/Defeat again.
- Restored the requested dramatic regulation finish delay:
  0:00 -> gameplay stops -> TIME! -> ~0.65 second pause -> Victory/Defeat.
- True ties still enter overtime.
- Existing reward flow, 3v3 fixes, upgraded bot cards, Blackjack, and all prior V10 systems remain intact.

V10.19 MYSTERY BOX
- Added a 100,000-coin Mystery Box above the normal Common pack.
- Contains five separate Mystery Packs, five cards each (25 cards total).
- Entire five-pack bundle guarantees at least 3 Epic cards and 2 Legendary cards.
- Normal luck can produce additional Epic or Legendary cards above the guarantee.
- Shop listing does not reveal the Mystery Pack rarity odds.
- Mystery packs use a premium yellow Golden Pulls-style GP logo treatment.
- Packs open one at a time using the existing tear/reveal/swipe animation.
- After each five-card pack, the next Mystery Pack appears until all five are opened.

V10.20 ROMANIA BOSS + MYSTERY BOX UI FIX
- Added Romania as Tier 4, directly after Artlander.
- Romania is an Exotic boss-exclusive reward card and uses the supplied Romania image.
- Boss list is now newest-to-oldest: Romania, Artlander, I Need More Bullets, Ice Agents.
- Romania has a NEW BOSS badge.
- Romania unlock progression starts after Artlander and requires 40 fresh normal 3v3 wins.
- Romania boss uses Artlander's boss difficulty/attack strength with only 8% extra boss HP.
- Playable Romania is only slightly stronger than a normal Exotic/Artlander-level card.
- Defeating Romania adds the Romania card to Collection.
- Fixed Mystery Box 5 PACK BUNDLE tag so it no longer covers the 100,000 price.
- Changed the guarantee area into a clearly non-button informational panel.
- Mystery Box purchase/opening logic remains active at 100,000 coins.

V10.22 FUS × GP COLLAB
- Added FUS × GP as a separate Play mode.
- Entering the mode replaces the GP HUD with a Football Universe Simulator-inspired navy/blue interface.
- Header shows the real FUS logo and Golden Pulls logo together as FUS × GP.
- Added a football-only pack shop, separate FUS card collection, and full locked/unlocked FUS index.
- Football cards are built from the supplied FUS top-player rating dataset and roster identities.
- FUS cards never enter normal Golden Pulls packs and normal GP cards never enter FUS packs.
- FUS packs use the same shared Golden Pulls coin balance.
- Added arbitrary custom wager input to the existing Blackjack wagering screen.
NOTE: the supplied Golden Pulls build contains Blackjack but no Poker implementation, so no separate Poker code could be modified in this build.

V10.23 FUS × GP APPROVED BLUE UI
- Rebuilt the FUS × GP mode to closely match the approved blue mockup.
- Removed the yellow top treatment from the collab mode; the collab interface is blue/navy throughout.
- Uses the exact FUS and GP PNG logos supplied by the user.
- Large hero now uses FUS × GP logos, COLLAB, FOOTBALL CARDS, and the short description.
- Pack shop now uses visual Scout/Pro/Elite pack bags and horizontal pack rows like the approved mockup.
- Kept Pack / Collection / Index, prices, five-card packs, shared coin balance, and separate collab collection.

V10.25 FUS × GP LOGO + BLUE STATUS BAR FIX
- Exact user-supplied FUS and GP PNGs are now embedded directly inside index.html as data URLs.
- The collab no longer depends on external logo file paths, so broken ? image boxes cannot occur from missing asset URLs.
- The exact logos are used in the top header, hero, mode tile, pack art, and FUS pack opening.
- Browser/PWA theme color changed from Golden Pulls yellow to FUS navy blue (#061a35).
- iOS standalone status bar style set to black-translucent so the blue app chrome extends behind the status area.
- No image generation used.
