import React from "react";
import { string } from "prop-types";
import { Link } from "gatsby";
import styled from "styled-components";

import { MEDIA_QUERIES } from "../constants";

import logoSmall from "../images/logo-small.png";
import logoMedium from "../images/logo-medium.png";
import logoLarge from "../images/logo-large.png";

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

export default function Header({ currentPage }) {
  return (
    <Wrapper>
      <Logo to="/">
        <picture>
          <source srcSet={logoSmall} media="(max-width: 767px)" />
          <source srcSet={logoMedium} media="(max-width: 1023px)" />
          <source srcSet={logoLarge} media="(min-width: 1024px)" />
          <img src={logoMedium} alt="Mateo Olarte - Frontend Engineer" />
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
