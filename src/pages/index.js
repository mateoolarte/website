import React from "react";
import styled from "styled-components";

import SEO from "../components/Seo";
import Layout from "../components/Layout";
import HomeHero from "../components/HomeHero";
import ProjectCard from "../components/ProjectCard";

import projects from "../data/projects";

const Heading = styled.h2`
  margin-top: 0;
  font-size: 2.2rem;
`;

const ProjectsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default function Home({ location }) {
  const pathname = (location && location.pathname) || "/";

  return (
    <Layout currentPage={pathname}>
      <SEO title="Home" />
      <HomeHero />

      <Heading>Projects</Heading>

      <ProjectsWrapper>
        {projects.map(project => {
          return <ProjectCard key={project.id} {...project} />;
        })}
      </ProjectsWrapper>
    </Layout>
  );
}
