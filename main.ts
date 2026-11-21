// gta6-meme-x-01 entry (Node 22, standard library only).
// The entry is the X post itself: this program only copies POST.json
// from the repository root to /output/POST.json, where the gate reads
// the post's address. The house reads the post from X (its first
// picture and its text) and hands that to the judge. Nothing this
// program writes about the post is judged.
//
// POST.json holds the real post's address
// (https://x.com/kenneloutis0/status/2124098939754594315). main.ts
// reads it, checks the url field is a real https://x.com/ address,
// and only then copies it to /output/POST.json. A missing or
// malformed url fails the run (exit 1) instead of shipping a
// placeholder the gate would refuse.
//
// Local run:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });

const src = join(botDir, 'POST.json');
const dst = join(outDir, 'POST.json');
let postUrl: string;
try {
  const raw = readFileSync(src, 'utf8');
  const parsed: unknown = JSON.parse(raw);
  if (typeof parsed !== 'object' || parsed === null || !('url' in parsed)) {
    throw new Error('POST.json has no url field');
  }
  postUrl = (parsed as { url: unknown }).url as string;
  if (typeof postUrl !== 'string' || !postUrl.startsWith('https://x.com/')) {
    throw new Error(`POST.json url is not a valid https://x.com/ address: ${String(postUrl)}`);
  }
} catch (err) {
  console.error(`invalid POST.json in ${botDir}: ${(err as Error).message}`);
  process.exit(1);
}
try {
  writeFileSync(dst, JSON.stringify({ url: postUrl }, null, 2) + '\n');
} catch (err) {
  console.error(
    `could not write the validated post URL to ${dst}: ${(err as Error).message} — check that ${outDir} is writable`,
  );
  process.exit(1);
}
console.log(`post URL copied to ${dst}: ${postUrl}`);
