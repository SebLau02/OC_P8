import Link from "next/link";
import { CvButton } from "@/components/CvButton";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHead } from "@/components/SectionHead";
import { getProject, getSlugs, toCardData } from "@/lib/projects";
import {
  experience,
  featuredSlugs,
  formation,
  site,
  stack,
  status,
} from "@/lib/site";

export default function HomePage() {
  const searching = status === "recherche";
  const total = getSlugs().length;
  const featured = featuredSlugs.map((s) => toCardData(getProject(s)));

  return (
    <div id="top">
      <section className="ds-hero">
        <div className="ds-hero-inner">
          <div className="ds-hero-status">
            {searching ? (
              <span className="ds-badge">Disponible à partir de {site.availability.toLowerCase()}</span>
            ) : (
              <span className="ds-badge ds-badge-outline">En poste chez {site.employer}</span>
            )}
          </div>
          <p className="ds-label">{site.stackLine}</p>
          <h1 className="ds-hero-title">
            {site.name}
            <br />
            <span className="ds-dim">{site.role}.</span>
          </h1>
          <p className="ds-text-lg">{site.intro}</p>
          <div className="ds-hero-actions">
            <Link className="ds-btn ds-btn-primary ds-btn-lg" href="/projets">
              Voir mes projets <span className="ds-btn-arrow">→</span>
            </Link>
            <CvButton variant="secondary" size="lg" />
          </div>
          <div className="ds-hero-meta">
            <a className="ds-link-arrow" href={site.github} rel="noopener noreferrer">
              {site.githubLabel} <span className="ds-arrow">↗</span>
            </a>
            <a className="ds-link-arrow" href={`mailto:${site.email}`}>
              {site.email} <span className="ds-arrow">→</span>
            </a>
          </div>
        </div>
      </section>

      <section id="a-propos" className="ds-section section-surface-bordered">
        <div className="ds-container section-stack">
          <SectionHead
            label="01 — À propos"
            title="Développeur full stack, du back-end à l'interface."
          />
          <div className="about-body">
            <div className="about-text">
              <p className="ds-text">
                Je suis développeur Full Stack chez {site.employer}, à Plerin, depuis février 2024.
                J&apos;y développe des fonctionnalités back-end et front-end avec Ruby, PostgreSQL,
                React et Next.js, je conçois des API et j&apos;intègre des services tiers.
              </p>
              <p className="ds-text secondary">
                En parallèle, je prépare le diplôme Développeur d&apos;application JavaScript React
                (niveau 6, bac +3/4) avec OpenClassrooms.
              </p>
            </div>
            <dl className="facts">
              <div className="fact">
                <dt className="ds-label">{searching ? "Disponibilité" : "Poste actuel"}</dt>
                <dd>{searching ? site.availability : `Développeur Full Stack — ${site.employer}`}</dd>
              </div>
              <div className="fact">
                <dt className="ds-label">Langues</dt>
                <dd>Français (natif), anglais (avancé C1-C2)</dd>
              </div>
              <div className="fact">
                <dt className="ds-label">Permis</dt>
                <dd>Permis B</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section id="experience" className="ds-section">
        <div className="ds-container section-stack">
          <SectionHead label="02 — Expérience" title="Expérience" />
          <ol className="ds-timeline">
            {experience.map((e) => (
              <li key={e.title} className={`ds-timeline-item${e.current ? " is-current" : ""}`}>
                <span className="ds-timeline-date">{e.date}</span>
                <div className="ds-timeline-body">
                  <h3 className="ds-h4">{e.title}</h3>
                  <p className="ds-timeline-org">{e.org}</p>
                  <ul className="ds-timeline-desc timeline-list">
                    {e.items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                  <ul className="ds-tags">
                    {e.tags.map((t) => (
                      <li key={t}>
                        <span className="ds-tag">{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="formation" className="ds-section flush-top">
        <div className="ds-container section-stack">
          <SectionHead label="03 — Formation" title="Formation" />
          <ol className="ds-timeline">
            {formation.map((f) => (
              <li key={f.title} className={`ds-timeline-item${f.current ? " is-current" : ""}`}>
                <span className="ds-timeline-date">{f.date}</span>
                <div className="ds-timeline-body">
                  <h3 className="ds-h4">{f.title}</h3>
                  <p className="ds-timeline-org">{f.org}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="projets" className="ds-section section-surface-bordered">
        <div className="ds-container section-stack">
          <SectionHead
            label="04 — Projets"
            title="Projets sélectionnés"
            action={
              <Link className="ds-link-arrow" href="/projets">
                Voir tous les projets ({total}) <span className="ds-arrow">→</span>
              </Link>
            }
          />
          <div className="ds-card-grid">
            {featured.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </section>

      <section id="stack" className="ds-section">
        <div className="ds-container section-stack">
          <SectionHead label="05 — Stack" title="Stack technique" />
          <div className="ds-skills">
            <dl className="ds-skills-grid">
              {stack.map((g) => (
                <div key={g.name} className="ds-skill-group">
                  <dt>
                    <span className="ds-label" style={{ display: "flex", justifyContent: "space-between" }}>
                      <span>{g.name}</span>
                      <span>{String(g.items.length).padStart(2, "0")}</span>
                    </span>
                  </dt>
                  <dd>
                    <ul>
                      {g.items.map((i) => (
                        <li key={i} className="ds-skill">
                          <span>{i}</span>
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section id="contact" className="ds-section section-surface">
        <div className="ds-container section-stack-tight">
          <SectionHead label="06 — Contact" />
          <div className="contact-block">
            <h2 className="ds-display" style={{ maxWidth: "18ch" }}>
              {searching ? "Vous recrutez ? Parlons-en." : "Envie d'échanger ? Écrivez-moi."}
            </h2>
            <p className="ds-text-lg">
              {searching
                ? `Je cherche un poste de développeur full stack, à partir de ${site.availability.toLowerCase()}. Mon CV et mon code sont à portée de clic, le plus simple pour échanger reste l'email.`
                : `Je suis actuellement développeur full stack chez ${site.employer}. Pour parler code, technique ou opportunités, le plus simple reste l'email.`}
            </p>
            <a className="ds-link contact-email" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <div className="contact-actions">
              <CvButton />
              <a className="ds-link-arrow" href={site.github} rel="noopener noreferrer">
                {site.githubLabel} <span className="ds-arrow">↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
