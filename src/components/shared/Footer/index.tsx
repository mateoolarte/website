import React, { Fragment } from "react";

import { socialLinks, info } from "../../../data/secondaryNav";

import {
  Wrapper,
  Heading,
  Subtitle,
  SocialLinks,
  SocialItem,
  SocialLink,
  SocialIcon,
  Copyright,
} from "./styled";

interface CtaProps {
  content: any;
}

function Cta({ content }: CtaProps) {
  return (
    <Fragment>
      <Heading>{content.heading}</Heading>
      <Subtitle>{content.subtitle}</Subtitle>
    </Fragment>
  );
}

interface FooterProps {
  currentPage: string;
}

export function Footer({ currentPage }: FooterProps) {
  const pageLocation = currentPage || "";
  const isSpanish = pageLocation.includes("blog");

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
        {isSpanish ? info.es.madeBy : info.en.madeBy}{" "}
        <span role="img" aria-label="heart">
          ❤️
        </span>{" "}
        {isSpanish ? info.es.in : info.en.in}
        <strong>Medellín, Colombia</strong> <br />
        Mateo Olarte © {new Date().getFullYear()}
      </Copyright>
    </Wrapper>
  );
}
