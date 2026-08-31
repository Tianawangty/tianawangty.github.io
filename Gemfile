source "https://rubygems.org"

# Pinned so a local preview always matches what was tested, on any machine.
#
# GitHub Pages' own builder runs Jekyll 3.10.x via the `github-pages` gem. That
# gem is not usable here: it resolves to Jekyll 3.9, which cannot load on Ruby
# 3.4+ (csv left the default gems). This site uses only layouts, includes and
# basic Liquid, which render identically under 3.10 and 4.4.
gem "jekyll", "~> 4.4"

# Generates the root redirect to /home.html at build time, so the bare domain
# works without a hand-written index.html. Supported by GitHub Pages.
gem "jekyll-redirect-from", "~> 0.16"
