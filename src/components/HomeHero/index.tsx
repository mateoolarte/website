import React from "react";

import { Wrapper, Title, Subtitle } from "./styled";

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
