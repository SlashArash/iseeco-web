import { produce } from 'immer';

import IApp from 'types/IApp';
import { AppActions, AppActionTypes } from 'types/AppActions';

const initialState: IApp = {
  lastUpdateTime: null,
  password: null,
  serverName: null,
  userName: null,
  scenario: 1,
};

const AppReducer = (state: IApp = initialState, action: AppActions) =>
  produce(state, (draft) => {
    switch (action.type) {
      case AppActionTypes.LOGIN:
        draft.serverName = action.serverName;
        draft.userName = action.userName;
        draft.password = action.password;
        break;
      case AppActionTypes.LOGOUT:
        draft.serverName = null;
        draft.userName = null;
        draft.password = null;
        break;
      case AppActionTypes.UPDATE_TIME:
        draft.lastUpdateTime = action.lastUpdateTime;
        break;
      case AppActionTypes.UPDATE_SCENARIO:
        draft.scenario = action.scenarioId;
        break;
    }
  });

export default AppReducer;
