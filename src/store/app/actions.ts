import {
  ILogin,
  ILogout,
  AppActionTypes,
  IUpdateTime,
  IUpdateScenario,
} from 'types/AppActions';

export const login = (
  password: string | null,
  serverName: string | null,
  userName: string | null
): ILogin => ({
  type: AppActionTypes.LOGIN,
  password,
  serverName,
  userName,
});

export const logout = (): ILogout => ({
  type: AppActionTypes.LOGOUT,
});

export const updateTime = (lastUpdateTime: string | null): IUpdateTime => ({
  type: AppActionTypes.UPDATE_TIME,
  lastUpdateTime,
});

export const updateScenario = (scenarioId: number): IUpdateScenario => ({
  type: AppActionTypes.UPDATE_SCENARIO,
  scenarioId,
});
