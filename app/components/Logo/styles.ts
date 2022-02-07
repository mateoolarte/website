import styled from 'styled-components';
import { Link } from 'remix';

import { MEDIA_QUERIES } from '~/utils/constants';

export const Wrapper = styled(Link)`
  display: inline-block;

  picture {
    &:hover {
      opacity: 0.7;
    }
  }

  img {
    height: 35px;

    ${MEDIA_QUERIES.tablet} {
      width: 120px;
      height: auto;
    }

    ${MEDIA_QUERIES.landscape} {
      width: 190px;
    }
  }
`;
