export const HOOKS = {
  BEFORE_LOAD: 'BEFORE_LOAD',
  AFTER_PREPROCESSOR: 'AFTER_PREPROCESSOR',
};

export const NET = {
  SATOKEN: 'SATOKEN',
};

export const MessageStatus = {
  LOADING: 'LOADING',
  ERROR: 'ERROR',
  SUCCESS: 'SUCCESS',
};

export const MessageConfig = {
  maxCount: 5,
  defaultMessage: '未知错误',
  timeout: 3000,
  hideAnimationDuration: 1000,
  showAnimationDuration: 1000,
};

const isPrd = process.env.NODE_ENV === 'production';

export const baseUrl = isPrd ? '42.193.126.196' : '42.193.126.196';
