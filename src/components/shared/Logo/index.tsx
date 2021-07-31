import React from "react";

import { Wrapper } from "./styled";
import useTheme from "../../../hooks/useTheme";

function checkLogo(value = "", logoBlog, logoWebsite) {
  if (value.includes("blog")) {
    return logoBlog;
  }

  return logoWebsite;
}

interface LogoProps {
  pageLocation: string;
  currentPage: string;
}

export default function Logo({ pageLocation, currentPage }: LogoProps) {
  const theme = useTheme();
  const logoSmall = require(`../../../images/logo-small-${theme}.png`).default;
  const logoMedium =
    require(`../../../images/logo-medium-${theme}.png`).default;
  const logoLarge = require(`../../../images/logo-large-${theme}.png`).default;

  const logoBlogSmall =
    require(`../../../images/logo-blog-small-${theme}.png`).default;
  const logoBlogLarge =
    require(`../../../images/logo-blog-large-${theme}.png`).default;

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
