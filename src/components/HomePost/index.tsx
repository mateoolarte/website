import React from 'react';

import { Wrapper, Title } from './styled';

interface HomePostProps {
  title: string;
  link: string;
}

export function HomePost({ title, link }: HomePostProps) {
  return (
    <Wrapper>
      <Title to={link}>{title}</Title>
    </Wrapper>
  );
}
