import axios from '@services/axios/axios.service';
import { signInType, signUpType } from '@schemas/auth';

class AuthService {
  async me() {
    const { data } = await axios.get('/auth/me');
    return data;
  }
  async signIn(form: signInType) {
    const { data } = await axios.post('/auth/login', form);
    return data;
  }
  async signUp(form: signUpType) {
    const { data } = await axios.post('/auth/signup', form);
    return data;
  }
  async logout() {
    return axios.post('/auth/logout', {});
  }
}

export default new AuthService();
