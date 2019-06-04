import React from 'react';

import IDevice from 'types/IDevice';
import messages from 'lib/Messages';
import { xmpp } from 'lib/XMPP';
import { changeCurtainState } from 'lib/deviceUtils';

import CircleButton from 'components/CircleButton';
import Modal from 'components/Modal';
import { ArrowUp, Pause, ArrowDown } from 'react-feather';

interface IComponentProps {
  device: IDevice;
  onClose: () => void;
}

class CurtainModal extends React.PureComponent<IComponentProps> {
  handleChangeState = (state: 'open' | 'pause' | 'close') => () => {
    const { device } = this.props;
    const msg = changeCurtainState(device, state);

    if (msg.length > 0) {
      xmpp.updateDeviceStatus(msg);
    }
  };

  render() {
    const { device, onClose } = this.props;
    return (
      <Modal
        onClose={onClose}
        title={messages.configurationOf(device.name)}
        isActive={true}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignContent: 'center',
            flexGrow: 1,
          }}
        >
          <CircleButton
            onPress={this.handleChangeState('open')}
            label={messages.open}
          >
            <ArrowUp />
          </CircleButton>
          <CircleButton
            onPress={this.handleChangeState('pause')}
            label={messages.pause}
          >
            <Pause />
          </CircleButton>
          <CircleButton
            onPress={this.handleChangeState('close')}
            label={messages.close}
          >
            <ArrowDown />
          </CircleButton>
        </div>
      </Modal>
    );
  }
}

export default CurtainModal;
