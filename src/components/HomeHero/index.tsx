import React from "react";

import { Wrapper, Title, Subtitle } from "./styled";

export function HomeHero() {
  return (
    <Wrapper>
      <Title>
        Hi there, <br />
        I&apos;m a <strong>Frontend Developer</strong>
      </Title>
      <Subtitle>
        I like to solve problems through technology and a lifelong learner.
      </Subtitle>
    </Wrapper>
  );
}
