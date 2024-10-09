import { combineReducers } from '@reduxjs/toolkit';

import web3 from './web3/slice';

const createRootReducer = () => {
  return combineReducers({
    web3,
  });
};

export default createRootReducer;
