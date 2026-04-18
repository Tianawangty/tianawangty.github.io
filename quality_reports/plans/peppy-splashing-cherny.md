# Plan: Update CV Links to Point to PDF

## Context
The user wants all "Curriculum Vitae" links across the site to point directly to `pdf/Resume_TW.pdf` instead of `cv.html`. The CV links in `index.html` and `research.html` are currently commented out — they should be uncommented and pointed to the PDF. The cv.html page itself should also have working download links.

## Changes

### 1. `cv.html` (line 41-42)
- Add `<a href="pdf/Resume_TW.pdf">` links to the "Download the CV here" and "Download the resume here" text
- Update sidebar link on line 69: `cv.html` → `pdf/Resume_TW.pdf`

### 2. `index.html` (lines 127-129)
- Uncomment the CV menu item and change href to `pdf/Resume_TW.pdf`

### 3. `research.html` (lines 75-77)
- Uncomment the CV menu item and change href to `pdf/Resume_TW.pdf`

## Verification
- Open the site locally and confirm all three sidebar menus show "Curriculum Vitae" linking to the PDF
- Confirm the cv.html page download text links to the PDF
