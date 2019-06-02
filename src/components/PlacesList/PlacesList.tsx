import React, { StatelessComponent } from 'react';

import IPlaces from '../../types/IPlaces';

import messages from 'lib/Messages';
import PlaceCard from 'components/PlaceCard';

interface IComponentProps {
  places: IPlaces;
  onClickOnAPlace: (placeId: string) => () => void;
}

const PlacesList: StatelessComponent<IComponentProps> = ({
  places,
  onClickOnAPlace,
}) => (
  <React.Fragment>
    <h3>{messages.rooms}</h3>
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}
    >
      {Object.values(places).map((place) => (
        <PlaceCard
          key={place.name}
          place={place}
          onClick={onClickOnAPlace(place.name)}
        />
      ))}
    </div>
  </React.Fragment>
);

export default PlacesList;
