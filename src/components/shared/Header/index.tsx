import React from 'react';

import { Nav } from '../Nav';
import { Logo } from '../Logo';

import { Wrapper } from './styled';

interface HeaderProps {
  currentPage: string;
}

export function Header({ currentPage }: HeaderProps) {
  const pageLocation = currentPage || '';

  return (
    <Wrapper>
      <Logo pageLocation={pageLocation} currentPage={currentPage} />
      <Nav currentPage={currentPage} />
    </Wrapper>
  );
}
