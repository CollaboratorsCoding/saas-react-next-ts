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
  async setUser() {
    try {
      const res = await authService.getMe();
      this.checkedAuth = true;
      this.user = res.data;
    } catch (e) {
      this.checkedAuth = true;
      console.log(e.response.status);
    }
  }

  @action
  async signIn(form = {}) {
    try {
      const res = await authService.signIn(form);
      this.user = res.data;
    } catch (e) {
      console.log(e.response.status);
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

  @computed get getUser() {
    return this.user;
  }
}

export default UserStore;
