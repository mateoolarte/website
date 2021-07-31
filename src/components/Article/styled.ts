import styled from 'styled-components';

import { MEDIA_QUERIES, FONTS } from '../../constants';
import {
  fourtyColor,
  mainColor,
  linksColor,
  linksColorSecondary,
  shadows,
  linksColorTerciary,
} from '../../themes';

export const Wrapper = styled.article`
  width: 90%;
  max-width: 740px;
  margin: 3rem auto 8rem;
`;

export const Hero = styled.div`
  text-align: center;
`;

export const Category = styled.span`
  display: inline-block;
  margin-bottom: 1.1rem;
  color: ${fourtyColor};
  font-family: ${FONTS.main};
  font-size: 1rem;
`;

export const DateText = styled.span`
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

export const Title = styled.h1`
  font-size: 1.8rem;

  ${MEDIA_QUERIES.tablet} {
    font-size: 2.2rem;
  }
`;

export const ImageContainer = styled.figure`
  display: none;
  margin-bottom: 3rem;

  ${MEDIA_QUERIES.landscape} {
    display: block;
  }
`;

export const Image = styled.img`
  ${MEDIA_QUERIES.landscape} {
    max-width: 100%;
    margin-bottom: 0.5rem;
  }
`;

export const Caption = styled.figcaption`
  color: ${mainColor};
  font-size: 0.8rem;
  opacity: 0.5;

  a {
    color: ${linksColor};
    text-decoration: none;
  }
`;

export const Content = styled.div`
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
