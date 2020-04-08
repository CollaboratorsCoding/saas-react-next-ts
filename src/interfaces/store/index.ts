import { IUserStore, IUserStoreInitialData } from './user';

export interface IStore {
  userStore: IUserStore;
}

export interface IStoreInitialData {
  userStore: IUserStoreInitialData;
}
