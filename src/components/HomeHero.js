import React from "react";
import styled from "styled-components";

import { MEDIA_QUERIES } from "../constants";

const Wrapper = styled.div`
  margin: 4rem 0 6rem;

  ${MEDIA_QUERIES.tablet} {
    margin: 8rem 0 10rem;
  }
`;

const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 0.5rem;

  ${MEDIA_QUERIES.tablet} {
    font-size: 2.2rem;
  }

  strong {
    color: #1755b2;
  }
`;

const Subtitle = styled.p`
  margin-top: 0;
  color: #939393;

  ${MEDIA_QUERIES.tablet} {
    font-size: 1.1rem;
  }
`;

export default function HomeHero() {
  return (
    <Wrapper>
      <Title>
        Hi there, <br />
        I'm a <strong>Frontend Engineer</strong>
      </Title>
      <Subtitle>
        I like to solve problems through technology and a lifelong learner.
      </Subtitle>
    </Wrapper>
  );
}
