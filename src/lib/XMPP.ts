import { client, xml, IClient } from '@xmpp/client';
import { Dispatch } from 'redux';

import IDevice from 'types/IDevice';
import { updateTime, updateScenario } from 'store/app/actions';
import { updateConnection } from 'store/connection/actions';
import { updateDevice } from 'store/devices/actions';
import { addPlaces } from 'store/places/actions';
import getXmlMessage from './getXmlMessage';
import xmlToJson from './xmlToJson';
import { normalizePlaces } from './storeUtils';

interface IXMPP {
  connection: null | IClient;
  dispatch: null | Dispatch;
  lastUpdateTime: string | null;
  password: string;
  serverName: string;
  userName: string;
  connect: () => Promise<any>;
  getPlaces: () => void;
  getDeviceStatus: (deviceNumber: string) => void;
  login: (
    dispatch: Dispatch,
    password: string,
    serverName: string,
    userName: string
  ) => Promise<any>;
  message: (msg: string) => Promise<any>;
  packMessage: (message: string, type: string) => string;
  updateDeviceStatus: (msg: string) => void;
}

export const xmpp: IXMPP = {
  userName: '',
  password: '',
  serverName: '',
  connection: null,
  dispatch: null,
  lastUpdateTime: null,

  /* tslint:disable:no-console */
  connect: (): Promise<any> => {
    xmpp.connection = client({
      service: 'wss://jabb.im/websocket',
      domain: 'jabb.im',
      password: xmpp.password,
      username: xmpp.userName,
    });
    xmpp.connection.on('status', (status: string) => {
      console.log('🛈', 'status of ws', status);
    });
    xmpp.connection.on('error', (err: any) => {
      console.error(err.toString());
    });
    xmpp.connection.on('online', async (address: any) => {
      await xmpp.connection!.send(xml('presence'));
      xmpp.dispatch!(updateConnection('internet', true));
    });

    xmpp.connection.on('stanza', (stanza: any) => {
      if (!stanza.is('message')) {
        return;
      }
      const message = stanza.children[0].children[0];
      const parts = message.split('&');
      const msg = parts[5];
      const msgType = parts[4];
      xmpp.lastUpdateTime = parts[3];
      if (parts.length === 7 || parts[0] === 'server') {
        if (msgType === '0') {
          const xmls = getXmlMessage(msg);
          if (xmls) {
            const json: any = xmlToJson(xmls);
            const scenarioId =
              json.settings.currentscenario['@attributes'].value;
            const normalizedData = normalizePlaces(json.settings.places as any);
            normalizedData[1].forEach((device: IDevice) => {
              xmpp.getDeviceStatus(device.number);
            });
            xmpp.dispatch!(addPlaces(normalizedData));
            xmpp.dispatch!(updateTime(xmpp.lastUpdateTime));
            xmpp.dispatch!(updateScenario(Number(scenarioId)));
          }
        } else if (msgType === '2') {
          const msgParts = msg.split('-');
          const deviceNumber = msgParts[2];
          xmpp.dispatch!(
            updateDevice(
              deviceNumber,
              msgParts[3],
              msgParts[4],
              msgParts[5],
              msgParts[6],
              msgParts[7]
            )
          );
        } else if (msgType === '1') {
          xmpp.dispatch!(updateScenario(Number(msg)));
        }
      }
    });

    return xmpp.connection.start();
  },
  /* tslint:enable:no-console */

  getPlaces: () => {
    const msg = `client&${xmpp.userName}&${xmpp.serverName}&00:00:00&0&&client`;
    xmpp.message(msg);
  },

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
  getDeviceStatus: (deviceNumber: string) => {
    const message = `K-S-${deviceNumber}-0-0-48-48-0-0`;
    const packedMessage = xmpp.packMessage(message, '2');
    xmpp.message(packedMessage);
  },
  packMessage: (message: string, type: string): string => {
    return `client&${xmpp.userName}&${xmpp.serverName}&${
      xmpp.lastUpdateTime
    }&${type}&${message}&client`;
  },
  updateDeviceStatus: (msg: string) => {
    const message = xmpp.packMessage(msg, '2');
    xmpp.message(message);
  },
};
