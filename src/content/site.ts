// Everything the portfolio says lives here. Edit this file to update the site.

export const site = {
  name: "Joe Cole",
  role: "AI Full-Stack Developer",
  /** How the role reads inside the hero sentence: "Hi, I'm Joe Cole, an AI full-stack developer." */
  roleInSentence: { article: "an", text: "AI full-stack developer" },
  location: "Accra, Ghana",
  heroPhoto: {
    src: "/images/joe-hero.jpg",
    alt: "Joe Cole smiling in a yellow hoodie against a light grey studio backdrop",
    width: 930,
    height: 1080,
  },
  url: "https://joe-cole-portfolio.vercel.app",
  email: "colefrankenstein@gmail.com",
  cv: "/cv/Joe-Cole-CV.pdf",
  availability: "Open to developer roles and freelance projects",
  intro:
    "I build websites and business systems with React, Next.js, Python and WordPress, using AI coding tools to deliver working software faster.",
  links: {
    github: "https://github.com/zeus-tech-24",
    linkedin: "https://www.linkedin.com/in/joe-cole-60a331300/",
  },
};

// Builds in the 100 Projects repository, in order. Add names as the challenge grows.
export const challengeBuilds = [
  "Background video", "Loading animation", "Custom scrollbar", "Image hover", "Creative buttons",
  "Navbar effects", "Image hover effects", "Card hover effects", "Tooltip", "Accordion",
  "Scrollbar", "Text over image", "Scroll indicator", "Heart", "Colour changer",
  "Auto text", "Custom cursor", "Trailer pop-up", "Colour toggle", "Animated nav",
  "Random emojis", "Fade button", "Calculator", "Copy and move", "Progress bar",
  "Lazy loading", "Pop-up form", "Show password", "Social selector", "Wave form",
  "Full navbar", "3D navbar", "Counter", "Text formatter", "Image gallery",
  "Read more", "Expanding cards", "Keycode generator", "Tabs", "Accordions",
  "Random images", "Random quote", "Email validation", "Background changer", "Digital clock",
  "File upload", "Sticky navbar", "Search and highlight", "Range slider", "Feedback",
  "Eye-follow emoji", "Rounded navbar", "Clip-path animation",
];

export const challengeGoal = 100;

export type Project = {
  title: string;
  kind: string;
  summary: string;
  stack: string[];
  image?: { src: string; alt: string; host: string; width: number; height: number };
  live?: string;
  code?: string;
  /** Shown instead of links when a project has no public URL right now. */
  note?: string;
};

export const projects: Project[] = [
  {
    title: "The Urban Artistry",
    kind: "Client website",
    summary:
      "A fully responsive business website built with WordPress, taken from the first client conversation to launch.",
    stack: ["WordPress", "Responsive design"],
    image: {
      src: "/images/work-urban-artistry.png",
      alt: "The Urban Artistry home page: a dark gallery hero with a sculpture and a View Gallery button",
      host: "theurbanartistry.com",
      width: 400,
      height: 400,
    },
    // The domain stopped resolving (checked 17 Nov 2026). Put the URL back in `live` if the site returns.
    note: "Site no longer online",
  },
  {
    title: "100 Projects Challenge",
    kind: `Learning by building · ${challengeBuilds.length} of ${challengeGoal} built`,
    summary:
      "A public challenge to build 100 small interface pieces in plain HTML, CSS and JavaScript: navbars, sliders, form validation, animations and more.",
    stack: ["HTML", "CSS", "JavaScript"],
    image: {
      src: "/images/work-100-projects-sheet.png",
      alt: "Six builds from the challenge: a calculator, a login form, a digital clock, progress steps, a range slider and a 3D navbar",
      host: "github.com/zeus-tech-24",
      width: 1600,
      height: 1000,
    },
    code: "https://github.com/zeus-tech-24/PROJECT-BASED-LEARNING-PROJECT-100-PROJECTS",
  },
  {
    title: "Personal portfolio",
    kind: "Personal site",
    summary:
      "This site: built in Next.js and TypeScript, with a pinned photo hero, a draggable intro card, scroll-driven motion and light and dark themes.",
    stack: ["Next.js", "TypeScript", "CSS"],
    image: {
      src: "/images/work-portfolio.png",
      alt: "Joe's portfolio home page: a full-screen portrait with JOE COLE across the bottom and an intro card",
      host: "joe-cole-portfolio.vercel.app",
      width: 1920,
      height: 1200,
    },
    live: "https://joe-cole-portfolio.vercel.app/",
    code: "https://github.com/zeus-tech-24/joe-cole-portfolio",
  },
];

export const about = {
  paragraphs: [
    "I'm an AI full-stack developer based in Accra, Ghana. I've freelanced since 2023, taking client websites from the first conversation to launch, and recently completed an AI Full-Stack Developer internship at Effective Studios, where I built Nuxt frontends from Figma designs and the Django APIs behind them.",
    "I work with AI coding tools, mainly Claude Code and Codex, to deliver working software faster. A background in graphic and web design means what I build is clear and easy to use.",
  ],
  photo: {
    src: "/images/joe-about.jpg",
    alt: "Joe smiling in a white shirt by a canal",
    width: 720,
    height: 900,
  },
};

/** A small square badge on each experience card: initials, or a logo key from ToolIcon. */
export type Badge = { initials: string } | { logo: ToolLogo };

export type TimelineItem = {
  when: string;
  title: string;
  org: string;
  detail: string;
  badge: Badge;
  tags?: string[];
};

// Work experience: shown as the two large cards.
export const experience: TimelineItem[] = [
  {
    when: "Jul – Nov 2026",
    title: "AI Full-Stack Developer Intern",
    org: "Effective Studios",
    badge: { initials: "ES" },
    detail:
      "Built the frontends of a crypto wallet app and an event ticket booking web app in Nuxt from Figma designs, and implemented the Django backend APIs for both. Used Claude Code and Codex across the stack and contributed to several other projects.",
    tags: ["Nuxt", "Vue.js", "Django", "Figma", "Claude Code", "Codex"],
  },
  {
    when: "2023 – Now",
    title: "Frontend Developer",
    org: "Self-employed",
    badge: { initials: "JC" },
    detail:
      "Design and build responsive websites for clients with HTML, CSS, JavaScript, React and WordPress. I take projects from the first client conversation to launch, agreeing scope and timeline, then test across browsers and devices before handover.",
    tags: ["HTML", "CSS", "JavaScript", "React", "WordPress"],
  },
];

// Education and certifications: shown as the row of smaller cards.
export const education: TimelineItem[] = [
  {
    when: "Mar 2024",
    title: "Responsive Web Design certification",
    org: "freeCodeCamp",
    badge: { logo: "freecodecamp" },
    detail: "300 hours of HTML, CSS and JavaScript coursework and projects.",
  },
  {
    when: "Self-study",
    title: "30 Days of Python",
    org: "Programming challenge",
    badge: { logo: "python" },
    detail: "A self-study programming challenge in Python.",
  },
  {
    when: "2014 – 2017",
    title: "WASSCE",
    org: "Begoro Presbyterian Senior High School",
    badge: { initials: "SHS" },
    detail: "West African Senior School Certificate Examination.",
  },
];

export type ToolLogo =
  | "claude"
  | "openai"
  | "react"
  | "nextjs"
  | "nuxt"
  | "javascript"
  | "html"
  | "css"
  | "python"
  | "django"
  | "wordpress"
  | "git"
  | "freecodecamp";

// The tools grid: one card per tool, with its area of work in the corner.
export const tools: { name: string; area: string; logo: ToolLogo }[] = [
  { name: "Claude Code", area: "AI development", logo: "claude" },
  { name: "Codex", area: "AI development", logo: "openai" },
  { name: "React", area: "Frontend", logo: "react" },
  { name: "Next.js", area: "Frontend", logo: "nextjs" },
  { name: "Nuxt", area: "Frontend", logo: "nuxt" },
  { name: "JavaScript", area: "Frontend", logo: "javascript" },
  { name: "HTML", area: "Frontend", logo: "html" },
  { name: "CSS", area: "Frontend", logo: "css" },
  { name: "Python", area: "Backend", logo: "python" },
  { name: "Django", area: "Backend", logo: "django" },
  { name: "WordPress", area: "CMS", logo: "wordpress" },
  { name: "Git & GitHub", area: "Version control", logo: "git" },
];

// Everything else on the CV, listed under the tools grid.
export const otherSkills = [
  "AI-assisted full-stack development",
  "Vue.js",
  "Responsive design",
  "Cross-browser compatibility",
  "UI and UX principles",
  "Web design",
  "Graphic design",
  "Adobe Photoshop",
  "Microsoft Office",
  "Requirements gathering",
  "Project scoping",
  "Testing and debugging",
];
