import React from 'react';

import { Body, Container } from './styles';
import { SideNav } from 'components/SideNav';

export class Main extends React.PureComponent {
  render() {
    return (
      <Body>
        <SideNav />
        <Container>{this.props.children}</Container>
      </Body>
    );
  }
}
