import React from 'react';
import { Home, Settings } from 'react-feather';
import { Link } from 'react-router-dom';

import { Wrapper } from './styles';

export const SideNav = () => (
  <Wrapper>
    <Link to="/">
      <Home />
    </Link>
    <Link to="/settings">
      <Settings />
    </Link>
  </Wrapper>
);
