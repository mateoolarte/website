import { SEO } from "@/utils/seo";

import { projects } from "@/data/projects";
import { latestPosts } from "@/data/latestPosts";

import { HomeHero } from "@/components/HomeHero";

import { Layout } from "@/containers/Layout";
import { FeaturedProjects } from "@/containers/FeaturedProjects";
import { LatestPosts } from "@/containers/LatestPosts";

interface HomeProps {
  projects: any;
  latestPosts: any;
}

const metatags = SEO({
  title: "Home",
  description:
    "I'm a Frontend Engineer building digital products, working with web technologies like HTML, CSS, Javascript, React, GraphQL, NextJS, Remix.",
});

export async function getStaticProps() {
  const posts = await latestPosts();

  return {
    props: {
      projects,
      latestPosts: posts,
    },
  };
}

export default function Home({ projects, latestPosts }: HomeProps) {
  return (
    <Layout metatags={metatags}>
      <HomeHero />
      <FeaturedProjects projects={projects} />
      <LatestPosts posts={latestPosts} />
    </Layout>
  );
}
