import { education, experience, type TimelineItem } from "@/content/site";
import ToolIcon from "./ToolIcon";
import DisplayTitle from "./DisplayTitle";

function ExperienceCard({ item }: { item: TimelineItem }) {
  return (
    <article className="xp-card">
      <div className="xp-top">
        <span className="xp-badge" aria-hidden="true">
          {"logo" in item.badge ? <ToolIcon logo={item.badge.logo} /> : item.badge.initials}
        </span>
        <span className="xp-when mono">{item.when}</span>
      </div>
      <p className="xp-detail">{item.detail}</p>
      <div className="xp-foot">
        <h3 className="xp-title">{item.title}</h3>
        <p className="xp-org">{item.org}</p>
      </div>
    </article>
  );
}

export default function Experience() {
  return (
    <section className="section ember" id="experience" aria-labelledby="experience-title" data-live>
      <div className="ember-grain" aria-hidden="true" />
      <div className="container">
        <DisplayTitle id="experience-title" words={["Experience", "& education"]} />
        <div className="xp-grid xp-grid-lg" data-reveal="up">
          {experience.map((item) => (
            <ExperienceCard key={item.title} item={item} />
          ))}
        </div>
        <div className="xp-grid xp-grid-sm" data-reveal="up">
          {education.map((item) => (
            <ExperienceCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
