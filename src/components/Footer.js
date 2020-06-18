import React, { Fragment } from "react";
import styled from "styled-components";

import { MEDIA_QUERIES } from "../constants";

import links from "../data/social-links";

const infoEs = {
  heading: "¿Interesado en hablar conmigo?",
  subtitle: "Contactame en:",
};

const infoEn = {
  heading: "Are you interested in talking with me?",
  subtitle: "Contact me on:",
};

const Wrapper = styled.footer`
  max-width: 1180px;
  width: 90%;
  margin: 0 auto;
  text-align: center;
`;

const Heading = styled.h3`
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1.6rem;
`;

const Subtitle = styled.p`
  margin-top: 0;
  margin-bottom: 1.5rem;
  color: #939393;
  font-size: 1.1rem;
`;

const SocialLinks = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 4rem;
  padding: 0;
  list-style-type: none;
`;

const SocialItem = styled.li`
  margin: 0 1rem;
`;

const SocialLink = styled.a`
  display: inline-block;
`;

const SocialIcon = styled.span`
  display: inline-block;

  svg {
    width: 2.5rem;
    height: 2.5rem;

    &:hover {
      fill: #1755b2;
    }
  }
`;

const Copyright = styled.p`
  margin-top: 0;
  margin-bottom: 6rem;
  color: #939393;
  line-height: 1.8;

  ${MEDIA_QUERIES.landscape} {
    margin-bottom: 2rem;
  }
`;

function Cta({ content }) {
  return (
    <Fragment>
      <Heading>{content.heading}</Heading>
      <Subtitle>{content.subtitle}</Subtitle>
    </Fragment>
  );
}

export default function Footer({ currentPage }) {
  const pageLocation = currentPage || "";
  const isBlogPage = pageLocation.includes("blog");

  return (
    <Wrapper>
      <Cta content={isBlogPage ? infoEs : infoEn} />
      <SocialLinks>
        {links.map(({ id, link, Icon }) => {
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
        {isBlogPage ? "Hecho con" : "Made with"}{" "}
        <span role="img" aria-label="heart">
          ❤️
        </span>{" "}
        {isBlogPage ? "en " : "in "}
        <strong>Medellín, Colombia</strong> <br />
        Mateo Olarte © {new Date().getFullYear()}
      </Copyright>
    </Wrapper>
  );
}
