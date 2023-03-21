import DarkIcon from "@/icons/dark";
import LightIcon from "@/icons/light";

import { Theme } from "@/types/themes";

interface ThemeIconProps {
  theme: Theme;
}

export function ThemeIcon({ theme }: ThemeIconProps) {
  if (theme === "dark") return <LightIcon />;

  return <DarkIcon />;
}
