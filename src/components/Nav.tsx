"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ArrowRight, Download, Menu, X } from "lucide-react";
import { site } from "@/content/site";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [overHero, setOverHero] = useState(true);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [marker, setMarker] = useState<{ x: number; w: number } | null>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  // Which section is under the reading line (about 40% down the screen).
  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const showing = new Set<string>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) showing.add(e.target.id);
          else showing.delete(e.target.id);
        }
        setActive(ids.filter((id) => showing.has(id)).pop() ?? null);
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  // Slide the highlight under the active link.
  useLayoutEffect(() => {
    const place = () => {
      const a = active ? linkRefs.current[active] : null;
      setMarker(a ? { x: a.offsetLeft, w: a.offsetWidth } : null);
    };
    place();
    window.addEventListener("resize", place);
    return () => window.removeEventListener("resize", place);
  }, [active]);

  useEffect(() => {
    // The nav floats on the photo until the page sheet slides up underneath it.
    const onScroll = () => {
      const hero = document.getElementById("top");
      const y = window.scrollY;
      setScrolled(y > 8);
      setOverHero(hero ? y < hero.offsetHeight - 64 : false);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth > 760 && setOpen(false);
    const root = document.documentElement;
    const previous = root.style.overflow;
    root.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      root.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const initials = site.name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <header className="nav" data-scrolled={scrolled || open} data-open={open} data-over-hero={overHero}>
      <div className="container nav-inner">
        <a className="brand" href="#top" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true">
            {initials}
          </span>
          {site.name}
        </a>

        <div className="nav-right">
          <nav aria-label="Main">
            <ul className="nav-links">
              <li
                className="nav-marker"
                aria-hidden="true"
                data-on={Boolean(marker)}
                style={marker ? { translate: `${marker.x}px 0`, width: marker.w } : undefined}
              />
              {links.map((link) => {
                const id = link.href.slice(1);
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      ref={(el) => {
                        linkRefs.current[id] = el;
                      }}
                      aria-current={active === id ? "location" : undefined}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="nav-actions">
            <a className="btn btn-secondary nav-cv" href={site.cv} download>
              <Download aria-hidden="true" />
              CV
            </a>
            <ThemeToggle />
            <button
              type="button"
              className="icon-btn nav-menu-btn"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      <div id="mobile-menu" className="mobile-panel" data-open={open} inert={!open}>
        <div className="container">
          <ul>
            {links.map((link, i) => (
              <li key={link.href} style={{ ["--i" as string]: i }}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={active === link.href.slice(1) ? "location" : undefined}
                >
                  {link.label}
                  <ArrowRight size={18} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
          <a className="btn btn-secondary" href={site.cv} download onClick={() => setOpen(false)}>
            <Download aria-hidden="true" />
            Download CV
          </a>
        </div>
      </div>
    </header>
  );
}
