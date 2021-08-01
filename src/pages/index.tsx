import React from 'react';
import { graphql } from 'gatsby';

import { FeaturedProjects } from '../containers/FeaturedProjects';
import { LatestPosts } from '../containers/LatestPosts';

import { Seo } from '../components/Seo';
import { Layout } from '../components/shared/Layout';
import { HomeHero } from '../components/HomeHero';

import { projects } from '../data/projects';

interface HomeProps {
  location: any;
  data: any;
}

export default function Home({ location, data }: HomeProps) {
  const pathname = location?.pathname || '/';
  const allMdx = data?.allMdx;
  const posts = allMdx?.edges;

  return (
    <Layout currentPage={pathname}>
      <Seo title="Home" />
      <HomeHero />
      <FeaturedProjects projects={projects} />
      <LatestPosts posts={posts} />
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
