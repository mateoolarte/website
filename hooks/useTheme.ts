import { useState, useEffect } from "react";
import { isBrowser } from "@/utils/is-browser";

export function useTheme(): string {
  const [themeMode, setThemeMode] = useState("dark");

  useEffect(() => {
    if (isBrowser()) {
      const currentMode = window.localStorage.getItem("theme-mode");

      if (currentMode) {
        setThemeMode(currentMode);
      } else {
        const getSystemMode = window.matchMedia("(prefers-color-scheme: dark)");
        const matchedTheme = getSystemMode.matches ? "dark" : "light";
        setThemeMode(matchedTheme);
        window.localStorage.setItem("theme-mode", matchedTheme);
      }
    }
  }, [themeMode]);

  return themeMode;
}
