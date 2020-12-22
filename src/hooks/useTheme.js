export default function useTheme() {
  const getSystemMode = window.matchMedia("(prefers-color-scheme: dark)");
  const currentMode = window.localStorage.getItem("theme-mode");

  if (currentMode) {
    return currentMode;
  } else {
    const themeMode = getSystemMode.matches ? "dark" : "light";
    window.localStorage.setItem("theme-mode", themeMode);

    return themeMode;
  }
}
