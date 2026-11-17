import Image from "next/image";
import { Download } from "lucide-react";
import { site } from "@/content/site";
import HeroCard from "./HeroCard";

export default function Hero() {
  const [first] = site.name.split(" ");
  const words = site.name.split(" ");

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-photo">
        <Image
          src={site.heroPhoto.src}
          alt={site.heroPhoto.alt}
          width={site.heroPhoto.width}
          height={site.heroPhoto.height}
          priority
          sizes="(max-width: 720px) 120vw, 1000px"
        />
      </div>
      <div className="hero-grain" aria-hidden="true" />

      <div className="hero-content">
        <div className="container">
          <HeroCard>
            <p className="hero-hello">Hey, I&rsquo;m {first}</p>
            <p className="hero-intro">
              {site.roleInSentence.article === "an" ? "An" : "A"} <b>{site.roleInSentence.text}</b> based in{" "}
              <b>{site.location}</b>.<span className="hero-intro-more"> {site.intro}</span>
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#contact">
                Hire me
              </a>
              <a className="btn btn-on-dark" href={site.cv} download>
                <Download aria-hidden="true" />
                Download CV
              </a>
            </div>
            <p className="status">
              <span className="status-dot" aria-hidden="true" />
              {site.availability}
            </p>
          </HeroCard>
        </div>
      </div>

      <h1 id="hero-title" className="hero-name">
        {words.map((word, i) => (
          <span className="hero-word" key={word}>
            <span style={{ ["--i" as string]: i }}>{word}</span>
          </span>
        ))}
      </h1>
    </section>
  );
}
