import { useState, useEffect, ReactNode } from "react";
import { ThemeProvider } from "styled-components";

import { Header } from "@/containers/Header";
import { Footer } from "@/components/Footer";
import { Metatags } from "@/components/Metatags";

import { ThemeContext } from "@/context/ThemeContext";
import { useTheme } from "@/hooks/useTheme";

import { GlobalStyle } from "./styles";

type Props = {
  children: ReactNode;
  metatags: any;
};

export function Layout({ children, metatags }: Props) {
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
        <Header />
        <main>{children}</main>
        <Footer />
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}
