import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown, { type Components } from "react-markdown";
import { GalleryProvider, Shot } from "@/components/Gallery";
import { emphasize } from "@/components/emphasize";
import { SectionHead } from "@/components/SectionHead";
import { getProject, getSlugs, splitSections, toCardData } from "@/lib/projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return getSlugs().map((slug) => ({ slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (!getSlugs().includes(slug)) return {};
  const p = getProject(slug);
  const cover = p.cover ?? p.screenshots[0]?.src;
  return {
    title: p.title,
    description: p.tagline,
    openGraph: {
      title: p.title,
      description: p.tagline,
      images: cover ? [`/${cover}`] : undefined,
    },
  };
}

const stackLabels: Record<string, string> = {
  frontend: "Frontend",
  backend: "Backend",
  mobile: "Mobile",
  data: "Données",
  infra: "Infra",
  services: "Services",
};

const mdComponents: Components = {
  p: ({ children }) => <p>{emphasize(children)}</p>,
  li: ({ children }) => <li>{emphasize(children)}</li>,
};

const isUrl = (v?: string) => !!v && /^https?:\/\//.test(v);

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  if (!getSlugs().includes(slug)) notFound();

  const p = getProject(slug);
  const slugs = getSlugs();
  const at = slugs.indexOf(slug);
  const prev = toCardData(getProject(slugs[(at - 1 + slugs.length) % slugs.length]));
  const next = toCardData(getProject(slugs[(at + 1) % slugs.length]));

  const shots = p.screenshots;
  const mobile = p.screenshots_layout === "portrait";
  const ratio = mobile ? "9 / 19.5" : "16 / 10";
  const sections = splitSections(p.content);
  const intro = sections.filter((s) => ["Présentation", "Mon rôle"].includes(s.title));
  const extra = sections.filter((s) => !["Présentation", "Mon rôle"].includes(s.title));

  const meta = [
    { label: "Période", value: p.period },
    { label: "Rôle", value: p.role },
    p.team ? { label: "Équipe", value: p.team } : null,
    { label: "Statut", value: p.status },
  ].filter((m): m is { label: string; value: string } => !!m);

  const stackGroups = Object.entries(p.stack ?? {})
    .filter(([, items]) => items?.length)
    .map(([key, items]) => ({ name: stackLabels[key] ?? key, items }));

  // Blocs de contenu, alternés fond / surface comme sur l'accueil.
  const blocks: { title: string; node: React.ReactNode }[] = [];

  for (const s of intro) {
    blocks.push({
      title: s.title,
      node: (
        <div className="ds-prose">
          <ReactMarkdown components={mdComponents}>{s.body}</ReactMarkdown>
          {s.title === "Mon rôle" && p.contributions && p.contributions.length > 0 && (
            <ul>
              {p.contributions.map((c) => (
                <li key={c}>{emphasize(c)}</li>
              ))}
            </ul>
          )}
        </div>
      ),
    });
  }

  if (p.modules && p.modules.length > 0) {
    blocks.push({
      title: "Modules",
      node: (
        <div className="modules-grid">
          {p.modules.map((m, i) => (
            <div key={m.name} className="ds-card module-card">
              <p className="ds-label">Module {String(i + 1).padStart(2, "0")}</p>
              <h3 className="ds-h4">{m.name}</h3>
              {m.description && <p className="ds-card-desc">{m.description}</p>}
              {m.features && m.features.length > 0 && (
                <ul className="ds-card-desc module-features">
                  {m.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      ),
    });
  }

  if (p.challenges && p.challenges.length > 0) {
    blocks.push({
      title: "Défis techniques",
      node: (
        <ol className="challenges">
          {p.challenges.map((c, i) => (
            <li key={c}>
              <span className="ds-label">{String(i + 1).padStart(2, "0")}</span>
              <p className="ds-text">{c}</p>
            </li>
          ))}
        </ol>
      ),
    });
  }

  for (const s of extra) {
    blocks.push({
      title: s.title,
      node: (
        <div className="ds-prose">
          <ReactMarkdown components={mdComponents}>{s.body}</ReactMarkdown>
        </div>
      ),
    });
  }

  if (stackGroups.length > 0) {
    blocks.push({
      title: "Stack",
      node: (
        <div className="ds-skills">
          <dl className="ds-skills-grid" style={{ ["--cols" as string]: stackGroups.length }}>
            {stackGroups.map((g) => (
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
      ),
    });
  }

  if (shots.length > 0) {
    blocks.push({
      title: "Captures",
      node: (
        <div className={mobile ? "shots-grid shots-portrait" : "shots-grid"}>
          {shots.map((s, i) => (
            <Shot
              key={s.src}
              shot={s}
              index={i}
              ratio={ratio}
              sizes={mobile ? "(min-width: 768px) 25vw, 50vw" : "(min-width: 768px) 520px, 100vw"}
            />
          ))}
        </div>
      ),
    });
  }

  return (
    <GalleryProvider title={p.title} shots={shots}>
      <div id="top">
        <section className="ds-section" style={{ paddingBottom: 64 }}>
          <div className="ds-container section-stack-tight" style={{ gap: 24 }}>
            <Link className="ds-link-arrow" href="/projets" style={{ alignSelf: "flex-start" }}>
              <span className="ds-arrow">←</span>Tous les projets
            </Link>
            <p className="ds-label" style={{ paddingTop: 16 }}>{p.type}</p>
            <h1 className="ds-h1">{p.title}</h1>
            <p className="ds-text-lg">{p.tagline}.</p>
            <div style={{ paddingTop: 16 }}>
              <dl className="ds-meta meta-grid" style={{ ["--cols" as string]: meta.length }}>
                {meta.map((m) => (
                  <div key={m.label}>
                    <dt className="ds-label">{m.label}</dt>
                    <dd>{m.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <ul className="ds-tags">
              {p.tags.map((t) => (
                <li key={t}>
                  <span className="ds-tag">{t}</span>
                </li>
              ))}
            </ul>
            {isUrl(p.links?.site) && (
              <div style={{ paddingTop: 8 }}>
                <a className="ds-btn ds-btn-primary" href={p.links!.site} target="_blank" rel="noopener noreferrer">
                  Voir le site <span className="ds-btn-arrow">↗</span>
                </a>
              </div>
            )}
            {shots[0] && !mobile && (
              <div style={{ marginTop: 32 }}>
                <Shot shot={shots[0]} index={0} ratio="16 / 9" sizes="(min-width: 1120px) 1056px, 100vw" priority />
              </div>
            )}
          </div>
        </section>

        {blocks.map((b, i) => (
          <section
            key={b.title}
            className={`ds-section${i % 2 === 0 ? " section-surface-bordered" : ""}`}
          >
            <div className="ds-container section-stack">
              <SectionHead label={`${String(i + 1).padStart(2, "0")} — ${b.title}`} title={b.title} />
              {b.node}
            </div>
          </section>
        ))}

        <section className="pager">
          <div className="ds-container pager-grid">
            <Link className="ds-card pager-card" href={`/projets/${prev.slug}`}>
              <span className="ds-label">
                <span className="ds-arrow">←</span> Projet précédent
              </span>
              <span className="ds-h4">{prev.title}</span>
              <span className="ds-card-desc">{prev.tagline}</span>
            </Link>
            <Link className="ds-card pager-card pager-next" href={`/projets/${next.slug}`}>
              <span className="ds-label">
                Projet suivant <span className="ds-arrow">→</span>
              </span>
              <span className="ds-h4">{next.title}</span>
              <span className="ds-card-desc">{next.tagline}</span>
            </Link>
          </div>
        </section>
      </div>
    </GalleryProvider>
  );
}
