import Image from "next/image";
import Link from "next/link";
import type { ProjectCardData } from "@/lib/projects";

export function ProjectCard({ project }: { project: ProjectCardData }) {
  return (
    <Link className="ds-card" href={`/projets/${project.slug}`}>
      <div className="ds-card-media">
        {project.cover && (
          <Image
            src={project.cover}
            alt={project.coverAlt}
            fill
            sizes="(min-width: 1024px) 540px, 100vw"
          />
        )}
      </div>
      <div className="ds-card-body">
        <div className="ds-card-meta">
          <span className="ds-mono" style={{ color: "var(--foreground-secondary)" }}>
            {project.year}
          </span>
          <span className="ds-badge ds-badge-muted">{project.status}</span>
        </div>
        <h3 className="ds-h4">{project.title}</h3>
        <p className="ds-card-desc">{project.tagline}</p>
        <ul className="ds-tags">
          {project.tags.map((t) => (
            <li key={t}>
              <span className="ds-tag">{t}</span>
            </li>
          ))}
        </ul>
        <div className="ds-card-foot">
          <span className="ds-text-sm" style={{ fontWeight: 500 }}>
            Voir le projet
          </span>
          <span className="ds-arrow">→</span>
        </div>
      </div>
    </Link>
  );
}
