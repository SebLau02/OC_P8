import Tp from "@/public/tp.jpg";
import Ocr from "@/public/ocr.png";
import Rentco from "@/public/rentco.svg";
import TpIco from "@/public/tp_ico.png";
import RentcoIco from "@/public/rentco_ico.png";
import Mvg from "@/public/mvg.png";
import Kasa from "@/public/kasa.png";
import React from "@/public/react.svg";
import Typescript from "@/public/ts.svg";
import Ror from "@/public/rails.svg";
import Pg from "@/public/postgresql.svg";
import Exp from "@/public/exp.svg";
import Mongo from "@/public/mongodb.svg";
import WildFox from "@/public/web-app-manifest-192x192.png";
import {
  GithubIcon,
  InstaIcon,
  LinkedinIcon,
  MaltIcon,
  ContactIcon,
} from "../_components/icons";

export const socials = [
  {
    url: "https://github.com/SebLau02",
    label: "GitHub",
    icon: <GithubIcon />,
  },
  {
    url: "https://www.malt.fr/profile/sebastienlau",
    label: "Malt",
    icon: <MaltIcon />,
  },
  {
    url: "https://www.instagram.com/lausebastien/",
    label: "Instagram",
    icon: <InstaIcon />,
  },
  {
    url: "https://www.linkedin.com/in/sebastien-lau-884828228/",
    label: "LinkedIn",
    icon: <LinkedinIcon />,
  },
  { url: "#contact", label: "Contact me", icon: <ContactIcon /> },
];

export const enterprises = [
  {
    image: Tp,
    name: "Talents et Paillettes",
    website: "https://talentsetpaillettes.com/",
  },
  {
    image: Ocr,
    name: "Ouest concept réseaux",
    website: "https://ouest-concept-reseaux.fr/",
  },
  {
    image: Rentco,
    name: "The Rent Company",
    website: "https://www.derentcompany.fr/",
  },
];
export const projects = [
  {
    type: "Pro",
    projects: [
      {
        name: "talentsetpaillettes.app",
        enterprise: "Talents et Paillettes",
        description: [
          {
            key: "Service:",
            value: "Mise en relation entre chercheurs d'emploi et entreprises.",
          },
          {
            key: "Contribution:",
            value: "Développement FrontEnd / Backend et maintenance",
          },
        ],
        stack: ["React.js ", " Material UI ", "Ruby on Rails ", "PostgreSQL"],
        link: "https://talentsetpaillettes.app/",
        icon: TpIco,
      },
      {
        name: "rentco.app",
        enterprise: "The Rent Company",
        description: [
          {
            key: "Service:",
            value: "Outils de gestion de chantier immobilier.",
          },
          {
            key: "Contribution:",
            value: "Maintenance et développement de nouveaux modules",
          },
        ],
        stack: ["Ruby on Rails", "PostgreSQL", "Bootstrap 5"],
        link: "",
        icon: RentcoIco,
      },
    ],
  },
  {
    type: "Perso",
    projects: [
      {
        name: "rent-a-kasa.vercel.app",
        enterprise: "Formation",
        description: [
          {
            key: "Service:",
            value: "Application de location de logements",
          },
          {
            key: "Contribution:",
            value: "Développement FrontEnd",
          },
        ],
        stack: ["React.js", "Vite"],
        link: "https://rent-a-kasa.vercel.app/",
        icon: Kasa,
      },
      {
        name: "mvgrimoire.vercel.app/",
        enterprise: "Formation",
        description: [
          {
            key: "Service:",
            value: "Application de notation de livre",
          },
          {
            key: "Contribution:",
            value: "Développement Backend",
          },
        ],
        stack: ["Express.js", "MongoDB", "TypeScript", "Cloudinary"],
        link: "https://mvgrimoire.vercel.app/",
        icon: Mvg,
      },
      {
        name: "sebastien-dev-portfolio.vercel.app",
        enterprise: "Personnel",
        description: [
          {
            key: "Service:",
            value: "Mon portfolio personnel",
          },
          {
            key: "Contribution:",
            value: "Développement frontend / backend",
          },
        ],
        stack: ["Next.js", "TypeScript", "Tailwind.css", "shadcn/ui"],
        link: "https://sebastien-dev-portfolio.vercel.app/",
        icon: WildFox,
      },
    ],
  },
];
export const stacks = [
  { stack: React, label: "React" },
  { stack: Typescript, label: "Typescript" },
  { stack: Ror, label: "Rails" },
  { stack: Pg, label: "PostgreSQL" },
  { stack: Exp, label: "Express" },
  { stack: Mongo, label: "MongoDb" },
];
