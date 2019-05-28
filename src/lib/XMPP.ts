import { client, xml, IClient } from '@xmpp/client';
import { Dispatch } from 'redux';

interface IXMPP {
  userName: string;
  password: string;
  serverName: string;
  connection: null | IClient;
  dispatch: null | Dispatch;
  connect: () => Promise<any>;
  login: (
    dispatch: Dispatch,
    password: string,
    serverName: string,
    userName: string
  ) => Promise<any>;
  message: (msg: string) => Promise<any>;
}

export const xmpp: IXMPP = {
  userName: '',
  password: '',
  serverName: '',
  connection: null,
  dispatch: null,

  /* tslint:disable:no-console */
  connect: (): Promise<any> => {
    xmpp.connection = client({
      service: 'wss://jabb.im/websocket',
      domain: 'jabb.im',
      password: xmpp.password,
      username: xmpp.userName,
    });
    xmpp.connection.on('message', (status: string) => {
      console.log('message', status);
    });
    xmpp.connection.on('data', (status: string) => {
      console.log('data', status);
    });
    xmpp.connection.on('status', (status: string) => {
      console.log('🛈', 'status of ws', status);
    });
    xmpp.connection.on('error', (err: any) => {
      console.error(err.toString());
    });
    xmpp.connection.on('online', async (address: any) => {
      await xmpp.connection!.send(xml('presence'));
    });
    xmpp.connection.on('input', (input: string) => {
      console.debug('⮈', input);
    });
    xmpp.connection.on('stanza', (stanza: any) => {
      console.log(stanza.toString());
      if (!stanza.is('message')) {
        return;
      }
    });

    return xmpp.connection.start();
  },
  /* tslint:enable:no-console */

  login: (
    dispatch: Dispatch,
    password: string,
    serverName: string,
    userName: string
  ) => {
    xmpp.dispatch = dispatch;
    xmpp.password = password;
    xmpp.serverName = serverName;
    xmpp.userName = userName;

    return xmpp.connect();
  },

  message: (msg: string): Promise<any> => {
    const message = xml(
      'message',
      { type: 'chat', to: `${xmpp.serverName}@jabb.im` },
      xml('body', {}, msg)
    );
    if (xmpp.connection) {
      return xmpp.connection.send(message);
    }
    return Promise.reject();
  },
};
