import Section from "./_components/section";
import { Badge, badgeVariants } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { StyledTitle } from "./_components/styledTitle";
import PROJECTS from "@/public/data/projets.json";
import { Separator } from "@/components/ui/separator";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDown, SquareArrowOutUpRight } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { educations, experiences, socials } from "./config/data";
import { Fragment } from "react";

export default function Home() {
  return (
    <main className="p-2 overflow-x-hidden">
      <Section className="min-h-screen">
        <div className="flex flex-col border-custom p-8 animate-fadeIn gap-6 mt-6 opacity-0">
          {/* Badge de statut ou localisation */}
          <div className="flex items-center gap-2 text-sm font-mono text-gray-500">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Disponible pour de nouveaux défis — Basé en France
          </div>

          <h1 className="text-6xl font-bold tracking-tight leading-tight">
            Sébastien Lau <br />
            <span className="text-custom-accent text-lg">
              Développeur Fullstack.
            </span>
          </h1>

          <div className="max-w-2xl space-y-6 text-lg leading-relaxed">
            <p>
              Spécialisé dans l’écosystème{" "}
              <strong>React & Ruby on Rails</strong>, j’accompagne les
              entreprises dans la création de solutions digitales à forte valeur
              métier.
            </p>

            <p>
              Fort de <strong>3 ans d’expérience</strong> dans la conception
              d'applications
              <Link
                href="https://www.oracle.com/fr/erp/what-is-erp/"
                target="_blank"
                className="underline hover:text-custom-accent transition-colors ml-1"
              >
                SaaS & ERP
              </Link>
              , je maîtrise l’intégralité du cycle de développement : de la
              modélisation de bases de données relationnelles complexes jusqu'au
              déploiement d'interfaces fluides et performantes.
            </p>

            <p>
              Mon approche : transformer des processus métiers complexes
              (gestion de stocks, suivi de chantiers, logistique) en outils
              numériques intuitifs, scalables et orientés résultats.
            </p>
          </div>

          {/* Section Call to Action / Socials pour remplir le bas du 100vh */}
          <div className="flex gap-4 mt-8 items-center">
            <strong>Consulter mes projets</strong>
            <Link
              href={"#works"}
              className={buttonVariants({
                variant: "outline",
                className: "font-caption rounded-full border-custom md:text-sm",
              })}
            >
              <ArrowDown size={20} />
            </Link>
            ou
            <Link
              target="_blank"
              href={"https://github.com/SebLau02"}
              className={buttonVariants({
                variant: "ghost",
                className:
                  "font-caption rounded-full border-custom md:text-sm w-fit",
              })}
            >
              <Image src={"/github.svg"} alt="GitHub" width={30} height={30} />
            </Link>
          </div>
        </div>
      </Section>
      <StyledTitle label="Contributions" orientation="positive" id="works" />
      <Section className="px-0 max-w-[1440px] grid grid-cols-2 gap-4">
        {PROJECTS.map((project, i) => (
          <Card key={i} className="">
            <div className="p-4 rounded-t-lg bg-foreground text-background flex flex-row items-center gap-4 justify-between mb-4">
              <h3 className="">{project.name}</h3>

              {project.link ? (
                <Button
                  variant="outline"
                  size="icon"
                  aria-label="voir le projet en ligne"
                  asChild
                >
                  <Link href={project.link} target="_blank">
                    <SquareArrowOutUpRight className="text-foreground" />
                  </Link>
                </Button>
              ) : (
                <i className="text-xs">En cours de développement</i>
              )}
            </div>

            <Image
              src={`/${project.cover.replace("public/", "")}`}
              alt={project.name}
              width={600}
              height={300}
              className="mx-auto h-[300px] object-contain"
            />

            <Separator className="mt-4 h-[2px]" />

            <div className="p-4 rounded-b-lg">
              <h4>Technologies:</h4>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className={badgeVariants({
                      variant: "secondary",
                      className:
                        "font-caption rounded-full border-custom md:text-sm",
                    })}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-4 mb-2">
                <ReactMarkdown
                  components={{
                    p: ({ node, ...props }) => (
                      <p className="prose prose-sm max-w-none" {...props} />
                    ),
                  }}
                >
                  {project.description}
                </ReactMarkdown>
              </div>
            </div>
          </Card>
        ))}
      </Section>
      <StyledTitle label="À propos" orientation="negative" id="about" />
      <Section>
        <h3 className="mt-6 mb-4">Scolaire</h3>
        <Card className="flex flex-col gap-6 p-4 rounded-xs">
          {educations.map((education, i) => (
            <Fragment key={i}>
              <div className="w-full grid grid-cols-3 gap-2">
                <div>
                  <h4>{education.school}</h4>
                  <p>{education.location}</p>
                  <Badge variant="default" className="mt-4">
                    {education.year}
                  </Badge>
                </div>
                <div className="col-span-2">
                  <h4>{education.name}</h4>
                  <p>{education.description}</p>
                </div>
              </div>
              {i < educations.length - 1 && <Separator />}
            </Fragment>
          ))}
        </Card>
        <h3 className="mt-6 mb-4">Professionel</h3>
        <Card className="flex flex-col gap-6 p-4 rounded-xs">
          {experiences.map((experience, i) => (
            <Fragment key={i}>
              <div className="w-full grid grid-cols-3 gap-2">
                <div>
                  <h4>{experience.company}</h4>
                  <p>{experience.location}</p>
                  <Badge variant="default" className="mt-4">
                    {experience.year}
                  </Badge>
                </div>
                <div className="col-span-2">
                  <h4>{experience.name}</h4>
                  <p>{experience.description}</p>
                </div>
              </div>
              {i < experiences.length - 1 && <Separator />}
            </Fragment>
          ))}
        </Card>
      </Section>
    </main>
  );
}
