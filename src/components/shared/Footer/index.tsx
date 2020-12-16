import React, { Fragment } from "react";
import { object, string } from "prop-types";

import { socialLinks, info } from "./data";

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

function Cta({ content }) {
  return (
    <Fragment>
      <Heading>{content.heading}</Heading>
      <Subtitle>{content.subtitle}</Subtitle>
    </Fragment>
  );
}

Cta.propTypes = {
  content: object,
};

export default function Footer({ currentPage }) {
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

Footer.propTypes = {
  currentPage: string,
};
