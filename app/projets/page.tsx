import type { Metadata } from "next";
import { ProjectsExplorer } from "@/components/ProjectsExplorer";
import { getProjects, toCardData } from "@/lib/projects";
import { filterLabels } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projets",
  description: "Projets professionnels et missions, du SaaS au mobile.",
  alternates: { canonical: "/projets" },
};

export default function ProjectsPage() {
  const projects = getProjects().map(toCardData);
  return (
    <div id="top">
      <ProjectsExplorer projects={projects} filters={filterLabels} />
    </div>
  );
}
