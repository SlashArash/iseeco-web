import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from 'store/configureStore';

import { ProtectedRoute } from 'components/ProtectedRoute';
import { Loading } from 'components/Loading';
import { Login } from 'components/Login';
import HomePage from 'containers/HomePage';
import { SettingsPage } from 'containers/SettingsPage';
import { NotFound } from 'components/NotFound';
import { Main } from 'components/Main';

interface IComponentStates {
  connected: boolean;
}

export class App extends React.PureComponent<undefined, IComponentStates> {
  state = {
    connected: false,
  };

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<Loading />} persistor={persistor}>
          <Router>
            <Main>
              <Switch>
                <ProtectedRoute path="/" exact={true} component={HomePage} />
                <ProtectedRoute path="/settings" component={SettingsPage} />
                <Route path="/login" component={Login} />
                <Route component={NotFound} />
              </Switch>
            </Main>
          </Router>
        </PersistGate>
      </Provider>
    );
  }
}
