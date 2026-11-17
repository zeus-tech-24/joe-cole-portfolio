import { otherSkills, tools } from "@/content/site";
import ToolIcon, { brandColor } from "./ToolIcon";
import DisplayTitle from "./DisplayTitle";

export default function Skills() {
  return (
    <section className="section" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <DisplayTitle id="skills-title" words={["Tools", "& expertise"]} />
        <ul className="tool-grid" data-reveal="up">
          {tools.map((tool, i) => (
            <li key={tool.name} className="tool-card" style={{ ["--brand" as string]: brandColor(tool.logo) }}>
              <div className="tool-top" aria-hidden="true">
                <span>/</span>
                <span>{String(i + 1).padStart(2, "0")}</span>
              </div>
              <ToolIcon logo={tool.logo} className="tool-icon" />
              <div className="tool-foot">
                <span className="tool-name">{tool.name}</span>
                <span className="tool-area">{tool.area}</span>
              </div>
            </li>
          ))}
        </ul>
        <div className="also" data-reveal="up">
          <p className="also-label">Also</p>
          <ul className="tags">
            {otherSkills.map((skill) => (
              <li key={skill} className="tag">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
