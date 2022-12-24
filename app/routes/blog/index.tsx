import { type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import styled from 'styled-components';

import { SEO } from '~/utils/seo';
import { MEDIA_QUERIES } from '~/utils/constants';

import { posts } from '~/data/posts';

import { Layout } from '~/containers/Layout';

import { PostCard } from '~/components/PostCard';

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-top: 0;
  margin-bottom: 4rem;

  ${MEDIA_QUERIES.landscape} {
    margin-top: 2rem;
  }
`;

export const meta: MetaFunction = () => {
  return SEO({
    title: 'Blog',
    description:
      "I'm a Software Engineer building digital products, working with web technologies like HTML, CSS, Javascript, React, GraphQL, NextJS, Remix.",
  });
};

export const loader = async () => {
  return await posts();
};

export default function Blog() {
  const data = useLoaderData();

  return (
    <Layout>
      <Wrapper>
        {data.map((post, index) => {
          return <PostCard key={post.id} {...post} isCover={index === 0} />;
        })}
      </Wrapper>
    </Layout>
  );
}
