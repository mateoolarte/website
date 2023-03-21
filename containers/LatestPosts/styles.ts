import styled from 'styled-components';
import Link from 'next/link'

import { linksColor, backgroundColor } from '@/utils/themes';

export const Heading = styled.h2`
  margin-top: 0;
  font-size: 2rem;
`;

export const PostsWrapper = styled.div`
  margin-bottom: 5rem;
`;

export const Btn = styled(Link)`
  display: inline-block;
  padding: 0.8rem 2rem;
  border: 2px solid ${linksColor};
  border-radius: 0.6rem;
  background-color: ${linksColor};
  color: ${backgroundColor};
  text-decoration: none;

  &:hover {
    background: transparent;
    color: ${linksColor};
  }
`;
