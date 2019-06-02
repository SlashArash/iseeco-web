import React from 'react';
import { RouteComponentProps } from 'react-router';
import { MapStateToProps, connect } from 'react-redux';

import IStore from 'types/IStore';
import IDevices from 'types/IDevices';
import messages from 'lib/Messages';

import DeviceCard from 'components/DeviceCard';

interface IParams {
  placeId: string;
}

interface IStateToProps {
  devices: IDevices;
  deviceList: string[];
}

interface IOwnProps extends RouteComponentProps<IParams> {}

type IComponentProps = IOwnProps & IStateToProps;

class DevicesPage extends React.PureComponent<IComponentProps> {
  render() {
    const { match, deviceList, devices } = this.props;
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
                  />
                ))}
              </React.Fragment>
            );
          })}
        </div>
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
