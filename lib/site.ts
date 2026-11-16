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
    "Ce qui me motive, c'est le paradoxe des projets : uniques mais similaires. Chaque application a ses spécificités, rappelant des expériences passées tout en offrant de nouveaux défis. Chaque fonction peut toujours être perfectionnée.",
};

export const featuredSlugs = ["customx", "lpi-v3", "trustify", "rentco"];

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
