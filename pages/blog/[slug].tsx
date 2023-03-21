import styled from "styled-components";

import { post } from "@/data/post";
import { urls } from "@/data/posts";

import { Layout } from "@/containers/Layout";

import { MEDIA_QUERIES } from "@/utils/constants";
import {
  fourtyColor,
  mainColor,
  linksColor,
  linksColorSecondary,
  shadows,
  linksColorTerciary,
} from "@/utils/themes";
import { SEO } from "@/utils/seo";

export const Wrapper = styled.article`
  width: 90%;
  max-width: 740px;
  margin: 3rem auto 8rem;
`;

export const Hero = styled.div`
  text-align: center;
`;

export const Category = styled.span`
  display: inline-block;
  margin-bottom: 1.1rem;
  color: ${fourtyColor};
  font-size: 1rem;
`;

export const DateText = styled.span`
  display: inline-block;
  margin-top: 0.3rem;
  margin-bottom: 1.2rem;
  color: ${fourtyColor};
  font-size: 0.9rem;

  ${MEDIA_QUERIES.tablet} {
    margin-bottom: 1.6rem;
  }
`;

export const Title = styled.h1`
  font-size: 1.8rem;

  ${MEDIA_QUERIES.tablet} {
    font-size: 2.2rem;
  }
`;

export const ImageContainer = styled.figure`
  display: none;
  margin-bottom: 3rem;

  ${MEDIA_QUERIES.landscape} {
    display: block;
  }
`;

export const Image = styled.img`
  ${MEDIA_QUERIES.landscape} {
    width: 100%;
    height: 360px;
    margin-bottom: 0.5rem;
    object-fit: cover;
  }
`;

export const Caption = styled.figcaption`
  color: ${mainColor};
  font-size: 0.8rem;
  opacity: 0.5;

  a {
    color: ${linksColor};
    text-decoration: none;
  }
`;

export const Content = styled.div`
  p {
    margin: 0;
    font-size: 1.1rem;
    font-weight: 500;
    line-height: 1.8;
  }

  hr {
    border-color: ${shadows};
    border-style: solid;
  }

  a {
    color: ${linksColor};

    &:visited,
    &:hover {
      color: ${linksColorTerciary};
    }

    &:focus {
      color: ${linksColorSecondary};
    }
  }
`;

interface PostProps {
  data: any;
}

export async function getStaticPaths() {
  const paths = await urls();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const data = await post(params.slug);

  return {
    props: {
      data,
    },
  };
}

export default function Post({ data }: PostProps) {
  const { title, createdAt, categories, thumbnail, content, copyright } = data;

  return (
    <Layout metatags={SEO({ title, description: "" })}>
      <Wrapper>
        <Hero>
          <Category>{categories}</Category>
          <Title>{title}</Title>
          <DateText>{createdAt}</DateText>
          <ImageContainer>
            <Image src={thumbnail} alt={`Imagen principal ${title}`} />
            {copyright && (
              <Caption>
                Tomado de:{" "}
                <a href={copyright} target="_blank" rel="noreferrer">
                  {copyright}
                </a>
              </Caption>
            )}
          </ImageContainer>
        </Hero>
        <Content dangerouslySetInnerHTML={{ __html: content }} />
      </Wrapper>
    </Layout>
  );
}
