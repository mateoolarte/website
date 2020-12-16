import styled from "styled-components";
import { Link } from "gatsby";

import { MEDIA_QUERIES, COLORS, FONTS } from "../../constants";

const Wrapper = styled.article`
  width: 100%;
  margin-bottom: 3rem;

  ${MEDIA_QUERIES.landscape} {
    display: flex;
    flex-direction: column;
    width: calc(100% / 3 - 2rem);
    ${({ isCover }) =>
      isCover &&
      `
      flex-direction: row;
      width: 100%;
    `}

    &:nth-child(3n) {
      margin: 0 3rem 3rem;
    }
  }
`;

const ImageContainer = styled.div`
  display: none;
  ${MEDIA_QUERIES.landscape} {
    display: block;
    width: 100%;
    height: 250px;
    margin-bottom: 1.5rem;
    ${({ isCover }) =>
      isCover &&
      `
      display: block;
      width: 50%;
      height: auto;
      min-height: 400px;
      margin-bottom: 0;
    `}
  }
`;

const Image = styled.div`
  ${MEDIA_QUERIES.landscape} {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center center;
  }
`;

const Info = styled.div`
  ${({ isCover }) =>
    isCover &&
    `
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      padding: 2rem;
      background-color: #e7edf7;
      text-align: center;
    `}

  ${MEDIA_QUERIES.landscape} {
    ${({ isCover }) =>
      isCover &&
      `
      width: 50%;
      padding: 3rem;
    `}
  }

  ${MEDIA_QUERIES.desktop} {
    ${({ isCover }) =>
      isCover &&
      `
      padding: 3rem 5rem;
    `}
  }
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.4rem;
  ${MEDIA_QUERIES.tablet} {
    margin-bottom: 1.8rem;
  }
`;

const Category = styled.span`
  display: inline-block;
  color: ${COLORS.grayDark};
  font-family: ${FONTS.secondary};
  font-size: 1rem;
  ${({ isCover }) =>
    isCover &&
    `
      margin-bottom: 1.1rem;
    `}
`;

const DateText = styled.span`
  display: inline-block;
  color: ${COLORS.grayDark};
  font-family: ${FONTS.secondary};
  font-size: 0.9rem;
  ${({ isCover }) =>
    isCover &&
    `
      margin-top: 0.3rem;
      margin-bottom: 1.2rem;
    `}

  ${MEDIA_QUERIES.tablet} {
    ${({ isCover }) =>
      isCover &&
      `
      margin-bottom: 1.6rem;
    `}
  }
`;

const Title = styled.h1`
  font-size: 1.4rem;
  ${({ isCover }) =>
    isCover &&
    `
      margin: 0;
      font-size: 1.6rem;
    `};

  ${MEDIA_QUERIES.tablet} {
    margin-bottom: 1.6rem;
    font-size: 1.6rem;
    ${({ isCover }) =>
      isCover &&
      `
      margin: 0;
      font-size: 2rem;
    `};
  }
`;

const Description = styled.p`
  margin-top: 0;
  margin-bottom: 2rem;
  color: ${COLORS.grayDark};
  font-family: ${FONTS.secondary};
  line-height: 1.4;
  ${MEDIA_QUERIES.landscape} {
    ${({ isCover }) =>
      isCover &&
      `
      margin-bottom: 1rem;
      padding: 0 1rem;
    `};
  }
`;

const Btn = styled(Link)`
  display: inline-block;
  color: ${COLORS.blue};
  font-weight: 700;
  text-decoration: none;
  ${({ isCover }) =>
    isCover &&
    `
    padding: 0.3rem 1rem;
    border: 2px solid ${COLORS.blue};
    border-radius: 0.6rem;
    background-color: ${COLORS.blue};
    color: ${COLORS.white};
    font-weight: 500;

    &:hover {
      background: none;
      color: ${COLORS.blue};
    }
    `};

  ${MEDIA_QUERIES.tablet} {
    font-size: 1.1rem;
    ${({ isCover }) =>
      isCover &&
      `
      padding: 0.5rem 1.5rem;
    `};
  }
`;

export {
  Wrapper,
  ImageContainer,
  Image,
  Info,
  Details,
  Category,
  DateText,
  Title,
  Description,
  Btn,
};
