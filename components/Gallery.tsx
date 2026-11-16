"use client";

import Image from "next/image";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import type { Screenshot } from "@/lib/projects";

type Ctx = { open: (index: number) => void };
const GalleryContext = createContext<Ctx>({ open: () => {} });

/** Fournit la lightbox à toute la page projet. */
export function GalleryProvider({
  title,
  shots,
  children,
}: {
  title: string;
  shots: Screenshot[];
  children: ReactNode;
}) {
  const [index, setIndex] = useState<number | null>(null);
  const trigger = useRef<HTMLElement | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const total = shots.length;

  const open = useCallback((i: number) => {
    trigger.current = document.activeElement as HTMLElement | null;
    setIndex(i);
  }, []);
  const close = useCallback(() => {
    setIndex(null);
    trigger.current?.focus();
  }, []);
  const go = useCallback(
    (d: number) => setIndex((i) => (i === null ? i : (i + d + total) % total)),
    [total],
  );

  useEffect(() => {
    if (index === null) return;
    closeRef.current?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [index, close, go]);

  const shot = index === null ? null : shots[index];

  return (
    <GalleryContext.Provider value={{ open }}>
      {children}
      {shot && index !== null && (
        <div
          className="lightbox"
          data-theme="dark"
          role="dialog"
          aria-modal="true"
          aria-label={`Captures — ${title}`}
        >
          <div className="lightbox-bar">
            <p className="ds-label" style={{ color: "var(--foreground-secondary)" }}>
              {title} —{" "}
              <span className="ds-mono" style={{ textTransform: "none" }}>
                {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </span>
            </p>
            <button ref={closeRef} type="button" className="ds-btn ds-btn-outline" onClick={close}>
              Fermer <span style={{ fontFamily: "var(--font-mono)" }}>×</span>
            </button>
          </div>
          <div className="lightbox-stage">
            <button type="button" className="ds-btn ds-btn-outline lightbox-nav" aria-label="Capture précédente" onClick={() => go(-1)}>
              ←
            </button>
            <figure className="lightbox-figure">
              <div className="lightbox-img">
                <Image src={`/${shot.src}`} alt={shot.alt} fill sizes="100vw" priority />
              </div>
              {shot.caption && (
                <figcaption className="ds-caption" style={{ color: "var(--foreground-secondary)" }}>
                  {shot.caption}
                </figcaption>
              )}
            </figure>
            <button type="button" className="ds-btn ds-btn-outline lightbox-nav" aria-label="Capture suivante" onClick={() => go(1)}>
              →
            </button>
          </div>
        </div>
      )}
    </GalleryContext.Provider>
  );
}

/** Capture cliquable : ouvre la lightbox à l'index donné. */
export function Shot({
  shot,
  index,
  ratio,
  sizes,
  priority,
}: {
  shot: Screenshot;
  index: number;
  ratio: string;
  sizes: string;
  priority?: boolean;
}) {
  const { open } = useContext(GalleryContext);
  return (
    <figure style={{ margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
      <button
        type="button"
        className="ds-media shot-btn"
        style={{ aspectRatio: ratio }}
        aria-label={`Agrandir : ${shot.alt}`}
        onClick={() => open(index)}
      >
        <Image src={`/${shot.src}`} alt={shot.alt} fill sizes={sizes} priority={priority} />
      </button>
      {shot.caption && <figcaption className="ds-caption">{shot.caption}</figcaption>}
    </figure>
  );
}
