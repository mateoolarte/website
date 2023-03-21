import { ProjectCard } from "@/components/ProjectCard";
import type { Project } from "@/types/projects";

import { Heading, ProjectsWrapper } from "./styles";

interface FeaturedProjectsProps {
  projects: Project[];
}

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  return (
    <>
      <Heading id="projects">Featured Projects</Heading>

      <ProjectsWrapper>
        {projects.map((project) => {
          return <ProjectCard key={project.id} {...project} />;
        })}
      </ProjectsWrapper>
    </>
  );
}
