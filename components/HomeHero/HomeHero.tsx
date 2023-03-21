import Link from "next/link";

import { Wrapper, Title, Subtitle } from "./styles";

export function HomeHero() {
  return (
    <Wrapper>
      <Title>
        Hi there 👋🏻
        <br />
        I&apos;m a <strong>Frontend Engineer</strong>
      </Title>
      <Subtitle>
        I like to solve problems through technology and a lifelong learner. More
        about me <Link href="/about">here.</Link>
      </Subtitle>
    </Wrapper>
  );
}
