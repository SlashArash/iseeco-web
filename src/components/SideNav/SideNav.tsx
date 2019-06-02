import React from 'react';
import { Home, Settings } from 'react-feather';

import { Wrapper, IconLink } from './styles';

export const SideNav = () => (
  <Wrapper>
    <IconLink to="/">
      <Home />
    </IconLink>
    <IconLink to="/settings">
      <Settings />
    </IconLink>
  </Wrapper>
);
