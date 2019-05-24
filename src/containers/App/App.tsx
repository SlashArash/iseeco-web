import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./App.css";
import { XMPP } from "../../lib/XMPP";

import { Login } from "../../components/Login";
import { ProtectedRoute } from "../../components/ProtectedRoute";

interface IComponentStates {
  connected: boolean;
}

function Index() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export class App extends React.PureComponent<undefined, IComponentStates> {
  state = {
    connected: false
  };
  xmpp: any = undefined;

  handleChangeConnection = () => {
    this.xmpp = new XMPP("slasharash", "123987456", "kadkhodaei");
    this.xmpp.connect().then(() => {
      this.setState({ connected: true });
    });
  };

  handleSendMessage = () => {
    this.xmpp
      .message("client&iseeco6&iseecoserver6&00:00:00&0&&client")
      .then(() => {
        console.log("the message sent");
      });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about/">About</Link>
                </li>
                <li>
                  <Link to="/users/">Users</Link>
                </li>
              </ul>
            </nav>
            <button onClick={this.handleChangeConnection}>
              {this.state.connected ? "disconnect" : "connect"}
            </button>
            <button onClick={this.handleSendMessage}>say hello</button>
            <p>
              Connection Status is
              <code>
                {this.state.connected ? " connected" : " disconnected"}
              </code>
              .
            </p>
          </header>
          <main>
            <Route path="/" exact component={Index} />
            <ProtectedRoute
              path="/about/"
              component={About}
              unauthenticated={true}
            />
            <ProtectedRoute
              path="/users/"
              component={Users}
              unauthenticated={false}
            />
            <Route path="/login" component={Login} />
          </main>
        </div>
      </Router>
    );
  }
}
