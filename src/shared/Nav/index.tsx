import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import items from "../../data/navbar-links";
import itemsBlog from "../../data/blog-navbar-links";

import { Wrapper, List, IconContainer, Box, Item } from "./styled";

function checkLinks(value) {
  if (value.includes("blog")) {
    return itemsBlog;
  }

  return items;
}

export default function Nav({ currentPage }) {
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
  const posts = data && data.allMdx;
  const edges = posts && posts.edges;
  const currentNode = edges && edges[0].node;
  const frontmatter = currentNode && currentNode.frontmatter;
  const latestPost = frontmatter && frontmatter.path;

  return (
    <Wrapper>
      <List>
        {links.map(({ id, label, link, Icon, highlight }) => {
          return (
            <Box key={id}>
              <Item
                to={`${label === "Último post" ? `/blog${latestPost}` : link}`}
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
    </Wrapper>
  );
}
