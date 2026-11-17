---
version: 1
slug: "src-app-page-tsx"
primary_target: "src/app/page.tsx"
related_targets: ["src/app/globals.css","src/components"]
---

# Surface brief: portfolio home

## Scope and mode

Single-page portfolio home (`src/app/page.tsx` and its components). Mode: Experience; the work leads early. The user chose the category standard on purpose (2026-11-17), with brittanychiang.com, Vercel / Linear, leerob.com and Stripe as the craft bar.

## Audience, job, action

Hiring managers and freelance clients, equally. Job: judge Joe's work and make contact. Primary action: contact (email); secondary: download the CV.

## Proof and content

Three real projects, CV facts, two real photos. No testimonials, metrics or invented projects.

## Constraints

Next.js App Router, TypeScript, plain CSS with tokens. Content in one data file. Light theme first, dark theme supported.

## Direction contract

THESIS: The standard developer portfolio, executed with product-grade precision, opened by a full-screen portrait hero the user modelled on a Framer template (2026-11-17); it refuses the animated rainbow, decorative glass and skill-level meters of the old site.

OWN-WORLD: White ground, ink #111827, one blue #2563EB doing every action job, hairline grey borders, 12px radii, Geist sans with Geist Mono only for dates and stack tags; screenshots sit in thin browser frames.

STORY: Visitor learns who Joe is in one line, sees three real projects, reads a short honest bio and timeline, then emails or downloads the CV.

FIRST VIEWPORT: Full-screen pinned portrait on its own light studio ground (sampled from the photo), film grain over it. The nav floats transparent on the photo. The giant name "JOE COLE" (h1, ~20vw, ink) spans the bottom edge. A dark glass card at left ("Hey, I'm Joe", role and location, intro, Hire me, Download CV, availability) sits beside the face; below 1000px it drops above the name in short form. The rest of the page slides up over the pinned hero.

FORM: Category standard (canon), chosen by the user over the dealt hand. seed:09fc149104e25d35. Signature interaction: copy-email button with a confirmed state; motion grammar: one hero entrance (portrait settles from blur, name words rise from a clip, card follows), quiet 180ms hover lifts, the page sheet sliding over the pinned hero, nav bar returning once the sheet reaches it.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
