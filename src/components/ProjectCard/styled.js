import styled from "styled-components";

import { MEDIA_QUERIES, COLORS } from "../../constants";

const Wrapper = styled.a`
  display: flex;
  width: 100%;
  margin-bottom: 2.5rem;
  border-radius: 0.6rem;
  color: ${COLORS.black};
  box-shadow: 0 3px 12px ${COLORS.lightGray};
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
    .backgroundImageProject {
      opacity: 1;
    }
  }
`;

const Info = styled.div`
  width: 100%;
  padding: 1.5rem;
  text-align: center;

  ${MEDIA_QUERIES.landscape} {
    width: 50%;
    text-align: left;
  }
`;

const Icon = styled.img`
  height: 45px;
  margin-bottom: 0.5rem;
`;

const Name = styled.h3`
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-size: 2rem;
  font-weight: 600;
`;

const Details = styled.p`
  margin-top: 0;
  margin-bottom: 2rem;
  font-size: 0.9rem;
  font-weight: 300;
`;

const Description = styled.p`
  margin-top: 0;
  font-size: 0.9rem;
  font-weight: 300;
  line-height: 1.4;
`;

const BgImageContainer = styled.div`
  display: none;

  ${MEDIA_QUERIES.landscape} {
    display: block;
    width: 50%;
    border-radius: 0 0.6rem 0.6rem 0;
    box-shadow: -3px 0 12px ${COLORS.lightGray};
  }
`;

const BgImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  border-radius: 0 0.6rem 0.6rem 0;
  opacity: 0.5;
`;

export {
  Wrapper,
  Info,
  Icon,
  Name,
  Details,
  Description,
  BgImageContainer,
  BgImage,
};
