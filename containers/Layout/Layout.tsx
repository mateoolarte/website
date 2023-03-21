import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";

import { Header } from "@/containers/Header";
import { Footer } from "@/components/Footer";
import { Metatags } from "@/components/Metatags";
import { ThemeContext } from "@/context/ThemeContext";
import { useTheme } from "@/hooks/useTheme";

import { GlobalStyle, font } from "./styles";
import type { LayoutProps } from "./types";

export function Layout({ children, metatags }: LayoutProps) {
  const theme = useTheme();
  const [currentMode, setCurrentMode] = useState(theme);

  useEffect(() => {
    setCurrentMode(theme);
  }, [theme]);

  return (
    <ThemeProvider theme={{ mode: currentMode }}>
      <ThemeContext.Provider
        value={{ theme: currentMode, toggleTheme: setCurrentMode }}
      >
        <GlobalStyle />
        <Metatags data={metatags} />
        <div className={font.className}>
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}
