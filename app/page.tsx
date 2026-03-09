/* eslint-disable @next/next/no-img-element */
import { Contact } from "./_components/contact";
import Section from "./_components/section";
import { badgeVariants } from "@/components/ui/badge";

import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Parcours } from "./_components/parcours";
import { StyledTitle } from "./_components/styledTitle";
import { socials, stacks } from "./config/data";
import PROJECTS from "@/public/data/projets.json";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { SquareArrowOutUpRight } from "lucide-react";
import ReactMarkdown from "react-markdown";

export default function Home() {
  return (
    <main>
      <main className="p-2 overflow-x-hidden">
        <Section>
          <div className="flex flex-col border-custom p-3 animate-fadeIn gap-3 mt-6 opacity-0">
            <h2>Hello, je suis Sébastien, développeur fullstack.</h2>
            <p>
              Ma spécialité c'est React et Rails. <br /> J'ai commencé mon
              parcours par un{" "}
              <Link
                target="_blank"
                href="https://www.enseignementsup-recherche.gouv.fr/fr/la-licence-generale-staps-un-diplome-professionnalisant-47601"
                className="underline"
              >
                STAPS
              </Link>{" "}
              puis j'ai enchainé 3 ans de formations web avec{" "}
              <Link
                href={"https://openclassrooms.com/fr/"}
                target="_blank"
                className="underline"
              >
                Openclassrooms
              </Link>{" "}
              en alternance.
            </p>
            <p>
              Durant ces 3 années de formations, j'ai eu l'opportunité de
              travailler principalement sur des projets du type{" "}
              <Link
                href={"https://www.oracle.com/fr/erp/what-is-erp/"}
                target="_blank"
                className="underline"
              >
                ERP
              </Link>
              . Ces expériences m'ont permis d'acquérir une solide expertise sur
              ce type de projets, ainsi que de collaborer avec des API externes
              telles que Stripe ou Monday.
            </p>
            <div className="flex flex-wrap gap-2">
              {socials.map((social, i) => (
                <>
                  <Link
                    target={social.url === "#contact" ? "" : "_blank"}
                    href={social.url}
                    key={i + social.label}
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
          <div className="flex flex-wrap justify-evenly gap-2 items-center md:gap-4">
            {stacks.map((stack, i) => (
              <div key={i} className="w-1/6 max-w-20 min-w-10">
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
        <StyledTitle label="Contact" orientation="negative" id="contact" />
        <Section>
          <Contact />
        </Section>
      </main>
    </main>
  );
}
