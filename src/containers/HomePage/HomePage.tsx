import React from 'react';

import { StatusBox } from 'components/StatusBox';

export class HomePage extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <StatusBox />
        <h1>Home Page</h1>
      </React.Fragment>
    );
  }
}
