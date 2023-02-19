export const VALIDATOR = {
  checkPhoneNum: 'checkPhoneNum',
  maxNum6: 'maxNum6',
};

const ALGORITHM = {
  [VALIDATOR.checkPhoneNum](val) {
    return (/^1[3456789]\d{9}$/.test(val));
  },

  [VALIDATOR.maxNum6](val) {
    return val.length === 6;
  },
};

export function getValidate(val, strategies) {
  if (!(strategies instanceof Array)) {
    return strategies in ALGORITHM ? ALGORITHM[strategies](val) : false;
  }
  let res = true;
  strategies.forEach((algorithm) => {
    res *= algorithm in ALGORITHM ? ALGORITHM[algorithm](val) : false;
  });

  return res;
}
