import styled from 'styled-components';

import { MEDIA_QUERIES } from '~/utils/constants';
import { linksColor, secondaryColor } from '~/utils/themes';

export const Wrapper = styled.div`
  margin: 4rem 0 6rem;

  ${MEDIA_QUERIES.tablet} {
    margin: 8rem 0 10rem;
  }
`;

export const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 0.5rem;
  line-height: 1;

  ${MEDIA_QUERIES.tablet} {
    font-size: 2.8rem;
  }

  strong {
    color: ${linksColor};
  }
`;

export const Subtitle = styled.p`
  margin-top: 0;
  color: ${secondaryColor};

  ${MEDIA_QUERIES.tablet} {
    font-size: 1.2rem;
  }
`;
