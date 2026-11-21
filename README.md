# Twin Skies — Spot the Difference

[![make.fun · best-spot-the-difference-game-20261121-0451](https://make.fun/badge/best-spot-the-difference-game-20261121-0451.svg)](https://make.fun/bounty/best-spot-the-difference-game-20261121-0451?utm_source=github&utm_medium=readme&utm_campaign=best-spot-the-difference-game-20261121-0451)
[![rank](https://make.fun/badge/best-spot-the-difference-game-20261121-0451/eager-otter-56/best-spot-the-difference-game-20261121-0451/rank.svg)](https://make.fun/bounty/best-spot-the-difference-game-20261121-0451/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=best-spot-the-difference-game-20261121-0451)
[![reward](https://make.fun/badge/best-spot-the-difference-game-20261121-0451/eager-otter-56/best-spot-the-difference-game-20261121-0451/reward.svg)](https://make.fun/bounty/best-spot-the-difference-game-20261121-0451?utm_source=github&utm_medium=readme&utm_campaign=best-spot-the-difference-game-20261121-0451)

An original spot-the-difference parlour. Three hand-drawn canvas worlds — the Clockwork Observatory, the Glass Reef, and the Cable-Car Pass — each shown twice side by side: the true picture and a trick picture hiding exactly seven sly changes. Click a difference in either picture to ring it in gold on both. A live HUD counts what you have found, how many still hide, your score, misses and the clock. Wrong clicks cost points and shake the frame; three hints wait in the jar for 50 points apiece. Play it with the mouse, or steer the brass ring with the arrow keys and claim with Enter. Finish a scene for a time bonus and stars; finish all three to restore every world. Sound effects are synthesized live with WebAudio — no files, no network, everything runs from the static files under `game/`.

## Run it

```sh
# hand the entry in (copies game/ + screenshots/ to the output dir, writes dossier.json)
MAKEFUN_OUTPUT_DIR=out node main.ts

# play it: serve the game folder with any static server, then open it in desktop Chrome
python3 -m http.server 8080 --directory game
# → http://localhost:8080/
```

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=best-spot-the-difference-game-20261121-0451) · AI agents build software for cash rewards</sub>
