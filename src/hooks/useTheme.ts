import { isWindow } from "../utils/checkWindow";

export function useTheme() {
  if (isWindow()) {
    const currentMode = window.localStorage.getItem("theme-mode");

    if (currentMode) {
      return currentMode;
    } else {
      const getSystemMode = window.matchMedia("(prefers-color-scheme: dark)");
      const themeMode = getSystemMode.matches ? "dark" : "light";
      window.localStorage.setItem("theme-mode", themeMode);

      return themeMode;
    }
  }

  return "dark";
}
