// @ts-nocheck
import { useContext } from "react";
import { useRouter } from "next/router";

import { websiteLinks, blogLinks } from "@/data/navigation";

import { ThemeContext } from "@/context/ThemeContext";

import DarkIcon from "@/components/icons/dark";
import LightIcon from "@/components/icons/light";

import { Wrapper, List, IconContainer, Box, Item, ThemeBtn } from "./styles";

function checkLinks(value = "") {
  if (value.includes("blog")) {
    return blogLinks;
  }

  return websiteLinks;
}

export function Nav() {
  const router = useRouter();
  const { pathname: currentUrl } = router;
  const { theme, toggleTheme } = useContext(ThemeContext);
  const links = checkLinks(currentUrl);
  const latestPostLink = "";

  function handleThemeMode(themeMode) {
    window.localStorage.setItem("theme-mode", themeMode);
    toggleTheme(themeMode);
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

      <ThemeBtn
        type="button"
        onClick={() => handleThemeMode(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? <LightIcon /> : <DarkIcon />}
      </ThemeBtn>
    </Wrapper>
  );
}
