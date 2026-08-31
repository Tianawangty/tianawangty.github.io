# Plan — Reposition tianawangty.github.io

**Repo:** `/Users/tianyuanwang/GitHub/tianawangty.github.io`
**Date:** 2026-07-25
**Status:** DRAFT — awaiting approval

---

## Context

The site was last touched 2026-04-18 (single commit) and is a hand-edited HTML5 UP "Editorial" template. Three problems drove this work:

1. **Stale.** No mention of the M.S. Statistics, the AAEA 2026 / SAEA 2026 presentations, or the job market paper. The published resume PDF omits the JMP entirely. `cv.html` still says "Coming Soon."
2. **The two Food Price papers are invisible.** The Research page carries one publication and one mis-titled one-line "Work in Progress" entry — no question, no data, no method, no findings. A consulting hiring manager or a World Bank economist reading it learns nothing about what Tiana can actually do.
3. **The homepage is too long and points the wrong way.** Paragraph 2 describes the dissertation rather than the person. Tiana's stated intent for the site is a **storefront, not a web resume** — it should carry the ideas and the softer material that a CV cannot hold.

The organizing idea, in Tiana's own words: *she likes using large-scale micro data to answer questions that look macro.* That becomes the site's spine.

**Positioning constraint:** one identity serving academia, economic consulting, and World Bank / IO simultaneously. No audience-split pages. The consulting/IO angle shows up as *substance and framing* on the Research page, not as recruiter-bait.

---

## Decisions locked during planning

| Decision | Choice |
|---|---|
| Audience | Single identity; academia + consulting + IO all served |
| Research depth | Question + data scale + identification + qualitative finding. **No coefficients, no elasticities, no κ.** |
| Site engine | Convert to real Jekyll (layout + includes) so nav lives in one file |
| File deletions | **None.** `generic.html`, `elements.html`, demo images, `cv.html` all stay untouched |
| Homepage | 3 short paragraphs; current para 2 moves to Research |
| Cards | Keep 2-card structure, swap wording (set 1 below) |
| Third paper (`TheCostOfFoodProvision`) | Not published |
| Resume PDF | Website version as base + 3 content updates + phone number removed |
| Sidebar "Past Projects" | All four links preserved exactly |

---

## Work

### Step 0 — Local Jekyll (environment)

System Ruby is 2.6; Jekyll 4 needs ≥ 2.7 and is not installed. To preview locally:

```bash
brew install ruby
export PATH="/opt/homebrew/opt/ruby/bin:$PATH"
gem install jekyll bundler
cd /Users/tianyuanwang/GitHub/tianawangty.github.io && jekyll serve
```

**If you'd rather not install Ruby:** fallback is to expand `{% include %}`/layout with a throwaway Python script for visual checking, then rely on GitHub Pages' own build. Risk is low (we use only `layout`, `include`, and front matter — the most basic Liquid), but there is no local proof before push. Say the word and I'll take the fallback.

### Step 1 — Jekyll skeleton

New files:
- `_layouts/default.html` — full HTML shell: `<head>` (title, meta description, Open Graph, `lang="en"`), header, `{{ content }}`, sidebar, footer, script tags
- `_includes/nav.html` — the menu, **including all four Past Projects links unchanged**
- `_includes/sidebar-contact.html` — contact block

Edit `_config.yml`: drop the vestigial `theme: jekyll-theme-minimal` (never applied; would now conflict), add `title`, `description`, `url`.

Convert the three real pages to front matter + body only:
- `index.html`, `research.html`, `cv.html` each get `---\nlayout: default\ntitle: …\n---`

`generic.html` and `elements.html` get **no front matter** → Jekyll copies them through verbatim. Untouched, still reachable, exactly as now.

### Step 2 — Homepage (`index.html`)

Banner tagline:
> `Economic Research and Big Data Enthusiast` → **`Applied economist · Micro data, macro questions`**

Paragraph 1 — who (tightened; adds the M.S. Statistics, currently missing):
> Ph.D. candidate in Agricultural and Applied Economics at the University of Georgia, also finishing an M.S. in Statistics. I study food prices in the United States.

Paragraph 2 — **new; the idea paragraph**:
> The questions I care about get asked at the national level — how fast are prices rising, is it supply or demand, is policy making it worse — but they can only be answered underneath it. A single inflation number is an average over thousands of local markets that moved for different reasons. I work from the bottom up: millions of transactions, county by county, month by month, until the aggregate is something I can take apart rather than something I have to accept.

Paragraph 3 — background, current version lightly edited. Two factual fixes: degree name → **M.S. in Government Analytics (Data Analytics and Policy)**; per `materials.md`, written materials say **Botswana and Namibia**, not "southern Africa" broadly.

Current paragraph 2 (the "price on a grocery shelf is the end of a story…" passage) is **cut from the homepage** and moved to Research.

Cards (structure unchanged: icon + `h3` + two `<li>`):

| | Now | New |
|---|---|---|
| Card 1 | What Drives Food Prices · Supply Chain Transmission · Spatial Variation | **Micro Data, Macro Questions** · Retail Scanner Data · County-Level Evidence |
| Card 2 | How Policy Reaches the Table · Labor & Trade Policy · Retail Access & Market Structure | **Beyond Food Prices** · Risk and Early Warning · Text as Data |

Section heading stays **Research Areas**. Card 2 gives the four sidebar project links a home in the narrative.

### Step 3 — Research page (`research.html`)

Fix the `<title>` typo (`Reserach` → `Research`).

**Intro** — fills the empty `<p></p>` under `<h1>Research</h1>` with the relocated homepage paragraph, adjusted only at the seams so it reads as a research agenda tying the two papers together.

**Publications** — unchanged (the 2024 IMF chapter).

**Working Papers** (renamed from "Work in Progress"), two entries at the agreed depth:

1. **The Food-Price Effect of H-2A Wage Mandates** *(job market paper, with Michael Adjemian and Genti Kostandini)* — DOL's annual H-2A wage floor across 18 multi-state regions; Nielsen scanner data, ~35,000 stores, 2006–2024, county × month × USDA Food Dollar category; identification from pre-existing county migrant-labor exposure interacted with regional wage changes, estimated by local projections difference-in-differences. Headline qualitative finding: **prices do not move when the wage is announced, only once it takes effect** — the reverse of the minimum-wage literature. Presented at AAEA 2026 (Kansas City). Draft available on request.

2. **Understanding Food Price Inflation Across the United States: Evidence from Scanner Data** *(with Michael Adjemian and Qingxiao Li)* — corrects the current title ("Understand Food Price Inflation…"). Circana retail scanner data, ~40,000 stores, built to county × month; Shapiro (2024) sign-restriction decomposition separating supply- from demand-driven inflation locally rather than nationally; panel fixed effects plus panel local projections linking each component to county-level drivers. Framed as **in progress, no results stated.**

**Honesty constraints binding on this copy** (from `materials.md`):
- No claim to the RWGEKS / price-index construction on paper 2 — that is a coauthor's work.
- No numbers from the JMP. `discussion.tex` (7/16) and `results.tex` (7/18) currently contradict each other ("bounded null" vs. a positive significant response); publishing no figures sidesteps this entirely. **Separately worth fixing in the paper repo — flagging it, not touching it here.**
- The timing finding is already public (AAEA 2026), so nothing here requires coauthor sign-off.

**Open item for you:** paper 2's title page lists authors as Adjemian–Li–Wang, i.e. you are third author. The site's "with X and Y" phrasing reads as if you lead. I'll keep the existing phrasing unless you want it changed.

### Step 4 — Resume PDF

Rebuild from `MyJob/quality_reports/base/Resume_TW.tex`, which already matches the published version plus exactly the three updates you approved:

- add `"The Food-Price Effect of H-2A Wage Mandates" with Michael Adjemian and Genti Kostandini` to Working in Progress (title + coauthors only, no detail)
- Skills line: add `ArcGIS Pro`
- Expertise line → `Food Retail Prices and Supply Costs, Policy Evaluation, Big Data Integration, Data Science`
- **delete the phone number** (`Resume_TW.tex:127`), keep email / LinkedIn / website

Compile, then verify with `pdftotext -layout` that the output differs from the published PDF only in those four places and that `281-4388` returns zero hits. Copy the PDF into `pdf/Resume_TW.pdf`. **The `.tex` source stays in MyJob and is not copied into the website repo** (job-search privacy rule).

Nav "Curriculum Vitae" and the banner "See Resume" button both keep pointing at `pdf/Resume_TW.pdf`. `cv.html` is not touched.

**Flagged, not changed:** the resume's climate-toolbox bullet says *"prepared the proposal and successfully pitched the project"*, which `materials.md` §4 says overstates your role (technical execution; the pitch was economist-led). You said don't touch substance, so I'm leaving it — but it conflicts with your own honesty rules and deserves a separate pass.

### Step 5 — Defects (one edit each, now that the sidebar lives in one include)

- `twang@uga.edu` is `href="#"` → real `mailto:`
- unclosed `<a>` in the sidebar address block
- `<<!-- Menu -->` stray character in `cv.html:61`
- `<html>` gets `lang="en"`; profile photo gets a real `alt`

**Needs your nod (minor, listed separately so you can veto):**
- The sidebar search box posts to `#` and does nothing. Recommend removing the block — a visibly broken control on a storefront reads worse than no control. Default if you say nothing: **remove**.

---

## Not doing

- No Experience / "What I Do" page (you said no)
- No third paper
- No numbers from the JMP
- No web CV page — `cv.html` stays as-is
- No file deletions: `generic.html`, `elements.html`, `images/pic01–11.jpg`, `gmorning.jpeg` all stay
- No `noindex` on the demo pages (you said leave them completely alone)
- No commits or pushes unless you ask

---

## Verification

1. `jekyll serve` (or the Python fallback) → open all five pages; confirm nav, sidebar, and the four project links render identically to today on each.
2. `grep -rn "281-4388" pdf/` → zero hits; `pdftotext -layout pdf/Resume_TW.pdf` diffed against the published version → only the four expected changes.
3. Confirm `generic.html` / `elements.html` render exactly as before (Jekyll passes them through untouched).
4. Read the Research page against `results.tex` and `materials.md` §6b — confirm zero numeric claims and zero attribution overreach.
5. Check the homepage at mobile width — the Editorial template collapses the sidebar; the shortened bio should improve, not break, that view.
6. Show you the rendered pages before any commit.
