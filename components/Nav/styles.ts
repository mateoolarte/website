import styled, { css } from 'styled-components';
import Link from 'next/link'

import { MEDIA_QUERIES } from '@/utils/constants';
import {
  backgroundColor,
  linksColor,
  mainColor,
  shadows,
  terciaryColor,
} from '@/utils/themes';

export const Wrapper = styled.nav`
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
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const List = styled.ul`
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

  ${MEDIA_QUERIES.landscape} {
    width: 85%;
  }
`;

export const IconContainer = styled.span`
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

export const Box = styled.li`
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

export const Item = styled(Link)`
  transition: 0.25s color ease-out;
  color: ${({ isActive }) => (isActive ? linksColor : mainColor)};
  text-align: center;
  text-decoration: none;

  &:hover {
    color: ${linksColor};
  }

  ${MEDIA_QUERIES.landscape} {
    font-size: 1.2rem;
    ${(props) => {
      return (
        props.isBtn &&
        css`
          display: inline-block;
          padding: 0.5rem 1.5rem;
          border: 2px solid ${linksColor};
          border-radius: 0.6rem;
          background-color: ${backgroundColor};
          color: ${linksColor};
          text-decoration: none;
          /* stylelint-disable no-duplicate-selectors */
          &:hover {
            background-color: ${linksColor};
            color: ${terciaryColor};
          }
          /* stylelint-enable no-duplicate-selectors */
        `
      );
    }}
  }

  svg {
    fill: ${({ isActive }) => (isActive ? linksColor : mainColor)};
  }
`;

export const ThemeBtn = styled.button`
  position: fixed;
  top: 2rem;
  right: 1.5rem;
  padding: 0;
  border: 0;
  border-radius: 0.5rem;
  transition: 0.25s transform ease-in-out, 0.25s opacity ease-in-out;
  background: ${backgroundColor};
  cursor: pointer;
  opacity: 0.8;
  outline: none;

  ${MEDIA_QUERIES.tablet} {
    right: 2rem;
  }

  ${MEDIA_QUERIES.landscape} {
    position: static;
  }

  &:hover {
    transform: scale(1.2);
    opacity: 1;
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
    fill: ${mainColor};
  }
`;
