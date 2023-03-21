import styled from "styled-components";

import { SEO } from "@/utils/seo";
import { MEDIA_QUERIES } from "@/utils/constants";

import { posts } from "@/data/posts";

import { Layout } from "@/containers/Layout";

import { PostCard } from "@/components/PostCard";

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-top: 0;
  margin-bottom: 4rem;

  ${MEDIA_QUERIES.landscape} {
    margin-top: 2rem;
  }
`;

interface BlogProps {
  data: any;
}

const metatags = SEO({
  title: "Blog",
  description:
    "I'm a Frontend Engineer building digital products, working with web technologies like HTML, CSS, Javascript, React, GraphQL, NextJS, Remix.",
});

export async function getStaticProps() {
  const data = await posts();

  return {
    props: {
      data,
    },
  };
}

export default function Blog({ data }: BlogProps) {
  return (
    <Layout metatags={metatags}>
      <Wrapper>
        {data.map((post, index) => {
          return <PostCard key={post.id} {...post} isCover={index === 0} />;
        })}
      </Wrapper>
    </Layout>
  );
}
