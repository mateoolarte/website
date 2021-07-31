import styled from "styled-components";

import { MEDIA_QUERIES } from "../../constants";
import { mainColor, shadows } from "../../themes";

export const Wrapper = styled.a`
  display: flex;
  width: 100%;
  margin-bottom: 2.5rem;
  border-radius: 0.6rem;
  transition: transform 0.45s ease-in-out, box-shadow 0.45s ease-in-out;
  color: ${mainColor};
  box-shadow: 0 3px 12px ${shadows};
  text-decoration: none;

  ${MEDIA_QUERIES.tablet} {
    width: calc(50% - 20px);
    height: 280px;
  }

  ${MEDIA_QUERIES.landscape} {
    height: 330px;
  }

  ${MEDIA_QUERIES.desktop} {
    width: calc(50% - 40px);
    margin-bottom: 5rem;
  }

  &:nth-child(odd) {
    ${MEDIA_QUERIES.tablet} {
      margin-right: 40px;
    }

    ${MEDIA_QUERIES.desktop} {
      margin-right: 80px;
    }
  }

  &:hover {
    transform: scale(1.01);
    box-shadow: 0 3px 50px ${shadows};

    .backgroundImageProject {
      opacity: 1;
    }
  }
`;

export const Info = styled.div`
  width: 100%;
  padding: 1.5rem;
  text-align: center;

  ${MEDIA_QUERIES.landscape} {
    width: 50%;
    text-align: left;
  }
`;

export const Icon = styled.img`
  height: 45px;
  margin-bottom: 0.5rem;
`;

export const Name = styled.h3`
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-size: 2rem;
  font-weight: 600;
`;

export const Details = styled.p`
  margin-top: 0;
  margin-bottom: 2rem;
  font-size: 0.9rem;
  font-weight: 300;
`;

export const Description = styled.p`
  margin-top: 0;
  font-size: 0.9rem;
  font-weight: 300;
  line-height: 1.4;
`;

export const BgImageContainer = styled.div`
  display: none;

  ${MEDIA_QUERIES.landscape} {
    display: block;
    width: 50%;
    border-radius: 0 0.6rem 0.6rem 0;
    border-left: 1px solid ${shadows};
  }
`;

export const BgImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  border-radius: 0 0.6rem 0.6rem 0;
  transition: opacity 0.37s ease-in-out;
  opacity: 0.5;
`;
