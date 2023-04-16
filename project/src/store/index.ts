import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reduser';
import { createAPI } from '../services/api';

//export const store = configureStore({reducer});

export const api = createAPI();

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
