"use client";

import { useState } from "react";
import type { ProjectCardData } from "@/lib/projects";
import { ProjectCard } from "./ProjectCard";

export function ProjectsExplorer({
  projects,
  filters,
}: {
  projects: ProjectCardData[];
  filters: string[];
}) {
  const [active, setActive] = useState("Tous");
  const visible =
    active === "Tous" ? projects : projects.filter((p) => p.tags.includes(active));
  const n = visible.length;
  const count = `${String(n).padStart(2, "0")} ${n > 1 ? "projets" : "projet"}`;

  return (
    <>
      <section className="ds-section" style={{ paddingBottom: 48 }}>
        <div className="ds-container section-stack-tight" style={{ gap: 24 }}>
          <div className="ds-section-head">
            <div className="ds-section-head-row">
              <p className="ds-label">Projets</p>
              <p className="ds-mono" style={{ margin: 0, color: "var(--foreground-secondary)" }} aria-live="polite">
                {count}
              </p>
            </div>
          </div>
          <h1 className="ds-h1">Tous mes projets</h1>
          <p className="ds-text-lg">Projets professionnels et missions, du SaaS au mobile.</p>
        </div>
      </section>
      <section style={{ paddingBottom: 96 }}>
        <div className="ds-container section-stack-tight">
          <div className="filter-bar">
            <p className="ds-label">Filtrer par tag</p>
            <div className="ds-tags filter-tags" role="group" aria-label="Filtrer les projets par tag">
              {filters.map((f) => (
                <button
                  key={f}
                  type="button"
                  className="ds-tag filter-tag"
                  aria-pressed={f === active}
                  onClick={() => setActive(f)}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
          {n > 0 ? (
            <div className="ds-card-grid fade-in" key={active}>
              {visible.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <p className="ds-label">Aucun résultat</p>
              <h2 className="ds-h3">Aucun projet ne correspond à ce filtre.</h2>
              <p className="ds-text" style={{ color: "var(--foreground-secondary)" }}>
                Essayez un autre tag ou affichez tous les projets.
              </p>
              <button type="button" className="ds-btn ds-btn-outline" onClick={() => setActive("Tous")}>
                Afficher tous les projets
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
