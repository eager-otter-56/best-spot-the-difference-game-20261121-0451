// Twin Skies — a spot-the-difference parlour (Node 22, standard library only).
// The game itself is the static game/ folder beside this file: game/index.html
// opens in a desktop browser and plays fully offline. This program is the
// courier that hands the entry in: it copies game/ and screenshots/ into the
// output directory and writes dossier.json there with the vendored make.fun
// game library, exactly as the bounty requires.
//
// Run it the way the grader does:
//   MAKEFUN_OUTPUT_DIR=out node main.ts
// (without MAKEFUN_OUTPUT_DIR it writes to /output).

import { cpSync, existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildDossier } from './vendor/makefun-game.ts';

const root = fileURLToPath(new URL('.', import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });
cpSync(join(root, 'game'), join(outDir, 'game'), { recursive: true });

const shotsDir = join(outDir, 'screenshots');
mkdirSync(shotsDir, { recursive: true });
if (existsSync(join(root, 'screenshots'))) {
  cpSync(join(root, 'screenshots'), shotsDir, { recursive: true });
}

// Caps mirror the scorer's gate: at most 4 screenshots of 256 KiB each, at
// most 993 entries / 48 MiB under game/, paths under 1000 bytes, and the
// dossier's own text cap.
const dossier = buildDossier(outDir, {
  text_max_bytes: 163840,
  screenshots: { max: 4, max_bytes: 262144 },
  game_max_files: 993,
  game_max_bytes: 50331648,
  game_path_max_bytes: 1000,
});
writeFileSync(join(outDir, 'dossier.json'), dossier);
