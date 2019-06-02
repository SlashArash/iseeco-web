import IUser from './IUser';

interface IApp extends IUser {
  lastUpdateTime: string | null;
  scenario: number;
}

export default IApp;
