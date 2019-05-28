import React, { StatelessComponent } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect, MapStateToProps } from 'react-redux';
import IStore from 'types/IStore';

interface IStateProps {
  authorized: boolean;
}

const ProtectedRoute: StatelessComponent<any> = ({
  authorized,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      authorized ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

const mapStateToProps: MapStateToProps<IStateProps, any, IStore> = (state) => {
  const userName = state.app.userName;
  const password = state.app.password;
  const authorized = !!userName && !!password;
  return { authorized };
};

export const connectedComponent = connect(mapStateToProps)(ProtectedRoute);
