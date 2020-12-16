export default function useTheme() {
  const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)");

  return isDarkMode.matches ? "dark" : "light";
}
