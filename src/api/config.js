import axios from 'axios';
import env from '../../env';

const API = axios.create({
  baseURL: env.BASE_URL_CLI,
});

API.interceptors.request.use(
  async config => {
    //the code bellow can used to set Bearer token on request

    // const token = await TokenStorage.getToken();
    // if (token !== null) {
    //   config.headers.Authorization = `Bearer ${token}`;
    //   console.log('token: ', token);
    // }

    config.headers['Content-Type'] = 'application/json';

    return config;
  },
  error => {
    Promise.reject(error);
  },
);

export {API};
