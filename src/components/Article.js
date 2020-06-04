import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import { MEDIA_QUERIES } from "../constants";

import SEO from "./Seo";
import Layout from "./Layout";

const Wrapper = styled.article`
  width: 90%;
  max-width: 740px;
  margin: 3rem auto 8rem;
`;

const Hero = styled.div`
  text-align: center;
`;

const Category = styled.span`
  display: inline-block;
  margin-bottom: 1.1rem;
  color: #5d6064;
  font-family: "Poly", serif;
  font-size: 1rem;
`;

const DateText = styled.span`
  display: inline-block;
  margin-top: 0.3rem;
  margin-bottom: 1.2rem;
  color: #5d6064;
  font-family: "Poly", serif;
  font-size: 0.9rem;

  ${MEDIA_QUERIES.tablet} {
    margin-bottom: 1.6rem;
  }
`;

const Title = styled.h1`
  font-size: 1.8rem;

  ${MEDIA_QUERIES.tablet} {
    font-size: 2.2rem;
  }
`;

const ImageContainer = styled.figure`
  display: none;
  margin-bottom: 3rem;

  ${MEDIA_QUERIES.landscape} {
    display: block;
  }
`;

const Image = styled.img`
  ${MEDIA_QUERIES.landscape} {
    max-width: 100%;
    margin-bottom: 0.5rem;
  }
`;

const Caption = styled.figcaption`
  color: #02060c;
  font-size: 0.8rem;
  opacity: 0.5;

  a {
    color: #1755b2;
    text-decoration: none;
  }
`;

const Content = styled.div`
  font-family: "Poly", serif;
  font-size: 1.2rem;
  line-height: 1.8;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Work Sans", sans-serif;
  }

  hr {
    border-color: #dbdee3;
    border-style: solid;
  }

  a {
    color: #1755b2;

    &:visited,
    &:hover {
      color: #2196f3;
    }

    &:focus {
      color: #ff9800;
    }
  }
`;

export default function Article({ location, data }) {
  const pathname = (location && location.pathname) || "/";
  const mdx = data && data.mdx;
  const content = mdx && mdx.body;
  const frontmatter = mdx && mdx.frontmatter;
  const title = frontmatter && frontmatter.title;
  const date = frontmatter && frontmatter.date;
  const categories = frontmatter && frontmatter.categories;
  const coverImage = frontmatter && frontmatter.cover;
  const copyright = frontmatter && frontmatter.copyright;

  return (
    <Layout currentPage={pathname}>
      <SEO title="Title article" />
      <Wrapper>
        <Hero>
          <Category>{categories}</Category>
          <Title>{title}</Title>
          <DateText>{date}</DateText>
          <ImageContainer>
            <Image src={coverImage} alt={`Imagen principal ${title}`} />
            <Caption>
              Tomado de:{" "}
              <a href={copyright} target="_blank" rel="noreferrer">
                {copyright}
              </a>
            </Caption>
          </ImageContainer>
        </Hero>
        <Content>
          <MDXRenderer>{content}</MDXRenderer>
        </Content>
      </Wrapper>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(frontmatter: { path: { eq: $slug } }) {
      id
      excerpt(pruneLength: 180)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        categories
        cover
        copyright
      }
    }
  }
`;
