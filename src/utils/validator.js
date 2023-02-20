export const VALIDATOR = {
  checkPhoneNum: 'checkPhoneNum',
  maxNum6: 'maxNum6',
  sameWith: 'sameWith',
};

export const ValidatorHooks = {
  validateOnChange: 'validateOnChange',
  validateOnSubmit: 'validateOnSubmit',
};

const ALGORITHM = {
  [VALIDATOR.checkPhoneNum](val) {
    return (/^1[3456789]\d{9}$/.test(val));
  },

  [VALIDATOR.maxNum6](val) {
    return val.length === 6;
  },

  [VALIDATOR.sameWith](prev, val) {
    return prev === val;
  },
};

export function getValidate(strategies, ...val) {
  if (!(strategies instanceof Array)) {
    return strategies in ALGORITHM ? ALGORITHM[strategies](...val) : false;
  }
  let res = true;
  strategies.forEach((algorithm) => {
    res *= algorithm in ALGORITHM ? ALGORITHM[algorithm](...val) : false;
  });

  return res;
}
