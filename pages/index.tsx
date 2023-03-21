import { metatags } from "@/utils/metatags";

import { projects } from "@/data/projects";
import { latestPosts } from "@/data/latestPosts";

import { HomeHero } from "@/components/HomeHero";

import { Layout } from "@/containers/Layout";
import { FeaturedProjects } from "@/containers/FeaturedProjects";
import { LatestPosts } from "@/containers/LatestPosts";

import type { LatestPost } from "@/containers/LatestPosts";
import type { Project } from "@/types/projects";
interface HomeProps {
  projects: Project[];
  latestPosts: LatestPost[];
}

const meta = metatags({
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
    <Layout metatags={meta}>
      <HomeHero />
      <FeaturedProjects projects={projects} />
      <LatestPosts data={latestPosts} />
    </Layout>
  );
}
