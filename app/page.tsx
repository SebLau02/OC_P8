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
import Profile from "@/public/assets/profile.png";
import { Parcours } from "./_components/parcours";
import { StyledTitle } from "./_components/styledTitle";
import { Backgrounds } from "./_components/backgrounds";
import { enterprises, projects, socials, stacks } from "./config/data";

export default function Home() {
  return (
    <main>
      <Header />
      <main className="p-2 overflow-x-hidden">
        <Backgrounds />
        <Section>
          <Card className="flex flex-col border-custom p-3 animate-fadeIn gap-3 mt-6 opacity-0">
            <div className="flex gap-3">
              <div className="h-20 rounded-full w-20 overflow-hidden">
                <Image
                  src={Profile}
                  alt="sébastien lau, dévelopeur react"
                  className="h-full w-full block object-cover"
                />
              </div>
              <div>
                <h1>Sébastien LAU</h1>
                <h3>Développeur web</h3>
              </div>
            </div>
            <p>Je crée des applications web avec React et Ruby on rails !</p>
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
          </Card>
        </Section>
        <StyledTitle label="collaborations" orientation="positive" id="works" />
        <Section className="px-0">
          <div className="flex justify-center gap-3 items-center md:gap-16">
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
                  id="pro-project"
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
                                  className="flex h-fit text-sm underline"
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
                                    className="inline ml-1 self-start size-3"
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
                                <h3 className="cursor-text mb-2 select-text">
                                  {project.name}
                                </h3>
                                <Badge
                                  variant="outline"
                                  className="border-custom font-caption"
                                >
                                  {project.enterprise}
                                </Badge>
                              </div>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="pl-3">
                            <table>
                              {project.description.map((description, i) => (
                                <p key={i} className="my-1">
                                  <span className="underline">
                                    {description.key}
                                  </span>{" "}
                                  {description.value}
                                </p>
                              ))}
                              <p className="my-1 underline">Stack:</p>
                              {project.stack.map((item, i) => (
                                <Badge key={i} className="m-1">
                                  {item}
                                </Badge>
                              ))}
                            </table>

                            {project.link !== "" && (
                              <p className="text-end mt-2 pr-3">
                                Visite le{" "}
                                <a
                                  href={project.link}
                                  target="_blank"
                                  className="underline"
                                >
                                  ICI
                                </a>
                              </p>
                            )}
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
        <StyledTitle label="à propos" orientation="negative" id="about" />
        <Section className="max-w-3xl">
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
        <StyledTitle label="contact" orientation="negative" id="contact" />
        <Section>
          <Contact />
        </Section>
      </main>
    </main>
  );
}
