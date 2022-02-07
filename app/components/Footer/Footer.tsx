import { useLocation } from 'remix';

import { socialLinks, info } from '~/data/secondaryNav';

import {
  Wrapper,
  Heading,
  Subtitle,
  SocialLinks,
  SocialItem,
  SocialLink,
  SocialIcon,
  Copyright,
} from './styles';

type CtaContent = {
  heading: string;
  subtitle: string;
};

interface CtaProps {
  content: CtaContent;
}

function Cta({ content }: CtaProps) {
  return (
    <>
      <Heading>{content.heading}</Heading>
      <Subtitle>{content.subtitle}</Subtitle>
    </>
  );
}

export function Footer() {
  const { pathname: currentUrl } = useLocation();
  const isSpanish = currentUrl.includes('blog');
  const currentYear = new Date().getFullYear();

  return (
    <Wrapper>
      <Cta content={isSpanish ? info.es : info.en} />
      <SocialLinks>
        {socialLinks.map(({ id, link, Icon }) => {
          return (
            <SocialItem key={id}>
              <SocialLink href={link} target="_blank">
                <SocialIcon>
                  <Icon />
                </SocialIcon>
              </SocialLink>
            </SocialItem>
          );
        })}
      </SocialLinks>
      <Copyright>
        {isSpanish ? info.es.madeBy : info.en.madeBy}{' '}
        <span role="img" aria-label="heart">
          ❤️
        </span>{' '}
        {isSpanish ? info.es.in : info.en.in}
        <strong>Medellín, Colombia</strong> <br />
        Mateo Olarte © {currentYear}
      </Copyright>
    </Wrapper>
  );
}
