import { observable, action, computed } from 'mobx';
import fetch from 'isomorphic-unfetch';

class UserStore {
  @observable user = null;

  constructor(initialData: any = {}) {
    this.user = initialData.user;
  }
  @action
  async fetchUser(cookie: any) {
    const res = await fetch('http://localhost:3000/auth/me', {
      credentials: 'include',
      headers: cookie ? cookie : undefined,
    });
    const user = await res.json();
    this.user = user;
  }

  @computed get getUser() {
    return this.user;
  }
}

export default UserStore;
