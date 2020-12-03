import styled from "styled-components";

import { MEDIA_QUERIES } from "../../constants";

const Wrapper = styled.footer`
  max-width: 1180px;
  width: 90%;
  margin: 0 auto;
  text-align: center;
`;

const Heading = styled.h3`
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1.6rem;
`;

const Subtitle = styled.p`
  margin-top: 0;
  margin-bottom: 1.5rem;
  color: #939393;
  font-size: 1.1rem;
`;

const SocialLinks = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 4rem;
  padding: 0;
  list-style-type: none;
`;

const SocialItem = styled.li`
  margin: 0 1rem;
`;

const SocialLink = styled.a`
  display: inline-block;
`;

const SocialIcon = styled.span`
  display: inline-block;

  svg {
    width: 2.5rem;
    height: 2.5rem;

    &:hover {
      fill: #1755b2;
    }
  }
`;

const Copyright = styled.p`
  margin-top: 0;
  margin-bottom: 6rem;
  color: #939393;
  line-height: 1.8;

  ${MEDIA_QUERIES.landscape} {
    margin-bottom: 2rem;
  }
`;

export {
  Wrapper,
  Heading,
  Subtitle,
  SocialLinks,
  SocialItem,
  SocialLink,
  SocialIcon,
  Copyright,
};
