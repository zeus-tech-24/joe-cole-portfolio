import Image from "next/image";
import { about } from "@/content/site";

export default function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="container">
        <div className="about-grid">
          <div data-reveal="up">
            <h2 id="about-title" className="h2">
              About
            </h2>
            <div className="prose">
              {about.paragraphs.map((text) => (
                <p key={text.slice(0, 24)}>{text}</p>
              ))}
            </div>
          </div>
          <figure className="about-photo" data-reveal="photo">
            <Image
              src={about.photo.src}
              alt={about.photo.alt}
              width={about.photo.width}
              height={about.photo.height}
              sizes="(max-width: 860px) 360px, 320px"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
