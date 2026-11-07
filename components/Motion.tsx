"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// one place for every scroll animation: reveal on scroll + gentle parallax
export default function Motion() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            delay: Number(el.dataset.revealDelay ?? 0),
            scrollTrigger: { trigger: el, start: "top 90%", once: true },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        const speed = Number(el.dataset.parallax ?? 0.15);
        const trigger = el.closest("section") ?? el;
        const startsInView = trigger.getBoundingClientRect().top < window.innerHeight;
        gsap.fromTo(
          el,
          { y: -speed * 140 },
          {
            y: speed * 140,
            ease: "none",
            scrollTrigger: {
              trigger,
              start: startsInView ? "top top" : "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      });
    });

    return () => mm.revert();
  }, []);

  return null;
}
