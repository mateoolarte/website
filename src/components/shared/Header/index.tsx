import React from "react";
import { string } from "prop-types";

import Nav from "../Nav";
import Logo from "../Logo";

import { Wrapper } from "./styled";

export default function Header({ currentPage }) {
  const pageLocation = currentPage || "";

  return (
    <Wrapper>
      <Logo pageLocation={pageLocation} currentPage={currentPage} />
      <Nav currentPage={currentPage} />
    </Wrapper>
  );
}

Header.propTypes = {
  siteTitle: string,
  currentPage: string,
};

Header.defaultProps = {
  siteTitle: "",
  currentPage: "",
};
