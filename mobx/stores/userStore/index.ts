import { observable, action, computed } from 'mobx';
import authService from '@services/auth';

class UserStore {
  @observable user = null;
  @observable checkedAuth = false;

  constructor(initialData: any = {}) {
    this.user = initialData.user;
    this.checkedAuth = initialData.checkedAuth;
  }
  @action
  async getMe() {
    try {
      const res = await authService.me();
      this.checkedAuth = true;
      this.user = res.data;
    } catch (e) {
      this.checkedAuth = true;
      // console.log(e);
    }
  }

  @action
  async signIn(form = {}) {
    try {
      const res = await authService.signIn(form);
      this.user = res.data;
    } catch (e) {
      console.log(e);
    }
  }

  @action
  async logout() {
    try {
      await authService.logout();
      this.user = null;
    } catch (e) {
      console.log(e);
    }
  }

  @computed get me() {
    return this.user;
  }
}

export default UserStore;
