import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects, site, type Project } from "@/content/site";

function ProjectCard({ project }: { project: Project }) {
  const primary = project.live ?? project.code;
  const host = project.image?.host ?? primary?.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

  const frame = (
    <>
      <div className="frame-bar">
        <i />
        <i />
        <i />
        <span className="mono">{host}</span>
      </div>
      <div className="frame-view">
        {project.image && (
          <Image
            src={project.image.src}
            alt={primary ? "" : project.image.alt}
            width={project.image.width}
            height={project.image.height}
            sizes="(max-width: 640px) 100vw, (max-width: 1000px) 46vw, 360px"
          />
        )}
      </div>
    </>
  );

  return (
    <article className="project">
      {primary ? (
        <a className="frame" href={primary} target="_blank" rel="noreferrer" tabIndex={-1} aria-hidden="true">
          {frame}
        </a>
      ) : (
        <div className="frame">{frame}</div>
      )}
      <div className="project-body">
        <h3 className="h3">{project.title}</h3>
        <p className="project-kind">{project.kind}</p>
        <p className="project-summary">{project.summary}</p>
        <ul className="tags" aria-label="Built with">
          {project.stack.map((item) => (
            <li key={item} className="tag">
              {item}
            </li>
          ))}
        </ul>
        <div className="project-links">
          {project.note && <p className="project-note">{project.note}</p>}
          {project.live && (
            <a className="text-link" href={project.live} target="_blank" rel="noreferrer">
              Live site
              <ArrowUpRight aria-hidden="true" />
              <span className="sr-only">: {project.title} (opens in a new tab)</span>
            </a>
          )}
          {project.code && (
            <a className="text-link" href={project.code} target="_blank" rel="noreferrer">
              Code
              <ArrowUpRight aria-hidden="true" />
              <span className="sr-only">: {project.title} on GitHub (opens in a new tab)</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Work() {
  return (
    <section className="section" id="work" aria-labelledby="work-title">
      <div className="container">
        <div className="section-head" data-reveal="up">
          <div>
            <h2 id="work-title" className="h2">
              Selected work
            </h2>
            <p>Client sites, practice builds and this portfolio itself.</p>
          </div>
          <a className="text-link" href={site.links.github} target="_blank" rel="noreferrer">
            More on GitHub
            <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
        <div className="work-grid" data-reveal="up">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
