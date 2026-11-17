"use client";

import { useEffect } from "react";

/**
 * Page-wide motion, set up once:
 * - [data-reveal] groups animate in the first time they scroll into view
 *   ("up": children rise in turn, "words": title words rise, "photo": the photo wipes in).
 *   Content is visible by default; it is only hidden once this script is running.
 * - [data-live] sections run their ambient loops only while on screen.
 * - The hero gets a --hero-p scroll progress (0 to 1) as the page slides over it.
 * Nothing moves for visitors who ask for reduced motion.
 */
export default function Motion() {
  useEffect(() => {
    const root = document.documentElement;
    const reveals = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    reveals.forEach((group) =>
      Array.from(group.children).forEach((child, i) => (child as HTMLElement).style.setProperty("--i", String(i))),
    );

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      reveals.forEach((group) => (group.dataset.inview = "instant"));
      return;
    }

    // Anything already on screen stays put; only what is still ahead gets revealed.
    const fold = window.innerHeight * 0.92;
    reveals.forEach((group) => {
      const r = group.getBoundingClientRect();
      if (r.top < fold && r.bottom > 0) group.dataset.inview = "instant";
    });
    root.dataset.motion = "on";

    const revealer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          (entry.target as HTMLElement).dataset.inview = "true";
          revealer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );
    reveals.filter((group) => !group.dataset.inview).forEach((group) => revealer.observe(group));

    const live = new IntersectionObserver((entries) => {
      for (const entry of entries) (entry.target as HTMLElement).dataset.live = String(entry.isIntersecting);
    });
    document.querySelectorAll("[data-live]").forEach((el) => live.observe(el));

    const hero = document.querySelector<HTMLElement>(".hero");
    let frame = 0;
    const onScroll = () => {
      if (frame || !hero) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const progress = Math.min(1, Math.max(0, window.scrollY / hero.offsetHeight));
        hero.style.setProperty("--hero-p", progress.toFixed(3));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      revealer.disconnect();
      live.disconnect();
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
      delete root.dataset.motion;
    };
  }, []);

  return null;
}
