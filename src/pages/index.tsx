import React from "react";
import { object } from "prop-types";
import styled from "styled-components";
import { Link, graphql } from "gatsby";

import SEO from "../components/Seo";
import Layout from "../components/shared/Layout";
import HomeHero from "../components/HomeHero";
import ProjectCard from "../components/ProjectCard";
import HomePost from "../components/HomePost";

import projects from "../data/projects";

import { linksColor, backgroundColor } from "../themes";

const Heading = styled.h2`
  margin-top: 0;
  font-size: 2.2rem;
`;

const ProjectsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;

const PostsWrapper = styled.div`
  margin-bottom: 5rem;
`;

const Btn = styled(Link)`
  display: inline-block;
  padding: 0.8rem 2rem;
  border: 2px solid ${linksColor};
  border-radius: 0.6rem;
  background-color: ${linksColor};
  color: ${backgroundColor};
  text-decoration: none;

  &:hover {
    background: transparent;
    color: ${linksColor};
  }
`;

export default function Home({ location, data }) {
  const pathname = location?.pathname || "/";
  const allMdx = data?.allMdx;
  const posts = allMdx?.edges;

  return (
    <Layout currentPage={pathname}>
      <SEO title="Home" />
      <HomeHero />

      <Heading id="projects">Projects</Heading>

      <ProjectsWrapper>
        {projects.map(project => {
          return <ProjectCard key={project.id} {...project} />;
        })}
      </ProjectsWrapper>

      <Heading>Latest posts</Heading>

      <PostsWrapper>
        {posts.map(post => {
          const node = post?.node;
          const frontmatter = node?.frontmatter;
          const id = frontmatter?.id || "";
          const path = frontmatter?.path || "";
          const title = frontmatter?.title || "";

          return <HomePost key={id} link={`/blog/${path}`} title={title} />;
        })}

        <Btn to="/blog">See more</Btn>
      </PostsWrapper>
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 2) {
      edges {
        node {
          frontmatter {
            id
            path
            title
          }
        }
      }
    }
  }
`;

Home.propTypes = {
  location: object,
  data: object,
};
