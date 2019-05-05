import React from "react";

import "./App.css";
import { XMPP } from "../../lib/XMPP";

interface IComponentStates {
  connected: boolean;
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
      <div className="App">
        <header className="App-header">
          <button onClick={this.handleChangeConnection}>
            {this.state.connected ? "disconnect" : "connect"}
          </button>
          <button onClick={this.handleSendMessage}>say hello</button>
          <p>
            Connection Status is
            <code>{this.state.connected ? " connected" : " disconnected"}</code>
            .
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
