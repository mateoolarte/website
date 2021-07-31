import React, { useContext } from "react";
import { graphql, useStaticQuery } from "gatsby";
import DarkIcon from "../../../images/icons/dark";
import LightIcon from "../../../images/icons/light";

import { websiteLinks, blogLinks } from "../../../data/navigation";

import { Wrapper, List, IconContainer, Box, Item, ThemeBtn } from "./styled";

import { ThemeContext } from "../../../context/ThemeContext";

function checkLinks(value) {
  if (value.includes("blog")) {
    return blogLinks;
  }

  return websiteLinks;
}

interface NavProps {
  currentPage: string;
}

export default function Nav({ currentPage }: NavProps) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const links = checkLinks(currentPage || "");
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 1) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);
  const posts = data?.allMdx;
  const edges = posts?.edges;
  const currentNode = edges[0]?.node;
  const frontmatter = currentNode?.frontmatter;
  const latestPost = frontmatter?.path;

  function handleThemeMode(themeMode) {
    window.localStorage.setItem("theme-mode", themeMode);
    toggleTheme(themeMode);
  }

  return (
    <Wrapper>
      <List>
        {links.map(({ id, label, link, Icon, highlight }) => {
          return (
            <Box key={id}>
              <Item
                to={`${label === "Último post" ? `/blog/${latestPost}` : link}`}
                isActive={currentPage === link}
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
