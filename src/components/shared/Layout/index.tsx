/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { Header } from '../Header';
import { Footer } from '../Footer';

import { useTheme } from '../../../hooks/useTheme';

import { GlobalStyle } from './styled';

import { ThemeContext } from '../../../context/ThemeContext';

interface LayoutProps {
  children: any;
  currentPage?: string;
}
export function Layout({ children, currentPage }: LayoutProps) {
  const theme = useTheme();
  const [currentMode, setCurrentMode] = useState(theme);

  return (
    <ThemeProvider theme={{ mode: currentMode }}>
      <ThemeContext.Provider
        value={{ theme: currentMode, toggleTheme: setCurrentMode }}
      >
        <GlobalStyle />
        <Header currentPage={currentPage} />
        <main>{children}</main>
        <Footer currentPage={currentPage} />
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}
