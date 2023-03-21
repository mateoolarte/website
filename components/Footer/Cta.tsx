import { Heading, Subtitle } from "./styles";

interface CtaContent {
  heading: string;
  subtitle: string;
}

interface CtaProps {
  content: CtaContent;
}

export function Cta({ content }: CtaProps) {
  return (
    <>
      <Heading>{content.heading}</Heading>
      <Subtitle>{content.subtitle}</Subtitle>
    </>
  );
}
