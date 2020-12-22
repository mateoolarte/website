import { isWindow } from "../utils/checkWindow";

export default function useTheme() {
  if (isWindow()) {
    const getSystemMode = window.matchMedia("(prefers-color-scheme: dark)");
    const currentMode = window.localStorage.getItem("theme-mode");

    if (currentMode) {
      return currentMode;
    } else {
      const themeMode = getSystemMode.matches ? "dark" : "light";
      window.localStorage.setItem("theme-mode", themeMode);

      return themeMode;
    }
  } else {
    return "dark";
  }
}
