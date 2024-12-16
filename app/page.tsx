/* eslint-disable @next/next/no-img-element */
import { Header } from "./_components/header";
import { Contact } from "./_components/contact";
import { ProjectIconButton } from "./_components/projectIconButton";
import Section from "./_components/section";
import { Badge, badgeVariants } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardHeader } from "@/components/ui/card";

import Link from "next/link";
import Image from "next/image";

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
import { Parcours } from "./_components/parcours";
import {
  GithubIcon,
  InstaIcon,
  LinkedinIcon,
  MaltIcon,
  ContactIcon,
} from "./_components/icons";

const socials = [
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

const enterprises = [
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
const projects = [
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
        stack: ["Ruby on Rails", "PostgreSQL"],
        link: "",
        icon: RentcoIco,
      },
    ],
  },
  {
    type: "Perso",
    projects: [
      {
        name: "kasa.vercel.app",
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
        link: "https://github.com/SebLau02/OC-6_Kasa",
        icon: Kasa,
      },
      {
        name: "mon-vieux-grimoire.vercel.app",
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
        stack: ["Express.js", "mongodb", "TypeScript"],
        link: "https://github.com/SebLau02/OC_7_mon-vieux-grimoire",
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
        stack: ["Next.js", "TypeScript", "Tailwind.css"],
        link: "https://github.com/SebLau02/OC_7_mon-vieux-grimoire",
        icon: WildFox,
      },
    ],
  },
];
const stacks = [
  { stack: React, label: "React" },
  { stack: Typescript, label: "Typescript" },
  { stack: Ror, label: "Rails" },
  { stack: Pg, label: "PostgreSQL" },
  { stack: Exp, label: "Express" },
  { stack: Mongo, label: "MongoDb" },
];

export default function Home() {
  return (
    <main>
      <Header />
      <main className="p-2">
        <Section>
          <Card className="opacity-0 mt-6 p-3 border-custom flex gap-3 flex-col animate-fadeIn">
            <div className="flex gap-3">
              <div className="w-20 h-20 overflow-hidden rounded-full">
                <img
                  src="https://www.macapflag.com/blog/wp-content/uploads/2021/05/le-metier-de-developpeur-768x530.jpg"
                  alt="sébastien lau, dévelopeur react"
                  className="w-full h-full object-cover block"
                />
              </div>
              <div>
                <h1>Sébastien LAU</h1>
                <h3>Développeur freelance</h3>
              </div>
            </div>
            <p>Je crée des applications web avec React et Ruby on rails !</p>
            <div className="flex gap-2 flex-wrap">
              {socials.map((social, i) => (
                <>
                  <Link
                    target="_blank"
                    href={social.url}
                    key={i}
                    className={badgeVariants({
                      variant: "outline",
                      className:
                        "font-caption rounded-full border-custom md:text-sm",
                    })}
                  >
                    {social.label} {social.icon}
                  </Link>
                </>
              ))}
            </div>
          </Card>
        </Section>
        <h2 className="m-auto text-center mt-10 mb-6" id="works">
          collaborations
        </h2>
        <Section className="px-0">
          <div className="flex justify-center items-center gap-3 md:gap-16">
            {enterprises.map((enterprise, i) => (
              <Link
                target="_blank"
                href={enterprise.website}
                key={i}
                className={`block opacity-0 w-20 md:w-28 animate-fadeIn`}
                style={{ animationDelay: `${(i + 3) / 10}s` }}
              >
                <Image
                  src={enterprise.image}
                  alt={enterprise.name}
                  className="w-full object-cover"
                />
              </Link>
            ))}
          </div>
          <section className="mt-6">
            <h3 className="text-center mb-2">quelques contributions</h3>
            <div>
              {projects.map((category, i) => (
                <Card
                  key={i}
                  className={`mb-8 p-3 sm:p-6 border-custom opacity-0 ${
                    i % 2 === 0 ? "animate-slideInReverse" : "animate-slideIn"
                  }`}
                  style={{
                    animationDelay: "1s",
                  }}
                >
                  <CardHeader className="p-0 block">
                    <Badge variant="secondary" className="ml-auto uppercase">
                      {category.type}
                    </Badge>
                  </CardHeader>
                  <section>
                    {category.projects.map((project, i) => (
                      <Accordion key={i} type="single" collapsible>
                        <AccordionItem value={`item-${i + 1}`}>
                          <AccordionTrigger className="pb-2">
                            <div className="flex gap-2">
                              {project.link === "" ? (
                                <ProjectIconButton
                                  url={project.icon}
                                  label={project.name}
                                />
                              ) : (
                                <Link
                                  target="_blank"
                                  href={project.link}
                                  className="text-sm underline h-fit flex"
                                >
                                  <ProjectIconButton
                                    url={project.icon}
                                    label={project.name}
                                  />
                                  <svg
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-3 inline ml-1 self-start"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                                    />
                                  </svg>
                                </Link>
                              )}
                              <div>
                                <h3 className="mb-2">{project.name}</h3>
                                <Badge
                                  variant="outline"
                                  className="font-caption border-custom"
                                >
                                  {project.enterprise}
                                </Badge>
                              </div>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="pl-3">
                            {project.description.map((description, i) => (
                              <p key={i} className="my-1">
                                <span className="underline decoration-dotted">
                                  {description.key}
                                </span>{" "}
                                {description.value}
                              </p>
                            ))}
                            <h4 className="underline decoration-dotted my-1">
                              Stack:
                            </h4>
                            {project.stack.map((item, i) => (
                              <Badge key={i} className="m-1">
                                {item}
                              </Badge>
                            ))}
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    ))}
                  </section>
                </Card>
              ))}
            </div>
          </section>
        </Section>
        <h2 className="m-auto text-center mt-10 mb-6" id="about">
          à propos
        </h2>
        <Section className="max-w-3xl">
          <div className="flex justify-evenly items-center flex-wrap gap-2 md:gap-4">
            {stacks.map((stack, i) => (
              <div key={i} className="max-w-20 min-w-10 w-1/6">
                <Image
                  src={stack.stack}
                  alt={stack.label}
                  className="w-full object-cover"
                />
              </div>
            ))}
          </div>
          <Parcours />
        </Section>
        <h2 className="m-auto text-center mt-10 mb-6" id="contact">
          contact
        </h2>
        <Section>
          <Contact />
        </Section>
      </main>
    </main>
  );
}
