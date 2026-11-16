import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { cardMeta, projectOrder } from "./site";

export type Screenshot = {
  src: string;
  alt: string;
  caption?: string;
  kind?: string;
};

export type Module = {
  name: string;
  description?: string;
  features?: string[];
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  type: string;
  status: string;
  period: string;
  role: string;
  team?: string;
  featured?: boolean;
  tags: string[];
  stack?: Record<string, string[]>;
  modules?: Module[];
  contributions?: string[];
  challenges?: string[];
  links?: { site?: string; repo?: string };
  cover?: string;
  screenshots: Screenshot[];
  content: string;
};

/** Données allégées pour les cartes (transmises au client). */
export type ProjectCardData = {
  slug: string;
  title: string;
  tagline: string;
  year: string;
  status: string;
  tags: string[];
  cover: string | null;
  coverAlt: string;
};

// Lecture au build (SSG) : pas de `fs` à l'exécution sur Cloudflare Workers.
const dir = path.join(process.cwd(), "content/projects");

export function getProject(slug: string): Project {
  const raw = fs.readFileSync(path.join(dir, `${slug}.md`), "utf8");
  const { data, content } = matter(raw);
  const project = data as Omit<Project, "content">;
  return {
    ...project,
    // L'ordre des captures suit leur numéro de fichier (01-, 02-…).
    screenshots: [...(project.screenshots ?? [])].sort((a, b) =>
      a.src.localeCompare(b.src),
    ),
    content,
  };
}

export function getSlugs(): string[] {
  const onDisk = new Set(
    fs
      .readdirSync(dir)
      .filter((f) => f.endsWith(".md"))
      .map((f) => f.replace(/\.md$/, "")),
  );
  const ordered = projectOrder.filter((s) => onDisk.has(s));
  const rest = [...onDisk].filter((s) => !projectOrder.includes(s)).sort();
  return [...ordered, ...rest];
}

export function getProjects(): Project[] {
  return getSlugs().map(getProject);
}

/** Année de début, extraite de `period` (ex. « Février 2025 → aujourd'hui »). */
export function startYear(period: string): string {
  return period.match(/\d{4}/)?.[0] ?? "";
}

export function toCardData(p: Project): ProjectCardData {
  const meta = cardMeta[p.slug];
  const cover = p.cover ?? p.screenshots[0]?.src;
  return {
    slug: p.slug,
    title: p.title,
    tagline: p.tagline,
    year: startYear(p.period),
    status: meta?.status ?? p.status.split(/[,(]/)[0].trim(),
    tags: meta?.tags ?? p.tags.slice(0, 3),
    cover: cover ? `/${cover}` : null,
    coverAlt: `Capture de ${p.title}`,
  };
}

/** Sections du corps Markdown (« ## Titre »), sans les notes « À compléter ». */
export function splitSections(content: string) {
  const cleaned = content
    .split("\n")
    .filter((l) => !/^>\s*À compléter/i.test(l.trim()))
    .join("\n");
  return cleaned
    .split(/^## /m)
    .slice(1)
    .map((block) => {
      const [title, ...rest] = block.split("\n");
      return { title: title.trim(), body: rest.join("\n").trim() };
    })
    .filter((s) => s.body);
}
