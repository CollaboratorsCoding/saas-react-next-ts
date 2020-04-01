import axios, { AxiosInstance } from 'axios';

class Service {
  service: AxiosInstance;
  constructor() {
    const service = axios.create({
      baseURL: 'http://localhost:3000/',
      withCredentials: true,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    // service.interceptors.response.use(this.handleSuccess, this.handleError);
    this.service = service;
  }

  // handleSuccess(response: any) {
  //   return response;
  // }

  // handleError = (error: any) => {
  //   switch (error.response.status) {
  //     case 401:
  //       console.log('error', error.response.status);
  //       break;
  //     case 404:
  //       console.log('error', error.response.status);
  //       break;
  //     default:
  //       console.log('error', error.response.status);
  //       break;
  //   }
  //   return Promise.reject(error);
  // };

  get(path: string) {
    return this.service.get(path);
  }

  patch(path: string, payload: any) {
    return this.service.request({
      method: 'PATCH',
      url: path,
      responseType: 'json',
      data: payload,
    });
  }

  post(path: string, payload: any) {
    return this.service.request({
      method: 'POST',
      url: path,
      responseType: 'json',
      data: payload,
    });
  }
}

export default new Service();
