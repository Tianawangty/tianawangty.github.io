# Session Report — tianawangty.github.io

## 2026-08-31 10:37 — Reposition for the general job market

**Operations:**
- Added `Gemfile` pinning `jekyll ~> 4.4` plus `jekyll-redirect-from`; committed `Gemfile.lock`; `.gitignore` gained `vendor/`
- `_config.yml`: added `plugins`, suppressed the `redirects.json` manifest, extended `exclude` to keep records, demo pages, Sass and repo docs out of the build
- Renamed `index.html` to `home.html` with `permalink: /home.html` and `redirect_from: /`; renamed `cv.html` to `resume.html` and rewrote it from a "Coming Soon" stub into a real page, all CV wording changed to Resume
- Rewrote `home.html`: tagline, section heading, both cards, all three bio paragraphs, and a new "Working at Scale" section covering the 8 TB pipeline work
- Rewrote the JMP entry in `research.html` to the post-AAEA supply-chain design; cut the inflation entry to question and data; heading to "Work in Progress"; added six co-author links and two conference links
- Rewrote `README.md` as a branding page; deleted `README.txt`, four unreferenced demo images, `gmorning.jpeg`, a superseded April plan, and build artifacts; restored `elements.html`, `generic.html` and their seven images on request

**Decisions:**
- Pinned `jekyll ~> 4.4` instead of `github-pages` — the latter resolves to Jekyll 3.9, which cannot load on Ruby 4.0.6 (`csv` left the default gems). Verified by a failing build
- `/home.html` is canonical and the source carries no `index.html`; a static host must map `/` to a file, so the root redirect is generated at build time by the plugin
- No JMP results published: both prior findings come from the county-level design that AAEA feedback replaced over a geographic-mismatch problem
- Second paper reduced to question and data; also avoids claiming the county-level index construction, which is the co-author's work
- HPC material placed as a homepage section beneath the card that claims it, after a separate page was rejected earlier in the session
- Domain left unchanged; `tianyuanwang` and `tianawang` are taken on GitHub and as `.com`

**Results:**
- Build clean, no warnings. Fourteen content-based checks pass: `/` serves a real redirect, three pages carry body text and footer, four static assets return 200, six non-published files return 404, menus updated with no "Curriculum Vitae" left
- Eight external links verified live; red-line and banned-phrase scans clean; homepage bio free of em dash, en dash, colon and semicolon; no method names on the homepage; no coefficients on the Research page
- Three errors in my own JMP copy found and corrected against the paper repo's handoff: downstream identification is category-level not county-level, the estimation window is capped at 2022 by the dose, and QCEW payroll is quarterly not monthly
- Verification method corrected: an earlier PASS on `/` was `jekyll serve`'s directory listing returning 200, which GitHub Pages would serve as 404. All checks now assert body content

**Commits:**
- None. Local preview only, pending user review.

**Status:**
- Done: all plan steps, plus renames, routing, repository cleanup and records
- Pending: user review via `bundle exec jekyll serve`; JMP wording still a draft; then commit and push
- Blocked: `~/.claude/rules/` and `~/.claude/skills/` unreadable (`Operation not permitted`), so none of the 22 personal skills loaded and `/grill-me` could not be invoked; the adversarial pass was done manually

## 2026-07-25 10:30 — Site reposition toward consulting / World Bank framing

**Operations:**
- Converted the site from three hand-copied HTML files to Jekyll: new `_layouts/default.html`, `_includes/nav.html`, `_includes/sidebar.html`; `index.html` / `research.html` / `cv.html` reduced to front matter + body
- Rewrote `index.html`: tagline, shortened bio, new "micro data, macro questions" paragraph, both Research Areas cards
- Rewrote `research.html`: relocated intro paragraph, two substantive Working Paper entries, Publications moved below
- Rebuilt `pdf/Resume_TW.pdf` from `MyJob/quality_reports/base/Resume_TW.tex` with the phone number removed
- Rewrote `_config.yml` (title/description/url + exclude list); extended `.gitignore`
- Installed Homebrew Ruby 4.0.6 and Jekyll 4.4.1 (system Ruby 2.6 could not run Jekyll)

**Decisions:**
- One identity serving academia, consulting, and IO — no audience-split pages; the overlap is real
- Research entries state question, data scale, identification, and one qualitative finding, but no coefficients — the JMP draft's `discussion.tex` and `results.tex` currently contradict each other
- No files deleted; `generic.html`, `elements.html`, and all demo images left untouched
- Sidebar search box removed (it posted to `#` and did nothing)

**Results:**
- Build clean; six pages return 200 locally; all pages well-formed (the pre-existing unclosed `<a>` and the `<<!-- Menu -->` typo are fixed as a side effect of the shared include)
- Resume: zero hits for the phone number in text layer or raw stream; diff against the published version shows only the four approved content changes
- Jekyll install on system Ruby 2.6 failed (ffi requires Ruby ≥ 3.0) → resolved with Homebrew Ruby

**Commits:**
- None. Local preview only, pending user review.

**Status:**
- Done: all plan steps
- Pending: user review at `http://127.0.0.1:4321/`, then commit and push
