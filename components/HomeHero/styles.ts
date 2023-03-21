import styled from 'styled-components';

import { MEDIA_QUERIES } from '@/utils/constants';
import { linksColor, secondaryColor } from '@/utils/themes';

export const Wrapper = styled.div`
  margin: 2rem 0 4rem;

  ${MEDIA_QUERIES.tablet} {
    margin: 5rem 0 7rem;
  }
`;

export const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 0.5rem;
  line-height: 1.2;

  ${MEDIA_QUERIES.tablet} {
    font-size: 2.4rem;
  }

  strong {
    color: ${linksColor};
  }
`;

export const Subtitle = styled.p`
  margin-top: 0;
  color: ${secondaryColor};
  line-height: 1.5;
  font-size: 1.1rem;

  ${MEDIA_QUERIES.landscape} {
    font-size: 1.2rem;
  }
`;
