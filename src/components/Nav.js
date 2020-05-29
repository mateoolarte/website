import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import { MEDIA_QUERIES } from "../constants";

import items from "../data/navbar-links";
import itemsBlog from "../data/blog-navbar-links";

const Wrapper = styled.nav`
  ${MEDIA_QUERIES.landscapeMax} {
    position: fixed;
    z-index: 1;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #fafafa;
  }

  ${MEDIA_QUERIES.landscape} {
    width: 75%;
  }
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
  list-style-type: none;

  ${MEDIA_QUERIES.landscapeMax} {
    padding: 0.8rem;
    box-shadow: 0 -3px 12px #dbdee3;
    justify-content: space-evenly;
  }

  ${MEDIA_QUERIES.tabletMax} {
    justify-content: space-between;
  }
`;

const IconContainer = styled.span`
  display: block;

  ${MEDIA_QUERIES.landscape} {
    display: none;
  }

  svg {
    height: 1.2rem;
    transition: 0.25s fill ease-out;
    fill: #02060c;

    &:hover {
      fill: #1755b2;
    }
  }
`;

const Box = styled.li`
  margin: 0 0.5rem;

  ${MEDIA_QUERIES.tablet} {
    margin: 0 1rem;
  }

  ${MEDIA_QUERIES.landscape} {
    margin: 0 2rem;
  }

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    ${MEDIA_QUERIES.landscapeMax} {
      a {
        color: #1755b2;
      }

      svg {
        fill: #1755b2;
      }
    }
  }
`;

const Item = styled(Link)`
  transition: 0.25s color ease-out;
  color: ${({ isActive }) => (isActive ? "#1755b2" : "#02060c")};
  text-align: center;
  text-decoration: none;

  &:hover {
    color: #1755b2;
  }

  ${MEDIA_QUERIES.landscape} {
    font-size: 1.2rem;

    ${({ isBtn }) =>
      isBtn &&
      `
      display: inline-block;
      padding: 0.5rem 1.5rem;
      border: 2px solid #1755b2;
      border-radius: 0.6rem;
      background-color: #fafafa;
      color: #1755b2;
      text-decoration: none;

      &:hover {
        background-color: #1755b2;
        color: #fafafa;
      }
    `}
  }

  svg {
    fill: ${({ isActive }) => (isActive ? "#1755b2" : "#02060c")};
  }
`;

function checkLinks(value) {
  if (value.includes("blog")) {
    return itemsBlog;
  }

  return items;
}

export default function Nav({ currentPage }) {
  const links = checkLinks(currentPage);

  return (
    <Wrapper>
      <List>
        {links.map(({ id, label, link, Icon, highlight }) => {
          return (
            <Box key={id}>
              <Item to={link} isActive={currentPage === link} isBtn={highlight}>
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
