import React from 'react';
import { connect, MapStateToProps } from 'react-redux';

import { StatusBox } from 'components/StatusBox';
import PlacesList from 'components/PlacesList';
import IStore from 'types/IStore';
import IPlaces from 'types/IPlaces';

interface IStateToProps {
  places: IPlaces;
}

type IComponentProps = IStateToProps;

export class HomePage extends React.PureComponent<IComponentProps> {
  handleClickOnAPlace = (placeId: string) => () => {
    //
  };

  render() {
    const { places } = this.props;
    return (
      <React.Fragment>
        <StatusBox />
        <PlacesList
          places={places}
          onClickOnAPlace={this.handleClickOnAPlace}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps: MapStateToProps<IStateToProps, undefined, IStore> = (
  state
) => {
  const places = state.places;
  return { places };
};

export default connect(mapStateToProps)(HomePage);
