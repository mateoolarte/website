import React from "react";
import { object } from "prop-types";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import { Seo } from "../Seo";
import Layout from "../../components/shared/Layout";

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
  const pathname = location?.pathname || "/";
  const mdx = data?.mdx;
  const content = mdx?.body;
  const excerpt = mdx?.excerpt;
  const frontmatter = mdx?.frontmatter;
  const title = frontmatter?.title;
  const date = frontmatter?.date;
  const categories = frontmatter?.categories;
  const coverImage = frontmatter?.cover;
  const copyright = frontmatter?.copyright;

  return (
    <Layout currentPage={pathname}>
      <Seo title={title} lang="es" description={excerpt} />
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
      excerpt(pruneLength: 133)
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

Article.propTypes = {
  location: object,
  data: object,
};
