import React from "react";
import { string } from "prop-types";

import { Wrapper } from "./styled";
import useTheme from "../../../hooks/useTheme";

function checkLogo(value = "", logoBlog, logoWebsite) {
  if (value.includes("blog")) {
    return logoBlog;
  }

  return logoWebsite;
}

export default function Logo({ pageLocation, currentPage }) {
  const theme = useTheme();
  const logoSmall = require(`../../../images/logo-small-${theme}.png`);
  const logoMedium = require(`../../../images/logo-medium-${theme}.png`);
  const logoLarge = require(`../../../images/logo-large-${theme}.png`);

  const logoBlogSmall = require(`../../../images/logo-blog-small-${theme}.png`);
  const logoBlogLarge = require(`../../../images/logo-blog-large-${theme}.png`);

  return (
    <Wrapper to={pageLocation.includes("blog") ? "/blog" : "/"}>
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
          alt="Mateo Olarte - Logo"
        />
      </picture>
    </Wrapper>
  );
}

Logo.propTypes = {
  pageLocation: string,
  currentPage: string,
};

Logo.defaultProps = {
  pageLocation: "",
  currentPage: "",
};
