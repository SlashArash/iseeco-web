import React, { StatelessComponent } from "react";
import { Route, Redirect } from "react-router-dom";

export const ProtectedRoute: StatelessComponent<any> = ({
  component: Component,
  unauthenticated,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      unauthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);
