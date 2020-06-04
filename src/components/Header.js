import React from "react";
import { string } from "prop-types";
import { Link } from "gatsby";
import styled from "styled-components";

import { MEDIA_QUERIES } from "../constants";

import logoSmall from "../images/logo-small.png";
import logoMedium from "../images/logo-medium.png";
import logoLarge from "../images/logo-large.png";

import logoBlogSmall from "../images/logo-blog-small.png";
import logoBlogLarge from "../images/logo-blog-large.png";

import Nav from "./Nav";

const Wrapper = styled.header`
  max-width: 1180px;
  width: 90%;
  margin: 0 auto;
  padding: 1.5rem 0.5rem;

  ${MEDIA_QUERIES.tablet} {
    padding: 2rem 0;
  }

  ${MEDIA_QUERIES.landscape} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const Logo = styled(Link)`
  display: inline-block;

  picture {
    &:hover {
      opacity: 0.7;
    }
  }
`;

function checkLogo(value = "", logoBlog, logoWebsite) {
  if (value.includes("blog")) {
    return logoBlog;
  }

  return logoWebsite;
}

export default function Header({ currentPage }) {
  const pageLocation = currentPage || "";

  return (
    <Wrapper>
      <Logo to={pageLocation.includes("blog") ? "/blog" : "/"}>
        <picture>
          <source
            srcSet={checkLogo(currentPage, logoBlogSmall, logoSmall)}
            media="(max-width: 767px)"
          />
          <source
            srcSet={checkLogo(currentPage, logoBlogSmall, logoMedium)}
            media="(max-width: 1023px)"
          />
          <source
            srcSet={checkLogo(currentPage, logoBlogLarge, logoLarge)}
            media="(min-width: 1024px)"
          />
          <img
            src={checkLogo(currentPage, logoBlogSmall, logoMedium)}
            alt="Mateo Olarte - Frontend Engineer"
          />
        </picture>
      </Logo>
      <Nav currentPage={currentPage} />
    </Wrapper>
  );
}

Header.propTypes = {
  siteTitle: string,
};

Header.defaultProps = {
  siteTitle: ``,
};
