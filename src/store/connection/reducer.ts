import { produce } from 'immer';

import { IConnection } from 'types/IConnection';
import {
  ConnectionActions,
  ConnectionActionTypes,
} from 'types/ConnectionActions';
// import { XMPP } from 'lib/XMPP';

const initialState: IConnection = {
  local: false,
  internet: false,
};

const ConnectionReducer = (
  state: IConnection = initialState,
  action: ConnectionActions
) =>
  produce(state, (draft) => {
    switch (action.type) {
      case ConnectionActionTypes.UPDATE_CONNECTION:
        draft[action.connectionType] = action.status;
        // XMPP.connection[action.connectionType] = action.status;
        break;
    }
  });

export default ConnectionReducer;
