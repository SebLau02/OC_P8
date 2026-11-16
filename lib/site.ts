export type Status = "recherche" | "en-poste";

/**
 * Bascule entre les deux versions du portfolio :
 * - "recherche" : à la recherche d'un poste (dispo à partir de mars 2027)
 * - "en-poste"  : en poste chez 4Digit
 * Se règle via NEXT_PUBLIC_STATUS, ou ici par défaut.
 */
export const status: Status =
  process.env.NEXT_PUBLIC_STATUS === "en-poste" ? "en-poste" : "recherche";

export const site = {
  name: "Sébastien Lau",
  role: "Développeur Full Stack",
  stackLine: "React / Next.js / Ruby on Rails",
  email: "sebastien.lau2021@gmail.com",
  github: "https://github.com/SebLau02",
  githubLabel: "github.com/SebLau02",
  linkedin: null as string | null, // à renseigner : "https://www.linkedin.com/in/..."
  cv: "/cv-sebastien-lau.pdf",
  availability: "Mars 2027",
  employer: "4Digit",
  intro:
    "D'un problème à l'outil qui y répond : voilà ce qui me passionne.",
};

/** Ordre d'affichage (index, navigation précédent / suivant). */
export const projectOrder = [
  "customx",
  "lpi-v3",
  "trustify",
  "rentco",
  "cgi",
  "lfsf",
  "fairplays",
];

/** Projets mis en avant sur l'accueil. */
export const featuredSlugs = projectOrder.slice(0, 4);

/** Libellés courts des cartes (statut + 3 tags, utilisés aussi par les filtres). */
export const cardMeta: Record<string, { status: string; tags: string[] }> = {
  customx: { status: "En production", tags: ["SaaS", "Next.js", "Rails"] },
  "lpi-v3": { status: "En production", tags: ["E-commerce", "SEO", "Next.js"] },
  trustify: {
    status: "En production",
    tags: ["Immobilier", "Marque blanche", "Next.js"],
  },
  rentco: { status: "En production", tags: ["ERP", "Immobilier", "Rails"] },
  cgi: { status: "Livré (v1)", tags: ["Immobilier", "Next.js", "Stripe"] },
  lfsf: {
    status: "En développement",
    tags: ["Agriculture", "Traçabilité", "Next.js"],
  },
  fairplays: {
    status: "Sur les stores",
    tags: ["Mobile", "Flutter", "Marketplace"],
  },
};

export const filterLabels = [
  "Tous",
  "Next.js",
  "Rails",
  "Flutter",
  "SaaS",
  "E-commerce",
  "Immobilier",
  "Mobile",
];

export const experience = [
  {
    date: "02/2024 — aujourd'hui",
    title: "Développeur Full Stack (React / Next.js / Ruby)",
    org: "4Digit — Plerin",
    items: [
      "Développement de fonctionnalités back-end et front-end (Ruby, PostgreSQL, React, Next.js)",
      "Conception d'API et intégration de services tiers (webhooks, API REST)",
      "Recueil des besoins, rédaction de user stories et de parcours utilisateurs",
      "Mise en place de pipelines CI/CD et automatisation des déploiements",
      "Orchestration d'outils d'IA générative (prototypage, code, workflows CI/CD)",
    ],
    tags: ["Ruby", "PostgreSQL", "React", "Next.js"],
    current: true,
  },
];

export const formation = [
  {
    date: "En cours",
    title: "Développeur d'application JavaScript React",
    org: "OpenClassrooms — Diplôme niveau 6 (bac +3/4)",
    current: true,
  },
  {
    date: "À venir",
    title: "Développeur Web",
    org: "OpenClassrooms — Niveau 5 (bac +2)",
    current: false,
  },
  {
    date: "2021",
    title: "STAPS",
    org: "Université d'Artois — Bac +3/4",
    current: false,
  },
];

export const stack = [
  {
    name: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Bootstrap",
      "MUI",
    ],
  },
  { name: "Backend", items: ["Ruby on Rails", "Node.js / Express"] },
  { name: "Bases de données", items: ["PostgreSQL", "MongoDB"] },
  { name: "Mobile", items: ["Flutter / Dart", "React Native"] },
  {
    name: "Infra / outils",
    items: ["Cloudflare", "Docker", "AWS S3", "Heroku", "Git / GitHub", "CI/CD"],
  },
];
