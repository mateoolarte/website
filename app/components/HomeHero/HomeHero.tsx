import { Link } from "@remix-run/react";

import { Wrapper, Title, Subtitle } from './styles';

export function HomeHero() {
  return (
    <Wrapper>
      <Title>
        Hi there 👋🏻
        <br />
        I&apos;m a <strong>Software Engineer</strong>
      </Title>
      <Subtitle>
        I like to solve problems through technology and a lifelong learner. More
        about me <Link to="/about">here.</Link>
      </Subtitle>
    </Wrapper>
  );
}
