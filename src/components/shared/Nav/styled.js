import styled from "styled-components";
import { Link } from "gatsby";

import { MEDIA_QUERIES } from "../../../constants";
import {
  backgroundColor,
  linksColor,
  mainColor,
  shadows,
} from "../../../themes";

const Wrapper = styled.nav`
  ${MEDIA_QUERIES.landscapeMax} {
    position: fixed;
    z-index: 1;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: ${backgroundColor};
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
    box-shadow: 0 -3px 12px ${shadows};
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
    fill: ${mainColor};

    &:hover {
      fill: ${linksColor};
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
        color: ${linksColor};
      }

      svg {
        fill: ${linksColor};
      }
    }
  }
`;

const Item = styled(Link)`
  transition: 0.25s color ease-out;
  color: ${({ isActive }) => (isActive ? linksColor : mainColor)};
  text-align: center;
  text-decoration: none;

  &:hover {
    color: ${linksColor};
  }

  ${MEDIA_QUERIES.landscape} {
    font-size: 1.2rem;
    ${props => {
      console.log(props);

      return (
        props.isBtn &&
        `
      display: inline-block;
      padding: 0.5rem 1.5rem;
      border: 2px solid ${linksColor};
      border-radius: 0.6rem;
      background-color: ${backgroundColor};
      color: ${linksColor};
      text-decoration: none;

      &:hover {
        background-color: ${linksColor};
        color: ${mainColor};
      }
    `
      );
    }}
  }

  svg {
    fill: ${({ isActive }) => (isActive ? linksColor : mainColor)};
  }
`;

export { Wrapper, List, IconContainer, Box, Item };
