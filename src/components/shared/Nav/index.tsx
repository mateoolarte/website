import React from "react";
import { string } from "prop-types";
import { graphql, useStaticQuery } from "gatsby";

import { websiteLinks, blogLinks } from "./data";

import { Wrapper, List, IconContainer, Box, Item } from "./styled";

function checkLinks(value) {
  if (value.includes("blog")) {
    return blogLinks;
  }

  return websiteLinks;
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
    </Wrapper>
  );
}

Nav.propTypes = {
  currentPage: string,
};
