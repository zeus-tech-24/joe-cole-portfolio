# Joe Cole, AI Full-Stack Developer

Personal portfolio built with Next.js (App Router), TypeScript and plain CSS.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Edit the content

Everything the site says lives in **`src/content/site.ts`**:

- `site`: name, role, email, CV path, availability line, intro sentence, GitHub and LinkedIn links.
- `projects`: the work cards. Each one takes a title, kind, summary, stack, an optional screenshot, and `live` / `code` links. Use `note` when a project has no public link.
- `challengeBuilds`: the builds in the 100 Projects repository. Add a name each time you finish one and the "53 of 100 built" count on the card updates by itself.
- `about`, `timeline`, `skills`: the About section, the experience list and the skill groups.

Images go in `public/images/` and the CV in `public/cv/`.

Photos: `joe-hero.jpg` (hero, set in `site.heroPhoto`) and `joe-about.jpg` (About, a 4:5 upper-body crop, set in `about.photo`). Larger originals make both sharper on high-density screens.

## Structure

```
src/
  app/
    layout.tsx            fonts, metadata, theme script
    page.tsx              section order and footer
    globals.css           design tokens and all styles
    opengraph-image.tsx   link preview card for LinkedIn, WhatsApp, Slack
    icon.svg              favicon
  components/             Nav, Hero, Work, About, Skills, Contact
  content/site.ts         all copy and data
```

Colours, spacing and type sizes are CSS variables at the top of `globals.css`. Light and dark themes follow the visitor's system setting, and the moon/sun button lets them override it.

## Deploy

Push the folder to a GitHub repository and import it at vercel.com/new. Vercel detects Next.js and needs no extra settings. Update `site.url` in `src/content/site.ts` to the final domain so link previews resolve correctly.
