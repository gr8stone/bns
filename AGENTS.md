# Project Rules & Working Constraints

## 1. Branch Requirement
- **Working Branch**: Work on any branch specified or requested by the user.


## 2. Layout & Styling Freeze (Strict Constraint)
- **No Layout Alterations**: Do not modify layouts, grids, flex structures, DOM hierarchies, component arrangement, or page architecture.
- **No Styling Alterations**: Do not modify CSS styles, Tailwind utility classes, colors, spacing, margins, paddings, fonts, or visual design tokens.
- **Strict Freeze Scope**: All styling and layout updates are strictly frozen until the word-for-word exchange of the current setup with the new organization data is complete.

## 3. Content Replacement Guidelines
- **Word-for-Word Substitution**: Perform a direct, 1-to-1 / word-for-word replacement of existing template/placeholder copy, data, and organizational details with the new organization's data.
- **Preserve Structure**: Retain existing tags, props, and surrounding markup exactly as-is.
- **No Deviations Without Explicit Permission**: Do not add new sections, omit sections, or alter content structure unless explicitly instructed otherwise by the user.

## 3a. Copy Rules (visitors skim; they don't read)
- **One headline per section, ≤ 8 words.** It must make sense on its own.
- **At most one supporting line, ≤ 20 words.** No paragraphs on marketing pages.
- **Lists are chips: ≤ 3 items, ≤ 5 words each.** No bullet walls.
- **Show, don't tell:** numbers, before/after, icons, photos over sentences.
- **Detail goes behind a tap** ("Read the full story", FAQs, bios on photos), never up front.
- **Don't cram:** fewer elements per section, generous spacing, not denser layouts.
- **Exempt:** Terms, Privacy, Cookies (legally required in full) and the White Paper body (long-form, with a short summary on top).
- Facts still come only from existing BNS sources; shortening must not change meaning or invent figures.

## 4. Progression Gate
- Layout tweaks, styling enhancements, and structural redesigns will only be permitted after all content has been completely replaced and verified.
- **Status (2026-11-22): Gate passed.** The owner confirmed content migration is verified and lifted the freeze in Sections 2–3 for the v2 storytelling redesign. Layout, styling, and motion changes are now permitted, starting with the homepage (`src/components/story/`). Facts in copy must still come from existing BNS sources (About, White Paper, Studio, Projects); do not invent claims or figures.
