import {
  siClaude,
  siCss,
  siDjango,
  siFreecodecamp,
  siGit,
  siHtml5,
  siJavascript,
  siNextdotjs,
  siNuxt,
  siOpenai,
  siPython,
  siReact,
  siWordpress,
} from "simple-icons";
import type { ToolLogo } from "@/content/site";

// Brand marks from Simple Icons (CC0), drawn in the current text colour.
const icons: Record<ToolLogo, { path: string; hex: string }> = {
  claude: siClaude,
  openai: siOpenai,
  react: siReact,
  nextjs: siNextdotjs,
  nuxt: siNuxt,
  javascript: siJavascript,
  html: siHtml5,
  css: siCss,
  python: siPython,
  django: siDjango,
  wordpress: siWordpress,
  git: siGit,
  freecodecamp: siFreecodecamp,
};

/** The brand's own colour, used as a hover tint. */
export const brandColor = (logo: ToolLogo) => `#${icons[logo].hex}`;

export default function ToolIcon({ logo, className }: { logo: ToolLogo; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
      <path d={icons[logo].path} />
    </svg>
  );
}
