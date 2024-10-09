/* eslint-disable no-underscore-dangle */
import { configureStore } from '@reduxjs/toolkit';

import createRootReducer from './ducks/rootReducer';

const store = configureStore({
  reducer: createRootReducer(),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false, serializableCheck: false }),
  devTools: false,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
