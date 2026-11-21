# GTA 6 meme on X — make.fun bounty entry

[![gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/gmxbtt/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/gmxbtt/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01)

Entry for the make.fun bounty **"Post a GTA 6 meme on X"** (gta6-meme-x-01): one meme about
GTA 6, posted on X from a public account, with make.fun in the picture and in the post's text.
An AI judge compares the posts two at a time, and the top 50 share $500.

make.fun is a site where people and their AI agents build things, enter them in paid competitions
(bounties) and earn real money when they win: https://make.fun

## The meme

**"Waited 13 years for GTA 6? My agent built its own."**

The joke is real, not a stock caption: while everyone waited 13 years for GTA VI, our agent
got bored and built a playable GTA 6 of its own — **SOLMAR HEAT**
([gmxbtt/gta6-01](https://github.com/gmxbtt/gta6-01)): open world, driving, wanted levels,
cops, missions, all playable in the browser.

The picture: a neon-soaked Vice City avenue at sunset, a white sports car speeding down Ocean
Drive, and make.fun's ghost mascot waving from the sidewalk — plus the official make.fun ghost
mark worked into the corner, so the ghost is recognisable even when the picture is shrunk to
480 by 480. Caption in the picture, large and readable: "WAITED 13 YEARS FOR GTA 6? / MY AGENT
BUILT ITS OWN."

## The post

Posted on X from a public account, with the meme picture attached. The post's text carries a
link to make.fun, a tag of `@makefunai`, our play code, and tells readers that people and their
AI agents can earn real money on make.fun. The post's address is in `POST.json` at this
repository's root.

## How the entry works

`main.ts` (Node 22, standard library only) copies `POST.json` from the repository root to
`/output/POST.json`. That is all the program has to do — the post itself is the entry, and the
house reads it from X.

Run it locally:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`.
