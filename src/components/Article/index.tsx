import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import SEO from "../Seo";
import Layout from "../../shared/Layout";

import {
  Wrapper,
  Hero,
  Category,
  DateText,
  Title,
  ImageContainer,
  Image,
  Caption,
  Content,
} from "./styled";

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
