import React, { StatelessComponent } from 'react';
import { connect, MapStateToProps } from 'react-redux';

import IPlace from 'types/IPlace';
import IStore from 'types/IStore';
import IDevices from 'types/IDevices';
import messages from 'lib/Messages';
import { colors } from 'utils/theme/colors';

import { Card, CardBody, ImageIcon } from './styles';

interface IOwnProps {
  place: IPlace;
  onPress: () => void;
}

interface IStateToProps {
  devices: IDevices;
}

type IComponentProps = IOwnProps & IStateToProps;

// const requireIcon = (place: IPlace) => {
//   let icon = require(`../../../assets/images/icons/unknown-dark.png`);

//   if (place.iconNumber === '1') {
//     icon = require(`../../../assets/images/icons/bath-dark.png`);
//   } else if (place.iconNumber === '2') {
//     icon = require(`../../../assets/images/icons/bed-dark.png`);
//   } else if (place.iconNumber === '3') {
//     icon = require(`../../../assets/images/icons/washing-dark.png`);
//   } else if (place.iconNumber === '4') {
//     icon = require(`../../../assets/images/icons/tv-dark.png`);
//   }
//   return icon;
// };

const PlaceCard: StatelessComponent<IComponentProps> = ({
  place,
  onPress,
  devices,
}) => {
  // const icon = requireIcon(place);
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
    <Card onClick={onPress}>
      <CardBody>
        {/* <ImageIcon src={icon} /> */}
        <div>
          <p>{place.name}</p>
          <p style={{ color: colors.smoke, fontSize: 10 }}>
            {devicesNumber > 0
              ? `${devicesNumber} ${messages.device}`
              : `${messages.without} ${messages.device}`}
          </p>
        </div>
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
