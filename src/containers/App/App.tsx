import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from 'store/configureStore';
import { XMPP } from 'lib/XMPP';

import { Main } from './styles';
import { Login } from 'components/Login';
import { ProtectedRoute } from 'components/ProtectedRoute';
import { Loading } from 'components/Loading';

interface IComponentStates {
  connected: boolean;
}

function Index() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

export class App extends React.PureComponent<undefined, IComponentStates> {
  state = {
    connected: false,
  };
  xmpp: any = undefined;

  handleChangeConnection = () => {
    this.xmpp = new XMPP('slasharash', '123987456', 'kadkhodaei');
    this.xmpp.connect().then(() => {
      this.setState({ connected: true });
    });
  };

  handleSendMessage = () => {
    this.xmpp
      .message('client&iseeco6&iseecoserver6&00:00:00&0&&client')
      .then(() => {
        console.log('the message sent');
      });
  };

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={<Loading />} persistor={persistor}>
          <Router>
            <Main>
              <ProtectedRoute path="/" exact={true} component={Index} />
              <ProtectedRoute path="/setting" component={About} />
              <Route path="/login" component={Login} />
            </Main>
          </Router>
        </PersistGate>
      </Provider>
    );
  }
}
