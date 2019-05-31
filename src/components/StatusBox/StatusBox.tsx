import * as React from 'react';
import { connect, MapStateToProps } from 'react-redux';

import { IConnection } from 'types/IConnection';
import IDevices from 'types/IDevices';
import IDevice from 'types/IDevice';
import IStore from 'types/IStore';
import messages from 'lib/Messages';

import {
  Container,
  Image,
  TextWrapper,
  MainText,
  LightText,
  TextContainer,
} from './styles';
import logo from 'assets/images/iseeco.png';

interface IStateToProps {
  connection: IConnection;
  devices: IDevices;
}

type IComponentProps = IStateToProps;

class StatusBox extends React.PureComponent<IComponentProps> {
  render(): React.ReactNode {
    const { connection, devices } = this.props;
    const activeDevices = Object.values(devices).reduce(
      (sum: number, deviceMap: { [status: string]: IDevice }) => {
        Object.values(deviceMap).forEach((device: IDevice) => {
          if (device.active === 'on') {
            sum += 1;
          }
        });
        return sum;
      },
      0
    );
    return (
      <Container connected={connection.internet}>
        <TextWrapper>
          <TextContainer>
            <MainText>{messages.smartHomeSystem}</MainText>
          </TextContainer>
          <LightText>
            {messages.activeDevices}: {activeDevices}
          </LightText>
          <LightText>
            {messages.networkConnection}: {connection.internet ? '✓' : '×'}
          </LightText>
        </TextWrapper>
        <Image src={logo} />
      </Container>
    );
  }
}

const mapStateToProps: MapStateToProps<IStateToProps, undefined, IStore> = (
  state
) => {
  const devices = state.devices;
  const connection = state.connection;

  return { devices, connection };
};

export const connectedComponent = connect(mapStateToProps)(StatusBox);
