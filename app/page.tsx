import Section from "./_components/section";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { StyledTitle } from "./_components/styledTitle";
import PROJECTS from "@/public/data/projets.json";
import { Separator } from "@/components/ui/separator";
import { buttonVariants } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { educations, experiences } from "./config/data";
import { Fragment } from "react";
import ProjectCard from "./_components/ProjectCard";
import { ProjectBase } from "./config/types";

export default function Home() {
  return (
    <main className="p-2 overflow-x-hidden">
      <Section className="min-h-screen">
        <div className="flex flex-col border-custom p-8 animate-fadeIn gap-6 mt-6 opacity-0">
          {/* Badge de statut ou localisation */}
          <div
            className="flex items-center gap-2 text-sm font-mono text-gray-500"
            id="about"
          >
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
          <div className="flex flex-wrap justify-center gap-4 mt-8 items-center">
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
      <Section className="px-0 max-w-[1440px] grid xs:grid-cols-2 md:grid-cols-2 gap-4">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={i} project={project as ProjectBase} />
        ))}
      </Section>
      <StyledTitle label="Curriculum" orientation="negative" id="curriculum" />
      <Section>
        <h3 className="mt-6 mb-4">Scolaire</h3>
        <Card className="flex flex-col gap-6 p-4 rounded-xs">
          {educations.map((education, i) => (
            <Fragment key={i}>
              <div className="w-full grid xs:grid-cols-1 sm:grid-cols-3 gap-2">
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
              <div className="w-full grid xs:grid-cols-1 sm:grid-cols-3 gap-2">
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
