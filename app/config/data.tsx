import { Github, LucideProps, Mail } from "lucide-react";
import { ArticlesSlugs } from "./types";

export const socials = (props?: LucideProps) => {
  return [
    {
      url: "https://github.com/SebLau02",
      label: "GitHub",
      icon: <Github {...props} />,
    },

    {
      url: "mailto:sebastien.lau2021@gmail.com",
      label: "Mail",
      icon: <Mail {...props} />,
    },
  ];
};
export const articles: ArticlesSlugs[] = [
  {
    slug: "avantages-site-web",
    title: "Pourquoi avoir un site web ?",
    cover:
      "https://images.unsplash.com/photo-1639795199096-8b403789949f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    slug: "no-code-vs-dev",
    title: "Développement sur mesure vs No-Code",
    cover:
      "https://images.unsplash.com/photo-1626278664285-f796b9ee7806?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    slug: "importance-maintenance",
    title: "L'Importance de la Maintenance de Votre Site Web",
    cover:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    slug: "benefices-ecommerce",
    title: "Les Avantages d'un Site E-commerce",
    cover:
      "https://images.unsplash.com/photo-1674027392857-9aed6e8ecab9?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    slug: "importance-design-responsive",
    title: "L'Importance du Design Responsive",
    cover:
      "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const educations = [
  {
    school: "Lycée Félix Ébouée",
    location: "France, Guyane Française",
    year: "2018",
    name: "Baccalauréat Scientifique",
    description:
      "Baccalauréat scientifique avec mention assez bien, spécialité Informatique et Sciences du Numérique.",
  },
  {
    school: "Université d'Artois",
    location: "France, Hauts-de-France",
    year: "2018 - 2021",
    name: "Licence STAPS",
    description:
      "Licence en Sciences et Techniques des Activités Physiques et Sportives (STAPS), spécialité Activités Physiques Adaptées et Santé (APAS).",
  },
  {
    school: "Openclassrooms",
    location: "France, Bretagne",
    year: "2023 - 2024",
    name: "Développeur Web",
    description:
      "Formation Développeur Web chez Openclassrooms en alternance. Acquisition de compétences en développement web fullstack, avec une spécialisation en React.",
  },
];
export const experiences = [
  {
    company: "4Digit",
    location: "France, Bretagne",
    year: "2021 - 2027",
    name: "Développeur Web Fullstack",
    description:
      "Développeur web fullstack chez 4Digit. L'entreprise est un spécialiste dans le développement des solutions ERP. J'ai travaillé sur plusieurs projets ERP, principalement en React et Ruby on Rails.",
  },
];
