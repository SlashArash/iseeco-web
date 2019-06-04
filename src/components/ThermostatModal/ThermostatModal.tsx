import React from 'react';
import produce from 'immer';

import { xmpp } from 'lib/XMPP';
import { changeThermostatState } from 'lib/deviceUtils';
import { updateDevice } from 'store/devices/actions';
import IDevice from 'types/IDevice';

import messages from 'lib/Messages';
import { MainWrapper, ButtonWrapper, CurrentTemp } from './styles';
import Cooling from 'components/Cooling';
import FanSpeed from 'components/FanSpeed';
import Power from 'components/Power';
import Temperature from 'components/Temperature';
import Modal from 'components/Modal';

interface IComponentProps {
  device: IDevice;
  onClose: () => void;
}

class ThermostatConfigScreen extends React.PureComponent<IComponentProps> {
  timer: any;

  handleChangePower = (active: 'on' | 'off', fanSpeed: number) => {
    const device = produce(this.props.device, (draft) => {
      draft.active = active;
      draft.fanSpeed = fanSpeed;
    });
    const message = changeThermostatState(device);
    xmpp.updateDeviceStatus(message);
  };

  handleChangeTemperature = (newValue: number) => {
    if (this.timer) {
      clearTimeout(this.timer);
    }

    const device = produce(this.props.device, (draft) => {
      draft.toTemperature = newValue;
    });
    const message = changeThermostatState(device);
    const msgParts = message.split('-');
    const deviceNumber = msgParts[2];
    // this.props.dispatch(
    //   updateDevice(
    //     deviceNumber,
    //     msgParts[3],
    //     msgParts[4],
    //     msgParts[5],
    //     msgParts[6],
    //     msgParts[7]
    //   )
    // );

    this.timer = setTimeout(() => xmpp.updateDeviceStatus(message), 1000);
  };

  handleChangeFanSpeed = (newSpeed: number) => {
    const device = produce(this.props.device, (draft) => {
      draft.fanSpeed = newSpeed;
    });
    const message = changeThermostatState(device);
    xmpp.updateDeviceStatus(message);
  };

  handleChangeCooling = (newValue: boolean) => {
    const device = produce(this.props.device, (draft) => {
      draft.cooling = newValue;
    });
    const message = changeThermostatState(device);
    xmpp.updateDeviceStatus(message);
  };

  render() {
    const { device, onClose } = this.props;

    return (
      <Modal
        onClose={onClose}
        title={messages.configurationOf(device.name)}
        isActive={true}
      >
        <MainWrapper>
          <ButtonWrapper>
            <Cooling
              active={!!device.cooling}
              onChange={this.handleChangeCooling}
            />
            <FanSpeed
              speed={device.fanSpeed as number}
              onChange={this.handleChangeFanSpeed}
            />
          </ButtonWrapper>
          <div>
            <CurrentTemp>{device.temperature} °C</CurrentTemp>
          </div>
          <Temperature
            currentTemperature={device.temperature as number}
            toTemperature={device.toTemperature as number}
            onChange={this.handleChangeTemperature}
          />
          <Power
            active={device.active}
            fanSpeed={device.fanSpeed as number}
            onChange={this.handleChangePower}
          />
        </MainWrapper>
      </Modal>
    );
  }
}

export default ThermostatConfigScreen;
