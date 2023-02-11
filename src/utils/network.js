import axios from 'axios';
import { baseUrl, NET, ToastStatus } from './constants';
import Toast from '../components/Atom/Toast';

const instance = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
});

instance.interceptors.request.use(
  (config) => {
    const cfg = config;
    cfg.data = JSON.stringify(cfg.data);
    const satoken = localStorage.getItem(NET.SATOKEN);
    if (satoken) {
      cfg.headers.satoken = satoken;
    }
    return cfg;
  },
  (error) => {
    // TODO 换成redux
    Toast({
      message: error.message,
      status: ToastStatus.ERROR,
    });
    return Promise.reject(error.message);
  },
);

instance.interceptors.response.use(
  (response) => {
    if (response.data.code) {
      switch (response.data.code) {
        case 200:
          return response.data.data;
        default:
          return response;
      }
    } else {
      return response;
    }
  },
);

export const apiLogin = (info) => instance.post('/web/user/login', info);

export const apiRegister = (info) => instance.post('/web/user/register', info);
