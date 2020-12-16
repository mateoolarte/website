import styled from "styled-components";

import { MEDIA_QUERIES, COLORS } from "../../constants";

const Wrapper = styled.div`
  margin: 4rem 0 6rem;

  ${MEDIA_QUERIES.tablet} {
    margin: 8rem 0 10rem;
  }
`;

const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 0.5rem;
  line-height: 1;

  ${MEDIA_QUERIES.tablet} {
    font-size: 2.2rem;
  }

  strong {
    color: ${COLORS.blue};
  }
`;

const Subtitle = styled.p`
  margin-top: 0;
  color: ${COLORS.gray};

  ${MEDIA_QUERIES.tablet} {
    font-size: 1.1rem;
  }
`;

export { Wrapper, Title, Subtitle };
