import styled from 'styled-components';
import { Link } from 'remix';

export const Wrapper = styled(Link)`
  display: inline-block;

  picture {
    &:hover {
      opacity: 0.7;
    }
  }

  img {
    height: 35px;
  }
`;
