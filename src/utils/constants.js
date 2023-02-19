const isPrd = process.env.NODE_ENV === 'production';

export const baseUrl = isPrd ? '42.193.126.196' : '42.193.126.196';

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

export const RouterType = {
  SIDEBAR: 'SIDEBAR',
  NAVBAR: 'NAVBAR',
};

export const InputType = {
  button: 'button',
  checkbox: 'checkbox',
  text: 'text',
};
