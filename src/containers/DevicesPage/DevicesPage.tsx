import React from 'react';
import { RouteComponentProps } from 'react-router';
import { MapStateToProps, connect } from 'react-redux';

import IStore from 'types/IStore';
import IDevices from 'types/IDevices';
import messages from 'lib/Messages';
import IDevice from 'types/IDevice';
import mapDeviceType from 'lib/mapDeviceType';
import { changeLampState } from 'lib/deviceUtils';

import DeviceCard from 'components/DeviceCard';
import { xmpp } from 'lib/XMPP';
import ThermostatModal from 'components/ThermostatModal';
import CurtainModal from 'components/CurtainModal';

interface IParams {
  placeId: string;
}

interface IStateToProps {
  devices: IDevices;
  deviceList: string[];
}

interface IOwnProps extends RouteComponentProps<IParams> {}

type IComponentProps = IOwnProps & IStateToProps;

interface IComponentStates {
  thermostatModal: null | IDevice;
  curtainModal: null | IDevice;
}

class DevicesPage extends React.PureComponent<
  IComponentProps,
  IComponentStates
> {
  state = {
    thermostatModal: null,
    curtainModal: null,
  };

  handleClickOnDevice = (device: IDevice) => () => {
    const deviceType = mapDeviceType(device.type);
    if (deviceType === 'lamp') {
      const message = changeLampState(device);
      xmpp.updateDeviceStatus(message);
    } else if (deviceType === 'thermostat') {
      this.setState({ thermostatModal: device, curtainModal: null });
    } else if (deviceType === 'curtain') {
      this.setState({ curtainModal: device, thermostatModal: null });
    }
  };

  handleCloseModal = () => {
    this.setState({ thermostatModal: null, curtainModal: null });
  };

  render() {
    const { match, deviceList, devices } = this.props;
    const { thermostatModal, curtainModal } = this.state;
    return (
      <React.Fragment>
        <h3>{messages.devicesOf(match.params.placeId)}</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {deviceList.map((deviceId) => {
            const deviceMap = devices[deviceId];
            if (!deviceMap) {
              return null;
            }
            return (
              <React.Fragment key={deviceId}>
                {Object.values(deviceMap).map((device) => (
                  <DeviceCard
                    key={`${device.number}-${device.name}`}
                    device={device}
                    onClick={this.handleClickOnDevice(device)}
                  />
                ))}
              </React.Fragment>
            );
          })}
        </div>
        <section>
          {thermostatModal && (
            <ThermostatModal
              device={
                devices[(thermostatModal as IDevice).number][
                  (thermostatModal as IDevice).status
                ]
              }
              onClose={this.handleCloseModal}
            />
          )}
          {curtainModal && (
            <CurtainModal
              device={
                devices[(curtainModal as IDevice).number][
                  (curtainModal as IDevice).status
                ]
              }
              onClose={this.handleCloseModal}
            />
          )}
        </section>
      </React.Fragment>
    );
  }
}

const mapStateToProps: MapStateToProps<IStateToProps, IOwnProps, IStore> = (
  state,
  props
) => {
  const devices = state.devices;
  const placeName = props.match.params.placeId;
  const place = state.places[placeName];
  let deviceList: string[] = [];
  if (place) {
    deviceList = place.devices;
  }

  return { devices, deviceList };
};

export default connect(mapStateToProps)(DevicesPage);
