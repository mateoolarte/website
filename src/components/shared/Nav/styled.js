import styled from "styled-components";
import { Link } from "gatsby";

import { MEDIA_QUERIES, COLORS } from "../../../constants";

const Wrapper = styled.nav`
  ${MEDIA_QUERIES.landscapeMax} {
    position: fixed;
    z-index: 1;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: ${COLORS.white};
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
    box-shadow: 0 -3px 12px ${COLORS.lightGray};
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
    fill: ${COLORS.black};

    &:hover {
      fill: ${COLORS.blue};
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
        color: ${COLORS.blue};
      }

      svg {
        fill: ${COLORS.blue};
      }
    }
  }
`;

const Item = styled(Link)`
  transition: 0.25s color ease-out;
  color: ${({ isActive }) => (isActive ? COLORS.blue : COLORS.black)};
  text-align: center;
  text-decoration: none;

  &:hover {
    color: ${COLORS.blue};
  }

  ${MEDIA_QUERIES.landscape} {
    font-size: 1.2rem;
    ${({ isBtn }) =>
      isBtn &&
      `
      display: inline-block;
      padding: 0.5rem 1.5rem;
      border: 2px solid ${COLORS.blue};
      border-radius: 0.6rem;
      background-color: ${COLORS.white};
      color: ${COLORS.blue};
      text-decoration: none;

      &:hover {
        background-color: ${COLORS.blue};
        color: ${COLORS.white};
      }
    `}
  }

  svg {
    fill: ${({ isActive }) => (isActive ? COLORS.blue : COLORS.black)};
  }
`;

export { Wrapper, List, IconContainer, Box, Item };
