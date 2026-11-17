import { ArrowUpRight, Download, Mail } from "lucide-react";
import { site } from "@/content/site";
import CopyEmail from "./CopyEmail";

export default function Contact() {
  return (
    <section className="section contact ember" id="contact" aria-labelledby="contact-title" data-live>
      <div className="ember-grain" aria-hidden="true" />
      <div className="container">
        <div className="contact-inner" data-reveal="up">
          <h2 id="contact-title" className="h2">
            Have a project or a role in mind?
          </h2>
          <p className="lede">
            Email is the quickest way to reach me. I&rsquo;m happy to talk about freelance websites, business
            systems, contracts and full-time developer roles.
          </p>
          <div className="email-row">
            <CopyEmail email={site.email} />
            <a className="btn btn-primary" href={`mailto:${site.email}?subject=Hello%20Joe`}>
              <Mail aria-hidden="true" />
              Email me
            </a>
          </div>
          <div className="contact-links">
            <a className="text-link" href={site.links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
              <ArrowUpRight aria-hidden="true" />
            </a>
            <a className="text-link" href={site.links.github} target="_blank" rel="noreferrer">
              GitHub
              <ArrowUpRight aria-hidden="true" />
            </a>
            <a className="text-link" href={site.cv} download>
              Download CV
              <Download aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
