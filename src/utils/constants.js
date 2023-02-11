export const HOOKS = {
  BEFORE_LOAD: 'BEFORE_LOAD',
  AFTER_PREPROCESSOR: 'AFTER_PREPROCESSOR',
};

export const NET = {
  SATOKEN: 'SATOKEN',
};

export const ToastStatus = {
  LOADING: 'LOADING',
  ERROR: 'ERROR',
  SUCCESS: 'SUCCESS',
};

const isPrd = process.env.NODE_ENV === 'production';

export const baseUrl = isPrd ? '42.193.126.196' : '42.193.126.196';
