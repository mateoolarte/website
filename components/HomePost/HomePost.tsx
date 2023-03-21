import { Wrapper, Title } from './styles';

interface HomePostProps {
  title: string;
  link: string;
}

export function HomePost({ title, link }: HomePostProps) {
  return (
    <Wrapper>
      <Title href={link}>{title}</Title>
    </Wrapper>
  );
}
