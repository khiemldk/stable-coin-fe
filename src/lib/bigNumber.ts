import BigNumber from 'bignumber.js';

export const bigNumberFormat = (value: number | string, decimals = 6) => {
  const bigNumber = new BigNumber(value).dividedBy(10 ** decimals);
  return bigNumber.valueOf();
};
