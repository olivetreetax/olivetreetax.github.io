# 🫒 Olive Tree Tax — Website

**Live site:** [olivetreetax.com](https://www.olivetreetax.com)
**Repository:** [github.com/olivetreetax/olivetreetax.github.io](https://github.com/olivetreetax/olivetreetax.github.io)

> A boutique tax resolution firm. Licensed Enrolled Agents · MS in Taxation · Hablamos Español.

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Tech Stack](#2-tech-stack)
3. [Local Development Setup](#3-local-development-setup)
4. [Site Structure](#4-site-structure)
5. [How to Edit Pages & Content](#5-how-to-edit-pages--content)
6. [Design System & Brand Tokens](#6-design-system--brand-tokens)
7. [Form Backend — Formspree](#7-form-backend--formspree)
8. [Deployment](#8-deployment)
9. [Pending Items](#9-pending-items)

---

## 1. Project Overview

This is the marketing website for **Olive Tree Tax**, a professional tax resolution and accounting firm. The site is built with **Jekyll** (a static site generator) and hosted on **GitHub Pages** with a custom domain managed via Spaceship.

The design follows a "Modern Financial Authority" aesthetic — deep evergreen, muted gold, and warm off-white — positioning the firm as a high-trust, boutique EA practice.

**Pages:**
| Page | File | Description |
|---|---|---|
| Home | `index.md` | Hero, trust bar, service cards, 3-step process |
| About | `about.md` | Brand story, credentials, core values |
| Services | `services.md` | Tax resolution + financial growth services |
| Contact | `contact.md` | Case evaluation intake form |

---

## 2. Tech Stack

| Layer | Technology |
|---|---|
| Static site generator | [Jekyll](https://jekyllrb.com/) 3.9 |
| CSS framework | [Tailwind CSS](https://tailwindcss.com/) via CDN |
| Fonts | Libre Baskerville · Inter · DM Sans (Google Fonts) |
| Hosting | GitHub Pages |
| Custom domain | Spaceship (DNS → GitHub Pages) |
| Form backend | [Formspree](https://formspree.io/) |
| Ruby version | 2.7.1 (via rbenv) |

**Key files:**
```
_layouts/default.html     → Master HTML shell (head, header, footer injected here)
_includes/header.html     → Global navigation
_includes/footer.html     → Global footer
assets/css/style.scss     → Minimal stub (styles handled by Tailwind CDN)
_config.yml               → Jekyll configuration
Gemfile                   → Ruby gem dependencies
```

---

## 3. Local Development Setup

### Prerequisites
- Ruby 2.7.1 (via [rbenv](https://github.com/rbenv/rbenv))
- Bundler

### First-time setup

```bash
# Clone the repo
git clone https://github.com/olivetreetax/olivetreetax.github.io.git
cd olivetreetax.github.io

# Install dependencies
bundle install
```

### Run locally

```bash
bundle exec jekyll serve
```

Open [http://localhost:4000](http://localhost:4000) in your browser. Jekyll will automatically rebuild the site when you save changes.

### Gemfile

The project uses a lean Gemfile with no theme gem dependencies:

```ruby
source "https://rubygems.org"

gem "jekyll", "~> 3.9.0"
gem "kramdown-parser-gfm"
gem "webrick"
```

> **Note for developers:** Do not add `github-pages` or `jekyll-theme-primer` — these conflict with the Tailwind-based design and were intentionally removed during the redesign.

---

## 4. Site Structure

```
olivetreetax.github.io/
│
├── _layouts/
│   └── default.html          # Master layout — Tailwind config, fonts, header, footer
│
├── _includes/
│   ├── header.html            # Sticky nav with active state logic
│   └── footer.html            # Footer with links, licensure, email
│
├── assets/
│   └── css/
│       └── style.scss         # Minimal stub — do not add styles here
│
├── images/
│   ├── logo/                  # SVG logo files
│   ├── illustrations/         # Olive tree and other illustrations
│   │   └── olive-tree-rebrand-4.png   # About page hero image
│   └── features/              # Feature icons
│
├── index.md                   # Home page
├── about.md                   # About page
├── services.md                # Services page
├── contact.md                 # Contact / case evaluation page
│
├── favicon.svg                # Primary favicon (modern browsers)
├── favicon.ico                # Fallback favicon
├── favicon-32.png             # Apple touch icon fallback
│
├── _config.yml                # Jekyll site config
├── Gemfile                    # Ruby dependencies
└── CNAME                      # Custom domain — do not delete
```

---

## 5. How to Edit Pages & Content

All pages are written in **Markdown** (`.md`) with HTML sections embedded directly. Each file starts with **front matter** — a small block between `---` dashes that tells Jekyll which layout to use and sets the page title and meta description.

```markdown
---
layout: default
title: "Page Title"
description: "Meta description for SEO."
---

<!-- HTML content goes here -->
```

### Editing text content

Open the relevant `.md` file and find the text you want to change. Most content is inside HTML tags — just edit the text between the tags.

**Example — changing the homepage headline:**
```html
<!-- In index.md, find: -->
<h1 class="font-serif text-4xl lg:text-6xl text-mfa-evergreen leading-tight">
  End Your IRS Stress<br/>With Federal Protection.
</h1>

<!-- Edit the text between the tags -->
```

### Editing the header navigation

Open `_includes/header.html`. To add or remove nav links, edit the `<a>` tags in the nav links section.

### Editing the footer

Open `_includes/footer.html`. Update links, email address, or legal text as needed. The copyright year is auto-generated via Liquid:
```html
{% assign current_year = 'now' | date: "%Y" %}© {{ current_year }} Olive Tree Tax.
```

### Adding a new page

1. Create a new `.md` file in the root (e.g. `faq.md`)
2. Add front matter at the top
3. Add a link to it in `_includes/header.html` and `_includes/footer.html`

### Replacing the About page illustration

The About page hero uses a PNG image hosted in the repo:

```html
<img
  src="/images/illustrations/olive-tree-rebrand-4.png"
  alt="Olive Tree — Olive Tree Tax"
  class="w-full h-full object-contain p-12"
>
```

To swap the image: add your new PNG to `/images/illustrations/` and update the `src` path.

---

## 6. Design System & Brand Tokens

All styles are applied via **Tailwind CSS utility classes** loaded from CDN. The custom brand tokens are defined in `_layouts/default.html` inside the Tailwind config script block.

### Color Palette

| Token | Hex | Tailwind Class | Usage |
|---|---|---|---|
| Evergreen | `#1F3D2B` | `bg-mfa-evergreen` / `text-mfa-evergreen` | Headers, nav, section backgrounds, primary text |
| Gold | `#C6A75E` | `bg-mfa-gold` / `text-mfa-gold` | CTAs, buttons, accent lines, highlights |
| Cream | `#F7F6F2` | `bg-mfa-cream` / `text-mfa-cream` | Page background, light sections |
| Sage | `#9EB5A3` | `bg-mfa-sage` / `text-mfa-sage` | Secondary text, borders, subtle backgrounds |
| Slate | `#4A4F55` | `text-mfa-slate` | Body text |

### Typography

| Role | Font | Tailwind Class |
|---|---|---|
| Headings / display | Libre Baskerville (serif) | `font-serif` |
| Body text | Inter | `font-sans` |
| UI labels / buttons | DM Sans | `font-ui` |

### Common Patterns

**Section with gold accent line:**
```html
<div class="w-12 h-1 bg-mfa-gold mb-8"></div>
<h2 class="font-serif text-3xl text-mfa-evergreen">Section Title</h2>
```

**Gold CTA button:**
```html
<a href="/contact/" class="bg-mfa-gold hover:bg-mfa-evergreen text-mfa-evergreen hover:text-mfa-cream font-ui font-bold py-5 px-10 rounded-mfa transition-all uppercase tracking-widest text-xs">
  Button Text →
</a>
```

**Evergreen CTA button:**
```html
<a href="/contact/" class="bg-mfa-evergreen text-mfa-cream font-ui font-bold py-5 px-10 rounded-mfa hover:bg-black transition-colors uppercase tracking-widest text-xs">
  Button Text
</a>
```

**Service card:**
```html
<div class="bg-white border-t-4 border-mfa-gold p-8 shadow-mfa-card rounded-mfa hover:-translate-y-1 transition-transform">
  <h3 class="font-serif text-xl text-mfa-evergreen mb-3">Card Title</h3>
  <p class="text-sm leading-relaxed mb-6">Card description text.</p>
  <a href="/services/" class="text-mfa-gold font-ui font-bold text-xs uppercase">Learn More →</a>
</div>
```

### Border Radius

The design uses sharp, formal corners throughout: `rounded-mfa` = `4px`. Avoid `rounded-lg` or larger — it conflicts with the professional aesthetic.

---

## 7. Form Backend — Formspree

The contact form on `/contact/` submits to **Formspree**, which delivers submissions directly to the firm's email inbox.

### Account
- **Service:** [formspree.io](https://formspree.io)
- **Form name:** Case Evaluation
- **Notification email:** hello@olivetreetax.com

### How it works

The form `action` attribute points to the Formspree endpoint:

```html
<form id="evaluation-form"
      action="https://formspree.io/f/xxxxxxxx"
      method="POST"
      class="...">
```

Formspree reads the `name` attribute on each input and formats them into a labelled email notification. The `_replyto` field ensures that clicking **Reply** in the notification email replies directly to the client.

### Key field names

| Field | `name` attribute | Notes |
|---|---|---|
| Full Name | `full_name` | |
| Phone | `phone` | |
| Email | `_replyto` | Formspree uses this as reply-to |
| Business Type | `business_type` | |
| Situation | `situation` | Radio group |
| Estimated Debt | `estimated_debt` | |
| Message | `message` | |
| Spam trap | `_gotcha` | Hidden — bots fill this, humans don't |
| Email subject | `_subject` | Hidden — sets notification subject line |

### Updating the Formspree endpoint

If the form endpoint ever needs to be changed (e.g. new Formspree account), find this line in `contact.md` and replace the URL:

```html
<form id="evaluation-form" action="https://formspree.io/f/xxxxxxxx" method="POST" ...>
```

### Monthly limit

The free Formspree plan allows **50 submissions/month**. If the firm grows and exceeds this, upgrade at formspree.io or switch to Web3Forms (unlimited free).

---

## 8. Deployment

The site deploys automatically via **GitHub Pages** on every push to the `main` branch. There is no manual build step.

### Workflow

```bash
# Make your changes locally
bundle exec jekyll serve   # preview at localhost:4000

# When ready to publish
git add .
git commit -m "Brief description of changes"
git push origin main
```

GitHub Pages rebuilds the site within ~60 seconds of pushing. Changes are live at [olivetreetax.com](https://www.olivetreetax.com) shortly after.

### Branch strategy (recommended)

For larger changes, use a feature branch and merge via Pull Request:

```bash
git checkout -b your-branch-name   # create branch
# make changes, test locally
git push origin your-branch-name   # push branch
# open Pull Request on GitHub → merge to main when ready
```

### Custom domain

The custom domain is configured via the `CNAME` file in the repo root:
```
olivetreetax.com
```

**Do not delete or edit the `CNAME` file** — removing it will break the custom domain and the site will revert to `olivetreetax.github.io`.

DNS is managed at **Spaceship** (domain registrar), pointing to GitHub Pages servers.

### Favicon files

Three favicon files live in the repo root — all three are required:

| File | Purpose |
|---|---|
| `favicon.svg` | Modern browsers (Chrome, Firefox, Safari) |
| `favicon-32.png` | Apple touch icon fallback |
| `favicon.ico` | Older browsers, Windows taskbar pinning |

They are linked in `_layouts/default.html` inside `<head>`.

---

## 9. Pending Items

Items to complete before or shortly after launch:

| Item | Location | Action |
|---|---|---|
| Formspree endpoint | `contact.md` — `form action=""` | Replace `xxxxxxxx` with actual Formspree form ID |
| EA Practitioner Number | `contact.md` — sidebar badge | Replace `[YOUR NUMBER]` with actual number |
| Founder headshot (optional) | `about.md` — hero panel | Add photo to `/images/illustrations/` and update `src` |
| Google Analytics (optional) | `_layouts/default.html` — `<head>` | Add GA4 `<script>` tag if tracking is needed |
| Formspree confirmation | Formspree dashboard | Confirm email address to activate form submissions |

---

*Last updated: 2026 · Olive Tree Tax · [olivetreetax.com](https://www.olivetreetax.com)*
