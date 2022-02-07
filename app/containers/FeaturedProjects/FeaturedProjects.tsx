import { ProjectCard } from '~/components/ProjectCard';

import { Heading, ProjectsWrapper } from './styles';

type Project = {
  id: number;
  name: string;
  icon: string;
  bgImage: string;
  date: string;
  role: string;
  description: string;
  link: string;
};

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
