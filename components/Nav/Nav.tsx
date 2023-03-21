import { useContext } from "react";
import { useRouter } from "next/router";

import { ThemeContext } from "@/context/ThemeContext";
import type { Theme } from "@/types/themes";

import { checkLinks } from "./utils";
import { ThemeIcon } from "./ThemeIcon";
import { Wrapper, List, IconContainer, Box, Item, ThemeBtn } from "./styles";

export function Nav() {
  const router = useRouter();
  const { pathname: currentUrl } = router;
  const { theme, toggleTheme } = useContext(ThemeContext);
  const links = checkLinks(currentUrl);
  const latestPostLink = "";

  function handleThemeMode(value: Theme) {
    let currentTheme = theme;

    if (value === "dark") currentTheme = "light";
    if (value === "light") currentTheme = "dark";

    window.localStorage.setItem("theme-mode", currentTheme);
    toggleTheme(currentTheme);
  }

  return (
    <Wrapper>
      <List>
        {links.map(({ id, label, link, Icon, highlight }: any) => {
          const postUrl =
            label === "Último post" ? `/blog/${latestPostLink}` : link;

          return (
            <Box key={id}>
              <Item
                href={postUrl}
                isActive={currentUrl === link}
                isBtn={highlight}
              >
                <IconContainer>
                  <Icon />
                </IconContainer>
                {label}
              </Item>
            </Box>
          );
        })}
      </List>

      <ThemeBtn type="button" onClick={() => handleThemeMode(theme)}>
        <ThemeIcon theme={theme} />
      </ThemeBtn>
    </Wrapper>
  );
}
