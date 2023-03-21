import { createContext, Context } from "react";
import type { Theme } from "@/types/themes";

interface ThemeTypes {
  theme: Theme;
  toggleTheme: (theme: Theme) => Theme;
}

export const ThemeContext: Context<ThemeTypes> = createContext({
  theme: "dark",
  toggleTheme: (theme: Theme) => {
    return theme;
  },
});
