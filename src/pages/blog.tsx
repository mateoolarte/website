import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";

import { MEDIA_QUERIES } from "../constants";

import SEO from "../components/Seo";
import Layout from "../shared/Layout";
import Post from "../components/Post";

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-top: 0;
  margin-bottom: 4rem;

  ${MEDIA_QUERIES.landscape} {
    margin-top: 2rem;
  }
`;

export default function Blog({ location, data }) {
  const pathname = location?.pathname || "/";
  const allMdx = data?.allMdx;
  const posts = allMdx?.edges;

  return (
    <Layout currentPage={pathname}>
      <SEO title="Blog" lang="es" />

      <Wrapper>
        {posts.map((post, index) => {
          return (
            <Post
              key={post.node.frontmatter.id}
              {...post}
              isCover={index === 0}
            />
          );
        })}
      </Wrapper>
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt(pruneLength: 133)
          frontmatter {
            id
            path
            date(formatString: "MMMM DD, YYYY")
            title
            thumbnail
            categories
          }
        }
      }
    }
  }
`;
