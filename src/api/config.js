import axios from 'axios';
import env from '../../env';

const API = axios.create({
  baseURL: env.BASE_URL_CLI,
});

API.interceptors.request.use(
  async config => {
 
    config.headers['Content-Type'] = 'application/json';

    return config;
  },
  error => {
    Promise.reject(error);
  },
);

export {API};
