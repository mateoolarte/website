/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react";
import { node, string } from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { ThemeProvider } from "styled-components";

import Header from "../Header";
import Footer from "../Footer";

import useTheme from "../../../hooks/useTheme";

import { GlobalStyle } from "./styled";

import { ThemeContext } from "../../../context/ThemeContext";

export default function Layout({ children, currentPage }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const theme = useTheme();
  const [currentMode, setCurrentMode] = useState(theme);

  return (
    <ThemeProvider theme={{ mode: currentMode }}>
      <ThemeContext.Provider
        value={{ theme: currentMode, toggleTheme: setCurrentMode }}
      >
        <GlobalStyle />
        <Header
          siteTitle={data.site.siteMetadata.title}
          currentPage={currentPage}
        />
        <main>{children}</main>
        <Footer currentPage={currentPage} />
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

Layout.propTypes = {
  children: node.isRequired,
  currentPage: string,
};
