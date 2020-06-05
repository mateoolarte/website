import React from "react";
import styled from "styled-components";

import { MEDIA_QUERIES } from "../constants";

import Layout from "../components/Layout";
import SEO from "../components/Seo";

import workspaceImg from "../images/workspace.jpg";

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 4rem;

  ${MEDIA_QUERIES.tablet} {
    margin-top: 4rem;
    margin-bottom: 8rem;
  }
`;

const Heading = styled.h3`
  margin-top: 0;
  margin-bottom: 3rem;
  color: #1755b2;
  font-size: 1.8rem;
`;

const Info = styled.div`
  width: 100%;
  padding-right: 2rem;

  ${MEDIA_QUERIES.landscape} {
    width: 60%;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
  }
`;

const ImageContainer = styled.div`
  display: none;

  ${MEDIA_QUERIES.landscape} {
    display: block;
    width: 40%;
    text-align: center;
  }
`;

const Image = styled.img`
  height: 550px;
`;

export default function About({ location }) {
  const pathname = (location && location.pathname) || "/";

  return (
    <Layout currentPage={pathname}>
      <SEO title="About" />

      <Wrapper>
        <Info>
          <Heading>Hi, I'm Mateo Olarte</Heading>

          <p>
            I’m a Frontend engineer, born in Medellín, Colombia. I passionate
            about technology especially on web development, I like to work with
            modern technologies and always trying to learn new things to find
            the best solution for the problem that I have.
          </p>

          <p>
            In high school, I found programming something interesting because I
            could create things through code and see how that can improve the
            lives of people. Then I decided to teach myself to code this allows
            me to have a lot of opportunities and a growth in my professional
            career.
          </p>

          <p>
            Besides that, I like to play with design things and user experience
            to deliver a better quality in my developments.
          </p>

          <p>
            Sometimes I like to go out and ride in my bike and meeting new places.
          </p>
        </Info>

        <ImageContainer>
          <Image src={workspaceImg} alt="Image workplace" />
        </ImageContainer>
      </Wrapper>
    </Layout>
  );
}
