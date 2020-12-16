import styled from "styled-components";

import { MEDIA_QUERIES, COLORS, FONTS } from "../../constants";

const Wrapper = styled.article`
  width: 90%;
  max-width: 740px;
  margin: 3rem auto 8rem;
`;

const Hero = styled.div`
  text-align: center;
`;

const Category = styled.span`
  display: inline-block;
  margin-bottom: 1.1rem;
  color: ${COLORS.grayDark};
  font-family: ${FONTS.secondary};
  font-size: 1rem;
`;

const DateText = styled.span`
  display: inline-block;
  margin-top: 0.3rem;
  margin-bottom: 1.2rem;
  color: ${COLORS.grayDark};
  font-family: ${FONTS.secondary};
  font-size: 0.9rem;

  ${MEDIA_QUERIES.tablet} {
    margin-bottom: 1.6rem;
  }
`;

const Title = styled.h1`
  font-size: 1.8rem;

  ${MEDIA_QUERIES.tablet} {
    font-size: 2.2rem;
  }
`;

const ImageContainer = styled.figure`
  display: none;
  margin-bottom: 3rem;

  ${MEDIA_QUERIES.landscape} {
    display: block;
  }
`;

const Image = styled.img`
  ${MEDIA_QUERIES.landscape} {
    max-width: 100%;
    margin-bottom: 0.5rem;
  }
`;

const Caption = styled.figcaption`
  color: ${COLORS.black};
  font-size: 0.8rem;
  opacity: 0.5;

  a {
    color: ${COLORS.blue};
    text-decoration: none;
  }
`;

const Content = styled.div`
  font-family: ${FONTS.secondary};
  font-size: 1.2rem;
  line-height: 1.8;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${FONTS.main};
  }

  hr {
    border-color: ${COLORS.lightGray};
    border-style: solid;
  }

  a {
    color: ${COLORS.blue};

    &:visited,
    &:hover {
      color: ${COLORS.blueSky};
    }

    &:focus {
      color: ${COLORS.orange};
    }
  }
`;

export {
  Wrapper,
  Hero,
  Category,
  DateText,
  Title,
  ImageContainer,
  Image,
  Caption,
  Content,
};
