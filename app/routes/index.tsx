import { type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { SEO } from '~/utils/seo';

import { projects } from '~/data/projects';
import { latestPosts } from '~/data/latestPosts';

import { HomeHero } from '~/components/HomeHero';

import { Layout } from '~/containers/Layout';
import { FeaturedProjects } from '~/containers/FeaturedProjects';
import { LatestPosts } from '~/containers/LatestPosts';

export const meta: MetaFunction = () => {
  return SEO({
    title: 'Home',
    description:
      "I'm a Software Engineer building digital products, working with web technologies like HTML, CSS, Javascript, React, GraphQL, NextJS, Remix.",
  });
};

export const loader = async () => {
  const posts = await latestPosts();

  return {
    projects: projects || [],
    latestPosts: posts || [],
  };
};

export default function Index() {
  const { projects, latestPosts } = useLoaderData();

  return (
    <Layout>
      <HomeHero />
      <FeaturedProjects projects={projects} />
      <LatestPosts posts={latestPosts} />
    </Layout>
  );
}
