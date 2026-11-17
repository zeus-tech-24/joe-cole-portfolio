# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

React / Next.js (user's choice, replacing the old plain HTML/CSS/JS site). Deploy target: Vercel, connected to GitHub (every push to main deploys). Live at https://joe-cole-portfolio.vercel.app, repo github.com/zeus-tech-24/joe-cole-portfolio.

## Users

Two audiences, weighted equally (confirmed):

- **Hiring managers and dev leads / recruiters** deciding whether to interview Joe for a frontend role. They skim fast, usually on desktop between other tabs, and look for real shipped work, stack, and a way to get the CV.
- **Freelance clients** (small businesses, individuals) deciding whether Joe can build their website. They often arrive on a phone from a shared link, judge by how the portfolio itself looks and feels, and want to see a finished client site and an easy way to make contact.

## Product Purpose

Joe Cole's personal portfolio: show who he is, what he has built, and how to reach or hire him. Success is a visitor contacting Joe or downloading his CV.

## Positioning

An AI full-stack developer in Accra, Ghana: freelances on client websites since 2023, recently built Nuxt frontends and Django APIs as an intern, and works with AI coding tools (Claude Code, Codex) to ship faster. A graphic and web design background keeps the work clear and easy to use. Learns by shipping: a public 100-project challenge repository (53 builds so far).

## Operating Context

Visitors arrive from a CV, LinkedIn, GitHub, or a link shared by Joe. The CV is a PDF linked from the site.

## Capabilities and Constraints

- Single-page portfolio with sections for intro, about, skills, work, and contact.
- Must link to: GitHub, LinkedIn, CV PDF, and email.
- GitHub: `zeus-tech-24`. The second account the old site linked (`god-of-thunder2023`) returns 404 as of 2026-11-17.
- Contact email: the address on Joe's CV (the old site showed a placeholder). Joe can swap it in `src/content/site.ts`.

## Brand Commitments

- **"Joe Cole" leads** (confirmed). The old "ZeusTech" wordmark is dropped or kept secondary.
- Title: AI Full-Stack Developer (from Joe's November 2026 CV; earlier material said Frontend Developer).
- **Conventional, high-craft presentation** (chosen 2026-11-17): Joe picked the standard developer-portfolio layout over bolder directions. Quality bar: brittanychiang.com, Vercel / Linear, leerob.com, Stripe.

## Evidence on Hand

From Joe's current CV (supplied 2026-11-17, shipped as `public/cv/Joe-Cole-CV.pdf`), which supersedes the old site's CV:

- Location: Accra, Ghana.
- AI Full-Stack Developer Intern, Effective Studios (spelling as on the CV; unconfirmed), July to November 2026: Nuxt frontends from Figma designs for a crypto wallet app and an event ticket booking web app, Django backend APIs for both, Claude Code and Codex across the stack, other projects.
- Self-employed Frontend Developer, 2023 to present: responsive client websites with HTML, CSS, JavaScript, React and WordPress, from first conversation to launch, testing across browsers and devices.
- freeCodeCamp Responsive Web Design certification, March 2024 (300 hours).
- 30 Days of Python, self-study programming challenge.
- WASSCE, Begoro Presbyterian Senior High School, 2014 to 2017.
- Skills listed: Claude Code, Codex, AI-assisted full-stack development; React.js, Next.js, Nuxt (Vue.js), JavaScript, HTML, CSS, responsive design, cross-browser compatibility; Python, Django, WordPress; UI/UX principles, web design, graphic design, Adobe Photoshop; Git, GitHub, Microsoft Office; requirements gathering, project scoping, testing and debugging.
- The CV's GitHub profile and portfolio-repo links point at the dead `god-of-thunder2023` account, and it says "100+ practice projects"; the site keeps the verified `zeus-tech-24` links and the 53-of-100 count.
- Projects (three):
  1. **The Urban Artistry**: fully responsive WordPress website for a client (theurbanartistry.com; the domain was not reachable when checked on 2026-11-17).
  2. **100 Projects Challenge**: project-based learning repository in HTML, CSS and JavaScript, 53 of 100 builds done as of 2026-11-17 (github.com/zeus-tech-24/PROJECT-BASED-LEARNING-PROJECT-100-PROJECTS). The old site's "100+" overstated it.
  3. **Personal portfolio v1**: the old HTML/CSS/JS site (my-personal-portfolio-html-css-js.vercel.app).
- Photos: a studio headshot (red and white kit, grey ground) and a black-and-white candid.
- Absent, must not be invented: testimonials, client logos, metrics, employers, years-of-experience beyond what the CV states, additional projects.

## Product Principles

1. Show real work before claims; three honest projects beat a padded list.
2. Every visitor is one click from contact or the CV.
3. The portfolio is itself the strongest proof of craft for freelance clients, so its own execution must be flawless on a phone.
4. Easy for Joe to update: projects and links live in one data file.

## Accessibility & Inclusion

No product-specific requirement stated; meet WCAG 2.2 AA as a baseline.
