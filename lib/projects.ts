import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type Screenshot = {
  src: string;
  alt: string;
  caption?: string;
  kind?: string;
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
  screenshots: Screenshot[];
  content: string;
};

// Lecture au build (SSG) : pas de `fs` à l'exécution sur Cloudflare Workers.
const dir = path.join(process.cwd(), "content/projects");

export function getSlugs(): string[] {
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getProject(slug: string): Project {
  const raw = fs.readFileSync(path.join(dir, `${slug}.md`), "utf8");
  const { data, content } = matter(raw);
  return { ...(data as Omit<Project, "content">), content };
}

export function getProjects(): Project[] {
  return getSlugs().map(getProject);
}

/** Année de début, extraite de `period` (ex. « Février 2025 → aujourd'hui »). */
export function startYear(period: string): string {
  return period.match(/\d{4}/)?.[0] ?? "";
}

/** Statut court pour les cartes (ex. « En production »). */
export function shortStatus(status: string): string {
  return status.split(/[,(]/)[0].trim();
}
