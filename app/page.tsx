/* eslint-disable @next/next/no-img-element */
import { Header } from "./_components/header";
import { ProjectIconButton } from "./_components/projectIconButton";
import Section from "./_components/section";
import { Badge, badgeVariants } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Link from "next/link";
import Image from "next/image";
import Tp from "@/public/tp.jpg";
import Ocr from "@/public/ocr.png";
import Rentco from "@/public/rentco.png";
import TpIco from "@/public/tp_ico.png";
import RentcoIco from "@/public/rentco_ico.png";

const socials = [
  { url: "https://github.com/SebLau02", label: "GitHub" },
  { url: "https://github.com/SebLau02", label: "Malt" },
  { url: "https://github.com/SebLau02", label: "Instagram" },
  {
    url: "https://www.linkedin.com/in/sebastien-lau-884828228/",
    label: "LinkedIn",
  },
  { url: "#contact", label: "Contact me" },
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
        name: "Talents et Paillettes",
        enterprise: "Talents et Paillettes",
        description: [
          {
            key: "Service:",
            value: "Mise en relation entre chercheurs d'emploi et entreprises.",
          },
          {
            key: "Contribution:",
            value:
              "Contribution: Développement FrontEnd / Backend et maintenance",
          },
        ],
        stack: "React.js / Material UI / Ruby on Rails / PostgreSQL",
        link: "https://talentsetpaillettes.app/",
        icon: TpIco,
      },
      {
        name: "Rentco",
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
        stack: "Ruby on Rails / PostgreSQL",
        link: "",
        icon: RentcoIco,
      },
    ],
  },
  {
    type: "Perso",
    projects: [
      {
        name: "Kasa",
        enterprise: "Formation",
        description: [
          {
            key: "Service:",
            value: "Application de location de logements",
          },
          {
            key: "Contribution:",
            value: "Contribution: Développement FrontEnd",
          },
        ],
        stack: "React.js",
        link: "",
        icon: TpIco,
      },
      {
        name: "Mon vieux grimoire",
        enterprise: "Formation",
        description: [
          {
            key: "Service:",
            value: "Application de notation de livre",
          },
          {
            key: "Contribution:",
            value: "Contribution: Développement Backend",
          },
        ],
        stack: "Express.js / mongodb",
        link: "",
        icon: TpIco,
      },
    ],
  },
];

export default function Home() {
  return (
    <main>
      <Header />
      <main className="p-2">
        <Section>
          <Card className="mt-6 p-3 border-custom flex gap-3 flex-col">
            <div className="flex gap-3">
              <div className="w-20 h-20 overflow-hidden rounded-full">
                <img
                  src="https://www.macapflag.com/blog/wp-content/uploads/2021/05/le-metier-de-developpeur-768x530.jpg"
                  alt="sébastien lau, dévelopeur react"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-lg">Sébastien LAU</h1>
                <h2 className="font-caption">Développeur freelance</h2>
              </div>
            </div>
            <p>Je crée des applications web avec React et Ruby on rails !</p>
            <div className="flex gap-2 flex-wrap">
              {socials.map((social, i) => (
                <Link
                  target="_blank"
                  href={social.url}
                  key={i}
                  className={badgeVariants({
                    variant: "outline",
                    className: "font-caption rounded-full border-custom",
                  })}
                >
                  {social.label}
                </Link>
              ))}
            </div>
          </Card>
        </Section>
        <h2 className="text-lg m-auto text-center my-6">contributions</h2>
        <Section className="px-0">
          <div className="flex justify-center items-center gap-3">
            {enterprises.map((enterprise, i) => (
              <Link
                target="_blank"
                href={enterprise.website}
                key={i}
                className="block w-20"
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
            <h2 className="text-center mb-2 font-caption">
              quelques réalisations
            </h2>
            <div>
              {projects.map((category, i) => (
                <Card key={i} className="mb-8 p-3 border-custom">
                  <CardHeader className="p-0 block">
                    <Badge variant="secondary">{category.type}</Badge>
                  </CardHeader>
                  <section>
                    {category.projects.map((project, i) => (
                      <Accordion key={i} type="single" collapsible>
                        <AccordionItem value={`item-${i + 1}`}>
                          <AccordionTrigger className="pb-2">
                            <div className="flex gap-2">
                              <ProjectIconButton
                                url={project.icon}
                                label={project.name}
                              />
                              <h3 className="text-sm underline">
                                {project.name}
                              </h3>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="pl-3">
                            <p className="text-sm">
                              <span className="underline decoration-dotted">
                                Entreprise:
                              </span>{" "}
                              {project.enterprise}
                            </p>
                            {project.description.map((description, i) => (
                              <p key={i} className="text-sm my-1">
                                <span className="underline decoration-dotted">
                                  {description.key}
                                </span>{" "}
                                {description.value}
                              </p>
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
      </main>
    </main>
  );
}
