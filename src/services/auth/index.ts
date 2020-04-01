import axios from '@services/axios';

class AuthService {
  async getMe() {
    const { data } = await axios.get('/auth/me');
    return data;
  }
  async signIn(form: {}) {
    const { data } = await axios.post('/auth/login', form);
    return data;
  }
  async signUp(form: {}) {
    const { data } = await axios.post('/auth/signup', form);
    return data;
  }
  async logout() {
    return axios.post('/auth/logout', {});
  }
}

export default new AuthService();
