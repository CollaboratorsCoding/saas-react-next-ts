import { action, observable } from 'mobx';

interface User {
  email: string;
  password: string;
  _id: string;
  __v: number;
}

let store: any = null;

export class Store {
  @observable user = null;

  constructor(isServer: boolean, user: any) {
    this.user = user;
  }
}

export function initializeStore(isServer: boolean, user = null) {
  if (isServer) {
    return new Store(isServer, user);
  } else {
    if (store === null) {
      store = new Store(isServer, user);
    }
    return store;
  }
}
