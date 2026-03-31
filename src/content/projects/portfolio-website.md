---
title: "Portfolio Website"
description: "This very site - a minimal developer portfolio built with Astro, Tailwind CSS, and deployed on GitHub Pages."
status: "ongoing"
startDate: "2026-02"
stack: ["Astro", "Tailwind CSS", "TypeScript", "GitHub Actions"]
tags: ["web", "personal"]
featured: true
repoUrl: "https://github.com/tkovachka/tkovachka.github.io"
liveUrl: "https://tkovachka.github.io"
---

## Overview

A personal portfolio and project showcase built as a static site using Astro's content collections.
The goal was a minimal, fast, and maintainable site that lives entirely in version control - no CMS,
no backend, no maintenance overhead.

## Why Astro?

Astro's zero-JS-by-default approach makes perfect sense for a portfolio. Every page is pre-rendered
to plain HTML at build time, resulting in near-instant load times and a perfect Lighthouse score.

Content is managed via Markdown files with typed frontmatter - adding a new project is as simple as
creating a new `.md` file, committing, and pushing.

## Technical Decisions

- **Content Collections** provide compile-time validation of frontmatter via Zod schemas
- **GitHub Actions** automate the build and deploy pipeline on every push to `main`
- **Tailwind CSS** with a custom design system keeps styling consistent without a UI library

## Why I like this project

AI Agents can develop everything I tell them to. But when I ask them to write something about myself - 
they can never me quite right. So, Claude Sonnet 4.6 built the house, but it was me who gave it its soul.
