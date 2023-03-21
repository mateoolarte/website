import styled, { css } from "styled-components";
import Link from "next/link";

import { MEDIA_QUERIES } from "@/utils/constants";
import {
  linksColor,
  terciaryColor,
  fourtyColor,
  shadows,
} from "@/utils/themes";

export const Wrapper = styled.article`
  width: 100%;
  margin-bottom: 3rem;

  ${MEDIA_QUERIES.landscape} {
    display: flex;
    flex-direction: column;
    width: calc(100% / 3 - 2rem);
    ${({ isCover }) =>
      isCover &&
      css`
        flex-direction: row;
        width: 100%;
      `}

    &:nth-child(3n) {
      margin: 0 3rem 3rem;
    }
  }
`;

export const ImageContainer = styled.div`
  display: none;
  ${MEDIA_QUERIES.landscape} {
    display: block;
    width: 100%;
    height: 250px;
    margin-bottom: 1.5rem;
    ${({ isCover }) =>
      isCover &&
      css`
        display: block;
        width: 50%;
        height: auto;
        min-height: 400px;
        margin-bottom: 0;
      `}
  }
`;

export const Image = styled.div`
  ${MEDIA_QUERIES.landscape} {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center center;
  }
`;

export const Info = styled.div`
  ${({ isCover }) =>
    isCover &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      padding: 2rem;
      background-color: ${shadows};
      text-align: center;
    `}

  ${MEDIA_QUERIES.landscape} {
    ${({ isCover }) =>
      isCover &&
      css`
        width: 50%;
        padding: 3rem;
      `}
  }

  ${MEDIA_QUERIES.desktop} {
    ${({ isCover }) =>
      isCover &&
      css`
        padding: 3rem 5rem;
      `}
  }
`;

export const Details = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.4rem;
  ${MEDIA_QUERIES.tablet} {
    margin-bottom: 1.8rem;
  }
`;

export const Category = styled.span`
  display: inline-block;
  color: ${fourtyColor};
  font-size: 1rem;
  ${({ isCover }) =>
    isCover &&
    css`
      margin-bottom: 1.1rem;
    `}
`;

export const DateText = styled.span`
  display: inline-block;
  color: ${fourtyColor};
  font-size: 0.9rem;
  ${({ isCover }) =>
    isCover &&
    css`
      margin-top: 0.3rem;
      margin-bottom: 1.2rem;
    `}

  ${MEDIA_QUERIES.tablet} {
    ${({ isCover }) =>
      isCover &&
      css`
        margin-bottom: 1.6rem;
      `}
  }
`;

export const Title = styled.h1`
  font-size: 1.4rem;
  ${({ isCover }) =>
    isCover &&
    css`
      margin: 0;
      font-size: 1.6rem;
    `};

  ${MEDIA_QUERIES.tablet} {
    margin-bottom: 1.6rem;
    font-size: 1.6rem;
    ${({ isCover }) =>
      isCover &&
      css`
        margin: 0;
        font-size: 2rem;
      `};
  }
`;

export const Description = styled.p`
  margin-top: 0;
  margin-bottom: 2rem;
  color: ${fourtyColor};
  line-height: 1.5;

  ${MEDIA_QUERIES.landscape} {
    ${({ isCover }) =>
      isCover &&
      css`
        margin-bottom: 1rem;
        padding: 0 1rem;
      `};
  }
`;

export const Btn = styled(Link)`
  display: inline-block;
  color: ${linksColor};
  font-weight: 700;
  text-decoration: none;

  ${({ isCover }) =>
    isCover &&
    css`
      padding: 0.3rem 1rem;
      border: 2px solid ${linksColor};
      border-radius: 0.6rem;
      background-color: ${linksColor};
      color: ${terciaryColor};
      font-weight: 500;

      &:hover {
        background: none;
        color: ${linksColor};
      }
    `};

  ${MEDIA_QUERIES.tablet} {
    font-size: 1.1rem;
    ${({ isCover }) =>
      isCover &&
      css`
        padding: 0.5rem 1.5rem;
      `};
  }
`;
