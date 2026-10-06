# Engineering Notes

A minimal personal engineering wiki. Markdown in, static site out. Built with Python, MkDocs, Material for MkDocs, and GitHub Pages. No backend, no database.

## Repository structure

    .
    ├── docs/                  # content — everything here is Markdown
    │   ├── index.md           # homepage
    │   ├── matlab/
    │   ├── simulink/
    │   ├── flight-control/
    │   ├── git/
    │   ├── assets/images/     # PNG / JPG / SVG files
    │   └── javascripts/mathjax.js
    ├── mkdocs.yml             # site config (theme, extensions, nav)
    ├── requirements.txt       # Python dependencies
    ├── .github/workflows/deploy.yml
    └── README.md

Content, configuration, assets, and deployment are kept separate. There is no custom CSS or JavaScript except the small MathJax loader.

## How to add a new note

1. Create a `.md` file in the right folder, e.g. `docs/matlab/my-topic.md`.
2. Write Markdown. Use `#` for the title on the first line.
3. Done — navigation updates automatically (via the `awesome-pages` plugin). No need to edit `mkdocs.yml`.

Example:

    docs/matlab/kalman-filter.md

will appear under the MATLAB section on the next build / live reload — no config edit needed.

Each folder has a small `.pages` file that pins `index.md` first and uses `...` as a wildcard for everything else, so new files slot in automatically. You only touch `.pages` if you want a custom title or a specific ordering.

## How to add a new category

1. Create a folder: `docs/my-category/` with an `index.md` inside.
2. Done — the new section appears automatically (via the `...` wildcard in `docs/.pages`). Optionally create `docs/my-category/.pages` to set its title:

```yaml
title: My Category
nav:
  - index.md
  - ...
```

That's it. `mkdocs.yml` never needs a `nav:` entry.

## How to add an image

1. Put the file in `docs/assets/images/` (prefer SVG for diagrams).
2. Reference it with a relative path from your note:

```markdown
![Aircraft coordinate system](../assets/images/aircraft_axes.svg)
```

From a note one level deep (e.g. `docs/git/note.md`), the path is `../assets/images/...`. From a note at `docs/` root, use `assets/images/...`. Use the live server to check the image renders, and run `mkdocs build --strict` before pushing so broken paths fail fast.

## How to write LaTeX

Inline with single dollars, block with double dollars. No HTML needed.

```markdown
The lift coefficient is $C_L = \frac{L}{qS}$.

$$
C_L = \frac{L}{\frac{1}{2}\rho V^2 S}
$$
```

This renders via MathJax (loaded from CDN, configured in `mkdocs.yml` + `docs/javascripts/mathjax.js`). Matrices, Greek letters, sub/superscripts, integrals, and derivatives all work — see `docs/flight-control/pid-controller.md` for examples.

## Local development

### Installation

```bash
python -m venv .venv
```

Activate it:

- Windows PowerShell: `.venv\Scripts\Activate.ps1`
- Linux/macOS: `source .venv/bin/activate`

Then:

```bash
pip install -r requirements.txt
```

### Running locally

```bash
mkdocs serve
```

Open http://127.0.0.1:8000. The page reloads automatically when you save a Markdown file.

### Building

```bash
mkdocs build --strict
```

Output goes to `site/` (ignored by git). `--strict` turns broken internal links and missing images into errors — keep using it.

## Deployment to GitHub Pages

Pushing to `main` triggers `.github/workflows/deploy.yml`, which installs dependencies, runs `mkdocs build --strict`, and deploys via the official `deploy-pages` action. No `gh-pages` branch management needed.

One-time setup:

1. Push this repo to GitHub.
2. Go to **Settings → Pages → Build and deployment → Source** and select **GitHub Actions**.
3. Update `site_url`, `repo_url`, and `edit_uri` in `mkdocs.yml` with your username/repo.
4. Push to `main`. The site appears at `https://YOUR-USERNAME.github.io/YOUR-REPO/`.

## Configuration notes

`mkdocs.yml` is organized as: site metadata → theme → nav → markdown extensions → plugins → MathJax → validation. Only genuinely useful extensions are enabled: admonitions, footnotes, tables, task lists, heading anchors (`toc.permalink`), code highlighting (`pymdownx.highlight` + `superfences`), and math (`pymdownx.arithmatex`). Search is the built-in client-side plugin.
