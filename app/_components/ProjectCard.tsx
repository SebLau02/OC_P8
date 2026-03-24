import { badgeVariants } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { ProjectBase } from "../config/types";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";

function ProjectCard({ project }: { project: ProjectBase }) {
  return (
    <Card>
      <div className="bg-muted p-4 rounded-t-xl flex flex-row items-center gap-4 justify-between mb-4">
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

      <Dialog>
        <DialogTrigger className="mx-auto block cursor-pointer">
          <Image
            src={`/${project.cover.replace("public/", "")}`}
            alt={project.name}
            width={600}
            height={300}
            className="mx-auto h-[300px] object-contain"
          />
        </DialogTrigger>
        <DialogContent className="max-w-[1440px] ">
          <DialogHeader>
            <DialogDescription>
              <Image
                src={`/${project.cover.replace("public/", "")}`}
                alt={project.name}
                width={1400}
                height={800}
                className="mx-auto h-[800px] object-contain"
              />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <Separator className="mt-4 h-[2px]" />

      <div className="p-4 rounded-b-lg">
        <h4>Technologies:</h4>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className={badgeVariants({
                variant: "outline",
                className:
                  "font-caption rounded-full border-custom md:text-sm bg-muted",
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
  );
}

export default ProjectCard;
