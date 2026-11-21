// gta6-meme-x-01 entry (Node 22, standard library only).
// The entry is the X post itself: this program only copies POST.json
// from the repository root to /output/POST.json, where the gate reads
// the post's address. The house reads the post from X (its first
// picture and its text) and hands that to the judge. Nothing this
// program writes about the post is judged.
//
// POST.json currently holds the starter placeholder address. Replace
// it with the real post's address before submitting, or the gate
// refuses the entry as it stands (valid 0).
//
// Local run:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });

const src = join(botDir, 'POST.json');
const dst = join(outDir, 'POST.json');
try {
  copyFileSync(src, dst);
} catch (err) {
  console.error(`could not copy POST.json from ${botDir}: ${(err as Error).message}`);
  process.exit(1);
}
console.log(`copied ${src} -> ${dst}`);
