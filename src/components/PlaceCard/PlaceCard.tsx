import React, { StatelessComponent } from 'react';
import { connect, MapStateToProps } from 'react-redux';

import IPlace from 'types/IPlace';
import IStore from 'types/IStore';
import IDevices from 'types/IDevices';
import messages from 'lib/Messages';
import { colors } from 'utils/theme/colors';

import { Card, CardBody, ImageIcon } from './styles';

import bath from 'assets/images/icons/bath-dark.png';
import bed from 'assets/images/icons/bed-dark.png';
import washing from 'assets/images/icons/washing-dark.png';
import tv from 'assets/images/icons/tv-dark.png';
import unknown from 'assets/images/icons/unknown-dark.png';

interface IOwnProps {
  place: IPlace;
  onClick: () => void;
}

interface IStateToProps {
  devices: IDevices;
}

type IComponentProps = IOwnProps & IStateToProps;

const requireIcon = (place: IPlace) => {
  if (place.iconNumber === '1') {
    return bath;
  } else if (place.iconNumber === '2') {
    return bed;
  } else if (place.iconNumber === '3') {
    return washing;
  } else if (place.iconNumber === '4') {
    return tv;
  }
  return unknown;
};

const PlaceCard: StatelessComponent<IComponentProps> = ({
  place,
  onClick,
  devices,
}) => {
  const icon = requireIcon(place);
  const devicesNumber = place.devices.reduce(
    (sum: number, deviceId: string) => {
      Object.keys(devices[deviceId]).forEach(() => {
        sum += 1;
      });
      return sum;
    },
    0
  );
  return (
    <Card onClick={onClick}>
      <CardBody>
        <div>
          <p>{place.name}</p>
          <p style={{ color: colors.smoke, fontSize: 10 }}>
            {devicesNumber > 0
              ? `${devicesNumber} ${messages.device}`
              : `${messages.without} ${messages.device}`}
          </p>
        </div>
        <ImageIcon src={icon} />
      </CardBody>
    </Card>
  );
};

const mapStateToProps: MapStateToProps<IStateToProps, IOwnProps, IStore> = (
  state
) => {
  const devices: IDevices = state.devices;
  return { devices };
};

export default connect(mapStateToProps)(PlaceCard);
