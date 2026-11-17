import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Motion from "@/components/Motion";
import { site } from "@/content/site";

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <>
      <Motion />
      <Nav />
      <main id="main">
        <Hero />
        <div className="sheet">
          <Work />
          <About />
          <Experience />
          <Skills />
          <Contact />
        </div>
      </main>
      <footer className="footer">
        <div className="container footer-inner">
          <p>
            &copy; {year} {site.name}. Built with Next.js.
          </p>
          <nav aria-label="Footer">
            <a href={site.links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={site.links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="#top">Back to top</a>
          </nav>
        </div>
      </footer>
    </>
  );
}
