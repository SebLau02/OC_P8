"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

const TARGETS = [
  ".ds-section-head",
  ".ds-timeline-item",
  ".ds-skill-group",
  ".ds-card-grid > *",
  ".modules-grid > *",
  ".shots-grid > *",
  ".challenges li",
  ".ds-prose",
  ".about-body",
  ".contact-block",
  ".pager-card",
].join(",");

/**
 * Apparition au scroll (IntersectionObserver) et barre de progression de lecture.
 * Les éléments déjà visibles ou au-dessus du viewport ne sont jamais masqués.
 */
export function ScrollEffects() {
  const pathname = usePathname();
  const bar = useRef<HTMLDivElement>(null);
  const isProject = /^\/projets\/[^/]+/.test(pathname);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          (e.target as HTMLElement).dataset.reveal = "shown";
          io.unobserve(e.target);
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    );

    document.querySelectorAll<HTMLElement>(TARGETS).forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return;
      const index = el.parentElement
        ? Array.from(el.parentElement.children).indexOf(el)
        : 0;
      el.style.setProperty("--reveal-delay", `${(index % 3) * 100}ms`);
      el.dataset.reveal = "hidden";
      io.observe(el);
    });

    return () => io.disconnect();
  }, [pathname]);

  useEffect(() => {
    if (!isProject) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      if (bar.current) bar.current.style.transform = `scaleX(${ratio})`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [isProject, pathname]);

  return isProject ? <div ref={bar} className="read-progress" aria-hidden="true" /> : null;
}
