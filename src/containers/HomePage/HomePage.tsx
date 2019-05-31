import React from 'react';
import { connect, MapStateToProps } from 'react-redux';
import { Dispatch } from 'redux';

import IStore from 'types/IStore';
import IPlaces from 'types/IPlaces';
import { xmpp } from 'lib/XMPP';

import { StatusBox } from 'components/StatusBox';
import PlacesList from 'components/PlacesList';
import { login } from 'store/app/actions';

interface IOwnProps {
  dispatch: Dispatch;
}

interface IStateToProps {
  connected: boolean;
  password: string | null;
  places: IPlaces;
  serverName: string | null;
  userName: string | null;
}

type IComponentProps = IOwnProps & IStateToProps;

export class HomePage extends React.PureComponent<IComponentProps> {
  componentDidMount = async () => {
    const { connected, password, serverName, userName, dispatch } = this.props;
    if (!connected && password && serverName && userName) {
      xmpp.login(dispatch, password, serverName, userName).then(() => {
        dispatch(login(password, serverName, userName));
        this.getData();
      });
    } else {
      this.getData();
    }
  };

  getData = () => {
    xmpp.getPlaces();
    this.setState({ loading: false });
  };

  handlePressOnAPlace = (placeId: string) => () => {
    // this.props.navigation.navigate('Place', { placeId });
  };

  handleClickOnAPlace = (placeId: string) => () => {
    alert(placeId);
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

const mapStateToProps: MapStateToProps<IStateToProps, IOwnProps, IStore> = (
  state
) => {
  const places = state.places;
  const password = state.app.password;
  const serverName = state.app.serverName;
  const userName = state.app.userName;
  const connected = state.app.connected;

  return { places, password, serverName, userName, connected };
};

export default connect(mapStateToProps)(HomePage);
