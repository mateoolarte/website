/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { createGlobalStyle } from "styled-components";

import Header from "./Header";
import Footer from "./Footer";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    background-color: #fafafa;
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
    color: #02060c;
    font-family: 'Work Sans', sans-serif;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: -0.43px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  main {
    max-width: 1180px;
    width: 90%;
    margin: 0 auto;
  }

  picture {
    display: block;
  }
`;

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

  return (
    <>
      <GlobalStyle />
      <Header
        siteTitle={data.site.siteMetadata.title}
        currentPage={currentPage}
      />
      <main>{children}</main>
      <Footer currentPage={currentPage} />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
