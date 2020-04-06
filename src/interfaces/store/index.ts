import { IUserStore, IUser } from '@interfaces/user';

export interface IStore {
  userStore: IUserStore;
}

export interface IInitialData {
  userStore: {
    user: IUser | null;
    checkedAuth: boolean;
  };
}
