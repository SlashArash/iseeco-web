import React from 'react';
import { Home, Settings, LogOut } from 'react-feather';
import { Link } from 'react-router-dom';

import { Wrapper } from './styles';

export const SideNav = () => (
  <Wrapper>
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Link to="/">
        <Home />
      </Link>
      <Link to="/settings">
        <Settings />
      </Link>
    </div>
    <Link to="/logout">
      <LogOut />
    </Link>
  </Wrapper>
);
