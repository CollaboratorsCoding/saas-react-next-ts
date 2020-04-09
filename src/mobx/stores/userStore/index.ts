import { observable, action, computed } from 'mobx';

import authService from '@services/auth/auth.service';
import {
  IUserStore,
  IUserMe,
  IUserStoreInitialData,
} from '@interfaces/store/user';

class UserStore implements IUserStore {
  @observable currentUser: IUserMe | null = null;
  @observable checkedAuth = false;

  constructor(initialData: IUserStoreInitialData | undefined) {
    this.currentUser = initialData?.currentUser || null;
    this.checkedAuth = !!initialData?.checkedAuth;
  }

  @action
  async getMe() {
    try {
      const res = await authService.me();
      this.checkedAuth = true;
      this.currentUser = res.data;
    } catch (e) {
      this.checkedAuth = true;
      // console.log(e);
    }
  }

  @action
  async signIn(form = {}) {
    try {
      const res = await authService.signIn(form);
      this.currentUser = res.data;
    } catch (e) {
      console.log(e);
    }
  }

  @action
  async logout() {
    try {
      await authService.logout();
      this.currentUser = null;
    } catch (e) {
      console.log(e);
    }
  }

  @computed get me() {
    return this.currentUser;
  }
}

export default UserStore;
