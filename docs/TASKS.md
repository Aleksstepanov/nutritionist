# TASKS — Maven adaptation in Astro

> Not a blanket authorization. Assign **one task per Codex run**. The developer remains responsible for design choices, scope, review, git and release.

## Stage 0 — Human decisions (current)
- [x] Choose Figma reference: Maven Copy, file `xitjj4sdx29fCFFv8NEkDr`, desktop node `1:2`.
- [x] Map Maven sections to Olesya's personal site in `docs/DESIGN.md`.
- [ ] Review the proposed sections with Olesya; remove any unneeded ones.
- [ ] Obtain her portrait, actual qualifications, service descriptions and contact links.
- [ ] Approve an adapted hero (desktop and mobile) and core typography.

## Stage 1 — Local Astro project (developer-managed)
- [ ] Validate Astro SSG, strict TypeScript, SCSS and `astro check`.
- [ ] Ensure `.gitignore` excludes local agent artifacts and secrets.
- [ ] Keep docs tracked if intended and `AGENTS.md` untracked if this is the developer's preference.

## Stage 2 — Codex task A: tokens and layout ONLY
- [ ] Read `docs/DESIGN.md`, `docs/PROJECT.md` and project conventions.
- [ ] Inspect existing code and preserve local modifications.
- [ ] Create global reset/basic typography/container and the verified Hero-derived colors as tokens.
- [ ] Create a minimal base layout; do not implement page sections yet.
- [ ] Run available type/build checks.

**Acceptance:** no new UI frameworks, no Tailwind, no hardcoded Figma abs-pos, no unapproved brand assets; only scoped files changed.

## Stage 3 — Human + Codex: hero first
- [ ] Developer: agree copy and portrait with Olesya.
- [ ] Codex: implement `Hero.astro` from Figma node `1:34`, adapted to approved copy and picture, with CSS Grid/Flexbox.
- [ ] Developer: compare desktop result against reference and approve mobile composition.
- [ ] Codex: correct only review findings, without touching other sections.

**Acceptance:** responsive from 320px, no horizontal overflow, working external CTA, readable hierarchy, no lead-gen form.

## Stage 4 — Section-by-section implementation
- [ ] Header (based on `1:3`, simplified).
- [ ] About + Approach (adapt the rhythm of `1:57`).
- [ ] Services (adapt `1:203` with actual offerings).
- [ ] Qualifications (actual credentials; do not copy metrics from `1:175`).
- [ ] Contacts + footer (simplify `1:382`).
- [ ] OMIT testimonials/carousel unless real stories and permissions exist.

## Stage 5 — Content, SEO, QA and deploy
- [ ] Typed JSON content + validation as needed (avoid premature CMS adapters).
- [ ] SEO, Open Graph, sitemap, robots, canonical from actual domain.
- [ ] Responsive/manual accessibility review; check links and alt text.
- [ ] GitHub Actions + GitHub Pages, correct `site`/`base`.
- [ ] Production verification; publishing only with developer authorization.

## First suggested Codex instruction (after developer approves tokens)
```
Read docs/PROJECT.md and docs/DESIGN.md. Inspect the existing Astro project.
Implement ONLY a base layout, minimal responsive container and SCSS color/typography tokens from the verified Maven Hero frame (node 1:34). Do NOT implement Hero, Header or any page sections yet. Do not use Tailwind, React, Vue or remote Figma asset links. Preserve existing code and uncommitted changes. Do not commit, push or deploy. Run available check/build scripts, report changed files and results.
```
