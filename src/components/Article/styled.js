import styled from "styled-components";

import { MEDIA_QUERIES, FONTS } from "../../constants";
import {
  fourtyColor,
  mainColor,
  linksColor,
  linksColorSecondary,
  shadows,
  linksColorTerciary,
} from "../../themes";

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
  color: ${fourtyColor};
  font-family: ${FONTS.main};
  font-size: 1rem;
`;

const DateText = styled.span`
  display: inline-block;
  margin-top: 0.3rem;
  margin-bottom: 1.2rem;
  color: ${fourtyColor};
  font-family: ${FONTS.main};
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
  color: ${mainColor};
  font-size: 0.8rem;
  opacity: 0.5;

  a {
    color: ${linksColor};
    text-decoration: none;
  }
`;

const Content = styled.div`
  font-family: ${FONTS.main};

  p {
    font-size: 1.1rem;
    font-weight: 500;
    line-height: 1.8;
  }

  hr {
    border-color: ${shadows};
    border-style: solid;
  }

  a {
    color: ${linksColor};

    &:visited,
    &:hover {
      color: ${linksColorTerciary};
    }

    &:focus {
      color: ${linksColorSecondary};
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
