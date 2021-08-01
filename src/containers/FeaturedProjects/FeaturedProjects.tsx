import React from 'react';

import { ProjectCard } from '../../components/ProjectCard';

import { Heading, ProjectsWrapper } from './FeaturedProjects.styles';

interface FeaturedProjectsProps {
  projects: any;
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
